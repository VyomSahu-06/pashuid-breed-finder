import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LanguageToggle from "./LanguageToggle";

interface HeaderProps {
  language: "en" | "hi";
  onLanguageChange: (language: "en" | "hi") => void;
  onSearch?: (query: string) => void;
}

const translations = {
  en: {
    title: "pashuID",
    subtitle: "AI-Powered Cattle & Buffalo Breed Recognition",
    searchPlaceholder: "Search breeds...",
  },
  hi: {
    title: "pashuID",
    subtitle: "एआई-संचालित गाय और भैंस नस्ल पहचान",
    searchPlaceholder: "नस्लों की खोज करें...",
  },
};

const Header = ({ language, onLanguageChange, onSearch }: HeaderProps) => {
  const t = translations[language];

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-lg">पी</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {t.title}
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {t.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Search and Language Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Hidden on mobile */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t.searchPlaceholder}
                className="pl-10 w-64 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>

            {/* Mobile Search Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden h-9 w-9 p-0 hover:bg-accent"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Language Toggle */}
            <LanguageToggle onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;