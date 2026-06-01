import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

interface HeroProps {
  language: "en" | "de";
  profileImage?: string;
}

export const Hero = ({ language, profileImage }: HeroProps) => {
  const content = {
    en: {
      name: "Gaurav Kulkarni",
      title: "Software Engineer building AI-driven full-stack applications",
      bio: "Software Engineer with 3.5 years of experience building production full-stack and AI applications across Python, TypeScript, React/Next.js, and cloud infrastructure. Development of RAG pipelines & fine-tuned LLMs, with a focus on AI Governance, Guardrails & Zero-Trust architectures (EU AI Act compliance) and microservices on AWS. German B2 · English C1.",
      opportunity:
        "Looking for full time opportunities in Germany — available immediately",
      contact: "Get In Touch",
    },
    de: {
      name: "Gaurav Kulkarni",
      title: "Software-Ingenieur für KI-gestützte Full-Stack-Anwendungen",
      bio: "Software-Ingenieur mit 3,5 Jahren Erfahrung in der Entwicklung produktiver Full-Stack- und KI-Anwendungen mit Python, TypeScript, React/Next.js und Cloud-Infrastruktur. Entwicklung von RAG-Pipelines & feinabgestimmten LLMs, mit Fokus auf AI Governance, Guardrails & Zero-Trust-Architekturen (EU AI Act Compliance) sowie Microservices auf AWS. Deutsch B2 · Englisch C1.",
      opportunity:
        "Auf der Suche nach Vollzeitbeschäftigung in Deutschland — ab sofort verfügbar",
      contact: "Kontakt Aufnehmen",
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            {content[language].name}
          </h1>

          {profileImage && (
            <div className="mb-8 flex justify-center animate-slide-up">
              <div className="relative">
                <img
                  src={profileImage}
                  alt={content[language].name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-elegant glow-effect"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
              </div>
            </div>
          )}

          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-slide-up">
            {content[language].title}
          </h2>

          <p className="text-lg md:text-xl text-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            {content[language].bio}
          </p>

          <p className="text-lg md:text-xl text-primary font-medium mb-12 animate-slide-up">
            {content[language].opportunity}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="p-3 smooth-transition hover:glow-effect"
                asChild
              >
                <a
                  href="mailto:kulkarnigaurav38@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="p-3 smooth-transition hover:glow-effect"
                asChild
              >
                <a
                  href="https://github.com/kulkarnigaurav38"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="p-3 smooth-transition hover:glow-effect"
                asChild
              >
                <a
                  href="https://linkedin.com/in/gauravlin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
