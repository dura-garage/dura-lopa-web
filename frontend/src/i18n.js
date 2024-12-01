import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Dura Lopa",
      description: "Learn and preserve the Dura language.",
      getStarted: "Get Started",
    },
  },
  ne: {
    translation: {
      welcome: "दुरा लोपामा स्वागत छ।",
      description: "दुरा भाषा सिकौँ र संरक्षण गरौँ।",
      getStarted: "सुरु गर्नुहोस्",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // select default language
  fallbackLng: "en",
});

export default i18n;
