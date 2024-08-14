import { useParams } from "react-router-dom";
import SectionSkeltion from "./SectionSkeltion";
import { useTranslation } from "react-i18next";

const EtcSection = () => {
  const { lang } = useParams();
  const { t } = useTranslation();
  return (
    <SectionSkeltion title="Etc">
      <div className="flex flex-col">
        <a href={`https://blog.realbro.dev/${lang}`}>
          <p>{t("etc.blog")}</p>
        </a>
        <a href={`https://blog.realbro.dev/en/articles`}>
          <p>{t("etc.wsj_tldr")}</p>
        </a>
      </div>
    </SectionSkeltion>
  );
};

export default EtcSection;
