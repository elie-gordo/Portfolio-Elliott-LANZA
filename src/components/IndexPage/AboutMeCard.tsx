
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const AboutMeCard = () => {
  return (
    <div className="bento-card col-span-3 md:col-span-1 row-span-2">
      <h2 className="text-2xl font-bold mb-6 font-poppins">À propos de moi</h2>
      <p className="text-gray-300 text-lg mb-6 leading-relaxed font-poppins">
        Développeur fullstack spécialisé en intégration IA, avec expertise en applications web, mobiles et solutions IA.
      </p>
      <div className="space-y-6 mb-6">
        <div>
          <p className="text-lg text-gray-400 mb-3 font-medium">Outils:</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">JavaScript</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">TypeScript</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Python</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">HTML/CSS</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">React</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Node.js</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Tailwind CSS</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Git</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">AngularJS</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Django</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">PHP</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Symfony</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">MySQL</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Adobe Creative Suite</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Blender</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Figma</Badge>
          </div>
        </div>
        
        <div>
          <p className="text-lg text-gray-400 mb-3 font-medium">Atouts:</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Résolution de problèmes</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Communication</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Adaptabilité</Badge>
            <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Souci du détail</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
