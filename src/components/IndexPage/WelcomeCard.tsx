
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WelcomeCard = () => {
  return (
    <div className="bento-card col-span-3 md:col-span-2 group">
      <h2 className="text-sm text-gray-400 mb-2 font-medium tracking-wider uppercase">bienvenue</h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-8 text-gradient break-words hyphens-auto">
        Elliott LANZA
      </h1>
      <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-poppins">
        Développeur fullstack spécialisé en intégration IA, avec expertise en applications web, mobiles et solutions IA.
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
