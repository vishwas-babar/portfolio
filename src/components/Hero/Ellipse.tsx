import { FC } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

interface EllipseProps
  extends Omit<SVGMotionProps<SVGSVGElement>, 'animate' | 'transition'> {}

const Ellipse: FC<EllipseProps> = ({ ...props }) => {
  return (
    <motion.svg
      width="412"
      height="413"
      viewBox="0 0 412 413"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotate: [0, 30, 60, 90, 0],
      }}
      transition={{
        duration: 6, // 1.5s * 4 steps
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      {...props}
    >
      <circle
        cx="206"
        cy="206.401"
        r="204.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="18 36 54 72"
      />
    </motion.svg>
  );
};

export default Ellipse;
