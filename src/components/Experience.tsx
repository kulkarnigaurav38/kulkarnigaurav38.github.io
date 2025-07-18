import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

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
        en: "Working Student QA Engineer Cloud & Master's Thesis Candidate",
        de: "Werkstudent QA-Ingenieur Cloud & Masterarbeit-Kandidat",
      },
      company: "IONOS SE",
      location: {
        en: "Karlsruhe, Germany",
        de: "Karlsruhe, Deutschland",
      },
      dates: "June 2024 - Present",
      bullets: {
        en: [
          "For my Master's Thesis, architecting an automated test case generation system using a RAG pipeline and prompt engineering (Python, FastAPI, pgvector), projected to reduce manual test creation time by 30%.",
          "Influenced the QA team's Software Quality Assurance (SQA) strategy by delivering a comparative analysis of AI tools, leading to the development of a new Karate-based test automation framework.",
        ],
        de: [
          "Für meine Masterarbeit entwickle ich ein automatisiertes Testfall-Generierungssystem mit RAG-Pipeline und Prompt Engineering (Python, FastAPI, pgvector), das die manuelle Testerstellung um 30% reduzieren soll.",
          "Beeinflusste die SQA-Strategie des QA-Teams durch eine vergleichende Analyse von KI-Tools, was zur Entwicklung eines neuen Karate-basierten Testautomatisierungs-Frameworks führte.",
        ],
      },
      tags: ["Python", "FastAPI", "pgvector", "Karate", "QA", "AI"],
    },
    {
      id: 2,
      title: {
        en: "Independent Contributor",
        de: "Unabhängiger Mitwirkender",
      },
      company: {
        en: "Open-Source Contributions",
        de: "Open-Source-Beiträge",
      },
      location: {
        en: "Remote",
        de: "Remote",
      },
      dates: "July 2024 - December 2024",
      bullets: {
        en: [
          "Contributed an accepted feature to the Rocket.Chat open-source project (Electron.js), successfully passing rigorous code reviews in a large, collaborative codebase.",
          "Engineered a secure, modern authentication module for a personal project, implementing passwordless login with Passkeys and OAuth 2.0 for social identity providers.",
        ],
        de: [
          "Trug ein akzeptiertes Feature zum Rocket.Chat Open-Source-Projekt (Electron.js) bei und bestand strenge Code-Reviews in einer großen, kollaborativen Codebasis.",
          "Entwickelte ein sicheres, modernes Authentifizierungsmodul für ein persönliches Projekt mit passwortloser Anmeldung über Passkeys und OAuth 2.0 für soziale Identitätsanbieter.",
        ],
      },
      tags: ["Electron.js", "Passkeys", "OAuth 2.0", "Open Source"],
    },
    {
      id: 3,
      title: {
        en: "Software Developer Intern & Software Engineer",
        de: "Software-Entwickler-Praktikant & Software-Ingenieur",
      },
      company: "Genpact",
      location: {
        en: "Bengaluru, India",
        de: "Bengaluru, Indien",
      },
      dates: "March 2023 - January 2024",
      bullets: {
        en: [
          "Reduced AP invoice processing time by 15% using Celonis process mining and PQL-based KPIs; also earned Celonis Certified Technical Expert certification.",
          "Engineered and deployed a conversational chatbot for social networks (Dialogflow, React.js); established CI/CD pipelines with Docker and worked with teams to troubleshoot production issues.",
        ],
        de: [
          "Reduzierte die Bearbeitungszeit von Kreditorenrechnungen um 15% durch Celonis Process Mining und PQL-basierte KPIs; erhielt auch die Celonis Certified Technical Expert-Zertifizierung.",
          "Entwickelte und implementierte einen Chatbot für soziale Netzwerke (Dialogflow, React.js); etablierte CI/CD-Pipelines mit Docker und arbeitete mit Teams zur Behebung von Produktionsproblemen.",
        ],
      },
      tags: ["Celonis", "PQL", "Dialogflow", "React.js", "Docker", "CI/CD"],
    },
    {
      id: 4,
      title: {
        en: "Java Spring Boot Developer Intern",
        de: "Java Spring Boot Entwickler-Praktikant",
      },
      company: "Karo Technology",
      location: {
        en: "Remote",
        de: "Remote",
      },
      dates: "August 2022 - January 2023",
      bullets: {
        en: [
          "Architected scalable backend Microservices using object-oriented programming with Java and Spring Boot, delivering investment insights via RESTful APIs (JSON).",
          "Ensured code reliability and simplified deployments by implementing comprehensive JUnit tests and containerizing the full application with Docker.",
        ],
        de: [
          "Entwickelte skalierbare Backend-Microservices mit objektorientierter Programmierung in Java und Spring Boot zur Bereitstellung von Investment-Insights über RESTful APIs (JSON).",
          "Gewährleistete Code-Zuverlässigkeit und vereinfachte Deployments durch umfassende JUnit-Tests und Containerisierung der gesamten Anwendung mit Docker.",
        ],
      },
      tags: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST API",
        "JUnit",
        "Docker",
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
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
                      <p className="text-primary font-medium">
                        {typeof exp.company === "object"
                          ? exp.company[language]
                          : exp.company}
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
