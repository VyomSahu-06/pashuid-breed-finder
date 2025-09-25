import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Users, Award, Zap, Shield } from "lucide-react";
import Header from "@/components/Header";

const translations = {
  en: {
    title: "About pashuID",
    subtitle: "Empowering farmers with AI-driven livestock identification",
    mission: {
      title: "Our Mission",
      description: "To revolutionize livestock management by providing accurate, instant breed identification using cutting-edge AI technology, making it accessible to farmers, veterinarians, and agricultural professionals across India.",
    },
    features: {
      title: "Why Choose pashuID?",
      aiPowered: {
        title: "AI-Powered Recognition",
        description: "Advanced deep learning models trained on thousands of cattle and buffalo images for accurate breed identification.",
      },
      instant: {
        title: "Instant Results",
        description: "Get breed identification and detailed information within seconds of uploading an image.",
      },
      comprehensive: {
        title: "Comprehensive Database",
        description: "Extensive database of Indian cattle and buffalo breeds with detailed characteristics and care information.",
      },
      multilingual: {
        title: "Multilingual Support",
        description: "Available in English and Hindi to serve diverse user communities across India.",
      },
      offline: {
        title: "Offline Capability",
        description: "Core features work offline, ensuring accessibility in remote areas with limited internet connectivity.",
      },
      secure: {
        title: "Secure & Private",
        description: "Your data is processed securely with privacy protection and no storage of personal images.",
      },
    },
    team: {
      title: "Built for Farmers",
      description: "pashuID is developed by a team of agricultural technologists, AI researchers, and domain experts who understand the challenges faced by livestock farmers in India. Our goal is to bridge the technology gap and provide practical, easy-to-use tools that make a real difference in farming communities.",
    },
    impact: {
      title: "Making an Impact",
      stats: {
        accuracy: "95%+ Accuracy",
        breeds: "50+ Breeds",
        users: "10K+ Users",
        languages: "2 Languages",
      },
    },
  },
  hi: {
    title: "pashuID के बारे में",
    subtitle: "एआई-संचालित पशुधन पहचान के साथ किसानों को सशक्त बनाना",
    mission: {
      title: "हमारा मिशन",
      description: "अत्याधुनिक एआई तकनीक का उपयोग करके सटीक, तत्काल नस्ल पहचान प्रदान करके पशुधन प्रबंधन में क्रांति लाना, इसे भारत भर के किसानों, पशु चिकित्सकों और कृषि पेशेवरों के लिए सुलभ बनाना।",
    },
    features: {
      title: "pashuID क्यों चुनें?",
      aiPowered: {
        title: "एआई-संचालित पहचान",
        description: "सटीक नस्ल पहचान के लिए हजारों गाय और भैंस की छवियों पर प्रशिक्षित उन्नत गहन शिक्षा मॉडल।",
      },
      instant: {
        title: "तुरंत परिणाम",
        description: "छवि अपलोड करने के सेकंडों के भीतर नस्ल पहचान और विस्तृत जानकारी प्राप्त करें।",
      },
      comprehensive: {
        title: "व्यापक डेटाबेस",
        description: "विस्तृत विशेषताओं और देखभाल की जानकारी के साथ भारतीय गाय और भैंस की नस्लों का व्यापक डेटाबेस।",
      },
      multilingual: {
        title: "बहुभाषी समर्थन",
        description: "भारत भर में विविध उपयोगकर्ता समुदायों की सेवा के लिए अंग्रेजी और हिंदी में उपलब्ध।",
      },
      offline: {
        title: "ऑफलाइन क्षमता",
        description: "मुख्य सुविधाएं ऑफलाइन काम करती हैं, सीमित इंटरनेट कनेक्टिविटी वाले दूरदराज के क्षेत्रों में पहुंच सुनिश्चित करती हैं।",
      },
      secure: {
        title: "सुरक्षित और निजी",
        description: "आपका डेटा गोपनीयता सुरक्षा और व्यक्तिगत छवियों के भंडारण के बिना सुरक्षित रूप से संसाधित होता है।",
      },
    },
    team: {
      title: "किसानों के लिए बनाया गया",
      description: "pashuID कृषि तकनीशियनों, एआई शोधकर्ताओं और डोमेन विशेषज्ञों की एक टीम द्वारा विकसित किया गया है जो भारत में पशुधन किसानों के सामने आने वाली चुनौतियों को समझते हैं। हमारा लक्ष्य तकनीकी अंतर को पाटना और व्यावहारिक, उपयोग में आसान उपकरण प्रदान करना है जो कृषि समुदायों में वास्तविक अंतर लाते हैं।",
    },
    impact: {
      title: "प्रभाव बनाना",
      stats: {
        accuracy: "95%+ सटीकता",
        breeds: "50+ नस्लें",
        users: "10K+ उपयोगकर्ता",
        languages: "2 भाषाएं",
      },
    },
  },
};

const About = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const t = translations[language];

  const features = [
    {
      icon: Brain,
      title: t.features.aiPowered.title,
      description: t.features.aiPowered.description,
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Zap,
      title: t.features.instant.title,
      description: t.features.instant.description,
      color: "bg-warning/10 text-warning",
    },
    {
      icon: Target,
      title: t.features.comprehensive.title,
      description: t.features.comprehensive.description,
      color: "bg-success/10 text-success",
    },
    {
      icon: Users,
      title: t.features.multilingual.title,
      description: t.features.multilingual.description,
      color: "bg-secondary/10 text-secondary-foreground",
    },
    {
      icon: Award,
      title: t.features.offline.title,
      description: t.features.offline.description,
      color: "bg-accent/10 text-accent-foreground",
    },
    {
      icon: Shield,
      title: t.features.secure.title,
      description: t.features.secure.description,
      color: "bg-destructive/10 text-destructive",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header 
        language={language} 
        onLanguageChange={setLanguage}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                {t.mission.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t.mission.description}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            {t.features.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <Card className="mb-12 bg-gradient-primary text-primary-foreground shadow-lg">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">
                {t.impact.title}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <p className="text-2xl font-bold">{t.impact.stats.accuracy}</p>
                  <p className="text-primary-foreground/80 text-sm">{t.impact.stats.accuracy}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">{t.impact.stats.breeds}</p>
                  <p className="text-primary-foreground/80 text-sm">{t.impact.stats.breeds}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">{t.impact.stats.users}</p>
                  <p className="text-primary-foreground/80 text-sm">{t.impact.stats.users}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">{t.impact.stats.languages}</p>
                  <p className="text-primary-foreground/80 text-sm">{t.impact.stats.languages}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                {t.team.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t.team.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;