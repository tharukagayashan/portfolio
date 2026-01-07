import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, ChevronRight } from "lucide-react";

const experience = [
  {
    title: "Senior/Full Stack Software Engineer",
    company: "OLAK Technologies (Pvt) Ltd",
    period: "2024 – Present",
    description: "Leading microservices architecture for enterprise solutions.",
    highlights: [
      "Led architecture design for microservices with 10+ services (HRMS, Loans, User Management)",
      "Employed Spring Boot, Kafka, Redis, Zipkin, Grafana, Prometheus, Keycloak",
      "Developed Quick Insurance System for HNB Insurance",
      "Built Workflow Management System for DSI Samson Group",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "OLAK Technologies (Pvt) Ltd",
    period: "2023 – 2024",
    description: "Building enterprise-level backend solutions.",
    highlights: [
      "Developed Member's Account Management System for Education Co-operative Society",
      "Built Employee Fund and Company Management System for EPF Department",
      "Deployed systems on Oracle Cloud with PostgreSQL",
    ],
  },
  {
    title: "Trainee Software Engineer",
    company: "OLAK Technologies (Pvt) Ltd",
    period: "2022 – 2023",
    description: "Backend development for insurance systems.",
    highlights: [
      "Contributed to enterprise-level insurance system development",
      "Worked on General Ledger, Claims, Fixed Assets, and Inventory modules",
      "Managed data persistence with Oracle databases",
    ],
  },
];

const education = [
  {
    title: "BSc (Hons) Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2020 – 2024",
    description: "Specializing in Software Engineering",
    highlights: [
      "Graduated with honors specializing in Software Engineering",
      "Completed research on Machine Learning for Healthcare",
      "Published research in IEEE and IJEMR journals",
    ],
  },
  {
    title: "Diploma in Information Technology",
    institution: "Open University",
    period: "2018 – 2019",
    description: "Foundation in IT principles",
    highlights: [
      "Strong foundation in programming fundamentals",
      "Introduction to web development technologies",
    ],
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const data = activeTab === "experience" ? experience : education;

  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide animate-fade-up">My Journey</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold animate-fade-up stagger-1">
            Experience & Education
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 animate-fade-up stagger-2">
          <div className="inline-flex rounded-xl border-2 border-primary/30 p-1.5 bg-background">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase size={20} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap size={20} />
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {data.map((item, index) => (
              <div
                key={item.title}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/25 ${
                    index % 2 === 0 ? "left-0 md:right-0 md:left-auto md:translate-x-1/2" : "left-0 md:-translate-x-1/2"
                  } -translate-x-1/2 md:translate-x-0`}
                />

                <Card variant="gradient" className="ml-6 md:ml-0 hover:scale-[1.02] transition-transform duration-300">
                  <CardContent className="p-6">
                    <Badge variant="skill" className="mb-3">{item.period}</Badge>
                    <h3 className="text-xl font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-3">
                      {activeTab === "experience" ? item.company : (item as typeof education[0]).institution}
                    </p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
