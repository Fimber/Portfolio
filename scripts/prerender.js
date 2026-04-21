import puppeteer from "puppeteer";
import { createServer } from "net";
import { readFileSync, mkdirSync, writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "../dist");
const blogDir = join(__dirname, "../src/content/blog");

// ─── Helpers ────────────────────────────────────────────────────────────────

const parseFrontmatter = (content) => {
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return {};
  const fm = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length)
      fm[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
  });
  return fm;
};

const getBlogSlugs = () =>
  readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { slug } = parseFrontmatter(readFileSync(join(blogDir, file), "utf-8"));
      return slug ?? file.replace(".md", "");
    });

const findFreePort = () =>
  new Promise((resolve) => {
    const srv = createServer();
    srv.listen(0, () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const saveHTML = (route, html) => {
  const isRoot = route === "/";
  const filePath = isRoot
    ? join(distDir, "index.html")
    : join(distDir, route.replace(/^\//, ""), "index.html");

  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html, "utf-8");
  console.log(`  ✅ ${route}`);
};

// ─── Main ────────────────────────────────────────────────────────────────────

const routes = ["/", "/blog", ...getBlogSlugs().map((s) => `/blog/${s}`)];

const port = await findFreePort();

// Start a local static server on the dist folder
const server = exec(`npx serve dist --listen ${port} --no-clipboard --single`);
await sleep(2000); // give serve time to start

console.log(`\n🚀 Prerendering ${routes.length} routes on port ${port}...\n`);

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});

for (const route of routes) {
  const url = `http://localhost:${port}${route}`;
  const page = await browser.newPage();

  // Silence console noise from the page
  page.on("console", () => {});
  page.on("pageerror", () => {});

  try {
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // Wait for React to render meaningful content
    await page.waitForSelector("main, #hero, footer", { timeout: 10000 }).catch(() => {});
    await sleep(1500); // allow GSAP/lazy components to settle

    const html = await page.evaluate(() => document.documentElement.outerHTML);
    saveHTML(route, html);
  } catch (err) {
    console.warn(`  ⚠️  ${route} — ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.kill();

console.log("\n✨ Prerender complete.\n");
