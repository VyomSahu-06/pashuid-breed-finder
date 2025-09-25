import { useState } from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  onLanguageChange: (language: "en" | "hi") => void;
}

const LanguageToggle = ({ onLanguageChange }: LanguageToggleProps) => {
  const [currentLang, setCurrentLang] = useState<"en" | "hi">("en");

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "hi" : "en";
    setCurrentLang(newLang);
    onLanguageChange(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-smooth"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">
        {currentLang === "en" ? "हिन्दी" : "English"}
      </span>
    </Button>
  );
};

export default LanguageToggle;