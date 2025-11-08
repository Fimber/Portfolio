import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollManager;

