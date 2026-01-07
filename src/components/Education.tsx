import { GraduationCap } from "lucide-react";

interface EducationProps {
  language: 'en' | 'de';
}

const educationData = {
  en: {
    title: "Education",
    items: [
      {
        institution: "Hochschule für Technik Stuttgart",
        degree: "Master's in Software Technology",
        gpa: "GPA: 2.14/4",
        period: "March 2024 – Present",
        location: "Stuttgart, Germany"
      },
      {
        institution: "R.V. Institute of Technology and Management",
        degree: "Bachelor's in Computer Science and Engineering",
        gpa: "GPA: 8.14/10",
        period: "August 2019 – May 2023",
        location: "Bengaluru, India"
      }
    ]
  },
  de: {
    title: "Bildung",
    items: [
      {
        institution: "Hochschule für Technik Stuttgart",
        degree: "Master in Software-Technologie",
        gpa: "Notendurchschnitt: 2.14/4",
        period: "März 2024 – Heute",
        location: "Stuttgart, Deutschland"
      },
      {
        institution: "R.V. Institute of Technology and Management",
        degree: "Bachelor in Informatik und Ingenieurwesen",
        gpa: "Notendurchschnitt: 8.14/10",
        period: "August 2019 – Mai 2023",
        location: "Bengaluru, Indien"
      }
    ]
  }
};

export const Education = ({ language }: EducationProps) => {
  const content = educationData[language];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center py-12 mb-8 text-gradient">
          {content.title}
        </h2>
        
        <div className="space-y-8">
          {content.items.map((item, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {item.institution}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-surface px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-lg text-foreground/90 mb-2">
                    {item.degree}
                  </p>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm text-muted-foreground">
                    <span className="font-medium text-primary">
                      {item.gpa}
                    </span>
                    <span>
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};