
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import MaltIcon from "@/components/icons/MaltIcon";

const SocialCard = () => {
  return (
    <div className="bento-card col-span-3 md:col-span-1 backdrop-blur-lg bg-gradient-to-br from-black/40 to-black/20">
      <h2 className="text-2xl font-bold mb-6 font-poppins">Connectons-nous</h2>
      <div className="flex space-x-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors hover:scale-110 transform duration-300">
          <Github className="w-8 h-8 text-white" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors hover:scale-110 transform duration-300">
          <Linkedin className="w-8 h-8 text-white" />
        </a>
        <a href="mailto:your@email.com"
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors hover:scale-110 transform duration-300">
          <Mail className="w-8 h-8 text-white" />
        </a>
        <a href="https://malt.com" target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors hover:scale-110 transform duration-300">
          <MaltIcon className="w-8 h-8 text-white" />
        </a>
      </div>
    </div>
  );
};

export default SocialCard;
