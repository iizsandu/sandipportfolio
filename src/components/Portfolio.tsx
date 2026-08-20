import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import projectBankMarketing from "@/assets/project-bank-marketing.png";
import projectCodingAgent from "@/assets/project-coding-agent.png";
import projectPlant from "@/assets/project-plant.jpg";
import projectRag from "@/assets/project-rag.jpg";
import projectRoutes from "@/assets/project-routes.jpg";
import projectSentiment from "@/assets/project-sentiment.jpg";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "agent" | "ai" | "nlp" | "visualization";
  github: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "AI Coding Agent",
    description: "A command-line agent that turns plain-English requests into safe coding actions. It can inspect files, make changes, and run Python code inside a scoped workspace.",
    image: projectCodingAgent,
    tags: ["Python", "LLM", "Tool Calling", "Agentic AI"],
    category: "agent",
    github: "https://github.com/iizsandu/Coding_Agent",
  },
  {
    title: "Bank Marketing Prediction",
    description: "An XGBoost model that identifies likely term-deposit subscribers while accounting for a heavily imbalanced marketing dataset. The tuned model achieved a PR-AUC three times higher than the no-skill baseline.",
    image: projectBankMarketing,
    tags: ["Python", "XGBoost", "scikit-learn", "Classification"],
    category: "ai",
    github: "https://github.com/iizsandu/bank-marketing-xgboost",
  },
  {
    title: "AI-Powered Safe Route Recommender",
    description: "A crime-aware route recommender deployed on Azure and Vercel. It combines a LightGBM model, data-quality checks, experiment tracking, and automated retraining to recommend safer journeys.",
    image: projectRoutes,
    tags: ["Azure", "MLflow", "LightGBM", "FastAPI", "Docker", "CI/CD"],
    category: "ai",
    github: "https://github.com/iizsandu/route-recommender",
    liveUrl: "https://route-recommender-web.vercel.app/",
  },
  {
    title: "Urban Greenery Optimization",
    description: "A satellite-image analysis project that maps urban green spaces and heat-island areas to support data-informed planning.",
    image: projectPlant,
    tags: ["Computer Vision", "CNN", "Deep Learning"],
    category: "ai",
    github: "https://github.com/iizsandu/UrbanGreeneryOptimization",
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "An analysis of public sentiment around the Russia–Ukraine conflict, using social-media data to track opinion and emotional trends.",
    image: projectSentiment,
    tags: ["NLP", "Sentiment Analysis", "Data Visualisation"],
    category: "nlp",
    github: "https://github.com/iizsandu/Twittter_Sentiment_Analysis",
  },
  {
    title: "Credit Card Transaction Dashboard",
    description: "A Power BI dashboard for exploring credit-card transactions, revenue patterns, and customer segments across US states.",
    image: "/placeholder.svg",
    tags: ["Power BI", "Excel", "Data Visualisation"],
    category: "visualization",
    github: "https://github.com/iizsandu",
  },
  {
    title: "RAG PDF — Ask Your Documents",
    description: "A retrieval-augmented AI tool that lets people ask natural-language questions about PDF documents using vector search and an LLM.",
    image: projectRag,
    tags: ["RAG", "AI", "NLP", "Vector Search"],
    category: "ai",
    github: "https://github.com/iizsandu/RAG-PDF",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "agent", label: "AI Agents" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "nlp", label: "Natural Language" },
  { id: "visualization", label: "Data Visualisation" },
] as const;

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <main className="w-full px-5 pb-20 pt-28 md:pt-36">
      <h1 className="mb-10 text-4xl font-semibold tracking-tight md:text-5xl">Projects</h1>

      <div className="grid gap-8 lg:grid-cols-[12rem_minmax(0,1fr)]">
        <aside className="h-fit border border-orange-100 bg-orange-50/70 p-4 lg:border-y-0 lg:border-l-0 lg:border-r lg:border-border lg:bg-transparent lg:p-0 lg:pr-6">
          <p className="mb-3 text-sm text-muted-foreground">Filter by domain</p>
          <div className="flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                onClick={() => { setFilter(category.id); setSelectedProject(null); }}
                className={`rounded-none transition-colors lg:justify-start ${filter === category.id ? "border-orange-200 bg-orange-100 text-foreground hover:bg-orange-100" : "bg-background hover:border-orange-200 hover:bg-orange-50"}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </aside>

        <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredProjects.map((project) => (
              <Card
                key={project.title}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-none border border-border bg-white shadow-none transition-colors hover:border-foreground"
              >
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-3 text-xl font-semibold">{project.title}</h2>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mb-4 mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <Badge key={tag} variant="outline" className="rounded-none text-xs font-normal">{tag}</Badge>)}
                  </div>
                  <div className="flex gap-2 border-t border-border pt-2">
                    <Button size="sm" variant="outline" className="flex-1 rounded-none" onClick={(event) => { event.stopPropagation(); window.open(project.github, "_blank"); }}>
                      <Code className="mr-1.5 h-3.5 w-3.5" /> GitHub
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1 rounded-none bg-foreground text-background hover:bg-foreground/90" onClick={(event) => { event.stopPropagation(); window.open(project.liveUrl, "_blank"); }}>
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Open app
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-h-[80vh] w-[90vw] max-w-none overflow-y-auto md:w-[60vw]">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.tags.join(" · ")}</DialogDescription>
            </DialogHeader>
            <img src={selectedProject.image} alt={selectedProject.title} className="max-h-80 w-full object-cover" />
            <p className="text-sm leading-relaxed text-muted-foreground">{selectedProject.description}</p>
            <div className="flex gap-2">
              <Button asChild variant="outline" className="rounded-none"><a href={selectedProject.github} target="_blank" rel="noopener noreferrer"><Code className="mr-1.5 h-3.5 w-3.5" />GitHub</a></Button>
              {selectedProject.liveUrl && <Button asChild className="rounded-none bg-foreground text-background hover:bg-foreground/90"><a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-1.5 h-3.5 w-3.5" />Open app</a></Button>}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
};

export default Portfolio;
