'use client';
import { ReactNode, useEffect, useRef, useState } from 'react';

type MarqueeWrapperProps = {
  children: ReactNode;
  className?: string;
};

type MarqueeAnimationType = (
  element: HTMLElement,
  elementWidth: number,
  windowWidth: number
) => void;

const marqueeAnimation: MarqueeAnimationType = (
  element,
  elementWidth,
  windowWidth
) => {
  // For true marquee effect, move from right to left continuously
  element.animate(
    [
      { transform: `translateX(${windowWidth}px)` },
      { transform: `translateX(-${elementWidth}px)` },
    ],
    {
      duration: 10000, // 5 seconds for faster movement
      easing: 'linear',
      iterations: Infinity,
    }
  );
};

const MarqueeWrapper: React.FC<MarqueeWrapperProps> = ({
  children,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const initializeAnimation = () => {
      if (elementRef.current) {
        setWindowWidth(window.innerWidth);
        const elementWidth = elementRef.current.getBoundingClientRect().width;
        marqueeAnimation(
          elementRef.current as HTMLElement,
          elementWidth,
          window.innerWidth
        );
      }
    };

    // Initialize on mount
    initializeAnimation();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Reinitialize animation on resize
      initializeAnimation();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Remove windowWidth dependency to prevent infinite re-renders

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="inter w-max whitespace-nowrap p-5 lg:p-7"
        ref={elementRef}
      >
        {children}
      </div>
    </div>
  );
};

export default MarqueeWrapper;
