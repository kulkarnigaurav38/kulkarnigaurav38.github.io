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
        en: "Working Student QA Engineer Cloud",
        de: "Werkstudent QA Engineer Cloud",
      },
      company: "IONOS SE",
      companyUrl: "https://drive.google.com/file/d/1rXRRHH9wGHvI80b-h_I4cOvfK-k6xB4n/view?usp=sharing",
      location: {
        en: "Karlsruhe, Germany",
        de: "Karlsruhe, Deutschland",
      },
      dates: "June 2024 - August 2025",
      bullets: {
        en: [
          "Developed a tool that automatically creates test cases using an AI pipeline (RAG) and prompt engineering (Python, FastAPI, PostgreSQL), aiming to reduce manual work by 30%.",
          "Presented a comparative analysis of various AI tools to improve test strategy, leading to the introduction of a new framework for automated testing (Karate).",
        ],
        de: [
          "Entwicklung eines Tools, das automatisch Testfälle erstellt. Dafür nutze ich eine KI-Pipeline (RAG) und Prompt Engineering (Python, FastAPI, PostgreSQL). Das Ziel ist, die manuelle Arbeit um 30% zu reduzieren.",
          "Vergleich verschiedener KI-Tools, um die Test-Strategie zu verbessern. Daraufhin Einführung eines neuen Frameworks für automatische Tests (Karate).",
        ],
      },
      tags: ["Python", "FastAPI", "PostgreSQL", "RAG", "Karate", "AI"],
    },
    {
      id: 2,
      title: {
        en: "Software Developer Intern & Software Engineer",
        de: "Praktikant Softwareentwicklung & Softwareentwickler",
      },
      company: "GENPACT",
      companyUrl: "https://drive.google.com/drive/folders/1nOp2nQuW9_M0lk3lAMmBSGxihQdC-R6n?usp=sharing",
      location: {
        en: "Bengaluru, India",
        de: "Bengaluru, Indien",
      },
      dates: "March 2023 - January 2024",
      bullets: {
        en: [
          "Optimized invoice processing through Process Mining (Celonis), reducing processing time by 15%. Certified as 'Celonis Certified Technical Expert'.",
          "Developed a chatbot using React.js and managed deployments via Jenkins and Docker, ensuring 99.9% availability.",
        ],
        de: [
          "Optimierung der Rechnungsbearbeitung durch Process Mining (Celonis). Die Bearbeitungszeit wurde dadurch um 15% gesenkt.",
          "Entwicklung eines Chatbots mit React.js und Verwaltung der Deployments über Jenkins und Docker. Erreichung einer Verfügbarkeit von 99,9%.",
        ],
      },
      tags: ["Celonis", "Process Mining", "React.js", "Jenkins", "Docker"],
    },
    {
      id: 3,
      title: {
        en: "Intern Java Spring Boot Development",
        de: "Praktikant Java Spring Boot Entwicklung",
      },
      company: "KARO Technology",
      companyUrl: "https://drive.google.com/drive/folders/1N7Jon9kWrQb7qGrey5YycR57thV1EkKj?usp=sharing",
      location: {
        en: "Remote",
        de: "Remote",
      },
      dates: "August 2022 - January 2023",
      bullets: {
        en: [
          "Built a backend with microservices (Java, Spring Boot). Provided financial data via 15+ REST APIs for an analytics platform.",
          "Improved code quality through extensive testing (95% coverage with JUnit) and simplified updates using Docker containers.",
        ],
        de: [
          "Aufbau eines Backends mit Microservices (Java, Spring Boot). Bereitstellung von Finanzdaten über 15+ Schnittstellen (REST-APIs) für eine Analyse-Plattform.",
          "Verbesserung der Code-Qualität durch viele Tests (95% Abdeckung mit JUnit) und einfachere Updates durch Docker-Container.",
        ],
      },
      tags: ["Java", "Spring Boot", "Microservices", "REST API", "JUnit", "Docker"],
    },
    {
      id: 4,
      title: {
        en: "Independent Developer (Contributor)",
        de: "Unabhängiger Entwickler (Contributor)",
      },
      company: {
        en: "Open-Source Contributions",
        de: "Open-Source-Beiträge",
      },
      location: {
        en: "Remote",
        de: "Remote",
      },
      dates: "January 2022 - July 2022",
      bullets: {
        en: [
          "Led a new feature for Rocket.Chat (Electron.js). Recognized as a top 5% contributor after passing rigorous code reviews.",
          "Built a secure login system for a private project using modern standards like Passkeys and OAuth 2.0.",
        ],
        de: [
          "Leitung eines neuen Features für Rocket.Chat (Electron.js). Erfolgreiche Zusammenarbeit mit dem Core-Team und Bestehen strenger Code-Reviews.",
          "Bau eines sicheren Login-Systems für ein privates Projekt. Nutzung von modernen Standards wie Passkeys und OAuth 2.0.",
        ],
      },
      tags: ["Electron.js", "Passkeys", "OAuth 2.0", "Open Source"],
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
                            {typeof exp.company === "object"
                              ? exp.company[language]
                              : exp.company}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          typeof exp.company === "object"
                            ? exp.company[language]
                            : exp.company
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
