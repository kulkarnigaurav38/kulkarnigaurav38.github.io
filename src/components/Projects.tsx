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
      title: {
        en: "GWBASIC-to-C Compiler",
        de: "GWBASIC-zu-C Compiler"
      },
      description: {
        en: "Designed and implemented a full compilation pipeline using JavaCC, including a custom lexer, parser, and Abstract Syntax Tree (AST) to translate legacy GWBASIC into modern C code. Demonstrated core Computer Science fundamentals by successfully managing complex parsing and code generation logic from the ground up.",
        de: "Entwarf und implementierte eine vollständige Kompilierungs-Pipeline mit JavaCC, einschließlich eines benutzerdefinierten Lexers, Parsers und Abstract Syntax Tree (AST) zur Übersetzung von Legacy-GWBASIC in modernen C-Code. Demonstrierte grundlegende Informatik-Konzepte durch erfolgreiches Management komplexer Parsing- und Code-Generierungslogik von Grund auf."
      },
      technologies: ["JavaCC", "Java", "Compiler Design", "AST"],
      githubUrl: "#"
    },
    {
      id: 2,
      title: "FarmiLedger",
      description: {
        en: "Developed a real-time, decentralized auction system for agricultural produce using an Ethereum blockchain and MERN stack. Engineered gas-efficient Solidity smart contracts to manage the auction lifecycle and create an auditable record of crop provenance, solving price opacity in agricultural supply chains.",
        de: "Entwickelte ein Echtzeit-dezentralisiertes Auktionssystem für landwirtschaftliche Erzeugnisse mit Ethereum-Blockchain und MERN-Stack. Entwickelte gaseffiziente Solidity-Smart-Contracts zur Verwaltung des Auktions-Lebenszyklus und Erstellung auditierbar Aufzeichnungen der Ernte-Herkunft, um Preisintransparenz in landwirtschaftlichen Lieferketten zu lösen."
      },
      technologies: ["Solidity", "Node.js", "React.js", "Ethereum", "MongoDB", "Blockchain"],
      githubUrl: "#"
    },
    {
      id: 3,
      title: "BrainML",
      description: {
        en: "Engineered an end-to-end machine learning solution to predict depression risk from MRI scans, achieving 90-95% accuracy on a clinical dataset. Integrated the model into a Node.js backend for real-time prediction, utilizing BrainSuite for automated Region of Interest (ROI) extraction.",
        de: "Entwickelte eine End-to-End-Machine-Learning-Lösung zur Vorhersage des Depressionsrisikos aus MRT-Scans mit 90-95% Genauigkeit auf einem klinischen Datensatz. Integrierte das Modell in ein Node.js-Backend für Echtzeitvorhersagen unter Verwendung von BrainSuite für automatisierte Region-of-Interest (ROI) Extraktion."
      },
      technologies: ["Python", "TensorFlow", "Node.js", "MongoDB", "BrainSuite", "Dipy", "Bootstrap"],
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
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
                  {typeof project.title === 'object' ? project.title[language] : project.title}
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