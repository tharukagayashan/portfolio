import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Folder, ChevronRight } from "lucide-react";

const industrialProjects = [
  {
    title: "Microservice Architecture for FinCo Capital",
    description: "Led architecture design for 10+ microservices including HRMS, Loans, and User Management for a leading Sri Lankan Micro Finance company.",
    tech: ["Spring Boot", "Kafka", "Redis", "Keycloak", "Grafana", "Prometheus"],
  },
  {
    title: "Quick Vehicle Insurance - HNB Insurance",
    description: "Developed backend for Quick Insurance system with robust API design and PostgreSQL data management.",
    tech: ["Spring Boot", "Java", "PostgreSQL", "REST API"],
  },
  {
    title: "Workflow Management - DSI Samson Group",
    description: "Built a comprehensive system to manage product development timelines and project tasks.",
    tech: ["Spring Boot", "Java", "PostgreSQL", "React.js"],
  },
  {
    title: "Member's Account Management - EDCS",
    description: "Developed system for managing teacher details, loans, fixed assets, inventory, and general ledger modules.",
    tech: ["Spring Boot", "PostgreSQL", "Java"],
  },
  {
    title: "Employee Fund Management - EPF Department",
    description: "Built backend deployed on Oracle Cloud with comprehensive employee fund management features.",
    tech: ["Spring Boot", "Oracle Cloud", "PostgreSQL", "Java"],
  },
];

const personalProjects = [
  {
    title: "HRMS System",
    description: "Complete Human Resource Management System with payroll, user management, and customer registration.",
    tech: ["Spring Boot", "MySQL", "React.js"],
  },
  {
    title: "Parcel Delivery Management",
    description: "System for handling package cost calculation, delivery processing, and user management.",
    tech: ["Spring Boot", "PostgreSQL", "Java"],
  },
];

const academicProjects = [
  "Travel Agency and Tour Planning System",
  "Movie Booking System",
  "Project Management Tool",
  "Fuel Management Tool",
  "Event Management Tool",
  "Train Ticket Management System",
  "Healthcare System Management Tool",
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide animate-fade-up">What I've Built</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold animate-fade-up stagger-1">
            Featured Projects
          </h2>
        </div>

        {/* Industrial Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-primary rounded-full" />
            Industrial Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrialProjects.map((project, index) => (
              <Card
                key={project.title}
                variant="gradient"
                className="group hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Folder className="w-6 h-6 text-primary" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="tech" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-primary rounded-full" />
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {personalProjects.map((project) => (
              <Card
                key={project.title}
                variant="gradient"
                className="group hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Folder className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="tech" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Projects */}
        <div>
          <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-primary rounded-full" />
            Academic Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {academicProjects.map((project) => (
              <div
                key={project}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {project}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
