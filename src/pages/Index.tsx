import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import UploadZone from "@/components/UploadZone";
import PredictionResults from "@/components/PredictionResults";
import heroImage from "@/assets/hero-cattle.jpg";

interface UploadedImage {
  file: File;
  preview: string;
}

const translations = {
  en: {
    hero: {
      title: "Identify Cattle & Buffalo Breeds",
      subtitle: "Upload an image and let AI identify the breed with detailed information",
      description: "Advanced AI technology helps farmers, veterinarians, and enthusiasts identify cattle and buffalo breeds accurately for better livestock management.",
    },
    features: {
      title: "Why Choose pashuID?",
      accurate: "95%+ Accuracy",
      accurateDesc: "Advanced AI models trained on thousands of cattle images",
      instant: "Instant Results",
      instantDesc: "Get breed identification in seconds, not minutes",
      comprehensive: "Comprehensive Info",
      comprehensiveDesc: "Detailed breed characteristics, origin, and care tips",
    },
  },
  hi: {
    hero: {
      title: "गाय और भैंस की नस्लों की पहचान करें",
      subtitle: "तस्वीर अपलोड करें और एआई को विस्तृत जानकारी के साथ नस्ल की पहचान करने दें",
      description: "उन्नत एआई तकनीक किसानों, पशु चिकित्सकों और उत्साही लोगों को बेहतर पशुधन प्रबंधन के लिए गाय और भैंस की नस्लों की सटीक पहचान में मदद करती है।",
    },
    features: {
      title: "pashuID क्यों चुनें?",
      accurate: "95%+ सटीकता",
      accurateDesc: "हजारों गायों की तस्वीरों पर प्रशिक्षित उन्नत एआई मॉडल",
      instant: "तुरंत परिणाम",
      instantDesc: "मिनटों में नहीं, सेकंडों में नस्ल की पहचान पाएं",
      comprehensive: "व्यापक जानकारी",
      comprehensiveDesc: "विस्तृत नस्ल विशेषताएं, मूल, और देखभाल के टिप्स",
    },
  },
};

const Index = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);
  const [showResults, setShowResults] = useState(false);

  const t = translations[language];

  const handleImageUpload = (file: File, preview: string) => {
    setUploadedImage({ file, preview });
    // Simulate API call delay
    setTimeout(() => {
      setShowResults(true);
    }, 1500);
  };

  const handleTryAgain = () => {
    setUploadedImage(null);
    setShowResults(false);
  };

  const handleConfirm = () => {
    // In real app, this would save the result or navigate to detailed view
    console.log("Result confirmed");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header 
        language={language} 
        onLanguageChange={setLanguage}
      />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {!uploadedImage && (
          <>
            {/* Hero Section */}
            <section className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* Hero Image */}
              <div className="relative max-w-4xl mx-auto">
                <img
                  src={heroImage}
                  alt="Cattle in pastoral setting"
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              </div>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.hero.description}
              </p>
            </section>

            {/* Upload Section */}
            <section className="space-y-6">
              <UploadZone onImageUpload={handleImageUpload} language={language} />
            </section>

            {/* Features Section */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-foreground">
                {t.features.title}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-smooth">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      ✓
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground">{t.features.accurate}</h3>
                  <p className="text-sm text-muted-foreground">{t.features.accurateDesc}</p>
                </Card>

                <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-smooth">
                  <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto">
                    <Badge variant="secondary" className="bg-warning text-warning-foreground">
                      ⚡
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground">{t.features.instant}</h3>
                  <p className="text-sm text-muted-foreground">{t.features.instantDesc}</p>
                </Card>

                <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-smooth">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      📚
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground">{t.features.comprehensive}</h3>
                  <p className="text-sm text-muted-foreground">{t.features.comprehensiveDesc}</p>
                </Card>
              </div>
            </section>
          </>
        )}

        {/* Results Section */}
        {uploadedImage && showResults && (
          <section className="space-y-6">
            <PredictionResults
              prediction={{
                name: "Holstein Friesian",
                confidence: 94,
                characteristics: ["Black and white patches", "Large frame", "High milk production"],
                origin: "Netherlands",
                avgWeight: "580-650 kg",
                milkYield: "25-30 liters/day",
                primaryUse: "Dairy",
              }}
              imagePreview={uploadedImage.preview}
              onTryAgain={handleTryAgain}
              onConfirm={handleConfirm}
              language={language}
            />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            {language === "en" 
              ? "© 2024 pashuID. Empowering farmers with AI technology."
              : "© 2024 pashuID. एआई तकनीक से किसानों को सशक्त बनाना।"
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;