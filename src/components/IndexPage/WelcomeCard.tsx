
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WelcomeCard = () => {
  return (
    <div className="bento-card col-span-3 md:col-span-2 group">
      <h2 className="text-sm text-gray-400 mb-2 font-medium tracking-wider uppercase">Bienvenue sur mon Portfolio</h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-8 text-gradient break-words hyphens-auto">
        Elliott LANZA
      </h1>
      <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-poppins">
        Développeur Fullstack et intégrateur IA, je combine mon expertise en développement web avec une solide maîtrise de l'intelligence artificielle pour créer des solutions innovantes et performantes. Avec plusieurs années d'expérience, je suis capable de travailler aussi bien sur le frontend (React, Angular) que le backend (Node.js, Python, Django), tout en intégrant des technologies d'IA (CrewAi, n8n) pour enrichir les applications avec des fonctionnalités intelligentes. Passionnée par l'optimisation des processus, je me spécialise dans la création d'applications scalables et adaptées aux besoins spécifiques des clients. Si vous recherchez un partenaire technique pour des projets sur-mesure, n'hésitez pas à me contacter.
      </p>
      <div className="mt-8 flex">
        <Link to="/contact">
          <Button>
            Me contacter
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeCard;
