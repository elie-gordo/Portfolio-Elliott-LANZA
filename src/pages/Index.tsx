
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import WelcomeCard from "@/components/IndexPage/WelcomeCard";
import AboutMeCard from "@/components/IndexPage/AboutMeCard";
import DateTimeCard from "@/components/IndexPage/DateTimeCard";
import SocialCard from "@/components/IndexPage/SocialCard";
import ProjectsCard from "@/components/IndexPage/ProjectsCard";
import ExperienceCard from "@/components/IndexPage/ExperienceCard";
import EducationCard from "@/components/IndexPage/EducationCard";
import GoalsCard from "@/components/IndexPage/GoalsCard";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="layout-container">
      <div className="content-wrapper">
        <div className={`bento-grid ${isVisible ? 'staggered-fade-in' : ''}`}>
          <WelcomeCard />
          <AboutMeCard />
          <DateTimeCard />
          <SocialCard />
          <ProjectsCard />
          <ExperienceCard />
          <EducationCard />
          <GoalsCard />
        </div>
      </div>
      
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
