import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Code2, Brain, BarChart, Map, Database, Cpu } from "lucide-react";

const About = () => {
  const skillGroups = [
    {
      label: "Languages & Tools",
      icon: <Code2 className="h-4 w-4" />,
      skills: ["Python", "SQL", "Bash"]
    },
    {
      label: "ML / AI",
      icon: <Brain className="h-4 w-4" />,
      skills: ["scikit-learn", "PyTorch", "LLMs", "RAG", "NLP"]
    },
    {
      label: "Computer Vision",
      icon: <Cpu className="h-4 w-4" />,
      skills: ["U-Net", "CNN", "Semantic Segmentation", "OpenCV"]
    },
    {
      label: "Data & Visualization",
      icon: <BarChart className="h-4 w-4" />,
      skills: ["Pandas", "NumPy", "Tableau", "Matplotlib", "Recharts"]
    },
    {
      label: "Databases & APIs",
      icon: <Database className="h-4 w-4" />,
      skills: ["MongoDB", "Qdrant", "FastAPI", "Streamlit"]
    },
    {
      label: "GIS & Geospatial",
      icon: <Map className="h-4 w-4" />,
      skills: ["QGIS", "Sentinel-2", "NDVI/NDBI", "GeoPandas"]
    }
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
              Data Science postgraduate with hands-on experience in building end-to-end data and AI solutions across analytics, machine learning, and NLP. Skilled in transforming raw, unstructured data into actionable insights using Python, SQL, and visualization tools like Tableau.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Worked on real-world projects including an AI-powered Crime-Aware Route Recommendation System, integrating geospatial analysis, NLP pipelines, and predictive modeling to solve practical problems. Experienced in data cleaning, transformation, and building scalable data pipelines using modern tools and databases like MongoDB.
              Strong interest in developing production-oriented systems that combine data analysis with machine learning and LLMs to deliver intelligent, real-world applications. Continuously exploring advanced areas such as AI agents, multimodal systems, and applied machine learning.
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
                  <ul className="text-muted-foreground text-sm mt-1 space-y-1 list-disc list-inside">
                    <li>Built Tableau dashboards used by 3+ business teams for weekly reporting</li>
                    <li>Automated recurring reports with Python, cutting manual effort by ~40%</li>
                    <li>Cleaned and transformed datasets of 500K+ rows using Pandas and SQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Data Analyst Intern</h4>
                  <p className="text-sm text-muted-foreground">Aug 2021 – Feb 2022</p>
                  <ul className="text-muted-foreground text-sm mt-1 space-y-1 list-disc list-inside">
                    <li>Collected and cleaned 100K+ rows of survey and transactional data</li>
                    <li>Designed visualizations that supported product strategy decisions</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillGroups.map((group, index) => (
                <Card key={index} className="p-5 hover:shadow-medium transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-primary">{group.icon}</div>
                    <span className="font-semibold text-sm text-foreground">{group.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
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
