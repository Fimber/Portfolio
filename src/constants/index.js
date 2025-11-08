const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Brands", imgPath: "/images/concepts.svg" },
  { text: "Products", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Products", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 40, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-12.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "SEO-Driven Quality",
    desc: "Every piece I write is crafted to rank—backed by deep research, technical accuracy, and attention to detail that drives results.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear, Consistent Communication",
    desc: "You’ll never be left guessing. I keep you in the loop from kickoff to delivery, ensuring full alignment at every stage.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "No delays, no excuses. I deliver high-impact content on time—every time—without compromising quality or precision.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Delivering product-led SEO content that ties SaaSGroup's product value directly to ICP pain points and growth goals.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Freelance B2B SaaS Content Writer - SaaSGroup",
    date: "Oct 2023 - Present | Remote",
    responsibilities: [
      "Produce product-led, SEO-optimized content for B2B SaaS brands aligned with ICP pain points and funnel stages.",
      "Build briefs, outlines, and internal linking maps while integrating product screenshots to drive conversions.",
      "Partner with SEO leads on content design, including headers, jump links, FAQs, and other engagement boosters.",
      "Deliver measurable visibility gains and organic ranking improvements across targeted topic clusters.",
    ],
  },
  {
    review:
      "Translating fine-grained authorization concepts into approachable, high-impact thought leadership for Permify.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Freelance Technical Writer - Permify (Authorization / FGA)",
    date: "Aug 2024 - Present | Remote",
    responsibilities: [
      "Author in-depth articles on fine-grained authorization, RBAC, policy modeling, and developer workflows.",
      "Use diagrams and real-world examples to simplify complex authorization concepts and boost reader engagement.",
      "Collaborate with product and marketing to showcase differentiation, contributing to a 25% traffic lift on priority topics.",
    ],
  },
  {
    review:
      "Building trusted technical content for Scrape.do with actionable guidance on modern web scraping challenges.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/scrape.png",
    title: "Freelance Technical Writer - Scrape.do",
    date: "Aug 2024 - Present | Remote",
    responsibilities: [
      "Write advanced tutorials on dynamic site scraping, anti-bot tactics, CAPTCHA handling, and performance tuning.",
      "Develop verified multi-language code examples (Python, JavaScript, Ruby, PHP) to increase reader trust and adoption.",
      "Execute competitive keyword optimization that drives approximately 35% organic growth on key articles.",
    ],
  },
  {
    review:
      "Supporting LogRocket's audience with deeply researched frontend and DevTools analysis that cuts reader friction.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logrocket.jpg",
    title: "Technical Author - LogRocket",
    date: "Jun 2022 - Present | Remote",
    responsibilities: [
      "Research and author technical articles covering emerging frontend and developer tooling topics.",
      "Deliver comprehensive tutorials and analyses that clarify complex concepts for a broad developer audience.",
      "Lead editorial QA initiatives to reduce reader complaints and streamline content usability.",
    ],
  },
  {
    review:
      "Crafting detailed coverage of frontend and AI topics for SitePoint's developer community.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo3.png",
    title: "Technical Writer - SitePoint",
    date: "Oct 2022 - Dec 2022 | Remote",
    responsibilities: [
      "Produce technical deep dives on frontend technologies and AI-driven workflows.",
      "Collaborate across teams to design interactive tutorials that reinforce learning outcomes.",
    ],
  },
  {
    review:
      "Driving organic gains for Refine through SEO-focused content and visual storytelling.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logos/company-logo-4.png",
    title: "Technical Writer - Refine",
    date: "Dec 2022 - Jan 2023 | Remote",
    responsibilities: [
      "Implement SEO strategy and targeted keywords to deliver a 20% organic traffic lift.",
      "Co-create infographics with design partners, raising engagement by 60%.",
      "Author advanced CSS and UX content that contributed to 40% month-over-month traffic growth post-launch.",
    ],
  },
  {
    review:
      "Leading editorial operations for InPlainEnglish to scale distribution and reader trust.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logos/company-logo-5.png",
    title: "Technical Writer & Publication Manager - InPlainEnglish",
    date: "Apr 2023 - Sep 2023 | Remote",
    responsibilities: [
      "Manage multiple Medium publications with editorial SOPs and proofreading standards.",
      "Expand distribution across Reddit, Stack Overflow, and community channels to reach 50k+ monthly readers.",
      "Oversee publication strategy that balances quality control with rapid publishing cadences.",
    ],
  },
];

const expLogos = [
  {
    name: "SaaSGroup",
    imgPath: "/images/logo1.png",
  },
  {
    name: "Permify",
    imgPath: "/images/logo2.png",
  },
  {
    name: "Scrape.do",
    imgPath: "/images/scrape.png",
  },
  {
    name: "LogRocket",
    imgPath: "/images/logrocket.jpg",
  },
  {
    name: "SitePoint",
    imgPath: "/images/logo3.png",
  },
  {
    name: "Refine",
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    name: "InPlainEnglish",
    imgPath: "/images/logos/company-logo-5.png",
  },
];

const testimonials = [
  {
    name: "Raisa Yogiaman",
    mentions: "Content Marketer, saas.group",
    review:
      "Working with Fimber over the past couple of years has been an absolute pleasure. He consistently brings his A-game to every piece of content he creates, whether it's blogs, in-depth reports, or optimizing legacy content for better performance. Fimber has an exceptional ability to understand briefs thoroughly and deliver exactly what's needed. He fact-checks every claim, tailors his writing perfectly to the target audience, and always meets deadlines - no matter how tight they are. What stands out most is his openness to feedback. He actively learns from it, and I've seen his content improve with every new project. It's such a comfort knowing we can count on such a talented, reliable, and well-rounded writer to help us meet our content goals. I look forward to more content collaborations with Fimber in the future.",
    imgPath: "/images/client1.jpeg",
  },
  {
    name: "Shannon Kelly Ash",
    mentions: "Head of Content Marketing, saas.group",
    review:
      "I've worked with Fimber since 2023 on complex, technical content and it's been very rewarding. What really stands out about Fimber is his openness to feedback, clear communication, and commitment. He takes initiative, and consistently delivers high-quality work - no matter the deadline or complexity of the project. His reliability and attention to detail have made him someone I trust with clients. Thank you for all your hard work; and work that drives real business values like conversions and visibility.",
    imgPath: "/images/client2.jpeg",
  },
  {
    name: "Sunil Sandhu",
    mentions: "CEO, In Plain English",
    review:
      "Fimber is able to grasp new concepts and explain them in a way that is easy-to-understand and feels familiar. He takes feedback and advice well and I have seen improvements with each new content commission. I have no reservations in recommending Fimber's services for content creation. He's also a great guy that we enjoy working with.",
    imgPath: "/images/client3.jpeg",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
