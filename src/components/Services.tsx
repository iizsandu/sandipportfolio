import { Card } from "@/components/ui/card";
import { BarChart3, LayoutDashboard } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Data Analysis",
      description:
        "Transform raw data into meaningful insights through statistical analysis, exploratory data analysis, and predictive modeling. Expertise in identifying trends, patterns, and actionable recommendations.",
      features: [
        "Statistical Analysis",
        "Predictive Modeling",
        "Data Mining",
        "Business Intelligence"
      ]
    },
    {
      icon: <LayoutDashboard className="h-12 w-12" />,
      title: "Dashboard Building",
      description:
        "Create interactive, intuitive dashboards that bring data to life. Specialized in building real-time monitoring systems and comprehensive analytics platforms that empower decision-making.",
      features: [
        "Interactive Visualizations",
        "Real-time Monitoring",
        "Custom Reporting",
        "KPI Tracking"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Services</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Specialized solutions tailored to your data needs
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-large transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
