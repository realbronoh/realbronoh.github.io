import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "../utils/i18n";
import { Language } from "../types/i18n";

function App() {
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
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
    <div className="prose">
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}

export default App;
