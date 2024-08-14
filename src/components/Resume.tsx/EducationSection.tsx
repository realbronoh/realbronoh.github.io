import { TFunction } from "i18next";
import SectionSkeltion from "./SectionSkeltion";
import { useTranslation } from "react-i18next";

interface Education {
  title: string;
  duration: string;
  descriptions: string[];
}

const getEducations = (t: TFunction) => {
  return [
    {
      title: t("education.college.title"),
      duration: t("education.college.duration"),
      descriptions: [t("education.college.desc_1")],
    },
    {
      title: t("education.highschool.title"),
      duration: t("education.highschool.duration"),
      descriptions: [],
    },
  ];
};

const EducationSection = () => {
  const { t } = useTranslation();
  const educations = getEducations(t);
  return (
    <SectionSkeltion title="Education">
      {educations.map((education) => (
        <Education education={education} key={`${education.title}`} />
      ))}
    </SectionSkeltion>
  );
};

const Education = ({ education }: { education: Education }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,auto)_1fr] items-center md:items-start gap-4 md:gap-12 w-full">
      <div className="flex flex-col items-center md:items-start">
        <h3>{education.title}</h3>
        <p>{education.duration}</p>
      </div>
      <ul className="place-self-center md:place-self-auto">
        {education.descriptions.map((detail, idx) => {
          return <li key={`${education.title}-desc-${idx}`}>{detail}</li>;
        })}
      </ul>
    </div>
  );
};

export default EducationSection;
