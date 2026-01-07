import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Laptop, Settings } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "REST API Development",
    description: "Expert REST API development to create scalable, secure, and high-performance APIs. Ensuring seamless integration and efficient communication between systems.",
  },
  {
    icon: Laptop,
    title: "Fullstack Development",
    description: "Comprehensive full-stack solutions handling both frontend and backend needs to build robust, scalable web applications with intuitive user interfaces.",
  },
  {
    icon: Settings,
    title: "Microservices Architecture",
    description: "Designing and implementing microservices-based systems using Spring Boot, Kafka, Redis, and cloud technologies for enterprise-level scalability.",
  },
  {
    icon: Users,
    title: "IT Consultancy",
    description: "Strategic IT consultancy to help businesses optimize their technology infrastructure, including system integration and technology adoption strategies.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide animate-fade-up">What I Offer</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold animate-fade-up stagger-1">
            My Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              variant="gradient"
              className="group hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
