import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Language } from "../types/i18n";

const resources = {
  en: {
    translation: {
      welcome: "Hello, I'm RealbroNoh",
      description: "this is my resume",
    },
  },
  ko: {
    translation: {
      welcome: "안녕하세요? 저는 노진형입니다.",
      description: "이력서입니다.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Language.ENGLISH, // default language
  fallbackLng: Language.ENGLISH,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
