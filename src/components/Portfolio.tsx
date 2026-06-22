import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code } from "lucide-react";
import projectRoutes from "@/assets/project-routes.jpg";
import projectPlant from "@/assets/project-plant.jpg";
import projectSentiment from "@/assets/project-sentiment.jpg";
import projectRag from "@/assets/project-rag.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "AI-Powered Safe Route Recommender",
      description:
        "Crime-aware route recommender deployed on Azure + Vercel with full CI/CD via GitHub Actions. LightGBM ensemble achieves 73% accuracy, gated by PR-AUC; MLflow tracks every experiment with a champion/challenger model gate and weekly automated retrain. Production pipeline uses Great Expectations (5 quality gates) to block bad data before it reaches the model.",
      image: projectRoutes,
      tags: ["Azure", "MLflow", "LightGBM", "FastAPI", "Docker", "CI/CD"],
      category: "ai",
      link: null,
      github: "https://github.com/iizsandu/route-recommender",
      liveUrl: "https://route-recommender-web.vercel.app/",
    },
    {
      title: "Urban Greenery Optimization",
      description:
        "U-Net semantic segmentation on Sentinel-2 satellite imagery to detect and map urban green spaces. Integrates NDVI, NDBI, and land surface temperature layers to identify heat-island zones and guide data-driven urban planning.",
      image: projectPlant,
      tags: ["Computer Vision", "CNN", "Deep Learning"],
      category: "ai",
      link: "https://github.com/iizsandu/UrbanGreeneryOptimization"
    },
    {
      title: "Twitter Sentiment Analysis",
      description:
        "Real-time sentiment analysis of tweets related to the Russia-Ukraine conflict. Employs NLP techniques to gauge public opinion, track sentiment trends, and visualize emotional responses.",
      image: projectSentiment,
      tags: ["NLP", "Sentiment Analysis", "Data Visualization"],
      category: "nlp",
      link: "https://github.com/iizsandu/Twittter_Sentiment_Analysis"
    },
    {
      title: "Credit Card Transaction Dashboard",
      description:
        "Analysed 656K credit card transactions across 4 card categories in Power BI. Identified that blue cardholders drove 83% of revenue (46M/55M) and Swipe transactions accounted for 64% of volume. Customer segmentation pinpointed the 40–50 age group and high-income professionals as top revenue drivers across NY, TX, and CA.",
      image: "/placeholder.svg",
      tags: ["Power BI", "Excel", "Data Visualization"],
      category: "visualization",
      link: "https://github.com/iizsandu"
    },
    {
      title: "RAG PDF — Ask Your Documents",
      description:
        "An end-to-end Retrieval-Augmented Generation pipeline that ingests PDF documents, chunks and embeds them using Jina AI, stores vectors in Qdrant, and answers natural language questions grounded in the document's content via an LLM. Built with FastAPI, Inngest for event-driven orchestration, and a Streamlit UI.",
      image: projectRag,
      tags: ["RAG", "AI", "NLP", "Vector Search"],
      category: "ai",
      link: "https://github.com/iizsandu/RAG-PDF"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI" },
    { id: "nlp", label: "NLP" },
    { id: "visualization", label: "Data Visualization" },
    { id: "Deep Learning", label: "Deep Learning" }
  ];

  const activeCategories = categories.filter(
    (cat) => cat.id === "all" || projects.some((p) => p.category === cat.id)
  );

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            End-to-end systems built from data ingestion to deployment
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {activeCategories.map((cat) => (
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
            {filteredProjects.map((project, index) => {
              const cardContent = (
                <Card className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2 group animate-fade-in h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {(project.github || project.liveUrl) && (
                      <div className="flex gap-2 pt-2 border-t border-border">
                        {project.github && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                            onClick={(e) => { e.preventDefault(); window.open(project.github, "_blank"); }}
                          >
                            <Code className="mr-1.5 h-3.5 w-3.5" />
                            GitHub
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            className="flex-1"
                            onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, "_blank"); }}
                          >
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            Open App
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              );

              return project.link ? (
                <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  {cardContent}
                </a>
              ) : (
                <div key={index}>{cardContent}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
