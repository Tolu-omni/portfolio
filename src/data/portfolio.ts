export type ProjectItem = {
  id: number;
  tag: string;
  year: string;
  title: string;
  description: string;
  image?: string;
  live?: string;
  github?: string;
  extra?: string;
  mock?: boolean;
};

export const projects: ProjectItem[] = [
  {
    id: 1,
    tag: "Event Tech",
    year: "2026",
    title: "WedPass",
    description:
      "WedPass is an elegant wedding guest management platform designed for modern ceremonies and private events.",
    image: "/wedpass.png",
    live: "https://wed-pass.vercel.app",
    github: "https://github.com/Tolu-omni",
    extra: "#",
  },
  {
    id: 2,
    tag: "Creative Platform",
    year: "2025",
    title: "Portfolio Builder Pro",
    description:
      "A polished drag-and-drop portfolio generator that helps creators launch personal sites fast.",
    live: "#",
    github: "#",
    extra: "#",
    mock: true,
  },
  {
    id: 3,
    tag: "Bank",
    year: "2025",
    title: "Trinity Bank",
    description:
      "A clean banking dashboard concept focused on clarity, trust, and smooth account management.",
    image: "/trinitybank.png",
    live: "https://trinity-bank.netlify.app",
    github: "https://trinity-bank.netlify.app",
    extra: "#",
  },
  {
    id: 4,
    tag: "AI Product",
    year: "2025",
    title: "AI Content Studio",
    description:
      "An AI-assisted writing workspace for generating content briefs, summaries, outlines, and campaign copy.",
    live: "#",
    github: "#",
    extra: "#",
    mock: true,
  },
  {
    id: 5,
    tag: "UI System",
    year: "2026",
    title: "Motion UI Library",
    description:
      "A reusable component system focused on premium interactions, curved layouts, hover depth, and smooth motion.",
    live: "#",
    github: "#",
    extra: "#",
    mock: true,
  },
];

export const contributionLevels = Array.from({ length: 300 }, (_, i) => {
  const rand = (Math.sin(i * 2.15) + 1) / 2;
  if (rand > 0.86) return 4;
  if (rand > 0.64) return 3;
  if (rand > 0.44) return 2;
  if (rand > 0.26) return 1;
  return 0;
});

export const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Vite"
];

