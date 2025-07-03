import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
import orionImage from "@/assets/orion-solutions.png";

const StartupSaas = () => {
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
          
          <h1 className="text-4xl font-bold mb-8 text-gradient">Startup & SaaS</h1>
          
          <div className="grid gap-6">
            <ProjectReferenceCard
              title="Orion Solutions"
              description="Orion Solution est une plateforme digitale innovante dédiée à l'intégration d'agents intelligents et l'automatisation des processus métiers. Pensée pour les freelances, startups et PME, elle propose des solutions IA personnalisées qui simplifient les opérations tout en boostant la productivité.

J'ai conçu Orion comme une offre complète, mêlant :

Développement web full-stack performant

Intégration d'agents IA sur-mesure (chatbots, assistants, automatisations)

Expérience utilisateur fluide et responsive

Automatisations connectées à des outils du quotidien

💬 Le chatbot intelligent, développé avec n8n, est relié à une base de données Supabase pour offrir une gestion dynamique et contextualisée des réponses, tout en intégrant des workflows avancés (notamment avec GPT-4 et diverses API métier)."
              image={orionImage}
              technologies={["React", "Next.js", "TailwindCSS", "Supabase", "n8n", "GPT-4", "Figma"]}
              imageAlt="Interface de la plateforme Orion Solutions"
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

export default StartupSaas;