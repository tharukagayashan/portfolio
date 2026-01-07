import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ft.gayashan@gmail.com",
    href: "mailto:ft.gayashan@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 714550733",
    href: "tel:+94714550733",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/tharukagayashan", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/tharuka-gayashan", label: "LinkedIn" },
];

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:ft.gayashan@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.open(mailtoLink);
    
    toast({
      title: "Opening email client...",
      description: "Your message draft has been prepared.",
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide animate-fade-up">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold animate-fade-up stagger-1">
            Contact Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">
                Let's work together
              </h3>
              <p className="text-muted-foreground text-lg">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you'd like to connect!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card variant="gradient">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
