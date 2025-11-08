import matter from "gray-matter";
import { marked } from "marked";
import { Buffer } from "buffer";

if (typeof globalThis !== "undefined" && !globalThis.Buffer) {
  globalThis.Buffer = Buffer;
}

const postFiles = import.meta.glob("../content/blog/*.md", {
  eager: true,
  as: "raw",
});

const parsePost = (path, fileContent) => {
  const { data, content } = matter(fileContent);
  const slug =
    data.slug ??
    path
      .split("/")
      .pop()
      ?.replace(".md", "");

  return {
    ...data,
    slug,
    content,
  };
};

export const getAllPosts = () =>
  Object.entries(postFiles)
    .map(([path, content]) => parsePost(path, content))
    .sort(
      (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
    );

export const getPostBySlug = (slug) => {
  const match = Object.entries(postFiles).find(([path]) =>
    path.endsWith(`${slug}.md`)
  );

  if (!match) {
    return null;
  }

  return parsePost(...match);
};

export const renderMarkdown = (markdown) =>
  marked.parse(markdown ?? "", {
    gfm: true,
    breaks: true,
    mangle: false,
    headerIds: false,
  });

