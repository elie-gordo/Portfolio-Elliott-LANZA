import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
import blocksignsImage from "@/assets/blocksigns-streetwear.png";

const Design = () => {
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
          
          <h1 className="text-4xl font-bold mb-8 text-gradient">Designs & Créations</h1>
          
          <div className="grid gap-6">
            <ProjectReferenceCard
              title="BlockSigns — Marque Streetwear POD (Work in Progress)"
              description="BlockSigns est une marque streetwear en cours de création, pensée pour le print-on-demand. L'objectif : proposer des pièces au design percutant, accessibles partout, sans compromis sur l'identité.

Inspirée par la culture urbaine, le code graphique des rues et une esthétique brute et symbolique, BlockSigns revendique une approche visuelle forte et codée, où chaque design porte un message.

Une collection en POD qui parle aux esprits créatifs, rebelles et conscients — là où le textile devient un moyen d'expression.

🎯 Work in progress :

• Direction artistique & moodboards
• Création des premiers visuels & slogans
• Tests produits (t-shirts, hoodies, accessoires)
• Setup boutique en ligne (POD ready)
• Branding & stratégie de lancement"
              image={blocksignsImage}
              technologies={["Shopify", "PrintOnDemand", "AdobeIllustrator", "AdobePhotoshop", "ChatGPT"]}
              imageAlt="BlockSigns - Marque Streetwear POD"
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