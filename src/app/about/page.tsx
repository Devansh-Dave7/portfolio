import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">About Me</h1>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Hi, I'm CobraAitch</h2>
              <p className="text-muted-foreground mb-6">
                As a dedicated developer based in the heart of Bavaria, I bring German precision and creative innovation to every project. I specialize in creating robust, scalable web applications that combine cutting-edge technology with intuitive user experiences.
              </p>
              <p className="text-muted-foreground">
                With a passion for both frontend and backend development, I enjoy crafting complete solutions from concept to deployment. My goal is to build digital experiences that not only meet technical requirements but also delight users with their elegance and efficiency.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">My Journey</h2>
              <div className="relative border-l border-border pl-8 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[33px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div className="mb-2">
                    <span className="text-primary font-bold">2023 - Present</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Junior Full Stack Developer</h3>
                  <p className="text-muted-foreground">
                    Currently working in the automotive industry, developing digital tools and applications that streamline operations and improve efficiency. Leading a small team of engineers and implementing AI-driven solutions.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[33px] top-0 h-6 w-6 rounded-full bg-primary/60 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div className="mb-2">
                    <span className="text-primary/60 font-bold">2017 - 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Student</h3>
                  <p className="text-muted-foreground">
                    Completed my school education with a strong focus on technical subjects. Participated in Harvard's CS50x online computer science program and developed a growing interest in cybersecurity, regularly participating in HackTheBox challenges.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[33px] top-0 h-6 w-6 rounded-full bg-primary/30 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div className="mb-2">
                    <span className="text-primary/30 font-bold">2013 - 2017</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Early Education</h3>
                  <p className="text-muted-foreground">
                    Started my educational journey with early exposure to technology. Discovered my passion for computers and began learning the basics of programming, which laid the foundation for my future technical education.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-secondary/30 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Frontend</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Backend</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Other</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Machine Learning</li>
                    <li>TensorFlow</li>
                    <li>Git</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/contact">
                <Button className="btn-primary">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
