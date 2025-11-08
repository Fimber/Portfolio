import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

const formatLink = (link) => (link.startsWith("#") ? `/${link}` : link);

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link to="/" className="logo">
          Fimber Elemuwa
        </Link>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <Link to={formatLink(link)}>
                  <span>{name}</span>
                  <span className="underline" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
