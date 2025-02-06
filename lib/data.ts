import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Lexlearn:AI Powered YouTube Learning Assistant",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and an intuitive admin dashboard.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "MongoDB",
      "Express",
      "Redis",
      "AWS",
      "TailwindCSS",
      "OpenAI API",
      "Oracle Cloud Infrastructure",
    ],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://learnlex.vercel.app/",
    image: "/projects/lexlearn.png",
    architecture: "MERN Stack",
    highlights: [
      "Advanced AI content generation using GPT-4",
      "Server-side rendering and static generation for optimal performance",
      "CI/CD pipeline with automated testing and deployment",
    ],
  },
  {
    title: "Team stack: AI-Powered Team Assignment System",
    description:
      "A platform leveraging AI to help content creators generate, optimize, and analyze their content performance.",
    technologies: [
      "React",
      "Node.js",
      "OpenAI API",
      "MongoDB",
      "Express",
      "Redis",
      "AWS",
      "Oracle Cloud Infrastructure",
    ],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project.com",
    image: "/projects/teamstack.png",
    architecture: "MERN Stack",
    highlights: [
      "Advanced AI content generation using GPT-4",
      "Optimized caching with Redis",
    ],
  },
  // Add more projects...
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Redux"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "AWS", "Vercel"],
};

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Lead Software Engineer",
    company: "Tramango",
    companyUrl: "",
    period: "2022 – Present",
    description: [
      "Architected and developed microservices for travel and insurance platforms, reducing downtime by 60%",
      "Built reusable front-end components with Next.js, reducing product implementation time by 40%",
      "Led code reviews and mentored 6 developers, fostering best practices in code quality and performance",
      "Optimized front-end performance through bundle size reduction and rendering improvements, increasing site speed by 50%",
      "Collaborated with cross-functional teams to enhance digital experience, boosting customer conversion by 60%",
      "Monitored and resolved production issues using AWS CloudWatch and Datadog, improving platform reliability",
      "Implemented CSS-in-JS solutions for React components, ensuring performance and accessibility",
    ],
    technologies: [
      "Next.js",
      "Microservices",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit Query",
      "Amazon Web Services (AWS)",
      "Python",
      "Terraform",
      "Tailwindcss",
      "MongoDB",
      "Express.JS",
      "ShadCN",
      "Playwright",
      "Jest",
      "Jira",
      "Netlify",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Dona8",
    companyUrl: "",
    period: "2021 – 2024",
    description: [
      "Developed and maintained a global donation platform with multiple payment gateways",
      "Implemented security measures to protect donor information and prevent fraud",
      "Collaborated with product teams and designers to deliver customized solutions",
      "Optimized platform performance for reliable transaction processing under heavy load",
      "Contributed to building a platform enabling global charitable impact",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Redux Toolkit Query",
      "Google Cloud Platform",
      "AWS Amplify",
      "PostgreSQL",
    ],
  },
  {
    title: "Frontend Development Trainer",
    company: "Harmony Innovation Hub",
    companyUrl: "",
    period: "2022 – 2023",
    description: [
      "Trained interns on front-end technologies including React, HTML5, CSS3, and JavaScript",
      "Developed hands-on training modules for React, jQuery, and Bootstrap",
      "Led workshops on responsive design, cross-browser compatibility, and performance optimization",
      "Guided junior developers through real-world projects and code reviews",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Git",
      "VSCode",
      "Bootstrap",
      "jQuery",
      "React",
      "UI/UX",
      "Figma",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "PM Global Technology Services",
    companyUrl: "",
    period: "2019",
    description: [
      "Received mentorship in software development and deployment",
      "Joined the team maintaining the flagship product Formelo",
      "Recognized for hard work and dedication during the internship",
    ],
    technologies: ["React.js", "JavaScript", "TypeScript", "Redux Toolkit"],
  },
];

export const navigationItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;
