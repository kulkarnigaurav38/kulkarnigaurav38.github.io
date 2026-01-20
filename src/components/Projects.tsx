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
        en: "Developed compliance architecture (Policy Engine) for risk minimization in autonomous AI systems. Implemented 'Check-then-Act' modules and Human-in-the-Loop mechanisms for maximum process safety.",
        de: "Entwickelte Compliance-Architektur (Policy Engine) zur Risikominimierung in autonomen KI-Systemen. Implementierte 'Check-then-Act'-Module und Human-in-the-Loop-Mechanismen für maximale Prozesssicherheit.",
      },
      technologies: ["Python", "System Design"],
      githubUrl: "#",
    },
    {
      id: 2,
      title: "DCF Valuation Engine & Fine-Tuned LLM",
      description: {
        en: "Fine-tuning of a Llama 3 model (Unsloth) on mathematical financial metrics (WACC, Terminal Value). Developed full-stack platform (FastAPI) for providing real-time data and interactive analyses.",
        de: "Feinabstimmung eines Llama-3-Modells (Unsloth) auf mathematische Finanzmetriken (WACC, Terminal Value). Entwickelte Full-Stack-Plattform (FastAPI) zur Bereitstellung von Echtzeit-Daten und interaktiven Analysen.",
      },
      technologies: ["Python", "Llama 3", "Unsloth", "FastAPI", "Next.js"],
      githubUrl: "https://github.com/kulkarnigaurav38/dcf-model-finetuning",
    },
    {
      id: 3,
      title: "LernKartei AI - Microservices",
      description: {
        en: "Implemented generative AI features (Spring AI) for automated creation of individual learning materials. Migrated to scalable microservice architecture (Docker) and secured APIs using OAuth2 protocols.",
        de: "Implementierte Generative-AI-Features (Spring AI) zur automatisierten Erstellung individueller Lernmaterialien. Migrierte zu skalierbarer Microservice-Architektur (Docker) und sicherte APIs mittels OAuth2-Protokollen.",
      },
      technologies: ["Spring Boot", "Spring AI", "React", "Docker"],
      githubUrl: "https://github.com/kulkarnigaurav38/java_prod_proj",
    },
    {
      id: 4,
      title: {
        en: "GWBASIC-to-C Compiler",
        de: "GWBASIC-zu-C-Compiler",
      },
      description: {
        en: "Developed compiler using JavaCC and AST for structural analysis and translation of 40+ commands. Implemented complex semantic logic for error detection and generation of valid C code.",
        de: "Entwickelte Compiler mittels JavaCC und AST zur strukturellen Analyse und Übersetzung von 40+ Befehlen. Implementierte komplexe semantische Logik zur Fehlererkennung und Generierung von validem C-Code.",
      },
      technologies: ["JavaCC", "Java"],
      githubUrl: "#",
    },
    {
      id: 5,
      title: "BrainML | Smart India Hackathon",
      description: {
        en: "Developed deep learning model (TensorFlow) for depression diagnosis via MRI scans (90% accuracy). Created Node.js prototype for clinical demonstration and validated results with medical datasets.",
        de: "Entwickelte Deep-Learning-Modell (TensorFlow) zur Depressionsdiagnose mittels MRT-Scans (90% Genauigkeit). Erstellte Node.js-Prototyp zur klinischen Demonstration und validierte Ergebnisse mit medizinischen Datensätzen.",
      },
      technologies: ["TensorFlow", "Python", "Node.js"],
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