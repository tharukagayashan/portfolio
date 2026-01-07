import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const technicalSkills = [
  "Java", "Spring Boot", "React.js", "Node.js", "JavaScript", "TypeScript",
  "Python", "HTML5", "CSS", "REST API", "Microservices", "Kafka", "Redis",
  "Docker", "Kubernetes", "PostgreSQL", "MySQL", "Oracle DB", "MongoDB",
  "Firebase", "Flutter", "React Native", "Machine Learning", "AWS", "Google Cloud",
];

const tools = [
  "IntelliJ IDEA", "VS Code", "Eclipse", "Android Studio", "Postman",
  "GitHub", "GitLab", "CI/CD", "Docker", "Kubernetes", "Grafana", "Prometheus",
  "Keycloak", "Swagger", "Eureka", "Zipkin", "ClickUp",
];

const softSkills = [
  "Project Management", "Team Leadership", "Communication", 
  "Problem Solving", "Time Management", "Team Collaboration",
];

const skillCategories = [
  { name: "Backend", skills: ["Java", "Spring Boot", "Node.js", "Python", "REST API", "Microservices"], level: 95 },
  { name: "Frontend", skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS"], level: 85 },
  { name: "Database", skills: ["PostgreSQL", "MySQL", "Oracle DB", "MongoDB", "Redis"], level: 90 },
  { name: "DevOps", skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Google Cloud"], level: 80 },
  { name: "Mobile", skills: ["React Native", "Flutter", "Android"], level: 75 },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide animate-fade-up">What I Know</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold animate-fade-up stagger-1">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-primary rounded-full" />
              Expertise Level
            </h3>
            {skillCategories.map((category) => (
              <div key={category.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{category.name}</span>
                  <span className="text-primary font-semibold">{category.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${category.level}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-xs text-muted-foreground">
                      {skill}
                      {category.skills.indexOf(skill) < category.skills.length - 1 && " •"}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill Tags */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                <span className="w-12 h-1 bg-primary rounded-full" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <Badge key={skill} variant="skill" className="text-sm py-1.5 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="tech" className="text-sm py-1.5 px-3">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1.5 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
