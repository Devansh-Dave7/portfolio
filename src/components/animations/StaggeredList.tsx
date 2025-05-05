'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface StaggeredListProps {
  children: ReactNode[];
  className?: string;
  childClassName?: string;
  staggerDelay?: number;
  initialDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
}

export default function StaggeredList({
  children,
  className = '',
  childClassName = '',
  staggerDelay = 0.1,
  initialDelay = 0,
  direction = 'up',
  duration = 0.5,
  once = true,
}: StaggeredListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2, margin: '-100px' });

  // Set the initial and animate properties based on the direction
  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'down':
        return {
          hidden: { y: -30, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'left':
        return {
          hidden: { x: 30, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'right':
        return {
          hidden: { x: -30, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'none':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      default:
        return {
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants = getDirectionVariants();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {Array.isArray(children) &&
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{
              duration,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={childClassName}
          >
            {child}
          </motion.div>
        ))}
    </motion.div>
  );
}
