import AboutMeSection from "./AboutMeSection";
import EducationSection from "./EducationSection";
import EtcSection from "./EtcSection";
import ExperienceSection from "./ExperienceSection";
import Header from "./Header";
import SkillSection from "./SkillSection";

const Resume = () => {
  return (
    <>
      <Header />
      <main>
        <AboutMeSection />
        <ExperienceSection />
        <SkillSection />
        <EducationSection />
        <EtcSection />
      </main>
    </>
  );
};

export default Resume;
