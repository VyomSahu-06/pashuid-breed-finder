import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
    nav: {
      home: "Home",
      identify: "Identify Breed",
      database: "Breed Database",
      about: "About",
      contact: "Contact",
    },
  },
  hi: {
    title: "pashuID",
    subtitle: "एआई-संचालित गाय और भैंस नस्ल पहचान",
    searchPlaceholder: "नस्लों की खोज करें...",
    nav: {
      home: "होम",
      identify: "नस्ल पहचानें",
      database: "नस्ल डेटाबेस",
      about: "हमारे बारे में",
      contact: "संपर्क",
    },
  },
};

const Header = ({ language, onLanguageChange, onSearch }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const t = translations[language];

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/identify", label: t.nav.identify },
    { href: "/database", label: t.nav.database },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-smooth">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Controls */}
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

            {/* Language Toggle */}
            <LanguageToggle onLanguageChange={onLanguageChange} />

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden h-9 w-9 p-0 hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-smooth hover:text-primary px-2 py-1 rounded ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Search */}
            <div className="mt-4 pt-4 border-t border-border/20">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t.searchPlaceholder}
                  className="pl-10 bg-background/50"
                  onChange={(e) => onSearch?.(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;