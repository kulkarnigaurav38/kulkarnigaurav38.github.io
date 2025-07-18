import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  onLanguageChange: (language: 'en' | 'de') => void;
  currentLanguage: 'en' | 'de';
}

export const LanguageToggle = ({ onLanguageChange, currentLanguage }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === 'en' ? 'de' : 'en')}
      className="gap-2 smooth-transition hover:glow-effect"
    >
      <Languages className="h-4 w-4" />
      {currentLanguage === 'en' ? 'DE' : 'EN'}
    </Button>
  );
};