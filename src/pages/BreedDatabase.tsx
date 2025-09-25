import { useState, useMemo } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import BreedCard from "@/components/BreedCard";
import { breeds } from "@/data/breeds";

const translations = {
  en: {
    title: "Breed Database",
    subtitle: "Comprehensive database of Indian cattle and buffalo breeds",
    searchPlaceholder: "Search breeds by name, origin, or characteristics...",
    filterBy: "Filter by type",
    allBreeds: "All Breeds",
    cattle: "Cattle",
    buffalo: "Buffalo",
    showing: "Showing",
    of: "of",
    breeds: "breeds",
    noResults: "No breeds found",
    noResultsDesc: "Try adjusting your search terms or filters",
    sortBy: "Sort by",
    name: "Name",
    milkYield: "Milk Yield",
    weight: "Weight",
    viewMode: "View Mode",
  },
  hi: {
    title: "नस्ल डेटाबेस",
    subtitle: "भारतीय गाय और भैंस की नस्लों का व्यापक डेटाबेस",
    searchPlaceholder: "नाम, मूल स्थान या विशेषताओं के आधार पर नस्लों की खोज करें...",
    filterBy: "प्रकार के आधार पर फ़िल्टर करें",
    allBreeds: "सभी नस्लें",
    cattle: "गाय",
    buffalo: "भैंस",
    showing: "दिखाया जा रहा है",
    of: "का",
    breeds: "नस्लें",
    noResults: "कोई नस्ल नहीं मिली",
    noResultsDesc: "अपने खोज शब्दों या फ़िल्टर को समायोजित करने का प्रयास करें",
    sortBy: "इसके आधार पर क्रमबद्ध करें",
    name: "नाम",
    milkYield: "दूध उत्पादन",
    weight: "वजन",
    viewMode: "देखने का तरीका",
  },
};

const BreedDatabase = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "cattle" | "buffalo">("all");
  const [sortBy, setSortBy] = useState<"name" | "milkYield" | "weight">("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const t = translations[language];

  const filteredAndSortedBreeds = useMemo(() => {
    let filtered = breeds.filter((breed) => {
      const matchesSearch = 
        breed.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        breed.nameHi.includes(searchQuery) ||
        breed.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        breed.originHi.includes(searchQuery) ||
        breed.characteristics.some(char => 
          char.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        breed.characteristicsHi.some(char => char.includes(searchQuery));

      const matchesType = typeFilter === "all" || breed.type === typeFilter;

      return matchesSearch && matchesType;
    });

    // Sort breeds
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return language === "hi" 
            ? a.nameHi.localeCompare(b.nameHi)
            : a.name.localeCompare(b.name);
        case "milkYield":
          const aYield = parseInt(a.milkYield.split("-")[1] || a.milkYield.split("-")[0]);
          const bYield = parseInt(b.milkYield.split("-")[1] || b.milkYield.split("-")[0]);
          return bYield - aYield; // Descending order
        case "weight":
          const aWeight = parseInt(a.avgWeight.split("-")[1] || a.avgWeight.split("-")[0]);
          const bWeight = parseInt(b.avgWeight.split("-")[1] || b.avgWeight.split("-")[0]);
          return bWeight - aWeight; // Descending order
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, typeFilter, sortBy, language]);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header 
        language={language} 
        onLanguageChange={setLanguage}
        onSearch={setSearchQuery}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <Select value={typeFilter} onValueChange={(value: "all" | "cattle" | "buffalo") => setTypeFilter(value)}>
                  <SelectTrigger className="w-40">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.allBreeds}</SelectItem>
                    <SelectItem value="cattle">{t.cattle}</SelectItem>
                    <SelectItem value="buffalo">{t.buffalo}</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={(value: "name" | "milkYield" | "weight") => setSortBy(value)}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">{t.name}</SelectItem>
                    <SelectItem value="milkYield">{t.milkYield}</SelectItem>
                    <SelectItem value="weight">{t.weight}</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            {t.showing} {filteredAndSortedBreeds.length} {t.of} {breeds.length} {t.breeds}
          </p>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-primary/10">
              {breeds.filter(b => b.type === "cattle").length} {t.cattle}
            </Badge>
            <Badge variant="outline" className="bg-success/10">
              {breeds.filter(b => b.type === "buffalo").length} {t.buffalo}
            </Badge>
          </div>
        </div>

        {/* Breed Grid/List */}
        {filteredAndSortedBreeds.length > 0 ? (
          <div className={
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }>
            {filteredAndSortedBreeds.map((breed) => (
              <BreedCard
                key={breed.id}
                breed={breed}
                language={language}
                onClick={() => console.log("Navigate to breed detail:", breed.id)}
              />
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t.noResults}
                </h3>
                <p className="text-muted-foreground">
                  {t.noResultsDesc}
                </p>
              </div>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default BreedDatabase;