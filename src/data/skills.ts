export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "design" | "tools" | "other";
  level: number; // 1-5
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: "react",
    category: "frontend",
    level: 5,
  },
  {
    name: "Next.js",
    icon: "next",
    category: "frontend",
    level: 5,
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "frontend",
    level: 4,
  },
  {
    name: "JavaScript",
    icon: "javascript",
    category: "frontend",
    level: 5,
  },
  {
    name: "HTML",
    icon: "html",
    category: "frontend",
    level: 5,
  },
  {
    name: "CSS",
    icon: "css",
    category: "frontend",
    level: 5,
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    category: "frontend",
    level: 5,
  },
  {
    name: "Node.js",
    icon: "node",
    category: "backend",
    level: 4,
  },
  {
    name: "Express.js",
    icon: "express",
    category: "backend",
    level: 4,
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    category: "backend",
    level: 3,
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    category: "backend",
    level: 3,
  },
  {
    name: "Firebase",
    icon: "firebase",
    category: "backend",
    level: 4,
  },
  {
    name: "Figma",
    icon: "figma",
    category: "design",
    level: 3,
  },
  {
    name: "Git",
    icon: "git",
    category: "tools",
    level: 4,
  },
  {
    name: "GitHub",
    icon: "github",
    category: "tools",
    level: 4,
  },
  {
    name: "VS Code",
    icon: "vscode",
    category: "tools",
    level: 5,
  },
];

export const categories = [
  { id: "all", name: "All" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "design", name: "Design" },
  { id: "tools", name: "Tools" },
];
