'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ExperienceCardProps {
  year: string;
  duration: string;
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  colorAccent?: string;
  index?: number;
}

export default function ExperienceCard({
  year,
  duration,
  title,
  company,
  description,
  responsibilities,
  skills,
  colorAccent = 'text-primary',
  index = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: false, amount: 0.2 }}
      className="experience-card"
    >
      <div className="flex items-center mb-6">
        <div className={`bg-primary/10 ${colorAccent} font-medium p-3 rounded-xl text-center`}>
          <div className="text-2xl font-bold">{year}</div>
          <div className="text-sm">{duration}</div>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{company}</p>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6">
        {description}
      </p>
      
      <div className="space-y-3 mb-6">
        {responsibilities.map((responsibility, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className="text-primary mt-1">—</div>
            <span>{responsibility}</span>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="technology-badge">{skill}</span>
        ))}
      </div>
    </motion.div>
  );
}
