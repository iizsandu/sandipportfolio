import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectRoutes from "@/assets/project-routes.jpg";
import projectPlant from "@/assets/project-plant.jpg";
import projectSentiment from "@/assets/project-sentiment.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "AI-powered Alternate Route Recommendation",
      description:
        "Intelligent route planning system that uses NLP and GIS to recommend alternate routes avoiding high-crime zones. Combines real-time data analysis with geospatial intelligence for safer navigation.",
      image: projectRoutes,
      tags: ["AI", "NLP", "GIS"],
      category: "ai"
    },
    {
      title: "Plant Disease Detection",
      description:
        "Convolutional Neural Network (CNN) based system for automated plant disease detection from images. Helps farmers identify diseases early with high accuracy, enabling timely intervention.",
      image: projectPlant,
      tags: ["Computer Vision", "CNN", "Deep Learning"],
      category: "ai"
    },
    {
      title: "Twitter Sentiment Analysis",
      description:
        "Real-time sentiment analysis of tweets related to the Russia-Ukraine conflict. Employs NLP techniques to gauge public opinion, track sentiment trends, and visualize emotional responses.",
      image: projectSentiment,
      tags: ["NLP", "Sentiment Analysis", "Data Visualization"],
      category: "nlp"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI" },
    { id: "nlp", label: "NLP" },
    { id: "visualization", label: "Data Visualization" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Portfolio</h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Explore my recent projects and achievements
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "default" : "outline"}
                onClick={() => setFilter(cat.id)}
                className="transition-all"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
