import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, Check, ChevronDown, ChevronUp } from "lucide-react";

interface BreedPrediction {
  name: string;
  confidence: number;
  characteristics: string[];
  origin: string;
  avgWeight: string;
  milkYield?: string;
  primaryUse: string;
}

interface PredictionResultsProps {
  prediction: BreedPrediction;
  imagePreview: string;
  onTryAgain: () => void;
  onConfirm: () => void;
  language: "en" | "hi";
}

const translations = {
  en: {
    result: "Breed Identification Result",
    confidence: "Confidence",
    characteristics: "Key Characteristics",
    origin: "Origin",
    avgWeight: "Average Weight",
    milkYield: "Milk Yield",
    primaryUse: "Primary Use",
    tryAgain: "Try Again",
    confirm: "Confirm Result",
    showDetails: "Show Details",
    hideDetails: "Hide Details",
  },
  hi: {
    result: "नस्ल पहचान परिणाम",
    confidence: "विश्वसनीयता",
    characteristics: "मुख्य विशेषताएं",
    origin: "मूल स्थान",
    avgWeight: "औसत वजन",
    milkYield: "दूध उत्पादन",
    primaryUse: "मुख्य उपयोग",
    tryAgain: "फिर कोशिश करें",
    confirm: "परिणाम पुष्टि करें",
    showDetails: "विवरण दिखाएं",
    hideDetails: "विवरण छुपाएं",
  },
};

// Sample breed data (in real app, this would come from API)
const samplePredictions: BreedPrediction[] = [
  {
    name: "Holstein Friesian",
    confidence: 94,
    characteristics: ["Black and white patches", "Large frame", "High milk production"],
    origin: "Netherlands",
    avgWeight: "580-650 kg",
    milkYield: "25-30 liters/day",
    primaryUse: "Dairy",
  },
  {
    name: "Sahiwal",
    confidence: 89,
    characteristics: ["Reddish brown color", "Loose skin", "Heat tolerant"],
    origin: "Pakistan/India",
    avgWeight: "400-500 kg",
    milkYield: "12-18 liters/day",
    primaryUse: "Dairy",
  },
];

const PredictionResults = ({ 
  prediction, 
  imagePreview, 
  onTryAgain, 
  onConfirm, 
  language 
}: PredictionResultsProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedPrediction] = useState(samplePredictions[0]); // Use first sample
  
  const t = translations[language];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "bg-success";
    if (confidence >= 75) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto">
      {/* Image and Basic Result */}
      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-gradient-primary text-primary-foreground">
          <CardTitle className="text-xl">{t.result}</CardTitle>
        </CardHeader>
        
        <CardContent className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <img
                src={imagePreview}
                alt="Analyzed cattle"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {selectedPrediction.name}
                </h3>
                <p className="text-muted-foreground">{selectedPrediction.origin}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{t.confidence}</span>
                  <Badge variant="secondary" className={`${getConfidenceColor(selectedPrediction.confidence)} text-white`}>
                    {selectedPrediction.confidence}%
                  </Badge>
                </div>
                <Progress 
                  value={selectedPrediction.confidence} 
                  className="h-2"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={onTryAgain}
                  className="flex-1 hover:bg-accent"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  {t.tryAgain}
                </Button>
                
                <Button
                  onClick={onConfirm}
                  className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
                >
                  <Check className="w-4 h-4 mr-2" />
                  {t.confirm}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Information */}
      <Card className="shadow-md">
        <CardContent className="p-0">
          <Button
            variant="ghost"
            onClick={() => setShowDetails(!showDetails)}
            className="w-full p-4 justify-between text-left hover:bg-accent"
          >
            <span className="font-medium">
              {showDetails ? t.hideDetails : t.showDetails}
            </span>
            {showDetails ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
          
          {showDetails && (
            <div className="p-4 border-t space-y-6 bg-gradient-subtle">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{t.avgWeight}</h4>
                  <p className="text-muted-foreground">{selectedPrediction.avgWeight}</p>
                </div>
                
                {selectedPrediction.milkYield && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{t.milkYield}</h4>
                    <p className="text-muted-foreground">{selectedPrediction.milkYield}</p>
                  </div>
                )}
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{t.primaryUse}</h4>
                  <p className="text-muted-foreground">{selectedPrediction.primaryUse}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">{t.characteristics}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPrediction.characteristics.map((char, index) => (
                    <Badge key={index} variant="outline" className="bg-background">
                      {char}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionResults;