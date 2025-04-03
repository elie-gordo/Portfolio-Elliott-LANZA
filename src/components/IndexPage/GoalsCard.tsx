
import React from "react";
import { ArrowRight } from "lucide-react";

interface GoalSetProps {
  title: string;
  goals: string[];
}

const GoalSet = ({ title, goals }: GoalSetProps) => (
  <div className="group">
    <h3 className="text-xl font-bold text-white flex items-center font-poppins">
      <span className="w-2 h-2 bg-white rounded-full mr-2 group-hover:animate-pulse"></span>
      {title}
    </h3>
    <ul className="mt-2 space-y-2">
      {goals.map((goal, i) => (
        <li key={i} className="text-gray-300 text-sm flex items-start font-poppins">
          <ArrowRight className="w-3 h-3 text-white/70 mt-1 mr-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          <span>{goal}</span>
        </li>
      ))}
    </ul>
  </div>
);

const GoalsCard = () => {
  const goalSets = [
    {
      title: "Court Terme",
      goals: ["Maîtriser les dernières technologies frontend", "Contribuer à des projets open source", "Obtenir une certification en IA"]
    },
    {
      title: "Moyen Terme",
      goals: ["Diriger une équipe de développement", "Lancer un produit SaaS indépendant", "Partager mes connaissances via un blog tech"]
    },
    {
      title: "Long Terme",
      goals: ["Créer ma propre entreprise de technologie", "Devenir expert en architecture de systèmes", "Mentorer la prochaine génération de développeurs"]
    }
  ];

  return (
    <div className="bento-card col-span-1 backdrop-blur-lg bg-gradient-to-br from-black/40 to-black/20">
      <h2 className="text-2xl font-bold mb-6 font-poppins">Mes Objectifs</h2>
      <div className="space-y-6">
        {goalSets.map((goalSet, index) => (
          <GoalSet key={index} title={goalSet.title} goals={goalSet.goals} />
        ))}
      </div>
    </div>
  );
};

export default GoalsCard;
