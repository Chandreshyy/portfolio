export const siteConfig = {
  name: "Chandresh Yadav",
  domain: "chandreshyadav.com",
  url: "https://chandreshyadav.com",
  title: "Chandresh Yadav - Software Engineer",
  description:
    "Software engineer building intelligent systems, automation platforms, and AI-powered applications.",
  email: "ychandresh141@gmail.com",
  phone: "+91 7067708579",
  links: {
    github: "https://github.com/Chandreshyy",
    linkedin: "https://www.linkedin.com/in/chandresh-yadav141",
  },
};

export const heroTagline =
  "Software Engineer building intelligent systems, automation platforms, and AI-powered applications.";

export const aboutLines = [
  "I'm a Software Engineer currently working at Air India, where I build and maintain large-scale crew planning and optimization systems used in airline operations.",
  "My work spans backend development, rule-based optimization, automation, and data-intensive applications. Outside of work, I enjoy building AI-powered products and full-stack applications that solve practical problems.",
  "Over the last two years, I've worked on optimization engines, scheduling systems, backend services, automation pipelines, and data processing tools. Recently, I've been exploring AI agents, LLM-powered workflows, and modern web development through personal projects.",
];

export const skillGroups = [
  {
    label: "Programming Languages",
    items: [
      "Python",
      "Java",
      "SQL",
      "TypeScript",
      "JavaScript",
    ],
  },

  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },

  {
    label: "Backend",
    items: [
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "JWT Authentication",
      "SQLAlchemy",
      "Alembic",
      "bcrypt",
    ],
  },

  {
    label: "Databases & Caching",
    items: [
      "PostgreSQL",
      "Redis",
      "SQLite",
    ],
  },

  {
    label: "AI & Machine Learning",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "AI Agents",
      "Prompt Engineering",
      "Chatbot Development",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Matplotlib",
      "Seaborn",
    ],
  },

  {
    label: "DevOps & Infrastructure",
    items: [
      "Docker",
      "Git",
      "Linux",
      "GitHub",
      "Railway",
      "Vercel",
    ],
  },

  {
    label: "Specialized Skills",
    items: [
      "RAVE",
      "JCP/JCR",
      "Crew Planning & Rostering",
      "Rule Engine Development",
      "Workflow Automation",
      "Linear Programming",
      "Integer Programming",
    ],
  },
];

export const builtApplications = [
  {
    name: "AuctionHall (auctionhall.in)",
    description:
      "Full-stack fantasy cricket auction platform where users create leagues, join via codes, bid on players live, and compete on leaderboards. Features a Redis-backed real-time auction engine, WebSocket-based auction lobbies, secure auth with HTTP-only JWTs and bcrypt, and persistent auction logs in PostgreSQL.",
    href: "https://auctionhall.in",
    meta: "Next.js, FastAPI, PostgreSQL, Redis, WebSockets",
    tags: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "JWT",
      "bcrypt",
      "Real-time",
      "RapidAPI",
    ],
    links: [
      { label: "Live Demo", href: "https://auctionhall.in" },
    ],
  },
  {
    name: "Flatmate Finder",
    description:
      "A full-stack rental marketplace that helps users discover roommates, shared rentals, and rental properties with secure authentication, real-time messaging, and location-based search.",
    href: "https://github.com/Chandreshyy",
    meta: "FastAPI, React, PostgreSQL",
    tags: ["FastAPI", "React", "PostgreSQL", "Authentication", "Messaging"],
    links: [
    ],
  },
  {
    name: "Content Generation Pipeline",
    description:
      "An AI-assisted content generation pipeline that creates, reviews, and publishes content using LLMs with a human-in-the-loop approval workflow.",
    href: "https://github.com/Chandreshyy",
    meta: "Python, LLMs, Telegram Bot",
    tags: ["Python", "LLMs", "Telegram Bot", "Automation", "Human-in-loop"],
    links: [
    ],
  },
];

export const profileMeta = [
  { label: "Role", value: "Lead Engineer" },
  { label: "Team", value: "Operations Technology" },
  { label: "Company", value: "Air India" },
  { label: "Location", value: "Gurugram, India" },
  { label: "Phone", value: siteConfig.phone },
  { label: "Email", value: siteConfig.email },
  { label: "GitHub", value: "Chandreshyy", href: siteConfig.links.github },
  {
    label: "LinkedIn",
    value: "chandresh-yadav141",
    href: siteConfig.links.linkedin,
  },
];

export const experience = [
  {
    period: "01",
    title: "Air India - Operations Technology",
    meta: "Lead Engineer | June 2023 - Present",
    description:
      "Develop and maintain large-scale backend applications that automate complex business workflows and optimize operational decision-making. Design software solutions, implement business logic, build data processing pipelines, develop internal tools, and integrate enterprise systems using Python and modern software engineering practices. Focus on writing reliable, scalable, and maintainable software while solving real-world optimization problems across mission-critical production systems.",
    tags: [
      "Software Development",
      "Python",
      "Backend",
      "System Design",
      "Automation",
      "Optimization",
    ],
  },
];

export const education = {
  institute: "Indian Institute of Technology Delhi",
  degree: "B.Tech in Production and Industrial Engineering",
  period: "2019 - 2023",
  details:
    "Developed a strong foundation in computer science fundamentals, algorithms, optimization, machine learning, and mathematical modeling. Built software projects spanning full-stack development, AI, data processing, and optimization while strengthening analytical thinking and system-level problem solving.",
  tags: [
    "Data Structures and Algorithms",
    "Software Engineering",
    "Machine Learning",
    "Data Science",
    "Artificial Intelligence",
    "Operations Research",
    "Optimization",
  ],
};

export const outsideWork =
  "Outside work, I enjoy building full-stack products, exploring Generative AI and LLM-powered applications, experimenting with agentic workflows, contributing to open-source, reading books on technology, psychology, and business, and playing basketball.";