import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const degrees = [
    {
      degree: "MSc Data Science & Spatial Analytics",
      institution: "Symbiosis Institute of Geoinformatics",
      period: "2024 – 2026",
      location: "Pune",
      badges: [
        { label: "Class Topper", className: "bg-primary/10 text-primary border-0" },
        { label: "CGPA 8.82", className: "" },
      ],
    },
    {
      degree: "BSc Data Science",
      institution: "Techno India University",
      period: "2019 – 2022",
      location: "Kolkata",
      badges: [
        { label: "CGPA 8.41", className: "" },
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Education</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Academic background and certifications
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {degrees.map((edu, index) => (
              <Card key={index} className="p-6 shadow-medium hover:shadow-large transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm mt-0.5">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period} · {edu.location}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {edu.badges.map((badge, idx) => (
                        <Badge key={idx} variant="secondary" className={`text-xs ${badge.className}`}>
                          {badge.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-center mb-6">Certifications</h3>
          <Card className="p-6 shadow-medium">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Full Stack Data Science Pro</h4>
                <p className="text-muted-foreground text-sm">PW Skills</p>
                <p className="text-sm text-muted-foreground mt-1">
                  End-to-end data science curriculum covering ML, deep learning, NLP, and production deployment.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
