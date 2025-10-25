import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code2, Brain, BarChart, Map } from "lucide-react";

const About = () => {
  const skills = [
    { icon: <Code2 />, name: "Python" },
    { icon: <Brain />, name: "Machine Learning" },
    { icon: <Brain />, name: "NLP" },
    { icon: <Code2 />, name: "Computer Vision" },
    { icon: <BarChart />, name: "Data Visualization" },
    { icon: <Map />, name: "GIS" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Get to know more about my background and expertise
          </p>

          <Card className="p-8 mb-12 shadow-medium">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a dedicated Data Science professional with a strong foundation in statistical analysis,
              machine learning, and artificial intelligence. My journey in data science has been driven by
              a passion for uncovering patterns in data and building solutions that make a real-world impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise spanning from traditional machine learning to cutting-edge deep learning
              applications, I specialize in creating end-to-end data solutions, from exploratory analysis
              to production-ready AI systems. I'm particularly interested in applying NLP and computer vision
              techniques to solve complex business challenges.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 shadow-medium hover:shadow-large transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">MSc Data Science</h4>
                  <p className="text-muted-foreground">Symbiosis Institute of Geoinformatics</p>
                  <p className="text-sm text-muted-foreground">2024 – 2026</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">BSc Data Science</h4>
                  <p className="text-muted-foreground">Techno India University</p>
                  <p className="text-sm text-muted-foreground">2019 – 2022</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-medium hover:shadow-large transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Junior Data Analyst</h4>
                  <p className="text-sm text-muted-foreground">Jun 2022 – Mar 2023</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Led data analysis projects and dashboard development hasofhojfojawohf0jpfw a 0wfh awojfjh f0af0aww jf0j0fjajdf0ahw0fjh
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Data Analyst Intern</h4>
                  <p className="text-sm text-muted-foreground">Aug 2021 – Feb 2022</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Contributed to data collection and visualization initiatives
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Core Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="p-4 flex items-center space-x-3 hover:shadow-medium transition-all hover:-translate-y-1"
                >
                  <div className="text-primary">{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
