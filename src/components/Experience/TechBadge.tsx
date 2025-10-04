'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SkillName } from '@/lib/types';
import { skillList } from '@/appData';

interface TechBadgeProps {
  skill: SkillName;
  index: number;
}

const TechBadge: React.FC<TechBadgeProps> = ({ skill, index }) => {
  const getSkillIcon = (skillName: SkillName) => {
    const skillData = skillList.find(s => s.name === skillName);
    return skillData?.icon;
  };

  const IconComponent = getSkillIcon(skill);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 5 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        type: 'spring',
        stiffness: 200,
      }}
      viewport={{ once: false, margin: '-20px', amount: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
      }}
      className="flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-200 cursor-default group"
      title={skill}
    >
      {IconComponent ? (
        <Image
          src={
            typeof IconComponent === 'string'
              ? IconComponent
              : IconComponent.src || IconComponent.default || IconComponent
          }
          alt={skill}
          width={24}
          height={24}
          className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-200"
        />
      ) : (
        <span className="text-xs font-bold text-primary group-hover:scale-110 transition-transform duration-200">
          {skill.substring(0, 2).toUpperCase()}
        </span>
      )}
    </motion.div>
  );
};

export default TechBadge;
