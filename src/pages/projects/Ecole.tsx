import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
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
              title="Projet P3 - Application Movoo"
              description="Dans le cadre du programme École de la Toile à l'EM Lyon, notre équipe a conçu Movoo, un projet innovant autour de la mobilité douce.

Notre objectif : faciliter les trajets du quotidien pour les enfants en toute sécurité, tout en promouvant des modes de déplacement écologiques et solidaires.

Nous avons imaginé Movoo comme une application mobile intuitive, accompagnée d'un site de présentation en HTML/CSS. La maquette de l'app a été entièrement conçue sur Figma, et nous avons utilisé Notion pour gérer efficacement notre projet de A à Z.

Fonctionnalités clés de l'application :
Création de groupes de pédibus (cortège d'enfants accompagnés à pied jusqu'à l'école)

Mise en relation avec des accompagnateurs fiables et validés par la communauté

Interface simple et rassurante pour les parents

Extension future vers d'autres formes de mobilité douce : vélo, trottinette, covoiturage, etc.

Un projet présenté à travers la France
Le site web de Movoo a été conçu pour présenter notre solution aux autres groupes et promotions dans toute la France, dans un format clair, attractif et engageant.

Movoo, c'est plus qu'un projet : c'est une vision de la ville de demain, plus sûre, plus verte, et plus solidaire."
              image={schoolImage}
              technologies={["HTML", "CSS", "Figma", "Notion", "UIUXDesign"]}
              imageAlt="Application Movoo - Mobilité douce pour enfants"
              githubLink="https://github.com/elie-gordo/Movoo"
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

export default Ecole;