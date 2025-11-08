import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
          <a
                href="https://blog.logrocket.com/author/fimberelemuwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
            <div className="image-wrapper">
              <img src="/images/logrocket.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              
                <h2>
                My Articles for Logrocket
                </h2>
                <p className="text-white-50 md:text-xl">
                Authored a series of technical articles on LogRocket, covering topics like CSS, React, and web development best practices, contributing to developer education and engagement.
                </p>
              
            </div>
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <a
                  href="https://scrape.do/authors/fimber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src="/images/scrape.png"
                    alt="scrape.do"
                  />
                </div>
                <h2>My articles for Scrape.do</h2>
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>More of my Portfolio</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
