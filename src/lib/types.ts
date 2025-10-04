import { StaticImageData } from 'next/image';

export enum SkillName {
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
  React = 'React.js',
  NextJS = 'Next.js',
  NodeJS = 'Node.js',
  ExpressJS = 'Express.js',
  NestJS = 'Nest.js',
  WebSockets = 'WebSockets',
  TailwindCSS = 'Tailwind CSS',
  Redux = 'Redux',
  Recoil = 'Recoil',
  Prisma = 'Prisma',
  MongoDB = 'MongoDB',
  PostgreSQL = 'PostgreSQL',
  Redis = 'Redis',
  Docker = 'Docker',
  AWS = 'AWS',
  Git = 'Git',
  Postman = 'Postman',
  Hono = 'Hono',
  CloudflareWorkers = 'Cloudflare Workers',
  ReactNative = 'React Native',
  TurboRepo = 'TurboRepo',
}

export interface Skill {
  name: SkillName;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | any; // Can be SVG component or static image
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  type: 'Internship' | 'Client Project' | 'Freelance' | 'Full-time';
  responsibilities: string[];
  techStack: SkillName[];
  ldPage?: string; // LinkedIn page of the company
}

export interface Project {
  priority: number;
  title: string;
  shortDescription: string;
  cover: string | StaticImageData;
  livePreview?: string;
  githubLink?: string;
  usedSkills: SkillName[];
}

export interface Heading {
  id: string;
  title: string;
  items: Heading[];
}
