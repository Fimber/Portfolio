import { Link } from "react-router-dom";

import TitleHeader from "../components/TitleHeader";
import { getAllPosts } from "../lib/posts";

const BlogList = () => {
  const posts = getAllPosts();

  return (
    <section className="section-padding lg:px-32 md:px-20 px-5">
      <div className="max-w-5xl mx-auto">
        <TitleHeader title="Insights & Articles" sub="📝 Fresh From The Desk" />
        <p className="text-white-50 mt-6 leading-relaxed">
          In-depth breakdowns of product-led SEO content, technical workflows,
          and lessons learned while partnering with SaaS and developer tooling
          teams. New markdown files added to{" "}
          <code className="bg-black-50 px-2 py-1 rounded text-sm">
            src/content/blog
          </code>{" "}
          publish automatically with each deployment.
        </p>

        <div className="mt-16 grid gap-12">
          {posts.length === 0 && (
            <div className="card-border rounded-2xl p-10">
              <h2 className="text-2xl font-semibold">
                No articles published yet
              </h2>
              <p className="text-white-50 mt-3">
                Add a new markdown file to <code>src/content/blog</code> with
                frontmatter metadata to publish your first post.
              </p>
            </div>
          )}

          {posts.map(({ slug, title, date, summary, readingTime, tags }) => (
            <article
              key={slug}
              className="card-border rounded-3xl p-10 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-wide text-white-50">
                <span>{new Date(date).toLocaleDateString()}</span>
                {readingTime && <span>• {readingTime}</span>}
              </div>
              <h2 className="text-3xl font-semibold mt-4">{title}</h2>
              <p className="mt-4 text-white-50 leading-relaxed">{summary}</p>
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
              <div className="mt-8">
                <Link
                  to={`/blog/${slug}`}
                  className="inline-flex items-center gap-2 text-white underline underline-offset-4 font-medium"
                >
                  Read article
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;

