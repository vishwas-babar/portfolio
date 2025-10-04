'use client';
import Image from 'next/image';
import { HeroImage } from '@/utils/images';
import { GithubIcon, LinkedIn, X } from '@/utils/icons';
import Ellipse from './Ellipse';
import RoleSwitcher from './RoleSwitcher';

const Hero = () => {
  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Hi - I'm Vishwas Vb
            </span>
            <RoleSwitcher
              roles={[
                'FULLSTACK DEVELOPER',
                'FRONTEND DEVELOPER',
                'BACKEND DEVELOPER',
                'REACT DEVELOPER',
                'NEXTJS DEVELOPER',
              ]}
              className="text-accent text-[1.75rem] font-bold min-h-[2.5rem]"
            />
          </h1>

          <h2 className="text-neutral mt-3">
            A full-stack developer passionate about building scalable,
            performant, and user-friendly applications with modern web
            technologies.
          </h2>

          <div className="mt-6 space-y-6">
            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/vishwas-babar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
                className="group flex items-center justify-center w-12 h-12 bg-secondary hover:bg-accent rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
              >
                <GithubIcon className="w-6 h-6 text-neutral group-hover:text-primary transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwas-babar-6a2005229/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
                className="group flex items-center justify-center w-12 h-12 bg-secondary hover:bg-accent rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
              >
                <LinkedIn className="w-6 h-6 text-neutral group-hover:text-primary transition-colors duration-300" />
              </a>
              <a
                href="https://x.com/Vishwas_babar_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit X (Twitter) Profile"
                className="group flex items-center justify-center w-12 h-12 bg-secondary hover:bg-accent rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
              >
                <X className="w-6 h-6 text-neutral group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
              >
                <span>Let's Work Together</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent rounded-full overflow-hidden relative  size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="John Doe - Full Stack Developer"
              className="object-contain p-7 mt-2 scale-110"
            />
            <Ellipse className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
