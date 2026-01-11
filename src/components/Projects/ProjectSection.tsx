'use client';

import { motion } from 'framer-motion';
import { projects } from '@/appData';
import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading/SectionHeading';

const ProjectSection: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // individual card variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="projects" className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, margin: '0px', amount: 0.1 }}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <SectionHeading
          title="My Projects"
          subtitle="A showcase of my work, highlighting the projects that demonstrate my skills and passion for web development."
          className="mx-auto text-center"
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '0px', amount: 0.05 }}
        className="w-full grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2"
      >
        {projects.map(project => (
          <motion.div
            key={project.priority}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="group h-full"
          >
            <ProjectCard data={project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full opacity-60" />
      </motion.div>
    </section>
  );
};

export default ProjectSection;
