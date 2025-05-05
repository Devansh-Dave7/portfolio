import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  StaggeredList,
  FadeIn,
  ScrollReveal,
  ParallaxSection,
  CountUp
} from "@/components/animations";
import ExperienceCard from "@/components/ExperienceCard";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container">
          <ParallaxSection speed={0.1} direction="down" className="absolute inset-0 opacity-5 dark:opacity-10 select-none pointer-events-none z-0">
            <div className="text-6xl sm:text-8xl md:text-9xl font-bold text-black/5 dark:text-white/5 whitespace-nowrap leading-none">
              Developer • Digital Artist • WebGL • React • JavaScript • TypeScript • Python • Motion Design • UX/UI • Full Stack • Node.js • 3D • Frontend • Backend
            </div>
          </ParallaxSection>
          <div className="relative z-10">
            <AnimatedSection direction="down" delay={0.1}>
              <p className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">CREATIVE DEVELOPER</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Crafting Digital Experiences <br /> Through Code & Design
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                Building immersive web experiences that push the boundaries of what's possible
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.7}>
              <div className="flex flex-wrap gap-4">
                <Link href="#experience">
                  <Button className="bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90 h-14 px-8">
                    View Work
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="h-14 px-8">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <FadeIn delay={1.2} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest mb-2">SCROLL</span>
            <div className="h-12 w-[1px] bg-border" />
          </FadeIn>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20" id="about">
        <div className="container">
          <AnimatedSection direction="down">
            <h2 className="section-title">ABOUT ME</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <AnimatedSection delay={0.2}>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Hi, I'm <span className="text-primary">Devansh Dave</span>
                </h2>
              </AnimatedSection>
              <StaggeredList className="space-y-4 mb-8" staggerDelay={0.1} initialDelay={0.3}>
                {[
                  <div className="flex items-center gap-2">
                    <div className="text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span>Based in Jaipur, India</span>
                  </div>,
                  <div className="flex items-center gap-2">
                    <div className="text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <span>20 Years Old</span>
                  </div>,
                  <div className="flex items-center gap-2">
                    <div className="text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m18 16 4-4-4-4" />
                        <path d="m6 8-4 4 4 4" />
                        <path d="m14.5 4-5 16" />
                      </svg>
                    </div>
                    <span>Full Stack Developer</span>
                  </div>,
                  <div className="flex items-center gap-2">
                    <div className="text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <span>1+ Years of work Experience</span>
                  </div>
                ]}
              </StaggeredList>
              <AnimatedSection delay={0.7}>
                <p className="text-muted-foreground mb-8">
                As a passionate full-stack developer rooted in India’s tech ecosystem, I merge engineering precision with creative problem-solving to build impactful digital solutions. From crafting custom JavaScript libraries like Gragfa to delivering high-performance web apps like Attainz, I specialize in scalable development that blends clean architecture with seamless user experience.</p>
              </AnimatedSection>
              <AnimatedSection delay={0.8}>
                <div className="flex flex-wrap gap-3">
                  <Link href="#contact">
                    <Button className="btn-primary">Get in Touch</Button>
                  </Link>
                  <Link href="#experience">
                    <Button variant="outline">View Projects</Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <div>
              <AnimatedSection delay={0.4} direction="left">
                <h3 className="text-xl font-medium mb-4">Key Skills</h3>
                <div className="flex flex-wrap gap-2 mb-10">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">express.js</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">SQL(MySQL, Postgres, SQLite)</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">TailwindCSS</span>
                  <span className="skill-tag">C++</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Selenium/Playwright</span>
                  <span className="skill-tag">Linux (Red Hat)</span>

                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6} direction="left">
                <h3 className="text-xl font-medium mb-4">Services</h3>
                <StaggeredList className="space-y-4" staggerDelay={0.1} initialDelay={0.1} direction="left">
                  {[
                    <div className="service-item">
                      <div className="text-primary">—</div>
                      <span>Full Stack Development</span>
                    </div>,
                    <div className="service-item">
                      <div className="text-primary">—</div>
                      <span>Specialized in AI tools</span>
                    </div>,
                    <div className="service-item">
                      <div className="text-primary">—</div>
                      <span>Web Design & Development</span>
                    </div>,
                    <div className="service-item">
                      <div className="text-primary">—</div>
                      <span>Automation & Scripting</span>
                    </div>
                  ]}
                </StaggeredList>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-border">
        <ScrollReveal className="container">
          <StaggeredList
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            staggerDelay={0.1}
            initialDelay={0.2}
          >
            {[
              <div className="stat-box">
                <h3 className="text-4xl font-bold text-primary mb-2">Junior</h3>
                <p className="text-sm text-muted-foreground">Professional Level</p>
              </div>,
              <div className="stat-box">
                <h3 className="text-4xl font-bold text-primary mb-2">
                  <CountUp end={7} suffix="+" className="text-primary" />
                </h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>,
              <div className="stat-box">
                <h3 className="text-4xl font-bold text-primary mb-2">
                  <CountUp end={3} suffix="+" className="text-primary" />
                </h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>,
              <div className="stat-box">
                <h3 className="text-4xl font-bold text-primary mb-2">
                  <CountUp end={3} className="text-primary" />
                </h3>
                <p className="text-sm text-muted-foreground">Countries Reached</p>
              </div>
            ]}
          </StaggeredList>
        </ScrollReveal>
      </section>

      {/* Experience Section */}
      <section className="py-20" id="experience">
        <ScrollReveal className="container">
          <AnimatedSection direction="down">
            <h2 className="section-title">WORK EXPERIENCE</h2>
          </AnimatedSection>

          {/* Desktop view - Cards */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {/* First row */}
            <div>
              <ExperienceCard
                year="2024"
                duration="June 2024 - March 2025"
                title="Gragfa: Graph-Generating JavaScript Library"
                company="Freelance JavaScript Developer • Remote"
                description="Developed a custom JavaScript library for optimizing DOM manipulation and generating interactive graphs."
                responsibilities={[
                  "Built a custom JS library to optimize DOM manipulation, cutting render time by 30% and boosting performance",
                  "Architected a modular design, allowing for easy customization and extension of library features",
                  "Implemented YAML input support, enabling the generation of dynamic, interactive graphs and data visualizations",
                  "Designed the library for easy use with just VS Code Live Server, reducing setup complexity for new users"
                ]}
                skills={["JavaScript", "DOM", "YAML", "Data Visualization"]}
                index={0}
              />
            </div>

            <div>
              <ExperienceCard
                year="2025"
                duration="January 2025 - March 2025"
                title="Attainz: Email Validation Website"
                company="Freelance Full Stack Web Developer • Remote"
                description="Built a comprehensive email validation solution with advanced features and REST API."
                responsibilities={[
                  "Built Attainz, an email validator using Next.js, TypeScript, CSS, and RegEx with strong functionality",
                  "Implemented advanced email validation for single and bulk (CSV) inputs with file processing support",
                  "Designed and implemented a REST API to provide sample downloads, enhancing user experience and functionality",
                  "Ensured client satisfaction by delivering projects early with clear communication and technical support"
                ]}
                skills={["Next.js", "TypeScript", "CSS", "RegEx", "REST API"]}
                colorAccent="text-emerald-500"
                index={1}
              />
            </div>

            {/* Second row */}
            <div className="mt-8">
              <ExperienceCard
                year="2024"
                duration="November 2024"
                title="Harvard CS50: Introduction to Programming with Python"
                company="Harvard University • Certificate of Completion"
                description="Completed Harvard's Python programming course covering fundamental programming concepts, PS & OOP."
                responsibilities={[
                  "Completed Harvard's Python programming course covering fundamental programming concepts, PS & OOP",
                  "Developed strong knowledge in Python through practical programming assignments and a final project",
                  "Created YouTube link validator and IPv4 address validator using regex for practical application",
                  "Developed a CLI math game replicating a professor game where solving 10 consecutive math problems is required to win"
                ]}
                skills={["Python", "RegEx", "PyTest", "Problem Solving", "OOP"]}
                colorAccent="text-teal-500"
                index={2}
              />
            </div>

            <div className="mt-8">
              <ExperienceCard
                year="2025"
                duration="March 2025"
                title="Manipal Hackathon Finalist - 7th Place"
                company="Manipal University • Voice Vista Project"
                description="Created a voice-controlled browser assistant enabling hands-free web navigation with advanced accessibility features."
                responsibilities={[
                  "Achieved 7th place among 250 teams at Manipal Hackathon by developing a voice-controlled browser assistant",
                  "Integrated speech recognition, natural language processing, & GUI automation to enhance accessibility & user experience",
                  "Designed intuitive voice commands for common browsing tasks to improve usability",
                  "Implemented real-time feedback system to confirm user commands and actions"
                ]}
                skills={["Python", "NLP", "Speech Recognition", "GUI Automation", "Accessibility"]}
                colorAccent="text-purple-500"
                index={3}
              />
            </div>
          </div>

          {/* Mobile view - Timeline */}
          <div className="md:hidden mt-8">
            <Timeline>
              <TimelineItem index={0}>
                <div className="experience-card border-l-4 border-l-primary">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 text-primary font-medium p-2 rounded-lg text-center">
                      <div className="text-xl font-bold">2024</div>
                      <div className="text-xs">Jun-Mar</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-bold">Gragfa: Graph-Generating JavaScript Library</h3>
                      <p className="text-sm text-muted-foreground">Freelance JavaScript Developer • Remote</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    Developed a custom JavaScript library for optimizing DOM manipulation and generating interactive graphs.
                  </p>

                  <div className="space-y-2 mb-4 text-sm">
                    {["Built a custom JS library to optimize DOM manipulation, cutting render time by 30% and boosting performance",
                      "Architected a modular design, allowing for easy customization and extension of library features",
                      "Implemented YAML input support, enabling the generation of dynamic, interactive graphs and data visualizations",
                      "Designed the library for easy use with just VS Code Live Server, reducing setup complexity for new users"].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="text-primary mt-1 text-sm">—</div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {["JavaScript", "DOM", "YAML", "Data Visualization"].map((skill, idx) => (
                      <span key={idx} className="technology-badge text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </TimelineItem>

              <TimelineItem index={1}>
                <div className="experience-card border-l-4 border-l-emerald-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 text-emerald-500 font-medium p-2 rounded-lg text-center">
                      <div className="text-xl font-bold">2025</div>
                      <div className="text-xs">Jan-Mar</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-bold">Attainz: Email Validation Website</h3>
                      <p className="text-sm text-muted-foreground">Freelance Full Stack Web Developer • Remote</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    Built a comprehensive email validation solution with advanced features and REST API.
                  </p>

                  <div className="space-y-2 mb-4 text-sm">
                    {["Built Attainz, an email validator using Next.js, TypeScript, CSS, and RegEx with strong functionality",
                      "Implemented advanced email validation for single and bulk (CSV) inputs with file processing support",
                      "Designed and implemented a REST API to provide sample downloads, enhancing user experience and functionality",
                      "Ensured client satisfaction by delivering projects early with clear communication and technical support"].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="text-primary mt-1 text-sm">—</div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {["Next.js", "TypeScript", "CSS", "RegEx", "REST API"].map((skill, idx) => (
                      <span key={idx} className="technology-badge text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </TimelineItem>

              <TimelineItem index={2}>
                <div className="experience-card border-l-4 border-l-purple-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 text-purple-500 font-medium p-2 rounded-lg text-center">
                      <div className="text-xl font-bold">2025</div>
                      <div className="text-xs">Mar</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-bold">Manipal Hackathon Finalist - 7th Place</h3>
                      <p className="text-sm text-muted-foreground">Manipal University • Voice Vista</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    Created a voice-controlled browser assistant enabling hands-free web navigation with advanced accessibility features.
                  </p>

                  <div className="space-y-2 mb-4 text-sm">
                    {["Achieved 7th place among 250 teams at Manipal Hackathon by developing a voice-controlled browser assistant",
                      "Integrated speech recognition, natural language processing, & GUI automation to enhance accessibility & user experience",
                      "Designed intuitive voice commands for common browsing tasks to improve usability",
                      "Implemented real-time feedback system to confirm user commands and actions"].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="text-primary mt-1 text-sm">—</div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {["Python", "NLP", "Speech Recognition", "GUI Automation", "Accessibility"].map((skill, idx) => (
                      <span key={idx} className="technology-badge text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </TimelineItem>

              <TimelineItem index={3}>
                <div className="experience-card border-l-4 border-l-teal-500">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 text-teal-500 font-medium p-2 rounded-lg text-center">
                      <div className="text-xl font-bold">2024</div>
                      <div className="text-xs">Nov</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-bold">Harvard CS50: Introduction to Programming</h3>
                      <p className="text-sm text-muted-foreground">Harvard University • Certificate</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    Completed Harvard's Python programming course covering fundamental programming concepts, PS & OOP.
                  </p>

                  <div className="space-y-2 mb-4 text-sm">
                    {["Completed Harvard's Python programming course covering fundamental programming concepts, PS & OOP",
                      "Developed strong knowledge in Python through practical programming assignments and a final project",
                      "Created YouTube link validator and IPv4 address validator using regex for practical application",
                      "Developed a CLI math game replicating a professor game where solving 10 consecutive math problems is required to win among many other mini-projects"].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="text-primary mt-1 text-sm">—</div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {["Python", "RegEx", "PyTest", "Problem Solving", "OOP"].map((skill, idx) => (
                      <span key={idx} className="technology-badge text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </TimelineItem>
            </Timeline>
          </div>
        </ScrollReveal>
      </section>

      {/* Selected Works Section */}
      <section className="py-20 border-t border-border" id="works">
        <div className="container">
          <h2 className="section-title">SELECTED WORKS</h2>

          {/* Project 1: Google Maps Scraper */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary font-bold text-7xl opacity-20">01</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-sm">
                      <span>DATA EXTRACTION</span>
                      <span className="inline-block h-1 w-1 bg-primary rounded-full" />
                      <span>2024</span>
                    </div>
                    <h3 className="text-3xl font-bold">Google Maps Scraper</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Python Selenium scraper to collect business data from Google Maps search results with automated scrolling and JSON metadata logging.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">Selenium</span>
                  <span className="project-tag">CSV</span>
                  <span className="project-tag">Web Scraping</span>
                </div>
                <a href="https://github.com/Devansh-Dave7/Google-Maps-Scrapper-" target = "_blank" className="cursor-pointer">
                  <Button className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                    View Project <span className="ml-2">→</span>
                  </Button>
                </a>
              </div>
              <div className="aspect-[16/9] bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=2669&auto=format&fit=crop"
                  alt="Google Maps Scraper project thumbnail"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Project 2: Resume Roaster */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-[16/9] bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop"
                    alt="Resume Roaster project thumbnail"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary font-bold text-7xl opacity-20">02</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-sm">
                      <span>AI APPLICATION</span>
                      <span className="inline-block h-1 w-1 bg-primary rounded-full" />
                      <span>2024</span>
                    </div>
                    <h3 className="text-3xl font-bold">Resume Roaster</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  AI-powered resume critique app using Flask, optimizing API efficiency to reduce token usage from 900 to 70 per resume with real-time feedback.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">Flask</span>
                  <span className="project-tag">JavaScript</span>
                  <span className="project-tag">CSS</span>
                  <span className="project-tag">HTML</span>
                </div>
                <a href="#" className="cursor-pointer">
                  <Button className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                    View Project <span className="ml-2">→</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Social Media Emotion Detection */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary font-bold text-7xl opacity-20">03</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-sm">
                      <span>AI & MACHINE LEARNING</span>
                      <span className="inline-block h-1 w-1 bg-primary rounded-full" />
                      <span>2024</span>
                    </div>
                    <h3 className="text-3xl font-bold">Social Media Emotion Detection</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Tool to scrape Instagram profiles with Python and Selenium, integrated with Google Cloud Vision API for emotion detection and safe-search filtering.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="project-tag">Python</span>
                  <span className="project-tag">Selenium</span>
                  <span className="project-tag">Google Cloud</span>
                  <span className="project-tag">Vision API</span>
                  <span className="project-tag">JSON</span>
                </div>
                <a href="https://github.com/Devansh-Dave7/instagram-scrapper-with-ai-photo-analysis" target = "_blank" className="cursor-pointer">
                  <Button className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                    View Project <span className="ml-2">→</span>
                  </Button>
                </a>
              </div>
              <div className="aspect-[16/9] bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=2670&auto=format&fit=crop"
                  alt="Social Media Emotion Detection project thumbnail"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30" id="contact">
        <div className="container">
          <h2 className="section-title text-center">GET IN TOUCH</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-6">Let's Create Something Together</h3>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Have a project in mind? Let's bring your ideas to life. I'm currently available for freelance projects and collaborations.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8 centering flex flex-col items-center justify-center">
              <div className="bg-background p-6 rounded-lg border border-border w-full">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-md shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-1">Mail</h4>
                    <p className="font-medium">Devansh Dave</p>
                    <p className="text-sm text-muted-foreground mt-2">devanshdave2004@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/devansh-dave-31aa4b289" className="bg-secondary hover:bg-secondary/80 p-3 rounded-md transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" strokeWidth="0">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/Devansh-Dave7" className="bg-secondary hover:bg-secondary/80 p-3 rounded-md transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                  </a>
                  <a href="https://x.com/Devansh_Dave7" className="bg-secondary hover:bg-secondary/80 p-3 rounded-md transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </a>
                  <a href="mailto:devanshdave2004@gmail.com" className="bg-secondary hover:bg-secondary/80 p-3 rounded-md transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </a>
                  <a href="sms:+91 9929280449" className="bg-secondary hover:bg-secondary/80 p-3 rounded-md transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </a>


                </div>
              </div>
            </div>
            {/* <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full p-3 rounded-md border border-border bg-background"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-3 rounded-md border border-border bg-background"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full p-3 rounded-md border border-border bg-background resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message →
                </Button>
              </form>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
