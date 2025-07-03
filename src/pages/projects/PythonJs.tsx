import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
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
              title="5 fonctionnalités dans 1 projet"
              description="**1. Agent IA autonome avec mémoire**
Un agent conversationnel intelligent capable de mémoriser les échanges et d'utiliser une base de connaissances vectorielle pour améliorer ses réponses. Idéal pour des assistants personnalisés ou des chatbots évolués.

**2. Analyse de texte intelligente**
Application d'analyse de texte basée sur l'IA permettant d'extraire des informations, de détecter des sentiments et de générer des résumés à partir de contenus textuels variés.

**3. Assistant IA connecté à Google Calendar**
Assistant intelligent qui s'intègre à Google Calendar pour planifier, organiser et automatiser la gestion d'événements, avec une interface simple et des fonctionnalités avancées d'IA.

**4. Dashboard intelligent**
Tableau de bord interactif pour visualiser, analyser et interpréter des données métiers grâce à l'intelligence artificielle. Permet de prendre des décisions éclairées à partir de données complexes.

**5. Générateur de personas + landing page IA**
Outil générant automatiquement des personas marketing et une landing page personnalisée à l'aide de l'IA, facilitant la création de profils clients et la mise en place de campagnes ciblées.

🔗 **Lien du repo GitHub:** https://github.com/elie-gordo/projets_portfolio_ai"
              image={pythonJsImage}
              technologies={["Python", "JavaScript", "React", "Django", "Flask", "PostgreSQL", "MongoDB", "REST API"]}
              imageAlt="Code Python et JavaScript sur écrans multiples"
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

export default PythonJs;