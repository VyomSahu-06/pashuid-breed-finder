import { useState } from "react";
import Header from "@/components/Header";
import UploadZone from "@/components/UploadZone";
import PredictionResults from "@/components/PredictionResults";

interface UploadedImage {
  file: File;
  preview: string;
}

const translations = {
  en: {
    title: "Identify Cattle & Buffalo Breed",
    subtitle: "Upload an image to get instant AI-powered breed identification",
    description: "Our advanced AI technology analyzes your image and provides accurate breed identification along with detailed information about characteristics, origin, and care requirements.",
  },
  hi: {
    title: "गाय और भैंस की नस्ल पहचानें",
    subtitle: "तुरंत एआई-संचालित नस्ल पहचान के लिए एक छवि अपलोड करें",
    description: "हमारी उन्नत एआई तकनीक आपकी छवि का विश्लेषण करती है और विशेषताओं, मूल और देखभाल आवश्यकताओं के बारे में विस्तृत जानकारी के साथ सटीक नस्ल पहचान प्रदान करती है।",
  },
};

const IdentifyBreed = () => {
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

      <main className="container mx-auto px-4 py-8">
        {!uploadedImage && (
          <>
            {/* Page Header */}
            <div className="text-center space-y-6 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.subtitle}
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.description}
              </p>
            </div>

            {/* Upload Section */}
            <section className="space-y-6">
              <UploadZone onImageUpload={handleImageUpload} language={language} />
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
    </div>
  );
};

export default IdentifyBreed;