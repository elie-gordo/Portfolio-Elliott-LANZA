import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
import movooImage from "@/assets/movoo-project.png";
import emmaImage from "@/assets/emma-project.png";

const Ecole = () => {
  return (
    <div className="layout-container bg-background">
      <StarBackground />
      <div className="content-wrapper">
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
          <Link to="/index">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Button>
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gradient">Projets d'école</h1>
          
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
              image={movooImage}
              technologies={["HTML", "CSS", "Figma", "Notion", "UIUXDesign"]}
              imageAlt="Application Movoo - Mobilité douce pour enfants"
              githubLink="https://github.com/elie-gordo/Movoo"
              figmaLink="https://www.figma.com/proto/uAfCnWxMIk2rn4JofFOqU6/Movoo?node-id=1-2&t=IUqrPNAeU5SusdZn-1"
            />

            <ProjectReferenceCard
              title="Projet Hackathon - Agent iA EMMA"
              description="Lors du Hackathon de l'École de la Toile à l'EM Lyon, notre équipe a imaginé EMMA, un assistant intelligent conçu pour transformer l'expérience collaborateur en entreprise.

Notre ambition : créer une IA intégrée dans toutes les applications professionnelles pour accompagner les nouveaux arrivants (notamment les profils juniors) tout en soutenant les employés expérimentés dans leurs tâches quotidiennes.

Fonctionnalités clés de EMMA :
Onboarding intelligent : EMMA accompagne les juniors pas à pas dans leurs outils et workflows.

Support contextuel : l'agent IA s'adapte à chaque application (Slack, Notion, Drive, etc.) pour fournir des réponses et recommandations en temps réel.

Gain de productivité : aide à la recherche de documents, rappel de process, FAQ automatisée, etc.

Adaptabilité : EMMA apprend des interactions de l'entreprise pour s'améliorer en continu.

Technologies & Outils utilisés :
Figma pour la conception de la maquette interactive de l'interface utilisateur

Notion pour la gestion de projet, la documentation et la coordination d'équipe

Un projet né en hackathon, pensé pour l'entreprise de demain
EMMA vise à réduire le stress des premiers jours, fluidifier la transmission des savoirs et rendre les équipes plus autonomes, tout en favorisant une culture d'entraide et d'efficacité."
              image={emmaImage}
              technologies={["Figma", "Notion", "Hackathon", "UXUIDesign"]}
              imageAlt="Projet EMMA - Assistant intelligent pour l'entreprise"
              figmaLink="https://www.figma.com/proto/t3NDy065zCx3zbyANXHtB4/Groupe-2-EMMA?page-id=2%3A261&node-id=2164-746&starting-point-node-id=2164%3A746&t=iiegvYn90mnXjJK1-1"
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