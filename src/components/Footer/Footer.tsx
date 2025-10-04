'use client';
import { GithubIcon, LinkedIn, X } from '@/utils/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-secondary-content text-sm">
              © {currentYear} Vishwas Babar. All rights reserved.
            </p>
            <p className="text-secondary-content/60 text-xs mt-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-secondary-content text-sm hidden md:block">
              Connect with me:
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/vishwas-babar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
                className="group flex items-center justify-center w-8 h-8 bg-primary hover:bg-accent rounded-full transition-all duration-300 hover:scale-110"
              >
                <GithubIcon className="w-4 h-4 text-secondary-content group-hover:text-primary transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishwas-babar-6a2005229/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
                className="group flex items-center justify-center w-8 h-8 bg-primary hover:bg-accent rounded-full transition-all duration-300 hover:scale-110"
              >
                <LinkedIn className="w-4 h-4 text-secondary-content group-hover:text-primary transition-colors duration-300" />
              </a>
              <a
                href="https://x.com/Vishwas_babar_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit X (Twitter) Profile"
                className="group flex items-center justify-center w-8 h-8 bg-primary hover:bg-accent rounded-full transition-all duration-300 hover:scale-110"
              >
                <X className="w-4 h-4 text-secondary-content group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section - Additional info */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-secondary-content/60 text-xs">
            Designed and developed with ❤️ by Vishwas Babar
          </p>
          <p className="text-secondary-content/60 text-xs mt-1">
            Inspired by{' '}
            <a
              href="https://github.com/AbdulBasit313"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-secondary-content transition-colors duration-300"
            >
              Abdul Basit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
