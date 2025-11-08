import { useEffect, useRef } from "react";

const GiscusComments = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.firstChild) return;

    const {
      VITE_GISCUS_REPO,
      VITE_GISCUS_REPO_ID,
      VITE_GISCUS_CATEGORY,
      VITE_GISCUS_CATEGORY_ID,
    } = import.meta.env;

    if (
      !VITE_GISCUS_REPO ||
      !VITE_GISCUS_REPO_ID ||
      !VITE_GISCUS_CATEGORY ||
      !VITE_GISCUS_CATEGORY_ID
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", VITE_GISCUS_REPO);
    script.setAttribute("data-repo-id", VITE_GISCUS_REPO_ID);
    script.setAttribute("data-category", VITE_GISCUS_CATEGORY);
    script.setAttribute("data-category-id", VITE_GISCUS_CATEGORY_ID);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "en");

    containerRef.current.appendChild(script);
  }, []);

  const isConfigured =
    !!import.meta.env.VITE_GISCUS_REPO &&
    !!import.meta.env.VITE_GISCUS_REPO_ID &&
    !!import.meta.env.VITE_GISCUS_CATEGORY &&
    !!import.meta.env.VITE_GISCUS_CATEGORY_ID;

  if (!isConfigured) {
    return (
      <div className="card-border rounded-3xl p-8 text-white-50">
        <h3 className="font-semibold text-xl text-white">
          Comments coming soon
        </h3>
        <p className="mt-3">
          Configure the required Giscus environment variables in a
          <code className="mx-2 bg-black-50 px-2 py-1 rounded text-sm">
            .env
          </code>
          file to enable reader discussions without hosting your own backend.
        </p>
      </div>
    );
  }

  return <div ref={containerRef} className="giscus" />;
};

export default GiscusComments;

