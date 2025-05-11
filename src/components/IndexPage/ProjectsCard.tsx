
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsCard = () => {
  const projects = [
    {
      title: "🛒 Projet 1 – E-Commerce Moderne",
      description: "Une plateforme de vente en ligne intuitive avec une interface utilisateur épurée et responsive. Intégration complète d'un système de paiement sécurisé et d'un dashboard administrateur.",
      category: "#WebApp #UI/UX #React #Stripe",
      imageUrl: "https://images.unsplash.com/photo-1526379879527-8559ecfd8bf7?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "✅ Projet 2 – Gestion de Tâches",
      description: "Application élégante et ergonomique de gestion de tâches, pensée pour améliorer la productivité en équipe. Design centré utilisateur avec prototypage haute fidélité.",
      category: "#Design #Figma #Productivity",
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "☁️ Projet 3 – Dashboard Météo",
      description: "Un tableau de bord interactif affichant les prévisions météo en temps réel, alimenté par des APIs météo fiables et une interface fluide.",
      category: "#Frontend #API #VueJS #Weather",
      imageUrl: "https://images.unsplash.com/photo-1534794048419-48e110dca88e?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "📊 Projet 4 – Analyse Médias Sociaux",
      description: "Outil d'analyse des réseaux sociaux permettant de visualiser l'évolution d'une marque ou d'un sujet en ligne. Intégration de graphiques dynamiques et d'analyse sémantique.",
      category: "#FullStack #Node.js #MongoDB #DataViz",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "🤖 Projet 5 – Reconnaissance d'Image IA",
      description: "Application mobile capable d'identifier des objets ou scènes via la caméra en temps réel, utilisant un modèle de vision par ordinateur embarqué.",
      category: "#Mobile #TensorFlow #Flutter #AI",
      imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "💬 Projet 6 – Chat en Temps Réel",
      description: "Système de messagerie instantanée backend avec sockets pour des conversations fluides et en direct. Pensé pour être intégré dans des apps mobiles ou web.",
      category: "#Backend #Socket.IO #Node.js #Realtime",
      imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="bento-card col-span-3">
      <h2 className="text-2xl font-bold mb-6 font-poppins flex items-center">
        <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
          <span className="bg-white w-4 h-4 rounded-full animate-pulse-slow"></span>
        </span>
        Projets en Vedette
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard 
            key={i}
            index={i}
            title={project.title}
            description={project.description}
            category={project.category}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
