'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export default function Timeline({ children, className = '' }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <motion.div 
        className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-border"
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
        style={{ transformOrigin: 'top' }}
      />
      
      {/* Timeline content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

interface TimelineItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function TimelineItem({ children, className = '', index = 0 }: TimelineItemProps) {
  return (
    <motion.div 
      className={`relative pl-12 pb-12 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Timeline dot */}
      <motion.div 
        className="absolute left-0 top-6 w-[10px] h-[10px] rounded-full bg-primary"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.2 + 0.3,
          type: 'spring'
        }}
        viewport={{ once: false }}
      />
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}
