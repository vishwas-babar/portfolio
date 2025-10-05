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
  TurboRepo,
} from '@/utils/icons';
import { SkillName, Skill, Experience } from '@/lib/types';
import Pillaibuzz from '@/assets/images/pillaibuzz.png';
import Medium from '@/assets/images/medium.png';
import animatedLandingPage from '@/assets/images/animated-landingpage.png';
import taskManager from '@/assets/images/task-manager.png';
import trueFeedback from '@/assets/images/truefeedback.png';
import heroPlaceholder from '@/assets/images/hero-placeholder.png';
import decentUptime from '@/assets/images/decent-uptime.png';
import portfolio from '@/assets/images/portfolio.png';
import currencyCoverter from '@/assets/images/currency-converter.png';

export const projects = [
  {
    priority: 1,
    title: 'Pillai Buzz',
    shortDescription:
      'A social platform for campus students built with React, Tailwind, Redux, Node, Express, and MongoDB. Integrated Google OAuth 2.0 for login/signup, React Query for optimized data fetching, and Cloudinary for media uploads. Achieved 50% faster data retrieval and 20% lighter server load.',
    cover: Pillaibuzz,
    livePreview: 'https://pillai-buzz.vishwasvb.live',
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
    title: 'Personal Portfolio',
    shortDescription:
      'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, theme switching, interactive components, and a clean design showcasing projects, experience, and skills with optimal performance.',
    cover: portfolio,
    livePreview: 'https://vishwasvb.live',
    githubLink: 'https://github.com/vishwas-babar/portfolio',
    usedSkills: [
      SkillName.NextJS,
      SkillName.TypeScript,
      SkillName.TailwindCSS,
      SkillName.React,
    ],
  },
  {
    priority: 3,
    title: 'Decentralized Uptime Monitoring System',
    shortDescription:
      'A decentralized uptime monitoring platform to track website and API availability without a single point of failure. Features distributed monitoring nodes, tamper-proof logs, real-time alerting via email/webhooks, and a comprehensive dashboard for uptime visualization.',
    cover: decentUptime,
    githubLink: 'https://github.com/vishwas-babar/decentralized-uptime',
    usedSkills: [
      SkillName.TypeScript,
      SkillName.NextJS,
      SkillName.NodeJS,
      SkillName.ExpressJS,
      SkillName.PostgreSQL,
      SkillName.Redis,
      SkillName.Docker,
      SkillName.WebSockets,
    ],
  },
  {
    priority: 4,
    title: 'True Feedback',
    shortDescription:
      'A full-stack anonymous feedback platform built with Next.js, Tailwind, Shadcn, Prisma, PostgreSQL, and NextAuth.js. Features include secure auth, email notifications via Resend, responsive UI with Framer Motion animations, and robust validation with Zod.',
    cover: trueFeedback,
    livePreview: 'https://true-feedback.vishwasvb.live',
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
    priority: 5,
    title: 'Medium Clone',
    shortDescription:
      'A lightweight Medium-style blogging platform built with React, TypeScript, Tailwind, Prisma, and PostgreSQL. Backend powered by Hono + Cloudflare Workers for serverless scalability.',
    cover: Medium,
    livePreview: 'https://medium.vishwasvb.live',
    githubLink: 'https://github.com/vishwas-babar/medium',
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
    priority: 6,
    title: 'Currency Converter',
    shortDescription:
      'A real-time currency converter application built with React. Features live exchange rates, multiple currency support, and a clean, intuitive interface for quick currency conversions.',
    cover: currencyCoverter,
    livePreview: 'https://currency-converter.vishwasvb.live/',
    githubLink: 'https://github.com/vishwas-babar/currency-converter-react',
    usedSkills: [SkillName.React, SkillName.JavaScript, SkillName.TailwindCSS],
  },
  {
    priority: 7,
    title: 'Animated Landing Page',
    shortDescription:
      'A modern animated landing page with 4–5 hero sections, built with React and Tailwind CSS. Smooth scroll and micro-interactions for delightful UX.',
    cover: animatedLandingPage,
    livePreview: 'https://animated-landing-page.vishwasvb.live',
    githubLink: 'https://github.com/vishwas-babar/animated-landing-page',
    usedSkills: [SkillName.React, SkillName.TailwindCSS, SkillName.TypeScript],
  },
  {
    priority: 8,
    title: 'Todo App',
    shortDescription:
      'A task manager built with React, Context API, and Tailwind CSS. Features CRUD operations, task filtering, and persistent storage using Local Storage.',
    cover: taskManager,
    livePreview: 'https://task-manager.vishwasvb.live',
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
  {
    name: SkillName.ReactNative,
    icon: ReactIcon,
  },
  {
    name: SkillName.TurboRepo,
    icon: TurboRepo,
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

// Experience Data
export const experiences: Experience[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Betatest Solutions',
    duration: 'July 2025 – Present',
    location: 'Remote',
    type: 'Internship',
    ldPage: 'https://www.linkedin.com/company/betatest-solutions-pvt-ltd',
    responsibilities: [
      'Debugged and enhanced React.js / Next.js / Express.js features, improving UI performance and user flows.',
      'Integrated and tested REST APIs, ensuring seamless frontend–backend communication.',
      'Strengthened a React Native app by fixing complex TypeScript type errors, reducing build issues and boosting maintainability.',
    ],
    techStack: [
      SkillName.TypeScript,
      SkillName.React,
      SkillName.NextJS,
      SkillName.ExpressJS,
      SkillName.ReactNative,
    ],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'SyncUp',
    duration: 'March 2025 – July 2025',
    location: 'Remote',
    type: 'Internship',
    ldPage: 'https://www.linkedin.com/company/syncupindia',
    responsibilities: [
      'Built a LinkedIn-style professional networking platform from scratch using a microservices architecture.',
      'Independently developed and integrated core services: Authentication, Resume, Chat, Post, Connection, and Job services.',
      'Designed scalable REST APIs with Express.js and PostgreSQL, implementing Redis for caching.',
      'Created a real-time chat service using WebSockets and Redis Pub/Sub, enabling direct messaging with delivery status.',
      'Built a resume service allowing users to create structured profiles and parse uploaded resumes into structured data.',
      'Developed job and post services with pagination, filtering, and clean API design for seamless frontend integration.',
      'Worked in a monorepo architecture using TurboRepo, with services containerized via Docker for local development and CI workflows.',
    ],
    techStack: [
      SkillName.TypeScript,
      SkillName.NextJS,
      SkillName.ExpressJS,
      SkillName.PostgreSQL,
      SkillName.Redis,
      SkillName.MongoDB,
      SkillName.Docker,
      SkillName.TurboRepo,
    ],
  },
];
