'use client';

import { motion } from 'framer-motion';
import { Rocket, Briefcase, Users } from 'lucide-react';
import { LinkedIn } from '@/utils/icons';
import { Experience } from '@/lib/types';
import TechBadge from './TechBadge';

interface ExperienceItemProps {
  experience: Experience;
  index: number;
  isLeft: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  index,
  isLeft,
}) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Internship':
        return <Rocket className="w-4 h-4" />;
      case 'Client Project':
        return <Briefcase className="w-4 h-4" />;
      case 'Freelance':
        return <Users className="w-4 h-4" />;
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  const getTypeEmoji = (type: string) => {
    switch (type) {
      case 'Internship':
        return '🚀';
      case 'Client Project':
        return '💼';
      case 'Freelance':
        return '👥';
      default:
        return '💼';
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -50 : 50,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      exit={{
        opacity: 0,
        x: isLeft ? -30 : 30,
        y: 10,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      viewport={{ once: false, margin: '-50px', amount: 0.3 }}
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
      } flex-col md:gap-8 gap-4 mb-12 last:mb-0`}
    >
      {/* timeline dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.2,
          type: 'spring',
          stiffness: 200,
        }}
        viewport={{ once: false, margin: '-50px', amount: 0.3 }}
        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10"
      >
        <div className="w-4 h-4 bg-accent border-4 border-background rounded-full shadow-lg">
          <div className="w-full h-full bg-accent rounded-full animate-pulse" />
        </div>
      </motion.div>

      {/* timeline date display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          type: 'spring',
          stiffness: 150,
        }}
        viewport={{ once: false, margin: '-50px', amount: 0.3 }}
        className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 z-20 ${
          isLeft
            ? 'md:left-1/2 md:ml-8 right-0 mr-16'
            : 'md:right-1/2 md:mr-8 right-0 mr-16'
        }`}
      >
        <div
          className={`bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-lg px-3 py-2 shadow-md ${
            isLeft ? 'md:text-left text-right' : 'md:text-right text-right'
          }`}
        >
          <div className="text-xs font-bold text-accent uppercase tracking-wider">
            Timeline
          </div>
          <div className="text-sm font-semibold text-secondary-content whitespace-nowrap">
            {experience.duration}
          </div>
          <div className="text-xs text-secondary-content/60 font-medium">
            {experience.location}
          </div>
        </div>

        {/* connecting line to dot */}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-px bg-accent/40 ${
            isLeft
              ? 'md:right-full md:mr-0 right-full mr-0'
              : 'md:left-full md:ml-0 right-full mr-0'
          }`}
        />
      </motion.div>

      {/* content card */}
      <motion.div
        whileHover={{
          scale: 1.02,
          boxShadow:
            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
        transition={{ type: 'spring', stiffness: 200 }}
        className={`bg-secondary border border-border rounded-xl p-4 sm:p-6 shadow-md max-w-lg w-full md:ml-0 ${
          isLeft ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
        }`}
      >
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{getTypeEmoji(experience.type)}</span>
            <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded-full flex items-center gap-1">
              {getTypeIcon(experience.type)}
              {experience.type}
            </span>
          </div>

          <h3 className="text-xl font-bold text-secondary-content mb-1">
            {experience.role}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <h4 className="text-lg font-semibold text-accent">
              {experience.company}
            </h4>
            {experience.ldPage && (
              <a
                href={experience.ldPage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${experience.company} LinkedIn page`}
                className="group flex items-center justify-center w-8 h-8 bg-accent/10 hover:bg-accent rounded-full transition-all duration-300 hover:scale-110"
              >
                <LinkedIn className="w-4 h-4 text-accent group-hover:text-primary transition-colors duration-300" />
              </a>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h5 className="text-sm font-semibold text-secondary-content mb-2 uppercase tracking-wide">
            Key Achievements
          </h5>
          <ul className="space-y-2">
            {experience.responsibilities.map((responsibility, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{
                  delay: index * 0.1 + idx * 0.05,
                  duration: 0.4,
                }}
                viewport={{ once: false, margin: '-20px', amount: 0.5 }}
                className="text-sm text-secondary-content/80 flex items-start gap-2"
              >
                <span className="text-accent font-bold mt-1 text-xs">•</span>
                <span className="leading-relaxed">{responsibility}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-secondary-content mb-3 uppercase tracking-wide">
            Tech Stack
          </h5>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, idx) => (
              <TechBadge key={tech} skill={tech} index={idx} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceItem;
