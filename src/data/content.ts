export const portfolioData = {
  hero: {
    name: "Your Name",
    greeting: "Hey, I'm",
    tagline: "I believe in simple, focused, and meaningful solutions.",
    scrollPrompt: "For more",
  },
  techStack: {
    title: "The least I know, A lot more to learn !!",
    technologies: [
      // { name: "React", category: "Frontend", icon: "react" },
      // Your own tech stack items
    ],
  },
  philosophy: {
    title: "Build with Intention",
    subtitle:
      "Driven by purpose. Focused on what matters. Designed for clarity.",
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
  contact: {
    title: "Great things start with a Hello 👋",
    subtitle: "Connections that push boundaries, break limits, and inspire!",
    email: "yourmail@mail.com", // Replace with your email
    social: [
      {
        platform: "GitHub",
        url: "https://github.com/username", // Replace with yours
        icon: "GitHub",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/username/", // Replace with yours
        icon: "LinkedIn",
      },
      {
        platform: "Insta",
        url: "https://www.instagram.com/username/", // Replace with yours
        icon: "Instagram",
      },
    ],
    signature: "your name",
  },
};

export type PortfolioData = typeof portfolioData;
