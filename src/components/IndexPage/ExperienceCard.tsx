
import React from "react";
import TimelineItem from "./TimelineItem";

const ExperienceCard = () => {
  const experiences = [
    {
      title: "Développeur Senior",
      organization: "Tech Company Inc.",
      period: "2020 - Présent",
      description: "Dirigé le développement de plusieurs projets à fort impact et mentoré des développeurs juniors."
    },
    {
      title: "Développeur Full Stack",
      organization: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description: "Développé et maintenu diverses applications web en utilisant des technologies modernes."
    },
    {
      title: "Développeur Frontend",
      organization: "Creative Web Studio",
      period: "2016 - 2018",
      description: "Créé des interfaces utilisateur réactives et amélioré les métriques de performance des sites web."
    }
  ];

  return (
    <div className="bento-card col-span-1 backdrop-blur-lg bg-gradient-to-br from-black/40 to-black/20">
      <h2 className="text-2xl font-bold mb-6 font-poppins">Expérience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            title={exp.title}
            organization={exp.organization}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
