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
    label: "Programming",
    items: ["Python", "Java", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "REST APIs"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "Redis"],
  },
  {
    label: "DevOps",
    items: ["Docker", "Linux", "Git"],
  },
  {
    label: "AI",
    items: ["LLMs", "LangGraph"],
  },
  {
    label: "Optimization",
    items: ["RAVE", "Operations Research"],
  },
];

export const builtApplications = [
  {
    name: "Flatmate Finder",
    description:
      "A full-stack rental marketplace that helps users discover roommates, shared rentals, and rental properties with secure authentication, real-time messaging, and location-based search.",
    href: "https://github.com/Chandreshyy",
    meta: "FastAPI, React, PostgreSQL",
    tags: ["FastAPI", "React", "PostgreSQL", "Authentication", "Messaging"],
    links: [
      { label: "GitHub", href: "https://github.com/Chandreshyy" },
      { label: "Live Demo", href: "#" },
      { label: "Architecture", href: "#" },
      { label: "Read Case Study", href: "#" },
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
      { label: "GitHub", href: "https://github.com/Chandreshyy" },
      { label: "Live Demo", href: "#" },
      { label: "Architecture", href: "#" },
      { label: "Read Case Study", href: "#" },
    ],
  },
];

export const profileMeta = [
  { label: "Role", value: "Lead Engineer" },
  { label: "Team", value: "Operations Technology" },
  { label: "Company", value: "Air India" },
  { label: "Experience", value: "2+ Years" },
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
    meta: "Lead Engineer | Jul 2023 - Present",
    description:
      "Working on crew planning and rostering systems, with a focus on rule implementation, automation, and operational reliability.",
    tags: ["RAVE", "Python", "Crew Planning", "Optimization", "Automation"],
  },
];

export const education = {
  institute: "Indian Institute of Technology Delhi",
  degree: "B.Tech in Production and Industrial Engineering",
  period: "2019 - 2023",
  details:
    "Graduated from IIT Delhi with a focus on optimization, simulation, operations research, and data-driven decision making.",
  tags: ["IIT Delhi", "Optimization", "Simulation", "Operations Research"],
};

export const outsideWork =
  "Outside of work, I enjoy building side projects, exploring AI technologies, contributing to open-source, and playing basketball.";
