'use client';

import { StaggeredList, ScrollReveal } from "@/components/animations";
import { CountUp } from "@/components/animations";

export default function StatsSection() {
  return (
    <section className="py-16 border-t border-border">
      <ScrollReveal className="container">
        <StaggeredList
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          staggerDelay={0.1}
          initialDelay={0.2}
        >
          {[
            <div className="stat-box" key="level">
              <h3 className="text-4xl font-bold text-primary mb-2">Junior</h3>
              <p className="text-sm text-muted-foreground">Professional Level</p>
            </div>,
            <div className="stat-box" key="projects">
              <h3 className="text-4xl font-bold text-primary mb-2">
                <CountUp end={7} suffix="+" className="text-primary" />
              </h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>,
            <div className="stat-box" key="clients">
              <h3 className="text-4xl font-bold text-primary mb-2">
                <CountUp end={3} suffix="+" className="text-primary" />
              </h3>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>,
            <div className="stat-box" key="countries">
              <h3 className="text-4xl font-bold text-primary mb-2">
                <CountUp end={3} className="text-primary" />
              </h3>
              <p className="text-sm text-muted-foreground">Countries Reached</p>
            </div>
          ]}
        </StaggeredList>
      </ScrollReveal>
    </section>
  );
}