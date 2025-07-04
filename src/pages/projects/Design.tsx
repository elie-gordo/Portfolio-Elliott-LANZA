import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
import designImage from "@/assets/design-creation.jpg";

const Design = () => {
  return (
    <div className="layout-container bg-background">
      <StarBackground />
      <div className="content-wrapper">
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
          <Link to="/index">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Button>
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gradient">Designs & Créations</h1>
          
          <div className="grid gap-6">
            <ProjectReferenceCard
              title="Design & Créations Visuelles"
              description="Conception d'interfaces utilisateur modernes et créatives, développement d'identités visuelles et création de supports graphiques. Focus sur l'expérience utilisateur et l'esthétique pour des solutions digitales impactantes."
              image={designImage}
              technologies={["Figma", "Adobe Creative Suite", "UI/UX", "Branding", "Typography", "Color Theory", "Prototyping", "Wireframing"]}
              imageAlt="Outils de design et créations graphiques"
              githubLink=""
            />
          </div>
        </div>
      </div>
      
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Design;