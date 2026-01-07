import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectsProps {
  language: 'en' | 'de';
}

export const Projects = ({ language }: ProjectsProps) => {
  const sectionTitle = {
    en: "Featured Projects",
    de: "Ausgewählte Projekte"
  };

  const viewCode = {
    en: "View Code",
    de: "Code Ansehen"
  };

  const projects = [
    {
      id: 1,
      title: "Guardrails for AI Agents",
      description: {
        en: "Designed a secure system architecture for AI agents, separating logic (Control Plane) from execution (Execution Plane). Developed backend interceptors to validate real-time data traffic and enforce policies. Implemented human-in-the-loop security checks to prevent critical AI errors in production.",
        de: "Design einer sicheren System-Architektur, die KI-Agenten steuert. Trennung von Logik (Control Plane) und Ausführung (Execution Plane). Entwicklung von Backend-Interceptoren, die den Datenverkehr in Echtzeit prüfen und Richtlinien durchsetzen. Einbau von Sicherheits-Checks (Human-in-the-Loop), um kritische Fehler der KI in Produktionssystemen zu verhindern.",
      },
      technologies: ["Python", "System Design", "LangGraph", "Policy Engine"],
      githubUrl: "#",
    },
    {
      id: 2,
      title: "DCF Analyzer & Valuation Platform",
      description: {
        en: "Built a full-stack platform (Next.js/FastAPI) to load financial data and calculate company valuations. Integrated a fine-tuned Llama 3 model into the backend to explain mathematical results logically. Developed robust APIs for real-time data processing.",
        de: "Bau einer Full-Stack-Plattform (Next.js/FastAPI), die Finanzdaten lädt und Unternehmensbewertungen berechnet. Integration eines spezialisierten KI-Modells (Llama 3) in das Backend, um mathematische Ergebnisse logisch zu erklären. Entwicklung robuster APIs zur Verarbeitung von Echtzeit-Daten und Verbindung der Rechenlogik mit dem Frontend.",
      },
      technologies: ["Python", "FastAPI", "Next.js", "Llama 3", "Unsloth", "Financial Modeling"],
      githubUrl: "https://github.com/kulkarnigaurav38/dcf-model-finetuning",
    },
    {
      id: 3,
      title: "LernKartei AI - Microservices",
      description: {
        en: "Refactored a monolith into scalable microservices (Spring Cloud) and integrated Spring AI for generative AI features. Implemented security with Keycloak (OAuth2) and developed a React frontend (Vite) to display AI-generated learning content dynamically.",
        de: "Umbau eines Monolithen in skalierbare Microservices (Spring Cloud). Integration von Spring AI, um KI-Funktionen direkt im Java-Backend zu nutzen. Implementierung der Sicherheitsschicht mit Keycloak (OAuth2) zum Schutz der Nutzerdaten und API-Endpunkte. Entwicklung eines React-Frontends (Vite), das die vom Java-Backend generierten KI-Lerninhalte dynamisch anzeigt.",
      },
      technologies: ["Java", "Spring Boot", "React", "Docker", "Spring AI", "Keycloak"],
      githubUrl: "https://github.com/kulkarnigaurav38/java_prod_proj",
    },
    {
      id: 4,
      title: {
        en: "GWBASIC-to-C Compiler",
        de: "GWBASIC-zu-C Compiler",
      },
      description: {
        en: "Developed a custom compiler parsing 40+ GWBASIC commands and translating them into optimized C code. Used JavaCC for lexer/parser generation and AST construction. Implemented complex Java logic for error detection and correct translation of program structures.",
        de: "Entwicklung eines eigenen Compilers, der 40+ GWBASIC-Befehle parst und in optimierten C-Code übersetzt. Nutzung von JavaCC zur Erstellung von Lexer und Parser sowie Aufbau eines Abstract Syntax Trees (AST) zur Code-Analyse. Implementierung komplexer Java-Logik zur Fehlererkennung und korrekten Übersetzung von Programmstrukturen.",
      },
      technologies: ["JavaCC", "Java", "Compiler Design", "AST"],
      githubUrl: "#",
    },
    {
      id: 5,
      title: "BrainML | Smart India Hackathon",
      description: {
        en: "Developed an AI model detecting depression risks from MRI scans with 90% accuracy. Won 2nd place nationally for contributing to better mental health diagnosis. Built a physician prototype using Node.js.",
        de: "Entwicklung eines KI-Modells, das Depressionsrisiken anhand von MRT-Scans erkennt. Erreichung einer Genauigkeit von 90%. Gewinn des 2. Platzes auf nationaler Ebene. Anerkennung für den Beitrag zur besseren Diagnose von psychischen Erkrankungen. Bau eines Prototyps für Ärzte, um die Nutzung der KI im medizinischen Alltag zu testen (Node.js).",
      },
      technologies: ["TensorFlow", "Python", "Node.js", "AI/ML"],
      githubUrl: "https://drive.google.com/drive/folders/1CEJplcpgp-d8-XQOBYEFuXOfG8Zk3Wid?usp=sharing",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center py-12 mb-8 text-gradient">
          {sectionTitle[language]}
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`card-gradient border-border hover:border-primary smooth-transition card-shadow animate-slide-up h-full flex flex-col`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2"
                    >
                      {typeof project.title === 'object' ? project.title[language] : project.title}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    typeof project.title === 'object' ? project.title[language] : project.title
                  )}
                </h3>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col justify-between space-y-4">
                <p className="text-foreground/90 leading-relaxed text-sm">
                  {project.description[language]}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};