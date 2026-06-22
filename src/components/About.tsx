import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, BarChart, Map, Cpu, Cloud } from "lucide-react";

const About = () => {
  const skillGroups = [
    {
      label: "Languages & Databases",
      icon: <Code2 className="h-4 w-4" />,
      skills: ["Python", "SQL", "MySQL", "MongoDB", "Bash"]
    },
    {
      label: "ML / AI",
      icon: <Brain className="h-4 w-4" />,
      skills: ["scikit-learn", "PyTorch", "TensorFlow", "Keras", "LightGBM", "NLP", "RAG", "LangChain"]
    },
    {
      label: "Computer Vision",
      icon: <Cpu className="h-4 w-4" />,
      skills: ["U-Net", "CNN", "Semantic Segmentation", "OpenCV"]
    },
    {
      label: "Analytics & Visualization",
      icon: <BarChart className="h-4 w-4" />,
      skills: ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib", "Excel"]
    },
    {
      label: "MLOps & Cloud",
      icon: <Cloud className="h-4 w-4" />,
      skills: ["MLflow", "Azure", "Docker", "GitHub Actions", "FastAPI", "Streamlit", "CI/CD"]
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Data Scientist and ML Engineer with 2+ years of experience delivering production-grade AI systems, analytical pipelines, and data-driven solutions. I specialise in machine learning, predictive analytics, and intelligent automation — with a track record of end-to-end project ownership from data ingestion through model deployment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently completing an MSc in Data Science (class topper, graduating August 2026). Proven ability to surface actionable business intelligence, reduce manual effort, and communicate findings to management stakeholders.
            </p>
          </Card>

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
