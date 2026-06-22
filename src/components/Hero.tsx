import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileText, Download, Eye, X } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Open to Data Scientist Roles
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                Hi, I'm <span className="text-primary">Sandip Shaw</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Data Scientist &nbsp;|&nbsp; ML · NLP · Computer Vision
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Data Scientist & ML Engineer with 2+ years delivering production-grade AI — deployed RAG pipelines, automated data workflows, and crime-aware route planners on Azure. MSc Data Science, Class Topper (CGPA 8.82), graduating August 2026.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="group"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("experience")}
                  className="group"
                >
                  View Experience
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsResumeOpen(true)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/iizsandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/sandip8017shaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://medium.com/@sandip8017shaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FileText size={24} />
                </a>
                <a
                  href="mailto:sandip8017shaw@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-float"></div>
                <img
                  src={profileImage}
                  alt="Sandip Shaw"
                  className="relative rounded-full w-80 h-80 object-cover shadow-large border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {isResumeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="relative bg-background rounded-xl shadow-2xl w-full max-w-4xl h-[90vh] mx-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b shrink-0">
              <h2 className="text-base font-semibold">Resume — Sandip Shaw</h2>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-1.5 h-3.5 w-3.5" />
                    Download
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsResumeOpen(false)}
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <iframe
              src="/resume.pdf"
              className="flex-1 w-full rounded-b-xl"
              title="Sandip Shaw Resume"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
