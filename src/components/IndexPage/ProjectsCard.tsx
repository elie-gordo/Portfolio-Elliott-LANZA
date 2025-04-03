
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsCard = () => {
  const projects = [
    {
      title: "Projet 1",
      description: "Plateforme e-commerce avec interface moderne",
      category: "Web App",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Projet 2",
      description: "Application de gestion de tâches",
      category: "Design",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e44a?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Projet 3",
      description: "Tableau de bord de prévisions météo",
      category: "Frontend",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Projet 4",
      description: "Outil d'analyse de médias sociaux",
      category: "Full Stack",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce64c42644a7?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Projet 5",
      description: "Application de reconnaissance d'image par IA",
      category: "Mobile",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Projet 6",
      description: "Application de chat en temps réel",
      category: "Backend",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80"
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
