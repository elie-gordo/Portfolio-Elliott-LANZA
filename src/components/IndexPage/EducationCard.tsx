
import React from "react";
import TimelineItem from "./TimelineItem";

const EducationCard = () => {
  const educations = [
    {
      title: "Master en Développement Web",
      organization: "Université de Technologie",
      period: "2012 - 2014",
      description: "Spécialisation en développement d'applications web et technologies front-end modernes."
    },
    {
      title: "Licence en Informatique",
      organization: "École Supérieure d'Informatique",
      period: "2009 - 2012",
      description: "Formation en programmation, algorithmes et structures de données."
    },
    {
      title: "Certification en UX/UI Design",
      organization: "Design Academy",
      period: "2013",
      description: "Maîtrise des principes de design d'interface et d'expérience utilisateur."
    }
  ];

  return (
    <div className="bento-card col-span-1 backdrop-blur-lg bg-gradient-to-br from-black/40 to-black/20">
      <h2 className="text-2xl font-bold mb-6 font-poppins">École et Formation</h2>
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <TimelineItem
            key={index}
            title={edu.title}
            organization={edu.organization}
            period={edu.period}
            description={edu.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
