import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, GraduationCap, Briefcase, Users, CheckCircle, Youtube } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "3+", label: "Years Experience" },
  { icon: Users, value: "8+", label: "Happy Clients" },
  { icon: CheckCircle, value: "25+", label: "Projects Completed" },
];

const personalInfo = [
  { icon: GraduationCap, label: "Degree", value: "BSc (Hons) IT - Software Engineering" },
  { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka" },
  { icon: Mail, label: "Email", value: "ft.gayashan@gmail.com" },
  { icon: Phone, label: "Phone", value: "+94 714550733" },
  { icon: Youtube, label: "YouTube", value: "@encode_lab" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide animate-fade-up">Get To Know Me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold animate-fade-up stagger-1">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* About Content */}
          <div className="animate-fade-up stagger-2">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-primary rounded-full" />
              Who I Am
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              A driven and innovative Software Engineer with over 3 years of experience and expertise 
              in Java and Full Stack Development. I'm passionate about leveraging cutting-edge technologies 
              to deliver impactful solutions in dynamic environments.
            </p>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              I specialize in Spring Boot, microservices architecture, and React.js, creating robust, 
              scalable solutions that align with both technical and business goals. I thrive in collaborative 
              environments, solving complex problems with precision and innovation.
            </p>

            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <info.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6 animate-fade-up stagger-3">
            {stats.map((stat, index) => (
              <Card key={stat.label} variant="gradient" className="group hover:scale-[1.02] transition-transform duration-300">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold gradient-text">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Freelance Available Badge */}
            <div className="flex items-center gap-3 p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="font-medium text-primary">Available for Freelance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
