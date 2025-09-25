export interface Breed {
  id: string;
  name: string;
  nameHi: string;
  type: "cattle" | "buffalo";
  origin: string;
  originHi: string;
  image: string;
  characteristics: string[];
  characteristicsHi: string[];
  avgWeight: string;
  avgWeightHi: string;
  milkYield: string;
  milkYieldHi: string;
  primaryUse: string;
  primaryUseHi: string;
  description: string;
  descriptionHi: string;
}

export const breeds: Breed[] = [
  {
    id: "gir",
    name: "Gir",
    nameHi: "गिर",
    type: "cattle",
    origin: "Gujarat, India",
    originHi: "गुजरात, भारत",
    image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=300&fit=crop",
    characteristics: ["Distinctive dome-shaped forehead", "Drooping ears", "Red and white patches"],
    characteristicsHi: ["विशिष्ट गुंबद आकार का माथा", "लटकते कान", "लाल और सफेद धब्बे"],
    avgWeight: "385-500 kg",
    avgWeightHi: "385-500 किलो",
    milkYield: "10-18 liters/day",
    milkYieldHi: "10-18 लीटर/दिन",
    primaryUse: "Dairy",
    primaryUseHi: "दुग्ध उत्पादन",
    description: "One of the best indigenous dairy breeds known for high milk yield and disease resistance.",
    descriptionHi: "उच्च दूध उत्पादन और रोग प्रतिरोधक क्षमता के लिए प्रसिद्ध सर्वश्रेष्ठ देशी डेयरी नस्लों में से एक।"
  },
  {
    id: "sahiwal",
    name: "Sahiwal",
    nameHi: "साहीवाल",
    type: "cattle",
    origin: "Punjab, Pakistan/India",
    originHi: "पंजाब, पाकिस्तान/भारत",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&h=300&fit=crop",
    characteristics: ["Reddish brown color", "Loose skin", "Heat tolerant"],
    characteristicsHi: ["लाल-भूरा रंग", "ढीली त्वचा", "गर्मी सहनशील"],
    avgWeight: "400-500 kg",
    avgWeightHi: "400-500 किलो",
    milkYield: "12-18 liters/day",
    milkYieldHi: "12-18 लीटर/दिन",
    primaryUse: "Dairy",
    primaryUseHi: "दुग्ध उत्पादन",  
    description: "Known for excellent milk production and adaptability to tropical climates.",
    descriptionHi: "उत्कृष्ट दूध उत्पादन और उष्णकटिबंधीय जलवायु में अनुकूलन के लिए प्रसिद्ध।"
  },
  {
    id: "red-sindhi",
    name: "Red Sindhi",
    nameHi: "लाल सिंधी",
    type: "cattle",
    origin: "Sindh, Pakistan",
    originHi: "सिंध, पाकिस्तान",
    image: "https://images.unsplash.com/photo-1587829002307-1b21bb8a7e54?w=400&h=300&fit=crop",
    characteristics: ["Red colored coat", "Compact body", "Good milk quality"],
    characteristicsHi: ["लाल रंग का कोट", "संक्षिप्त शरीर", "उत्तम दूध गुणवत्ता"],
    avgWeight: "300-400 kg",
    avgWeightHi: "300-400 किलो",
    milkYield: "8-15 liters/day",
    milkYieldHi: "8-15 लीटर/दिन",
    primaryUse: "Dairy",
    primaryUseHi: "दुग्ध उत्पादन",
    description: "Hardy breed with good milk production and heat tolerance.",
    descriptionHi: "अच्छे दूध उत्पादन और गर्मी सहनशीलता वाली कठोर नस्ल।"
  },
  {
    id: "tharparkar",
    name: "Tharparkar",
    nameHi: "थारपारकर",
    type: "cattle",
    origin: "Rajasthan, India",
    originHi: "राजस्थान, भारत",
    image: "https://images.unsplash.com/photo-1551824284-e0ce4c8e95f1?w=400&h=300&fit=crop",
    characteristics: ["White/grey colored", "Drought resistant", "Dual purpose"],
    characteristicsHi: ["सफेद/धूसर रंग", "सूखा प्रतिरोधी", "द्विउद्देश्यीय"],
    avgWeight: "400-500 kg",
    avgWeightHi: "400-500 किलो",
    milkYield: "10-15 liters/day",
    milkYieldHi: "10-15 लीटर/दिन",
    primaryUse: "Dual purpose",
    primaryUseHi: "द्विउद्देश्यीय",
    description: "Excellent adaptation to arid conditions with good milk and draft capacity.",
    descriptionHi: "अच्छी दूध और कार्य क्षमता के साथ शुष्क परिस्थितियों में उत्कृष्ट अनुकूलन।"
  },
  {
    id: "murrah",
    name: "Murrah",
    nameHi: "मुर्रा",
    type: "buffalo",
    origin: "Haryana, India",
    originHi: "हरियाणा, भारत",
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop",
    characteristics: ["Jet black color", "Curled horns", "High milk yield"],
    characteristicsHi: ["काला रंग", "मुड़े हुए सींग", "उच्च दूध उत्पादन"],
    avgWeight: "500-700 kg",
    avgWeightHi: "500-700 किलो",
    milkYield: "15-25 liters/day",
    milkYieldHi: "15-25 लीटर/दिन",
    primaryUse: "Dairy",
    primaryUseHi: "दुग्ध उत्पादन",
    description: "World's best dairy buffalo breed with highest milk production.",
    descriptionHi: "सर्वोच्च दूध उत्पादन के साथ विश्व की सर्वश्रेष्ठ डेयरी भैंस नस्ल।"
  },
  {
    id: "nili-ravi",
    name: "Nili-Ravi",
    nameHi: "नीली-रावी",
    type: "buffalo",
    origin: "Punjab, Pakistan/India",
    originHi: "पंजाब, पाकिस्तान/भारत",
    image: "/api/placeholder/300/200",
    characteristics: ["Dark blue/black color", "Wall eyes", "Large body"],
    characteristicsHi: ["गहरा नीला/काला रंग", "दीवार आंखें", "बड़ा शरीर"],
    avgWeight: "450-650 kg",
    avgWeightHi: "450-650 किलो",
    milkYield: "12-20 liters/day",
    milkYieldHi: "12-20 लीटर/दिन",
    primaryUse: "Dairy",
    primaryUseHi: "दुग्ध उत्पादन",
    description: "High-yielding buffalo breed known for excellent milk quality.",
    descriptionHi: "उत्कृष्ट दूध गुणवत्ता के लिए प्रसिद्ध उच्च उत्पादक भैंस नस्ल।"
  },
  {
    id: "bhadawari",
    name: "Bhadawari",
    nameHi: "भदावरी",
    type: "buffalo",
    origin: "Uttar Pradesh, India",
    originHi: "उत्तर प्रदेश, भारत",
    image: "/api/placeholder/300/200",
    characteristics: ["Light brown color", "Compact size", "Rich milk"],
    characteristicsHi: ["हल्का भूरा रंग", "संक्षिप्त आकार", "समृद्ध दूध"],
    avgWeight: "350-450 kg",
    avgWeightHi: "350-450 किलो",
    milkYield: "6-10 liters/day",
    milkYieldHi: "6-10 लीटर/दिन",
    primaryUse: "Dairy",
    primaryUseHi: "दुग्ध उत्पादन",
    description: "Small-sized buffalo with rich milk containing high fat content.",
    descriptionHi: "उच्च वसा युक्त समृद्ध दूध देने वाली छोटे आकार की भैंस।"
  },
  {
    id: "surti",
    name: "Surti",
    nameHi: "सूरती",
    type: "buffalo",
    origin: "Gujarat, India",
    originHi: "गुजरात, भारत",
    image: "/api/placeholder/300/200",
    characteristics: ["Medium size", "Good temperament", "Curved horns"],
    characteristicsHi: ["मध्यम आकार", "अच्छा स्वभाव", "वक्रित सींग"],
    avgWeight: "400-500 kg",
    avgWeightHi: "400-500 किलो",
    milkYield: "8-12 liters/day",
    milkYieldHi: "8-12 लीटर/दिन",
    primaryUse: "Dairy",
    primaryUseHi: "दुग्ध उत्पादन",
    description: "Medium-sized buffalo breed with consistent milk production.",
    descriptionHi: "निरंतर दूध उत्पादन के साथ मध्यम आकार की भैंस नस्ल।"
  }
];