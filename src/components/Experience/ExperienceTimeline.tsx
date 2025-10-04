'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Experience } from '@/lib/types';
import ExperienceItem from './ExperienceItem';
import SectionHeading from '../SectionHeading/SectionHeading';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const timelineHeight = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    ['0%', '100%']
  );

  const timelineOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.3, 1, 1, 0.3]
  );

  return (
    <section ref={containerRef} className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-50px', amount: 0.3 }}
          className="text-center mb-16"
        >
          <SectionHeading
            title="My Experience"
            subtitle="A journey through my professional experiences, internships, and projects that have shaped my skills as a developer."
            className="mx-auto text-center"
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-accent/20 top-0 bottom-0 hidden sm:block" />

          <div className="absolute left-2 w-0.5 bg-accent/20 top-0 bottom-0 sm:hidden" />

          <motion.div
            style={{
              height: timelineHeight,
              opacity: timelineOpacity,
            }}
            className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-accent via-accent/80 to-accent top-0 hidden sm:block shadow-lg shadow-accent/20"
          />

          <motion.div
            style={{
              height: timelineHeight,
              opacity: timelineOpacity,
            }}
            className="absolute left-2 w-0.5 bg-gradient-to-b from-accent via-accent/80 to-accent top-0 sm:hidden shadow-lg shadow-accent/20"
          />

          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={`${experience.company}-${experience.role}`}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, margin: '-50px', amount: 0.5 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent/20 rounded-full blur-md"
        />
      </div>
    </section>
  );
};

export default ExperienceTimeline;
