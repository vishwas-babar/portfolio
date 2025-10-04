// Data for portfolio
import {
  AWSIcon,
  DockerIcon,
  ExpressjsIcon,
  GitIcon,
  JavaScriptIcon,
  MongoDBIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  PostgreSQLIcon,
  PostmanIcon,
  PrismaIcon,
  ReactIcon,
  RecoilIcon,
  RedisIcon,
  ReduxIcon,
  CloudFlareIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '@/utils/icons';
import { SkillName, Skill } from '@/lib/types';
import Pillaibuzz from '@/assets/images/pillaibuzz.png';
import Medium from '@/assets/images/medium.png';
import animatedLandingPage from '@/assets/images/animated-landingpage.png';
import taskManager from '@/assets/images/task-manager.png';

export const projects = [
  {
    priority: 1,
    title: 'Pillai Buzz',
    shortDescription:
      'A social platform for campus students built with React, Tailwind, Redux, Node, Express, and MongoDB. Integrated Google OAuth 2.0 for login/signup, React Query for optimized data fetching, and Cloudinary for media uploads. Achieved 50% faster data retrieval and 20% lighter server load.',
    cover: Pillaibuzz,
    livePreview: 'https://pillai-buzz.vercel.app',
    githubLink: 'https://github.com/vishwas-babar/pillai-buzz',
    usedSkills: [
      SkillName.React,
      SkillName.TailwindCSS,
      SkillName.Redux,
      SkillName.NodeJS,
      SkillName.ExpressJS,
      SkillName.MongoDB,
    ],
  },
  {
    priority: 2,
    title: 'True Feedback',
    shortDescription:
      'A full-stack anonymous feedback platform built with Next.js, Tailwind, Shadcn, Prisma, PostgreSQL, and NextAuth.js. Features include secure auth, email notifications via Resend, responsive UI with Framer Motion animations, and robust validation with Zod.',
    cover:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    livePreview: 'https://true-feedback.vercel.app',
    githubLink: 'https://github.com/vishwas-babar/true-feedback',
    usedSkills: [
      SkillName.NextJS,
      SkillName.TypeScript,
      SkillName.TailwindCSS,
      SkillName.Prisma,
      SkillName.PostgreSQL,
    ],
  },
  {
    priority: 3,
    title: 'Medium Clone',
    shortDescription:
      'A lightweight Medium-style blogging platform built with React, TypeScript, Tailwind, Prisma, and PostgreSQL. Backend powered by Hono + Cloudflare Workers for serverless scalability.',
    cover: Medium,
    livePreview: 'https://medium-one-puce.vercel.app/',
    githubLink: 'https://github.com/vishwas-babar/medium-clone',
    usedSkills: [
      SkillName.React,
      SkillName.TypeScript,
      SkillName.TailwindCSS,
      SkillName.Hono,
      SkillName.CloudflareWorkers,
      SkillName.Prisma,
      SkillName.PostgreSQL,
    ],
  },
  {
    priority: 4,
    title: 'Animated Landing Page',
    shortDescription:
      'A modern animated landing page with 4–5 hero sections, built with React and Tailwind CSS. Smooth scroll and micro-interactions for delightful UX.',
    cover: animatedLandingPage,
    livePreview: 'https://animated-landing-page-two.vercel.app/',
    githubLink: 'https://github.com/vishwas-babar/animated-landing-page',
    usedSkills: [SkillName.React, SkillName.TailwindCSS, SkillName.TypeScript],
  },
  {
    priority: 5,
    title: 'Currency Converter',
    shortDescription:
      'A React-based currency converter supporting 160+ currencies. Integrated Exchange Rate API for real-time conversions with Tailwind CSS for clean UI.',
    cover:
      'https://images.unsplash.com/photo-1623886026216-15cefb0b23b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    githubLink: 'https://github.com/vishwas-babar/currency-converter',
    usedSkills: [SkillName.React, SkillName.JavaScript, SkillName.TailwindCSS],
  },
  {
    priority: 6,
    title: 'Todo App',
    shortDescription:
      'A task manager built with React, Context API, and Tailwind CSS. Features CRUD operations, task filtering, and persistent storage using Local Storage.',
    cover: taskManager,
    livePreview: 'https://task-manager-eight-rouge.vercel.app/',
    githubLink: 'https://github.com/vishwas-babar/task-manager',
    usedSkills: [
      SkillName.NextJS,
      SkillName.JavaScript,
      SkillName.TailwindCSS,
      SkillName.Recoil,
    ],
  },
];

// Skill List
export const skillList: Skill[] = [
  {
    name: SkillName.JavaScript,
    icon: JavaScriptIcon,
  },
  {
    name: SkillName.TypeScript,
    icon: TypescriptIcon,
  },
  {
    name: SkillName.React,
    icon: ReactIcon,
  },
  {
    name: SkillName.NextJS,
    icon: NextjsIcon,
  },
  {
    name: SkillName.NodeJS,
    icon: NodejsIcon,
  },
  {
    name: SkillName.ExpressJS,
    icon: ExpressjsIcon,
  },
  {
    name: SkillName.Hono,
    icon: CloudFlareIcon,
  },
  {
    name: SkillName.NestJS,
    icon: NestjsIcon,
  },
  {
    name: SkillName.WebSockets,
    icon: SocketIcon,
  },
  {
    name: SkillName.TailwindCSS,
    icon: TailwindCSS,
  },
  {
    name: SkillName.Redux,
    icon: ReduxIcon,
  },
  {
    name: SkillName.Recoil,
    icon: RecoilIcon,
  },
  {
    name: SkillName.Prisma,
    icon: PrismaIcon,
  },
  {
    name: SkillName.MongoDB,
    icon: MongoDBIcon,
  },
  {
    name: SkillName.PostgreSQL,
    icon: PostgreSQLIcon,
  },
  {
    name: SkillName.Redis,
    icon: RedisIcon,
  },
  {
    name: SkillName.Docker,
    icon: DockerIcon,
  },
  {
    name: SkillName.AWS,
    icon: AWSIcon,
  },
  {
    name: SkillName.Git,
    icon: GitIcon,
  },
  {
    name: SkillName.Postman,
    icon: PostmanIcon,
  },
];

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
];

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru'];
