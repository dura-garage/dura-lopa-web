import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      appName: "Dura Lopa",
      dictionary: "Dictionary",
      sentences: "Sentences",
      welcome: "Welcome to Dura Lopa Website",
      description: "Learn and preserve the Dura language.",
      getStarted: "Get Started",
      getStartedDescription:
        "Explore the Dura-Nepali-English trilingual dictionary.",
      dictionaryTitle: "Dura Language Dictionary",
      searchTerm: "Search Term",
      seeSentences: "See Sentences",
      seeSentencesDescription: "The Dura-Nepali bilingual sentences.",
      sentencesTitle: "Nepali-Dura Bilingual Sentences",
      totalSentences: "Total Sentences Count",
    },
  },
  ne: {
    translation: {
      appName: "दुरा लोपा",
      dictionary: "शब्दकोष",
      sentences: "वाक्यहरु",
      welcome: "दुरा लोपा वेबसाइटमा स्वागत छ।",
      description: "दुरा भाषा सिकौँ र संरक्षण गरौँ।",
      getStarted: "सुरु गर्नुहोस्",
      getStartedDescription: "दुरा-नेपाली-अङ्ग्रेजी शब्दकोष हेर्नुहोस्।",
      dictionaryTitle: "दुरा भाषाको शब्दकोश",
      searchTerm: "शब्द खोज्नुहोस्",
      seeSentences: "वाक्याहरु हेर्नुहोस्",
      seeSentencesDescription: "दुरा-नेपाली द्विभाषिक वाक्यहरु हेर्नुहोस्।",
      sentencesTitle: "नेपाली-दुरा द्विभाषिक वाक्यहरु",
      totalSentences: "जम्मा वाक्य सङ्ख्या",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ne", // select default language
  fallbackLng: "en",
});

export default i18n;
