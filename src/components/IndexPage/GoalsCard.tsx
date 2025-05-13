
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
      title: "Objectifs Court Terme",
      goals: [
        "Maîtriser les dernières technologies frontend (React, Next.js, Tailwind, etc.)",
        "Contribuer à des projets open source pour rester à jour et donner en retour à la communauté.",
        "Obtenir une certification en IA pour renforcer l'expertise d'InvestAi.",
        "Structurer les process d'Orion Solution via des outils no-code (n8n, Make, Zapier) pour industrialiser les automatisations.",
        "Itérer rapidement sur InvestAi via les retours des premiers utilisateurs et tests A/B."
      ]
    },
    {
      title: "Objectifs Moyen Terme",
      goals: [
        "Diriger une équipe de développement pour porter les évolutions de mes produits SaaS.",
        "Lancer un produit SaaS indépendant (→ InvestAi) et l'amener à ses premiers MRR significatifs.",
        "Développer une offre spécialisée chez Orion Solution pour des secteurs cibles (e-commerce, finance, PME tech…).",
        "Partager mes connaissances via un blog tech orienté IA, SaaS et automatisation.",
        "Mettre en place un CRM et un tunnel de vente automatisé pour Orion Solution."
      ]
    },
    {
      title: "Objectifs Long Terme",
      goals: [
        "Créer ma propre entreprise de technologie (→ objectif déjà en cours avec Orion & InvestAi).",
        "Faire d'InvestAi une référence dans l'IA appliquée à l'investissement personnel et pro.",
        "Positionner Orion Solution comme une agence leader de l'automatisation en Europe francophone.",
        "Devenir expert en architecture de systèmes pour garantir la scalabilité de mes produits.",
        "Mentorer la prochaine génération de développeurs/entrepreneurs à travers des formations ou du contenu."
      ]
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
