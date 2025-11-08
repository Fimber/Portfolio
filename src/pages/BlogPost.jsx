import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import TitleHeader from "../components/TitleHeader";
import { getPostBySlug, renderMarkdown } from "../lib/posts";
import GiscusComments from "../components/GiscusComments";

const BlogPost = () => {
  const { slug } = useParams();

  const post = useMemo(() => getPostBySlug(slug), [slug]);

  if (!post) {
    return (
      <section className="section-padding lg:px-32 md:px-20 px-5">
        <div className="max-w-4xl mx-auto card-border rounded-3xl p-10 text-center">
          <h1 className="text-3xl font-semibold">Article not found</h1>
          <p className="text-white-50 mt-4">
            The post you are looking for is unavailable or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-8 underline underline-offset-4"
          >
            Return to all articles
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    );
  }

  const { title, date, summary, content, readingTime, tags } = post;

  return (
    <article className="section-padding lg:px-32 md:px-20 px-5">
      <div className="max-w-4xl mx-auto">
        <TitleHeader title={title} sub="📚 Deep dive" />
        <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-wide text-white-50 mt-6">
          <span>{new Date(date).toLocaleDateString()}</span>
          {readingTime && <span>• {readingTime}</span>}
        </div>
        {summary && <p className="text-white-50 mt-4">{summary}</p>}
        {Array.isArray(tags) && tags.length > 0 && (
          <ul className="flex flex-wrap gap-3 mt-6 text-sm text-white-50">
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-black-50 border border-white/5 rounded-full px-3 py-1"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}
        <div
          className="prose prose-invert max-w-none mt-12"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
        />
        <div className="mt-16">
          <GiscusComments />
        </div>
        <div className="mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 underline underline-offset-4"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

