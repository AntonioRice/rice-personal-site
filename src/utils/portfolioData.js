export const PROFILE = {
  name: "Antonio Rice",
  role: "Full-Stack Software Engineer",
  location: "Minneapolis, MN",
  status: "Open to opportunities",
  blurb:
    "For over half a decade, I've been at the forefront of innovation, crafting an industry-leading supply chain visibility tool. Now I'm excited to turn the page and dive into the next chapter of my professional journey.",
  about: [
    "I'm a Full-Stack Software Engineer based in Minneapolis, MN. I thrive on solving complex problems and building impactful software that makes a difference.",
    "At C.H. Robinson, a leading 3PL firm, I grew from a junior software engineer to a Tech Lead and Subject Matter Expert. That journey taught me the value of collaboration, continuous learning, and delivering solutions that matter.",
    "Outside of code I'm a family man who loves capturing life's moments through photography (I like to think I've got a good eye). I'm also endlessly curious about emerging tech and have a deep passion for all things automotive.",
  ],
  avatar: "/assets/images/main-avatar-3.jpg",
  links: {
    github: "https://github.com/AntonioRice",
    linkedin: "https://www.linkedin.com/in/riceantonio",
    email: "mailto:contact@antoniorice.com",
    resume: "/assets/antonio_rice_resume.pdf",
  },
};

export const SKILLS = {
  Languages: ["Javascript", "C#", "Python"],
  Frameworks: [
    "React",
    "React Native",
    "Node.js",
    "Express",
    ".NET Core",
    "ServiceStack",
  ],
  APIs: ["RESTful API"],
  Databases: ["MongoDB", "SQL", "PostgreSQL", "Firebase", "Elasticsearch"],
  Messaging: ["Kafka", "RabbitMQ", "ESB"],
  DevOps: ["GitHub Actions", "CI/CD", "Docker", "Kubernetes"],
  Cloud: ["AWS", "Azure"],
};

export const EXPERIENCE = [
  {
    company: "Self Employed",
    role: "Freelance Software Engineer",
    period: "2023 - Present",
    location: "Remote",
    bullets: [
      "Developed custom web applications using modern technologies, streamlining clients' business processes and increasing operational efficiency.",
      "Engaged with clients to gather business requirements, design intuitive interfaces, and deliver projects on time - resulting in repeat business and referrals.",
    ],
    stack: [
      "React.js",
      "React Native",
      "Node.js",
      "AWS EC2",
      "AWS S3",
      "DynamoDB",
      "AWS SES",
      "GitHub Actions",
      "CloudFront",
      "Docker",
      "NGINX",
    ],
  },
  {
    company: "C.H. Robinson",
    role: "SE I → II → Tech Lead",
    period: "2017 - 2023",
    location: "Minneapolis, MN",
    summary:
      "Six years at a leading 3PL - joined as a junior engineer, grew into a Tech Lead and SME for the Navisphere Vision SaaS platform. Owned features from migration to launch, mentored a cross-functional team, and shipped through Microsoft Azure Marketplace.",
    promotions: [
      {
        role: "Software Engineer II - Tech Lead",
        period: "2022 - 2023",
        bullets: [
          "Designed and optimized microservices and APIs using Node.js and .NET Core (C#), leveraging Kafka to enhance data processing and supply chain visibility.",
          "Led a team of full-time and contract engineers - technical guidance, code reviews, scalable system design. Improved sprint completion rates by 30%.",
          "Partnered with BAs and PMs to define product roadmaps, evaluate feasibility, and align technical solutions with business goals.",
        ],
        stack: ["System Design", "Leadership", "Coaching"],
      },
      {
        role: "Software Engineer II",
        period: "2019 - 2022",
        bullets: [
          "Modernized the Navisphere Vision SaaS app - led the migration from AngularJS to React, enabling Azure cloud deployment and a Microsoft App Store listing.",
          "Built a predictive freight-tracking feature with Data Scientists using real-time signals (weather, wildfires) to forecast shipment delays - became critical during hurricane season.",
          "Served as SME for customer onboarding and integrations. Onboarded 3–5 clients per quarter, exceeding projections with tailored implementations.",
        ],
        stack: [
          "JavaScript",
          "React",
          "Node.js",
          ".NET Core",
          "C#",
          "Kafka",
          "MongoDB",
          "Elasticsearch",
          "MSSQL",
          "Azure",
          "Microservices",
        ],
      },
      {
        role: "Software Engineer I",
        period: "2017 - 2019",
        bullets: [
          "Contributed to a Machine Learning program scanning live highway-camera data to identify inbound/outbound truck traffic across major metros (Python, C#, TensorFlow).",
          "Worked in an Agile team to ship features aligned with sprint goals, partnering with UI/UX on design consistency.",
          "Maintained 100% test coverage through TDD; validated features against business expectations to ensure reliable releases.",
        ],
        stack: [
          "JavaScript",
          "AngularJS",
          "Node.js",
          "C#",
          "Python",
          "Kafka",
          "RabbitMQ",
        ],
      },
    ],
    bullets: [],
    stack: [
      "JavaScript",
      "React",
      "Node.js",
      ".NET Core",
      "C#",
      "Kafka",
      "Azure",
      "Leadership",
    ],
  },
  {
    company: "Prime Digital Academy",
    role: "Full-Stack SWE Student",
    period: "2017",
    location: "Minneapolis, MN",
    bullets: [
      "Completed a 20-week immersive software engineering program focused on fundamentals, problem-solving, and communicating about code.",
      "Designed and built a solo web application to track DIY car maintenance - full-stack from schema to UI.",
      "Collaborated on a group rewards platform for high schools, promoting student engagement through challenges.",
    ],
    stack: ["JavaScript", "Node.js", "AngularJS", "Express", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    id: "p01",
    title: "Excelling While Black",
    year: "2024",
    role: "Solo · full-stack",
    blurb:
      "A full-stack platform highlighting Black-owned businesses and professionals across the United States. React frontend, custom Node.js API, MongoDB. Location-based search, dynamic filters, and detailed business profiles with curated, validated data.",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    image: "/assets/images/ewb.jpg",
    href: "https://www.excellingwhileblack.com",
    featured: true,
    metric: { k: "1k+", v: "businesses listed" },
    metric2: { k: "50", v: "states covered" },
  },
  {
    id: "p02",
    title: "Cliente.io",
    year: "2023",
    role: "Solo · SaaS",
    blurb:
      "A SaaS platform tailored for boutique hotels in South America - guest, reservation, and room management. Responsive frontend with an optimized cloud-based backend.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/assets/images/cliente.png",
    href: "https://github.com/AntonioRice/cliente-crm",
  },
  {
    id: "p03",
    title: "Navisphere Vision",
    year: "2019 - 2023",
    role: "Lead engineer",
    blurb:
      "Supply-chain visibility SaaS on Microsoft Azure Marketplace. Owned search, filtering, multi-channel notifications (email, in-app, SMS), and map/list visualization. Led tenant-specific implementations end-to-end.",
    tags: [".NET Core", "React", "Kafka", "Azure"],
    image: "/assets/images/navisphere-vision.png",
    href: "https://appsource.microsoft.com/en-us/product/web-apps/chrobinsonworldwide.navispherevision",
  },
];

export const BEFORE_TECH = [
  {
    period: "2016 - 2017",
    title: "Executive Sales Manager",
    where: "Macy's",
    note: "Directed Men's Sales - 30 associates in a fast-paced retail floor. First taste of leading hiring, coaching, and performance under data-driven targets.",
  },
  {
    period: "2014 - 2015",
    title: "Inbound Area Manager II",
    where: "Amazon",
    note: "Owned a 60-door inbound dock with 350+ associates. Designed a FIFO trailer system that hit 95% SLA and turned the lowest-performing process path into the highest in two weeks.",
  },
  {
    period: "2013 - 2014",
    title: "Logistics Team Lead",
    where: "Target",
    note: "Overnight replenishment lead for 30+ associates. Cut takt time 20% via process redesign - first time I shipped a system change and watched the numbers move.",
  },
  {
    period: "2012 - 2014",
    title: "Bank Teller",
    where: "U.S. Bank",
    note: "Hit quarterly sales targets by wide margins; ranked #2 in district. Where I learned that listening carefully sells better than pitching.",
  },
  {
    period: "2009 - 2013",
    title: "Sales Associate",
    where: "Finish Line",
    note: "First job. Communication, multitasking, and customer service in a chaotic dynamic environment - the foundation everything else was built on.",
  },
];

export const LEARNING = [
  {
    title: "React Basics",
    issuer: "Coursera",
    year: "2023",
    href: "https://www.coursera.org/verify/6GUWJ3DY26YH",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Coursera",
    year: "2023",
    href: "https://www.coursera.org/verify/RCXBLMD22KFA",
  },
  {
    title: "Node.js Masterclass",
    issuer: "Udemy",
    year: "2023",
    href: "https://www.udemy.com/certificate/UC-dc61789f-b15c-4248-8249-bdd38f5d822c/",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Udemy",
    year: "2024",
    href: "https://www.udemy.com/certificate/UC-cd3d2f8d-4432-4f6e-89c9-73a9baf20317/",
  },
  {
    title: "System Design",
    issuer: "Udemy",
    year: "2024",
    href: "https://www.udemy.com/certificate/UC-cda3ef74-3372-425e-b601-a6f15516d9c7/",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    year: "2022",
    href: "https://www.credly.com/badges/0c799f8c-357b-434f-949c-d7f866f9e994/public_url",
  },
];
