import { TFunction } from "i18next";
import SectionSkeltion from "./SectionSkeltion";
import { useTranslation } from "react-i18next";

interface ExperienceItem {
  title: string;
  subtitle: string;
  url: string;
  duration: string;
  descriptions: string[];
}

const getExperiences = (t: TFunction) => {
  return [
    {
      title: t("experience.v6x.title"),
      subtitle: t("experience.v6x.subtitle"),
      url: t("experience.v6x.url"),
      duration: t("experience.v6x.duration"),
      descriptions: [
        t("experience.v6x.description_1"),
        t("experience.v6x.description_2"),
        t("experience.v6x.description_3"),
        t("experience.v6x.description_4"),
        t("experience.v6x.description_5"),
        t("experience.v6x.description_6"),
        t("experience.v6x.description_7"),
      ],
    },
    {
      title: t("experience.sw_jungle.title"),
      subtitle: t("experience.sw_jungle.subtitle"),
      url: t("experience.sw_jungle.url"),
      duration: t("experience.sw_jungle.duration"),
      descriptions: [
        t("experience.sw_jungle.description_1"),
        t("experience.sw_jungle.description_2"),
        t("experience.sw_jungle.description_3"),
      ],
    },
  ];
};

const ExperienceSection = () => {
  const { t } = useTranslation();
  const experiences = getExperiences(t);
  return (
    <SectionSkeltion title="Experience">
      {experiences.map((experience) => (
        <Experience experience={experience} key={experience.title} />
      ))}
    </SectionSkeltion>
  );
};

const Experience = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,auto)_1fr] items-center md:items-start gap-4 md:gap-12 w-full">
      <div className="flex flex-col items-center md:items-start">
        <a href={experience.url}>
          <h3>{experience.title}</h3>
        </a>
        <h4>{experience.subtitle}</h4>
        <p>{experience.duration}</p>
      </div>
      <ul className="place-self-center md:place-self-auto">
        {experience.descriptions.map((desc, idx) => {
          return <li key={`${experience.title}-desc-${idx}`}>{desc}</li>;
        })}
      </ul>
    </div>
  );
};

export default ExperienceSection;
