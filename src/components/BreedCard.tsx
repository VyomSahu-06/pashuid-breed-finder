import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Droplets, Weight } from "lucide-react";
import type { Breed } from "@/data/breeds";

interface BreedCardProps {
  breed: Breed;
  language: "en" | "hi";
  onClick?: () => void;
}

const BreedCard = ({ breed, language, onClick }: BreedCardProps) => {
  const name = language === "hi" ? breed.nameHi : breed.name;
  const origin = language === "hi" ? breed.originHi : breed.origin;
  const avgWeight = language === "hi" ? breed.avgWeightHi : breed.avgWeight;
  const milkYield = language === "hi" ? breed.milkYieldHi : breed.milkYield;
  const primaryUse = language === "hi" ? breed.primaryUseHi : breed.primaryUse;
  const description = language === "hi" ? breed.descriptionHi : breed.description;

  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30"
      onClick={onClick}
    >
      <CardHeader className="p-0">
        <div className="relative h-48 bg-gradient-subtle rounded-t-lg overflow-hidden">
          <img
            src={breed.image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge 
              variant="secondary" 
              className={`${
                breed.type === "cattle" 
                  ? "bg-primary/90 text-primary-foreground" 
                  : "bg-success/90 text-success-foreground"
              } backdrop-blur-sm`}
            >
              {breed.type === "cattle" 
                ? (language === "hi" ? "गाय" : "Cattle")
                : (language === "hi" ? "भैंस" : "Buffalo")
              }
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </CardTitle>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <MapPin className="h-3 w-3" />
            <span>{origin}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2 text-xs">
            <Weight className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">{avgWeight}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Droplets className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">{milkYield}</span>
          </div>
        </div>

        <div className="pt-2">
          <Badge variant="outline" className="text-xs">
            {primaryUse}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default BreedCard;