'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type MarqueeWrapperProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
};

const MarqueeWrapper: React.FC<MarqueeWrapperProps> = ({
  children,
  className = '',
  duration = 20,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* First instance */}
      <motion.div
        className="inter w-max whitespace-nowrap p-5 lg:p-7 absolute"
        animate={{
          x: [0, '-100%'],
        }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {children}
      </motion.div>
      {/* Second instance for seamless loop */}
      <motion.div
        className="inter w-max whitespace-nowrap p-5 lg:p-7 "
        animate={{
          x: ['100%', '0%'],
        }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MarqueeWrapper;
