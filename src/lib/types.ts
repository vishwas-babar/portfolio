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
}

export interface Skill {
  name: SkillName;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | any; // Can be SVG component or static image
}

export interface Project {
  priority: number;
  title: string;
  shortDescription: string;
  cover: string;
  livePreview?: string;
  githubLink?: string;
  usedSkills: SkillName[];
}

export interface Heading {
  id: string;
  title: string;
  items: Heading[];
}
