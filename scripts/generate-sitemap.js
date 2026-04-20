import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOMAIN = "https://fimberelemuwa.com";
const blogDir = join(__dirname, "../src/content/blog");
const outputPath = join(__dirname, "../public/sitemap.xml");

// Parse slug and date from a markdown file's frontmatter
const parseFrontmatter = (content) => {
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return {};
  const frontmatter = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      frontmatter[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
    }
  });
  return frontmatter;
};

// Static pages
const staticPages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/blog", priority: "0.8", changefreq: "weekly" },
];

// Blog posts — auto-discovered from src/content/blog/
const blogPages = readdirSync(blogDir)
  .filter((f) => f.endsWith(".md"))
  .map((file) => {
    const content = readFileSync(join(blogDir, file), "utf-8");
    const { slug, date } = parseFrontmatter(content);
    const resolvedSlug = slug ?? file.replace(".md", "");
    return {
      url: `/blog/${resolvedSlug}`,
      lastmod: date ?? new Date().toISOString().split("T")[0],
      priority: "0.7",
      changefreq: "monthly",
    };
  });

const allPages = [...staticPages, ...blogPages];
const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    ({ url, lastmod, priority, changefreq }) => `  <url>
    <loc>${DOMAIN}${url}</loc>
    <lastmod>${lastmod ?? today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync(outputPath, xml);
console.log(`✅ Sitemap generated with ${allPages.length} URLs → public/sitemap.xml`);
