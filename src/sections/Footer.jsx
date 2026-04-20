import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="#contact" className="text-white-50 hover:text-white transition-colors">
            Hire Me
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              key={socialImg.name}
              href={socialImg.url}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialImg.ariaLabel}
            >
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Fimber Elemuwa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
