import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";

interface ContactProps {
  language: 'en' | 'de';
}

export const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: "Let's Connect",
      subtitle: "I'm always open to discussing new opportunities and interesting projects.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      downloadResume: "Download Resume"
    },
    de: {
      title: "Lassen Sie uns in Verbindung treten",
      subtitle: "Ich bin immer offen für Diskussionen über neue Möglichkeiten und interessante Projekte.",
      email: "E-Mail",
      github: "GitHub",
      linkedin: "LinkedIn",
      downloadResume: "Lebenslauf Herunterladen"
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = "/E_Resume_Gaurav_Kulkarni.pdf";
    link.download = "E_Resume_Gaurav_Kulkarni.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {content[language].title}
          </h2>
          
          <p className="text-lg text-foreground/90 mb-12 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
          
          <Card className="card-gradient border-border card-shadow">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Button 
                  variant="outline" 
                  className="flex flex-col gap-3 h-auto py-6 smooth-transition hover:glow-effect"
                  asChild
                >
                  <a href="mailto:kulkarnigaurav38@gmail.com">
                    <Mail className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium">{content[language].email}</span>
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex flex-col gap-3 h-auto py-6 smooth-transition hover:glow-effect"
                  asChild
                >
                  <a href="https://github.com/kulkarnigaurav38" target="_blank" rel="noopener noreferrer">
                    <Github className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium">{content[language].github}</span>
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex flex-col gap-3 h-auto py-6 smooth-transition hover:glow-effect"
                  asChild
                >
                  <a href="https://linkedin.com/in/gauravlin/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium">{content[language].linkedin}</span>
                  </a>
                </Button>
                
                <Button 
                  onClick={handleDownloadResume}
                  className="flex flex-col gap-3 h-auto py-6 glow-effect hover:animate-glow-pulse smooth-transition"
                >
                  <Download className="h-8 w-8" />
                  <span className="text-sm font-medium">{content[language].downloadResume}</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};