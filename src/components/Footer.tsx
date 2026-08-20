import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto flex justify-center px-4">
      <div className="flex items-center gap-7">
        <a href="https://github.com/iizsandu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
          <Github className="h-8 w-8" />
        </a>
        <a href="https://linkedin.com/in/sandip8017shaw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
          <Linkedin className="h-8 w-8" />
        </a>
        <a href="mailto:sandip8017shaw@gmail.com" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email Sandip Shaw">
          <Mail className="h-8 w-8" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
