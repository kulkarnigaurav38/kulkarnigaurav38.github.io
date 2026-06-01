import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface ExperienceProps {
  language: "en" | "de";
}

export const Experience = ({ language }: ExperienceProps) => {
  const sectionTitle = {
    en: "Work Experience",
    de: "Berufserfahrung",
  };

  const experiences = [
    {
      id: 1,
      title: {
        en: "Master Thesis: Guardrails for AI Agents (AI Governance & Security)",
        de: "Masterarbeit: Guardrails for AI Agents (AI Governance & Security)",
      },
      company: "Hochschule für Technik Stuttgart",
      companyUrl: "",
      location: {
        en: "Stuttgart, Germany",
        de: "Stuttgart, Deutschland",
      },
      dates: "October 2025 - March 2026",
      bullets: {
        en: [
          "Built a FastAPI Security Shim for AI agents across MCP, A2A, and browser protocols.",
          "Achieved 98.7% threat-detection recall across 150 test cases.",
          "Implemented an EU AI Act-aligned Zero-Trust policy engine with intent classification.",
        ],
        de: [
          "Entwickelte einen FastAPI Security Shim für AI-Agenten über MCP-, A2A- und Browser-Protokolle.",
          "Erreichte 98,7% Threat-Detection-Recall über 150 Testfälle.",
          "Implementierte eine am EU AI Act ausgerichtete Zero-Trust-Policy-Engine mit Intent-Klassifizierung.",
        ],
      },
      tags: ["Python", "FastAPI", "MCP", "A2A", "Zero-Trust", "EU AI Act", "LLM Security"],
    },
    {
      id: 2,
      title: {
        en: "AI Engineer Cloud",
        de: "AI Engineer Cloud",
      },
      company: "IONOS SE",
      companyUrl: "https://drive.google.com/file/d/1B0geuXl66xPXvnFsnzlLEcqqqxZOGNfp/view?usp=sharing",
      location: {
        en: "Karlsruhe, Germany",
        de: "Karlsruhe, Deutschland",
      },
      dates: "June 2024 - September 2025",
      bullets: {
        en: [
          "Built a production RAG pipeline with Llama 3 and pgvector on PostgreSQL.",
          "Optimized ML CI/CD pipelines and presented results to senior management.",
          "Automated cloud tests with the Karate Framework (Java), reducing manual effort by 30%.",
        ],
        de: [
          "Entwickelte eine produktive RAG-Pipeline mit Llama 3 und pgvector auf PostgreSQL.",
          "Optimierte ML-CI/CD-Pipelines und präsentierte Ergebnisse dem Senior Management.",
          "Automatisierte Cloud-Tests mit dem Karate Framework (Java), was den manuellen Aufwand um 30% senkte.",
        ],
      },
      tags: ["Python", "Llama 3", "RAG", "pgvector", "FastAPI", "LangChain", "Karate", "CI/CD"],
    },
    {
      id: 3,
      title: {
        en: "Software Developer",
        de: "Softwareentwickler",
      },
      company: "GENPACT",
      companyUrl: "https://drive.google.com/drive/folders/1nOp2nQuW9_M0lk3lAMmBSGxihQdC-R6n?usp=sharing",
      location: {
        en: "Bengaluru, India",
        de: "Bengaluru, Indien",
      },
      dates: "March 2023 - February 2024",
      bullets: {
        en: [
          "Increased traffic by 30% through implementation of an interactive React frontend.",
          "Ensured 99.9% system availability through Docker containerization and CI/CD.",
          "Analyzed data flows in business processes (Celonis Process Mining) to improve efficiency.",
        ],
        de: [
          "Steigerte Traffic um 30% durch Implementierung eines interaktiven React-Frontends.",
          "Sicherte 99,9% Systemverfügbarkeit mittels Docker Containerisierung und CI/CD.",
          "Analysierte Datenflüsse in Geschäftsprozessen (Celonis Process Mining) zur Effizienzsteigerung.",
        ],
      },
      tags: ["React", "Docker", "CI/CD", "Celonis", "Process Mining"],
    },
    {
      id: 4,
      title: {
        en: "Software Developer",
        de: "Softwareentwickler",
      },
      company: "IIT Madras",
      companyUrl: "",
      location: {
        en: "Remote, India",
        de: "Remote, Indien",
      },
      dates: "January 2022 - January 2023",
      bullets: {
        en: [
          "KARO Startup Technology (Backend Developer, Aug 2022 – Jan 2023):",
          "Delivered Spring Boot Microservices with 100% on-time delivery for critical deadlines.",
          "Increased code quality to 95% test coverage (JUnit) and provided 15+ REST APIs.",
          "Tata Society for Entrepreneurship / JITSIE (Full-Stack Developer, Jan 2022 – Aug 2022):",
          "Accelerated load times by 40% through optimized caching algorithms in the MERN-Stack.",
          "Improved UI/UX performance through efficient state management in Redux.",
        ],
        de: [
          "KARO Startup Technology (Backend Entwickler, Aug. 2022 – Jan. 2023):",
          "Lieferte Spring Boot Microservices mit 100% Termintreue bei kritischen Deadlines.",
          "Erhöhte Code-Qualität auf 95% Testabdeckung (JUnit) und stellte 15+ REST-APIs bereit.",
          "Tata Society for Entrepreneurship / JITSIE (Full-Stack Entwickler, Jan. 2022 – Aug. 2022):",
          "Beschleunigte Ladezeiten um 40% durch optimierte Caching-Algorithmen im MERN-Stack.",
          "Verbesserte UI/UX-Performance durch effizientes State-Management in Redux.",
        ],
      },
      tags: ["Spring Boot", "Java", "JUnit", "REST API", "MERN Stack", "Redux"],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center py-12 mb-8 text-gradient">
          {sectionTitle[language]}
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className={`card-gradient border-border hover:border-primary smooth-transition card-shadow animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {typeof exp.title === "object"
                        ? exp.title[language]
                        : exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-2 text-sm">
                      <p className="text-primary font-medium flex items-center gap-2">
                        {exp.companyUrl ? (
                          <a 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{exp.location[language]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground flex-shrink-0 mt-2 md:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.dates}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {exp.bullets[language].map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/90 leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
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
