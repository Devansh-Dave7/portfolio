import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WorkPage() {
  return (
    <div className="py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-12">Selected Works</h1>

        <div className="space-y-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary font-bold text-7xl opacity-20">01</span>
                <div>
                  <div className="flex items-center gap-2 mb-1 text-sm">
                    <span>INTERACTIVE DEVELOPMENT</span>
                    <span className="inline-block h-1 w-1 bg-primary rounded-full" />
                    <span>2024</span>
                  </div>
                  <h3 className="text-3xl font-bold">Modern E-commerce</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Full-featured e-commerce platform with real-time inventory, AI product recommendations, and seamless checkout experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Stripe</span>
                <span className="project-tag">MongoDB</span>
              </div>
              <Link href="/work/e-commerce">
                <Button className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                  View Project <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
            <div className="aspect-[16/9] bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1613977256900-db27c774062e?q=80&w=2670&auto=format&fit=crop"
                alt="E-commerce project thumbnail"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary font-bold text-7xl opacity-20">02</span>
                <div>
                  <div className="flex items-center gap-2 mb-1 text-sm">
                    <span>UI/UX DESIGN</span>
                    <span className="inline-block h-1 w-1 bg-primary rounded-full" />
                    <span>2023</span>
                  </div>
                  <h3 className="text-3xl font-bold">Portfolio Website</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Modern portfolio website with dark mode support, responsive design, and smooth animations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="project-tag">Next.js</span>
                <span className="project-tag">TailwindCSS</span>
                <span className="project-tag">Framer Motion</span>
              </div>
              <Link href="/work/portfolio">
                <Button className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                  View Project <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
            <div className="aspect-[16/9] bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
                alt="Portfolio project thumbnail"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
