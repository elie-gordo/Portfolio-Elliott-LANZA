import React from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
import aiImage from "@/assets/ai-automation.jpg";

const IaAutomation = () => {
  useScrollToTop();
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
          
          <h1 className="text-4xl font-bold mb-8 text-gradient">Agents iA & Automatisations</h1>
          
          <div className="grid gap-6">
            <ProjectReferenceCard
              title="Agents IA & Automatisations"
              description="Développement d'agents intelligents et systèmes d'automatisation utilisant les dernières technologies d'IA. Création de chatbots, systèmes de recommandation et workflows automatisés pour optimiser les processus métier."
              image={aiImage}
              technologies={["Python", "TensorFlow", "OpenAI", "LangChain", "FastAPI", "Machine Learning", "NLP", "Automation"]}
              imageAlt="Intelligence artificielle et automatisation"
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

export default IaAutomation;