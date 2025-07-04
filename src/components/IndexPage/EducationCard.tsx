
import React from "react";
import TimelineItem from "./TimelineItem";

const EducationCard = () => {
  const educations = [
    {
      title: "OpenClassrooms",
      organization: "Cours en libre accès, Développement web",
      period: "févr. 2025",
      description: "Niveau : Acquisitions de nouvelles compétences en développement web\n\nJ'ai renforcé mes compétences en développement web fullstack grâce aux cours en accès libre sur OpenClassrooms. J'ai acquis une expertise en front-end (React.js, Angular) et back-end (Node.js, Django) tout en développant des projets concrets. Ce parcours m'a permis de maîtriser la création d'applications performantes et d'améliorer ma collaboration en méthodologies agiles.\n\nCompétences : AngularJS · React.js · Node.js · Django · Python (langage de programmation) · PHP · symfony"
    },
    {
      title: "EM-Lyon Business School",
      organization: "La Toile (l'école de la qualification numérique), Conception et développement web",
      period: "oct. 2024",
      description: "Activités et associations : Ambassadeur de promo\n\nSpécialisée en conception et développement web, j'ai acquis des compétences solides en création de sites web, intégration front-end (HTML, CSS, JavaScript). Ce parcours m'a permis de maîtriser les bases du développement web et d'acquérir une approche pratique pour construire des solutions numériques efficaces.\n\nCompétences : HTML · Feuilles de style en cascade (CSS) · JavaScript · MySQL · Figma (logiciel)"
    },
    {
      title: "Institut Artline",
      organization: "Mise à niveau en arts appliqués, Design graphique",
      period: "sept. 2017",
      description: "Lors de ma formation en Manaa (Mise à Niveau en Arts Appliqués), j'ai approfondi mes compétences en dessin, design graphique, et techniques d'expression visuelle. J'ai appris à maîtriser les outils créatifs tout en développant ma pensée critique, mon sens esthétique et ma capacité à travailler sur des projets multidisciplinaires\n\nCompétences : Adobe Creative Suite · Blender"
    }
  ];

  return (
    <div className="bento-card col-span-1 backdrop-blur-lg bg-gradient-to-br from-black/40 to-black/20">
      <h2 className="text-2xl font-bold mb-6 font-poppins">Écoles et Formations</h2>
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
