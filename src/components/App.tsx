import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "../utils/i18n";
import { Language } from "../types/i18n";
import Resume from "./Resume.tsx";

function App() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const notSupportedLanguage =
      lang === undefined ||
      (lang !== Language.ENGLISH && lang !== Language.KOREAN);
    if (notSupportedLanguage) {
      window.location.href = `${window.location.origin}/#/${Language.ENGLISH}`;
      return;
    }

    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, i18n, navigate]);

  return (
    <div className="prose max-w-4xl mx-auto">
      <Resume />
    </div>
  );
}

export default App;
