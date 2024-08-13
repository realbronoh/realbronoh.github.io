import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Language } from "../types/i18n";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Language.ENGLISH,
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
