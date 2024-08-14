import { TFunction } from "i18next";
import SectionSkeltion from "./SectionSkeltion";
import { useTranslation } from "react-i18next";

interface Skill {
  title: string;
  descriptions: string[];
}

const getSkills = (t: TFunction) => {
  return [
    {
      title: t("skill.language.title"),
      descriptions: [
        t("skill.language.desc_typescript"),
        t("skill.language.desc_python"),
        t("skill.language.desc_bash"),
      ],
    },
    {
      title: t("skill.frontend.title"),
      descriptions: [
        t("skill.frontend.desc_react"),
        t("skill.frontend.desc_electron"),
        t("skill.frontend.desc_next"),
      ],
    },
    {
      title: t("skill.backend.title"),
      descriptions: [
        t("skill.backend.desc_aws"),
        t("skill.backend.desc_gcp"),
        t("skill.backend.desc_linux"),
      ],
    },
  ];
};

const SkillSection = () => {
  const { t } = useTranslation();
  const skills = getSkills(t);
  return (
    <SectionSkeltion title="Skills">
      {skills.map((skill) => (
        <Skill skill={skill} key={`${skill.title}`} />
      ))}
    </SectionSkeltion>
  );
};

const Skill = ({ skill }: { skill: Skill }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,auto)_1fr] items-center md:items-start gap-4 md:gap-12 w-full">
      <div className="flex flex-col items-center md:items-start">
        <h3>{skill.title}</h3>
      </div>
      <ul className="place-self-center md:place-self-auto">
        {skill.descriptions.map((detail, idx) => {
          return <li key={`${skill.title}-desc-${idx}`}>{detail}</li>;
        })}
      </ul>
    </div>
  );
};

export default SkillSection;
