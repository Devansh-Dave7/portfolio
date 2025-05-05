'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function CountUp({ 
  end, 
  duration = 2000, 
  suffix = '', 
  className = '' 
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
      let start = 0;
      const step = end / (duration / 16); // 16ms is roughly 60fps
      
      // Reset count to 0 when coming into view
      setCount(0);
      
      const timer = setInterval(() => {
        start += step;
        setCount(Math.min(Math.floor(start), end));
        
        if (start >= end) {
          clearInterval(timer);
        }
      }, 16);
      
      return () => clearInterval(timer);
    } else if (hasAnimated) {
      // Reset when out of view if it has already animated once
      setCount(0);
    }
  }, [isInView, end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
