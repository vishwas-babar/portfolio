'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RoleSwitcherProps {
  roles: string[];
  interval?: number;
  className?: string;
}

const RoleSwitcher: React.FC<RoleSwitcherProps> = ({
  roles,
  interval = 1800,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % roles.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [roles.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{
            y: 50,
            opacity: 0,
            filter: 'blur(4px)',
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
          }}
          exit={{
            y: -50,
            opacity: 0,
            filter: 'blur(4px)',
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="block"
        >
          {roles[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RoleSwitcher;
