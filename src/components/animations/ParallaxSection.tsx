'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ParallaxSection({
  children,
  className = '',
  speed = 0.2,
  direction = 'up',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  // Calculate transform values based on direction
  let x = null;
  let y = null;
  
  switch (direction) {
    case 'up':
      y = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);
      break;
    case 'down':
      y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);
      break;
    case 'left':
      x = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);
      break;
    case 'right':
      x = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);
      break;
    default:
      y = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);
  }
  
  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
