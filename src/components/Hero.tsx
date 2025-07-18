import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

interface HeroProps {
  language: 'en' | 'de';
}

export const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      name: "Gaurav Kulkarni",
      title: "Software Engineer",
      bio: "A collaborative Software Engineer with 3 years of experience applying strong problem-solving skills to full-stack web development. I enjoy working in agile teams to tackle challenges across the stack, from backend architecture to intuitive UIs, with a current focus on leveraging AI to create smarter user experiences.",
      downloadResume: "Download Resume",
      contact: "Get In Touch"
    },
    de: {
      name: "Gaurav Kulkarni",
      title: "Software-Ingenieur",
      bio: "Ein kollaborativer Software-Ingenieur mit 3 Jahren Erfahrung in der Anwendung starker Problemlösungsfähigkeiten in der Full-Stack-Webentwicklung. Ich arbeite gerne in agilen Teams, um Herausforderungen im gesamten Stack zu bewältigen, von der Backend-Architektur bis zu intuitiven Benutzeroberflächen, mit aktuellem Fokus auf die Nutzung von KI zur Schaffung intelligenterer Benutzererfahrungen.",
      downloadResume: "Lebenslauf Herunterladen",
      contact: "Kontakt Aufnehmen"
    }
  };

  const handleDownloadResume = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be the actual resume file
    link.download = 'Gaurav_Kulkarni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            {content[language].name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-slide-up">
            {content[language].title}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            {content[language].bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              onClick={handleDownloadResume}
              size="lg" 
              className="gap-2 px-8 py-3 glow-effect hover:animate-glow-pulse smooth-transition"
            >
              <Download className="h-5 w-5" />
              {content[language].downloadResume}
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="p-3 smooth-transition hover:glow-effect"
                asChild
              >
                <a href="mailto:kulkarnigaurav38@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="p-3 smooth-transition hover:glow-effect"
                asChild
              >
                <a href="https://github.com/kulkarnigaurav38" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="p-3 smooth-transition hover:glow-effect"
                asChild
              >
                <a href="https://linkedin.com/in/gauravlin/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};