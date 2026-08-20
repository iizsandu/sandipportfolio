import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Data Scientist Intern · AI Developer",
    company: "Cell Hub MS",
    period: "Jan 2026 – Present",
    location: "Pune",
    bullets: [
      "Built an event-driven data pipeline across nine business domains.",
      "Delivered a document-question-answering tool for production users.",
      "Worked in an agile team through planning, reviews, and documentation.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Innover Digital",
    period: "Jun 2022 – Apr 2023",
    location: "Kolkata",
    bullets: [
      "Analysed logistics data for US clients to improve route efficiency.",
      "Automated recurring reporting with Python and Excel.",
      "Built dashboards and presented findings to stakeholders.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Krop Gains",
    period: "Aug 2021 – Mar 2022",
    location: "Remote",
    bullets: [
      "Prepared large agricultural datasets from multiple web sources.",
      "Built a crop-disease image classifier.",
      "Created Tableau dashboards for performance analysis.",
    ],
  },
];

const cardThemes = [
  "bg-orange-50/30",
  "bg-teal-50/20",
  "bg-sky-50/20",
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  return (
    <main className="w-full px-5 pb-20 pt-28 md:pt-36">
      <h1 className="mb-12 text-4xl font-semibold tracking-tight md:text-5xl">Experience</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((experience, index) => (
          <article
            key={`${experience.company}-${experience.role}`}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedExperience(experience)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedExperience(experience);
              }
            }}
            className={`flex min-h-64 cursor-pointer flex-col border border-border p-6 transition-colors hover:border-foreground md:p-8 ${cardThemes[index]}`}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold">{experience.role}</h2>
              <span className="shrink-0 text-xs text-muted-foreground">{experience.period}</span>
            </div>
            <p className="mt-2 text-muted-foreground">{experience.company} · {experience.location}</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{experience.bullets[0]}</p>
            <p className="mt-4 text-sm text-muted-foreground">Click to view all highlights</p>
          </article>
        ))}
      </div>

      <Dialog open={selectedExperience !== null} onOpenChange={(open) => !open && setSelectedExperience(null)}>
        {selectedExperience && (
          <DialogContent className="w-[90vw] max-w-none md:w-[60vw]">
            <DialogHeader>
              <DialogTitle>{selectedExperience.role}</DialogTitle>
              <DialogDescription>{selectedExperience.company} · {selectedExperience.location} · {selectedExperience.period}</DialogDescription>
            </DialogHeader>
            <ul className="space-y-3 pt-2 text-sm leading-relaxed text-muted-foreground">
              {selectedExperience.bullets.map((bullet) => <li key={bullet} className="border-l-2 border-orange-200 pl-4">{bullet}</li>)}
            </ul>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
};

export default Experience;
