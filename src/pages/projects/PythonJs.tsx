import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import pythonJsImage from "@/assets/python-js.jpg";

const PythonJs = () => {
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
          
          <h1 className="text-4xl font-bold mb-8 text-gradient">Python/JS</h1>
          
          <div className="grid gap-6">
            <ProjectReferenceCard
              title="Applications Full-Stack"
              description="Développement d'applications complètes utilisant Python pour le backend avec Django/Flask et JavaScript/React pour le frontend. Intégration de bases de données, APIs REST et déploiement cloud pour des solutions robustes et performantes."
              image={pythonJsImage}
              technologies={["Python", "JavaScript", "React", "Django", "Flask", "PostgreSQL", "MongoDB", "REST API"]}
              imageAlt="Code Python et JavaScript sur écrans multiples"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonJs;