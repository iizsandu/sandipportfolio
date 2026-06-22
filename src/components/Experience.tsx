import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Data Scientist Intern · AI Developer",
      company: "Cell Hub MS",
      period: "Jan 2026 – Present",
      location: "Pune",
      current: true,
      bullets: [
        "Engineered an event-driven data pipeline with 95% mapping accuracy, auto-parsing CSVs into a 50+ table MySQL schema across 9 business domains",
        "Delivered a RAG querying pipeline with 90%+ response relevance for 20–100 production users, from design to deployment in 1–2 months",
        "Collaborated in a 5+ member agile team across sprint planning, code reviews, and technical documentation",
      ],
    },
    {
      role: "Data Analyst",
      company: "Innover Digital",
      period: "Jun 2022 – Apr 2023",
      location: "Kolkata",
      current: false,
      bullets: [
        "Analysed truck logistics data for 10+ US clients, contributing to an estimated 10–20% improvement in route efficiency",
        "Automated data pipelines with Python and Advanced Excel, saving 12+ hours of recurring reporting effort per week",
        "Built 10+ Power BI and Tableau dashboards adopted by US clients; presented findings to management stakeholders",
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "Krop Gains",
      period: "Aug 2021 – Mar 2022",
      location: "Remote",
      current: false,
      bullets: [
        "Scraped and processed 100 GB of Indian agricultural data from multiple web sources into a uniform schema",
        "Built a CNN crop disease classifier trained on 6,000 augmented images across 12 categories, achieving 79% test accuracy",
        "Created 20+ Tableau dashboards; analysis revealed an average 3.65% performance spike across monitored parameters",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Experience</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            My professional journey and work history
          </p>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative md:pl-20">
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full border-2 border-primary bg-background hidden md:block" />
                  <Card className="p-6 shadow-medium hover:shadow-large transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                          {exp.current && (
                            <Badge className="text-xs bg-green-500/10 text-green-600 border-0">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-primary font-medium text-sm">{exp.company}</span>
                          <span className="text-muted-foreground text-sm">· {exp.location}</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
