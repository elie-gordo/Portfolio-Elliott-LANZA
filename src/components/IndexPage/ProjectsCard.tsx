
import React from "react";
import ProjectCard from "./ProjectCard";
import startupSaas from "@/assets/startup-saas.jpg";
import pythonJs from "@/assets/python-js.jpg";
import web3Blockchain from "@/assets/web3-blockchain.jpg";
import aiAutomation from "@/assets/ai-automation.jpg";
import schoolProjects from "@/assets/school-projects.jpg";
import designCreation from "@/assets/design-creation.jpg";

const ProjectsCard = () => {
  const projects = [
    {
      title: "Startup & SaaS",
      description: "Développement de plateformes SaaS scalables et d'applications startup avec focus sur l'expérience utilisateur et la performance.",
      category: "#SaaS #Startup #React #Node.js",
      imageUrl: startupSaas,
      route: "/projets/startup-saas"
    },
    {
      title: "Python/JS",
      description: "Applications web et scripts automation utilisant Python et JavaScript pour créer des solutions robustes et efficaces.",
      category: "#Python #JavaScript #WebDev #Automation",
      imageUrl: pythonJs,
      route: "/projets/python-js"
    },
    {
      title: "Web3/BlockChain",
      description: "Développement d'applications décentralisées et intégration de technologies blockchain pour des solutions innovantes.",
      category: "#Web3 #Blockchain #Crypto #DApps",
      imageUrl: web3Blockchain,
      route: "/projets/web3-blockchain"
    },
    {
      title: "Agents iA & Automatisations",
      description: "Création d'agents intelligents et systèmes d'automatisation avancés utilisant l'IA pour optimiser les processus.",
      category: "#IA #Automation #CrewAI #n8n",
      imageUrl: aiAutomation,
      route: "/projets/ia-automation"
    },
    {
      title: "Projets d'école",
      description: "Projets académiques et éducatifs démontrant les compétences techniques acquises durant ma formation.",
      category: "#Education #Academic #Portfolio #Learning",
      imageUrl: schoolProjects,
      route: "/projets/ecole"
    },
    {
      title: "Designs & Créations",
      description: "Projets de design graphique, UI/UX et création visuelle avec focus sur l'esthétique et l'expérience utilisateur.",
      category: "#Design #UI/UX #Figma #Creative",
      imageUrl: designCreation,
      route: "/projets/design"
    }
  ];

  return (
    <div className="bento-card col-span-3">
      <h2 className="text-2xl font-bold mb-6 font-poppins flex items-center">
        <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
          <span className="bg-white w-4 h-4 rounded-full animate-pulse-slow"></span>
        </span>
        Mes Projets
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
            route={project.route}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
