import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen } from "lucide-react";

const publications = [
  {
    title: "Machine Learning Based Smart Hela Wedakama Application",
    type: "Final Year Research Project",
    journal: "IEEE",
    description: "Machine learning application to guide patients and apprentice native physicians through a mobile application.",
    links: {
      paper: "https://ieeexplore.ieee.org/document/10465385",
      website: "https://ayusha-helawedakama.netlify.app/index.html",
    },
  },
  {
    title: "Monitoring Online Operating Fuel Management System",
    type: "Research Publication",
    journal: "IJEMR",
    description: "Research on implementing an efficient online fuel management and monitoring system.",
    links: {
      paper: "https://ijemr.vandanapublications.com/index.php/j/article/view/908",
    },
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide animate-fade-up">Research Work</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold animate-fade-up stagger-1">
            Publications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {publications.map((pub) => (
            <Card
              key={pub.title}
              variant="gradient"
              className="group hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="skill" className="mb-2">{pub.journal}</Badge>
                    <p className="text-sm text-muted-foreground">{pub.type}</p>
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {pub.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={pub.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={16} />
                    View Publication
                  </a>
                  {pub.links.website && (
                    <a
                      href={pub.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink size={16} />
                      Project Website
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
