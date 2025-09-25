import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const translations = {
  en: {
    title: "Contact Us",
    subtitle: "Get in touch with the pashuID team",
    form: {
      title: "Send us a Message",
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "Enter your email address",
      subject: "Subject",
      subjectPlaceholder: "What is this regarding?",
      message: "Message",
      messagePlaceholder: "Tell us how we can help you...",
      send: "Send Message",
      sending: "Sending...",
    },
    contact: {
      title: "Contact Information",
      email: "Email Support",
      emailDesc: "Get help with technical issues",
      phone: "Phone Support",
      phoneDesc: "Monday to Friday, 9 AM - 6 PM IST",
      address: "Office Address",
      addressDesc: "Visit us at our development center",
    },
    success: "Message sent successfully! We'll get back to you soon.",
    error: "Failed to send message. Please try again.",
  },
  hi: {
    title: "संपर्क करें",
    subtitle: "pashuID टीम से संपर्क करें",
    form: {
      title: "हमें संदेश भेजें",
      name: "पूरा नाम",
      namePlaceholder: "अपना पूरा नाम दर्ज करें",
      email: "ईमेल पता",
      emailPlaceholder: "अपना ईमेल पता दर्ज करें",
      subject: "विषय",
      subjectPlaceholder: "यह किस बारे में है?",
      message: "संदेश",
      messagePlaceholder: "हमें बताएं कि हम आपकी कैसे मदद कर सकते हैं...",
      send: "संदेश भेजें",
      sending: "भेजा जा रहा है...",
    },
    contact: {
      title: "संपर्क जानकारी",
      email: "ईमेल सहायता",
      emailDesc: "तकनीकी समस्याओं के लिए सहायता प्राप्त करें",
      phone: "फोन सहायता",
      phoneDesc: "सोमवार से शुक्रवार, सुबह 9 बजे - शाम 6 बजे IST",
      address: "कार्यालय का पता",
      addressDesc: "हमारे विकास केंद्र पर हमसे मिलें",
    },
    success: "संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।",
    error: "संदेश भेजने में असफल। कृपया पुनः प्रयास करें।",
  },
};

const Contact = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const t = translations[language];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: language === "en" ? "Success!" : "सफलता!",
        description: t.success,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: language === "en" ? "Error" : "त्रुटि",
        description: t.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.email,
      content: "support@pashuid.com",
      description: t.contact.emailDesc,
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Phone,
      title: t.contact.phone,
      content: "+91 98765 43210",
      description: t.contact.phoneDesc,
      color: "bg-success/10 text-success",
    },
    {
      icon: MapPin,
      title: t.contact.address,
      content: "Agricultural Tech Hub, Bangalore, India",
      description: t.contact.addressDesc,
      color: "bg-warning/10 text-warning",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header 
        language={language} 
        onLanguageChange={setLanguage}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                {t.form.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {t.form.name}
                    </label>
                    <Input
                      placeholder={t.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {t.form.email}
                    </label>
                    <Input
                      type="email"
                      placeholder={t.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t.form.subject}
                  </label>
                  <Input
                    placeholder={t.form.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {t.form.message}
                  </label>
                  <Textarea
                    placeholder={t.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={6}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      {t.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t.form.send}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  {t.contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${info.color}`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {info.content}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Help */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-bold">
                  {language === "en" ? "Need Quick Help?" : "त्वरित सहायता चाहिए?"}
                </h3>
                <p className="text-primary-foreground/90">
                  {language === "en" 
                    ? "Check our FAQ section or browse the breed database for instant answers."
                    : "तुरंत उत्तर के लिए हमारे FAQ अनुभाग देखें या नस्ल डेटाबेस ब्राउज़ करें।"
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" className="flex-1">
                    {language === "en" ? "View FAQ" : "FAQ देखें"}
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    {language === "en" ? "Browse Database" : "डेटाबेस ब्राउज़ करें"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;