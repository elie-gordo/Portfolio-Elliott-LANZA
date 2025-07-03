import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
import startupImage from "@/assets/startup-saas.jpg";

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
              title="Solutions SaaS Innovantes"
              description="Développement d'applications web modernes avec architecture microservices, intégration d'APIs tierces et systèmes de paiement. Focus sur l'expérience utilisateur et la scalabilité pour accompagner la croissance des startups."
              image={startupImage}
              technologies={["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker", "Kubernetes"]}
              imageAlt="Interface d'application SaaS moderne"
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