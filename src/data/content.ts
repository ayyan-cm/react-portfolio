export const portfolioData = {
  // Hero Section
  hero: {
    name: "Ayyan",
    greeting: "Hey, I'm",
    tagline: "I believe in simple, focused, and meaningful software",
    scrollPrompt: "Explore my work",
  },
  // Tech Stack Section
  techStack: {
    title: "I create web interfaces and backend systems using:",
    technologies: [
      { name: "React", category: "Frontend", icon: "react" },
      { name: "TypeScript", category: "Language", icon: "typescript" },
      { name: "Node.js", category: "Backend", icon: "nodejs" },
      { name: ".NET", category: "Backend", icon: "dotnet" },
      { name: "MUI", category: "UI Library", icon: "mui" },
      { name: "MongoDB", category: "Database", icon: "mongodb" },
      { name: "PostgreSQL", category: "Database", icon: "postgresql" },
      { name: "AWS", category: "Cloud", icon: "aws" },
      { name: "Docker", category: "DevOps", icon: "docker" },
      { name: "Git", category: "Version Control", icon: "git" },
    ],
  },

  // Philosophy Section
  philosophy: {
    title: "My Development Philosophy",
    principles: [
      {
        id: 1,
        title: "I start with why",
        description:
          "Understanding the purpose behind every feature and decision drives meaningful solutions.",
      },
      {
        id: 2,
        title: "I prioritize quality over quantity",
        description:
          "Better to build fewer things exceptionally well than many things poorly.",
      },
      {
        id: 3,
        title: "I value clarity over complexity",
        description:
          "Simple, readable code that solves real problems is always better than clever complexity.",
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Let's Connect",
    subtitle: "Open to collaborations and freelance opportunities",
    email: "your.email@example.com", // Replace with your actual email
    social: [
      {
        platform: "GitHub",
        url: "https://github.com/yourusername", // Replace with your GitHub
        icon: "GitHub",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile", // Replace with your LinkedIn
        icon: "LinkedIn",
      },
    ],
    signature: "Ayyan",
  },

  // SEO & Meta
  meta: {
    title: "Ayyan - Full Stack Developer",
    description:
      "Full stack developer focused on creating simple, meaningful solutions",
    keywords:
      "full stack developer, react, typescript, nodejs, dotnet, web development, software engineer",
  },
};

export type PortfolioData = typeof portfolioData;
