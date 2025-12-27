import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold gradient-text">
              Tharuka Gayashan
            </a>
            <p className="text-muted-foreground mt-2">
              Senior Software Engineer | Java & Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tharukagayashan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/tharuka-gayashan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ft.gayashan@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Tharuka Gayashan Fernando. Built with <Heart size={14} className="text-primary" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
}
