import SectionSkeltion from "./SectionSkeltion";
import AvatarImage from "../../images/jonathan-livingston-seagull.jpg";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

const getDescriptions = (t: TFunction) => {
  return [
    t("about.description_1"),
    t("about.description_2"),
    t("about.description_3"),
    t("about.description_4"),
  ];
};

const AboutMeSection = () => {
  return (
    <SectionSkeltion title="About Me">
      <div className="flex flex-col md:flex-row gap-4 md:gap-14 w-full">
        <Avatar />
        <Descriptions />
      </div>
    </SectionSkeltion>
  );
};

const Descriptions = () => {
  const { t } = useTranslation();
  const descriptions = getDescriptions(t);
  return (
    <div className="flex-grow">
      {descriptions.map((description, idx) => (
        <p key={`about-desc-${idx}`}>{description}</p>
      ))}
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="flex-shrink-0 self-center md:self-start flex justify-center items-center size-32 sm:size-48 rounded-full overflow-hidden mt-5">
      <img
        className="max-w-full h-auto block"
        src={AvatarImage}
        alt="avatar img"
      />
    </div>
  );
};

export default AboutMeSection;
