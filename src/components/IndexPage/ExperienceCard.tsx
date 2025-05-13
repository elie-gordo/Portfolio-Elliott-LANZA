
import React from "react";
import TimelineItem from "./TimelineItem";

const ExperienceCard = () => {
  const experiences = [
    {
      title: "InvestAi — Fondateur & Développeur",
      organization: "",
      period: "",
      description: "InvestAi est un SaaS que j'ai entièrement conçu et développé, dédié à la simplification et l'automatisation de l'analyse d'investissement. Grâce à l'intelligence artificielle, il permet aux utilisateurs d'accéder à des recommandations stratégiques personnalisées, tout en rendant la gestion de portefeuille plus intuitive.\n\nDu design produit à l'architecture backend, j'ai piloté chaque étape du développement afin de proposer une solution fiable, performante et centrée utilisateur.\n\n🔧 Stack : React, Node.js, Python, PostgreSQL, GPT API, Stripe, etc."
    },
    {
      title: "Orion Solution — Cofondateur",
      organization: "",
      period: "",
      description: "Avec mon associé, nous avons lancé Orion Solution, une agence spécialisée dans l'automatisation des processus métiers pour PME et startups.\n\nNotre mission : faire gagner du temps à nos clients grâce à des workflows intelligents (n8n, Make, Zapier), des intégrations sur mesure, et des bots qui boostent leur productivité au quotidien.\n\nJ'interviens sur la partie tech, de la stratégie d'automatisation à l'implémentation concrète.\n\n📈 Domaines couverts : gestion des leads, automatisation e-commerce, suivi de commandes, CRM, facturation, outils internes."
    },
    {
      title: "Développeur FullStack",
      organization: "Giant Consulting",
      period: "",
      description: "Depuis plusieurs mois, je travaille en tant que développeur FullStack pour Giant Consulting, une agence de conseil qui accompagne les entreprises dans leur transformation digitale.\n\nJ'interviens régulièrement sur des missions variées : maintenance d'outils internes, développement de dashboards, création d'APIs ou refonte de front-end.\n\nCette collaboration me permet de rester au contact des problématiques concrètes des clients tout en cultivant un code propre, scalable et bien documenté.\n\n🧰 Techs utilisées : Vue.js / React, Node.js, MongoDB, REST APIs, GitLab CI/CD."
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
