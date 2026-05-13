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
      "WedPass is an elegant wedding guest management platform designed for modern ceremonies and private events. It allows hosts to create events, share invite links, and manage real-time guest check-ins in a clean, premium interface.",
    image: "/wedpass.png",
    live: "https://wed-pass.vercel.app",
    github: "https://github.com/Tolu-omni",
    extra: "#",
  },
  {
    id: 2,
    tag: "Vet Clinic",
    year: "2025",
    title: "Crown Veterinary Clinic",
    description:
      "A polished veterinary clinic website concept focused on clear service presentation, appointment booking flows, and a friendly, approachable design for pet owners.",
    image:"/crownvet.png",
    live: "https://vet-clinic-gamma.vercel.app",
    github: "https://github.com/Tolu-omni",
    extra: "#",
    mock: true,
  },
  {
    id: 3,
    tag: "Bank",
    year: "2025",
    title: "Trinity Bank",
    description:
      "Trinity Bank is a clean banking dashboard concept focused on clarity, trust, and smooth account management. It features balance visibility, transaction history, deposit and transfer actions, bill payment flows, and a polished admin-style layout built for a modern fintech experience.",
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
      "An AI-assisted writing workspace for generating content briefs, summaries, outlines, and campaign copy with a clean editor experience.",
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
      "A reusable component system focused on premium interactions, curved layouts, hover depth, and smooth motion patterns for modern product interfaces.",
    live: "#",
    github: "#",
    extra: "#",
    mock: true,
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Framer Motion",
  "PostgreSQL",
  "Firebase",
];

export const contributionLevels = Array.from({ length: 300 }, (_, i) => {
  const rand = (Math.sin(i * 2.15) + 1) / 2;
  if (rand > 0.86) return 4;
  if (rand > 0.64) return 3;
  if (rand > 0.44) return 2;
  if (rand > 0.26) return 1;
  return 0;
});