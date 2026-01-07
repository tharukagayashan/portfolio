import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Tharuka Gayashan Fernando | Senior Software Engineer - Java & Full Stack Developer</title>
        <meta 
          name="description" 
          content="Senior Software Engineer with 3+ years of experience in Java, Spring Boot, React.js, and microservices architecture. Available for freelance projects in Colombo, Sri Lanka." 
        />
        <meta name="keywords" content="Tharuka Gayashan, Software Engineer, Java Developer, Full Stack Developer, Spring Boot, React.js, Colombo, Sri Lanka" />
        <link rel="canonical" href="https://tharukagayashan.dev" />
        <meta property="og:title" content="Tharuka Gayashan Fernando | Senior Software Engineer" />
        <meta property="og:description" content="Senior Software Engineer specializing in Java, Spring Boot, and Full Stack Development." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ServicesSection />
          <ProjectsSection />
          <SkillsSection />
          <PublicationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
