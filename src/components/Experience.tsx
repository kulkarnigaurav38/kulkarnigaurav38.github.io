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
        en: "Working Student AI Engineer in QA, Cloud",
        de: "Werkstudent AI Engineer in QA, Cloud",
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
          "Developed RAG pipeline using Continue.dev as VSCode extension and FastAPI backend. Utilized Llama 3.3 70B model with PostgreSQL as vector DB and optimization via prompt engineering.",
          "Integrated Karate Java Testing Framework to create automated test cases for IONOS Cloud products. Reduced manual effort by 30% through efficient automation.",
        ],
        de: [
          "Entwickelt RAG-Pipeline mit Continue.dev als VSCode-Extension und FastAPI-Backend. Nutzte Llama 3.3 70B-Modell mit PostgreSQL als Vector-DB und optimierung durch Prompt-Engineering.",
          "Integrierte Karate Java Testing Framework zur Erstellung automatisierter Testfälle für IONOS Cloud-Produkte. Reduzierte manuellen Aufwand um 30% durch effiziente Automatisierung.",
        ],
      },
      tags: ["Python", "FastAPI", "PostgreSQL", "RAG", "Karate", "AI"],
    },
    {
      id: 2,
      title: {
        en: "Software Developer Intern & Software Engineer",
        de: "Softwareentwickler & Praktikant Softwareentwicklung",
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
          "Developed chatbot using React.js in agile methodology. Managed GitHub repository, CI/CD with GitHub Actions and Docker; ensured 99.9% availability.",
          "Optimized accounts payable processes with Celonis Process Mining. Received Certified Technical Expert certification; transformed data and analyzed bottlenecks.",
        ],
        de: [
          "Entwickelte Chatbot mit React.js in agiler Methodik. Verwaltete GitHub-Repository, CI/CD mit GitHub Actions und Docker; sicherte 99,9% Verfügbarkeit.",
          "Optimierte Accounts-Payable-Prozesse mit Celonis Process Mining. Erhielt Zertifizierung als Certified Technical Expert; wandelte Daten um und analysierte Engpässe.",
        ],
      },
      tags: ["Celonis", "Process Mining", "React.js", "GitHub Actions", "Docker"],
    },
    {
      id: 3,
      title: {
        en: "Intern Backend Developer",
        de: "Praktikant Backend Entwickler",
      },
      company: "KARO Startup Technology",
      companyUrl: "https://drive.google.com/drive/folders/1N7Jon9kWrQb7qGrey5YycR57thV1EkKj?usp=sharing",
      location: {
        en: "Bengaluru, India",
        de: "Bengaluru, Indien",
      },
      dates: "August 2022 - January 2023",
      bullets: {
        en: [
          "Implemented scalable microservice architecture using Spring Boot for financial data. Provided 15+ REST interfaces for integrations.",
          "Improved code quality with 95% test coverage using JUnit and deployment via Docker.",
        ],
        de: [
          "Implementierte skalierbare Microservice-Architektur mit Spring Boot für Finanzdaten. Bereitstellte 15+ REST-Schnittstellen für Integrationen.",
          "Verbesserte Code-Qualität mit 95% Testabdeckung durch JUnit und deployment mit Docker.",
        ],
      },
      tags: ["Java", "Spring Boot", "Microservices", "REST API", "JUnit", "Docker"],
    },
    {
      id: 4,
      title: {
        en: "Intern Full-Stack Developer",
        de: "Praktikant Full-Stack Entwickler",
      },
      company: "Tata Entreprenuership Society (JITSIE), IIT Madras",
      companyUrl: "",
      location: {
        en: "Chennai, India",
        de: "Chennai, Indien",
      },
      dates: "January 2022 - August 2022",
      bullets: {
        en: [
          "Developed MERN stack applications for startup incubation platforms. Used React.js and Node.js for frontend and backend integrations.",
          "Optimized APIs and user interfaces. Increased efficiency in agile teams for deep-tech startups.",
        ],
        de: [
          "Entwickelte MERN-Stack-Anwendungen für Startup-Inkubation-Plattformen. Nutzte React.js und Node.js für Frontend und Backend Integrationen.",
          "Optimierte APIs und Benutzeroberflächen. Steigerte Effizienz in agilen Teams für Deep-Tech-Startups.",
        ],
      },
      tags: ["React.js", "Node.js", "MERN Stack"],
    },
    {
      id: 5,
      title: {
        en: "Independent Developer (Contributor)",
        de: "Unabhängiger Entwickler (Contributor)",
      },
      company: "Rocket.Chat",
      companyUrl: "",
      location: {
        en: "Remote",
        de: "Remote",
      },
      dates: "September 2021 - December 2021",
      bullets: {
        en: [
          "Implemented new feature for Rocket.Chat using Electron.js in collaboration with core team. Successfully merged after code reviews.",
        ],
        de: [
          "Implementierte neues Feature für Rocket.Chat mit Electron.js in Zusammenarbeit mit Core-Team. Erfolgreich gemerged nach Code-Reviews.",
        ],
      },
      tags: ["Electron.js", "Open Source"],
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
