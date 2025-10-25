import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              Hi, I'm <span className="text-primary">Sandip Shaw</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Upcomming Data Scientist | Experienced Analyst
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experienced Data Analyst with a strong foundation in data science principles and algorithms looking to transition into a Data Scientist role. I love playing with data to uncover insights and make data-driven decisions.
              Please explore my portfolio to see my projects and skills.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="group"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
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
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/sandip8017shaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
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
  );
};

export default Hero;
