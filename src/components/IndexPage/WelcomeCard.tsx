
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WelcomeCard = () => {
  return (
    <div className="bento-card col-span-3 md:col-span-2 group">
      <h2 className="text-sm text-gray-400 mb-2 font-medium tracking-wider uppercase">bienvenue</h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-8 text-gradient break-words hyphens-auto">
        Bonjour, je suis <span>John Doe</span>
      </h1>
      <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-poppins">
        Développeur web spécialisé dans la création d'expériences web élégantes et fonctionnelles
      </p>
      <div className="mt-8 flex">
        <Link to="/contact" className="group inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-lg font-medium transition-all hover:bg-gray-200 hover:shadow-lg hover:shadow-white/20">
          Me contacter
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default WelcomeCard;
