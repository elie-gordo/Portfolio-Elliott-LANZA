import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import schoolImage from "@/assets/school-projects.jpg";

const Ecole = () => {
  return (
    <div className="layout-container bg-background">
      <StarBackground />
      <div className="content-wrapper">
        <div className="max-w-4xl mx-auto p-6">
          <Link to="/index">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-8 text-gradient">Projets d'école</h1>
          
          <div className="grid gap-6">
            <ProjectReferenceCard
              title="Projets Académiques"
              description="Développement de projets étudiants couvrant différents domaines de l'informatique : algorithmes, structures de données, développement web, bases de données et projets de groupe. Acquisition de compétences fondamentales et méthodologies de développement."
              image={schoolImage}
              technologies={["Java", "C++", "SQL", "Git", "Agile", "Testing", "Documentation", "Team Work"]}
              imageAlt="Environnement d'étude et projets académiques"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecole;