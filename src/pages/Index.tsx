import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { LanguageToggle } from "@/components/LanguageToggle";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "de">("en");

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageToggle
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
      </div>

      {/* Hero Section */}
      <Hero
        language={language}
        profileImage="/gaurav_latest_pic.png"
      />

      {/* Experience Section */}
      <Experience language={language} />

      {/* Education Section */}
      <Education language={language} />

      {/* Projects Section */}
      <Projects language={language} />

      {/* Contact Section */}
      <Contact language={language} />
    </div>
  );
};

export default Index;
