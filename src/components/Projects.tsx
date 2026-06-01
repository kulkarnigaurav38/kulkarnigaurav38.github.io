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
      id: 0,
      title: {
        en: "Nest Parking – Full-Stack Parking Reservation Platform",
        de: "Nest Parking – Full-Stack Parkplatz-Reservierungsplattform",
      },
      description: {
        en: "Next.js 16 monorepo with a dynamic-programming pricing engine that picks the cheapest of 14 tariffs. Built idempotent, race-safe Stripe-webhook reconciliation now powering >$1,000/month in live revenue — delivered end-to-end from MVP to paying customers (Freelance, Little Rock, AR).",
        de: "Next.js 16 Monorepo mit einer Dynamic-Programming-Pricing-Engine, die aus 14 Tarifen den günstigsten auswählt. Entwickelte idempotente, race-sichere Stripe-Webhook-Abstimmung, die >1.000 $/Monat an laufendem Umsatz generiert — End-to-End von MVP bis zu zahlenden Kunden geliefert (Freelance, Little Rock, AR).",
      },
      technologies: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Vercel", "Docker"],
      githubUrl: "#",
    },
    {
      id: 1,
      title: "DCF Valuation Engine & Fine-Tuned LLM",
      description: {
        en: "Performed Supervised Fine-Tuning (SFT) of Llama 3 using Unsloth and QLoRA for financial forecasting. Developed performant inference API with FastAPI and integrated Transformer models into a Next.js app.",
        de: "Führte Supervised Fine-Tuning (SFT) von Llama 3 mittels Unsloth und QLoRA für Finanzprognosen durch. Entwickelte performante Inference-API mit FastAPI und integrierte Transformer-Modelle in eine Next.js App.",
      },
      technologies: ["Python", "PyTorch", "Hugging Face", "PEFT", "FastAPI", "Next.js"],
      githubUrl: "https://github.com/kulkarnigaurav38/dcf-model-finetuning",
    },
    {
      id: 2,
      title: {
        en: "Dibuco AI – News Intelligence & Opinion Mining Platform",
        de: "Dibuco AI – News Intelligence & Opinion Mining Plattform",
      },
      description: {
        en: "Developed a data engineering pipeline for analyzing NYT articles using Selenium. Implemented K-Means clustering for topic detection and Transformer models for sentiment analysis. Integrated automated news updates via a Telegram bot based on a Flask backend.",
        de: "Entwickelte für Dibuco eine Data-Engineering-Pipeline zur Analyse von NYT-Artikeln mittels Selenium. Implementierte K-Means Clustering zur Themenerkennung und Transformer-Modelle für Sentiment-Analysen. Integrierte automatisierte News-Updates über einen Telegram-Bot basierend auf einem Flask-Backend.",
      },
      technologies: ["Python", "Flask", "Hugging Face", "Scikit-Learn", "Selenium"],
      githubUrl: "#",
    },
    {
      id: 3,
      title: "LernKartei AI - Microservices Platform",
      description: {
        en: "Implemented scalable microservice architecture (Spring Boot) and generative AI features (Spring AI). Developed dynamic React frontend and secured REST endpoints using OAuth2.",
        de: "Implementierte skalierbare Microservice-Architektur (Spring Boot) und Generative AI Features (Spring AI). Entwickelte dynamisches React-Frontend und sicherte REST-Endpunkte mittels OAuth2 ab.",
      },
      technologies: ["Java", "Spring Boot", "Spring AI", "React", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/kulkarnigaurav38/java_prod_proj",
    },
    {
      id: 4,
      title: {
        en: "GWBASIC-to-C Compiler",
        de: "GWBASIC-zu-C-Compiler",
      },
      description: {
        en: "Developed complete compiler in Java (JavaCC) for automated translation of legacy code. Implemented Lexer, Parser, and Abstract Syntax Trees (AST) – core concepts of NLP processing. Realized complex semantic analyses for code logic validation and error detection.",
        de: "Entwickelte vollständigen Compiler in Java (JavaCC) zur automatisierten Übersetzung von Legacy-Code. Implementierte Lexer, Parser und Abstract Syntax Trees (AST) – Kernkonzepte der NLP-Verarbeitung. Realisierte komplexe semantische Analysen zur Validierung der Code-Logik und Fehlererkennung.",
      },
      technologies: ["Java", "JavaCC", "C", "Compiler Construction"],
      githubUrl: "#",
    },
    {
      id: 5,
      title: "BrainML – Smart India Hackathon | Medical AI",
      description: {
        en: "Trained a deep learning model (TensorFlow) for analyzing MRI scans (diagnosis: depression) with 90% accuracy. Developed a Node.js prototype for clinical demonstration and validated results with real medical datasets.",
        de: "Trainierte ein Deep-Learning-Modell (TensorFlow) zur Analyse von MRT-Scans (Diagnose: Depression) mit 90% Genauigkeit. Entwickelte einen Node.js-Prototyp zur klinischen Demonstration und validierte die Ergebnisse mit realen medizinischen Datensätzen.",
      },
      technologies: ["Python", "TensorFlow", "Node.js", "CNN", "Medical Data"],
      githubUrl: "#",
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