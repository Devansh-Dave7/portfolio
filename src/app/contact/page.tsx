import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Let's Create Something Together</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Have a project in mind? Let's bring your ideas to life. I'm currently available for freelance projects and collaborations.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-md shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-1">Discord</h4>
                    <p className="font-medium">CobraAitch</p>
                    <p className="text-sm text-muted-foreground mt-2">Response time: Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex items-center gap-4">
                  <a href="https://github.com" className="bg-secondary hover:bg-secondary/80 p-3 rounded-md transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
