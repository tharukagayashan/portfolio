import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImage from "@/assets/profile.png";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up">
              <p className="text-primary font-medium mb-4 tracking-wide">Hello, I'm</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 animate-fade-up stagger-1">
              Tharuka Gayashan
              <span className="block gradient-text">Fernando</span>
            </h1>
            
            <div className="animate-fade-up stagger-2">
              <p className="text-xl sm:text-2xl text-muted-foreground mb-2 font-display">
                Senior Software Engineer
              </p>
              <p className="text-muted-foreground max-w-lg mb-8">
                Java & Full Stack Developer with 3+ years of experience building scalable, 
                high-performance enterprise solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up stagger-3">
              <Button variant="hero" size="xl" asChild>
                <a href="https://drive.google.com/file/d/1KE4bxUf2fszzVXvufubkiXSq5kbHpzTY/view" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2" size={20} />
                  Download CV
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">
                  <Mail className="mr-2" size={20} />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-up stagger-4">
              <a
                href="https://github.com/tharukagayashan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/tharuka-gayashan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:ft.gayashan@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up stagger-2">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-75" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-effect">
                <img
                  src={profileImage}
                  alt="Tharuka Gayashan Fernando - Senior Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-spin" style={{ animationDuration: "30s" }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
