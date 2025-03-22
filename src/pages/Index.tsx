import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import MaltIcon from "@/components/icons/MaltIcon";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format options for the date display with French locale
  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">bienvenue</h2>
          <h1 className="text-4xl font-bold mb-4">
            Bonjour, je suis <span className="text-blue-400">Votre Nom</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Un développeur logiciel passionné par la création d'expériences web belles et fonctionnelles
          </p>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-2xl font-bold mb-6">À propos de moi</h2>
          <p className="text-gray-300 text-lg mb-6">
            Je suis spécialisé dans le développement d'applications web modernes utilisant React, TypeScript et d'autres technologies de pointe.
          </p>
          <div className="space-y-4 mb-6">
            <p className="text-lg text-gray-400">Mes outils:</p>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-400">Mes atouts:</p>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li>Résolution de problèmes</li>
              <li>Communication</li>
              <li>Adaptabilité</li>
              <li>Souci du détail</li>
            </ul>
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card">
          <h2 className="text-lg text-gray-400 mb-4">Date et Heure Actuelles</h2>
          <p className="text-xl font-medium mb-2">
            {time.toLocaleDateString('fr-FR', dateOptions)}
          </p>
          <p className="text-3xl font-bold font-mono">
            {time.toLocaleTimeString('fr-FR')}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">Connectons-nous</h2>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:your@email.com"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://malt.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <MaltIcon className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6">Projets en Vedette</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80" 
                    alt="Projet 1" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Projet 1</h3>
                <p className="text-gray-300">Plateforme e-commerce avec interface moderne</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80" 
                    alt="Projet 2" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Projet 2</h3>
                <p className="text-gray-300">Application de gestion de tâches</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80" 
                    alt="Projet 3" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Projet 3</h3>
                <p className="text-gray-300">Tableau de bord de prévisions météo</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce64c42644a7?auto=format&fit=crop&w=500&q=80" 
                    alt="Projet 4" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Projet 4</h3>
                <p className="text-gray-300">Outil d'analyse de médias sociaux</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80" 
                    alt="Projet 5" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Projet 5</h3>
                <p className="text-gray-300">Application de reconnaissance d'image par IA</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-card-hover flex flex-col">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80" 
                    alt="Projet 6" 
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Projet 6</h3>
                <p className="text-gray-300">Application de chat en temps réel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience and Education side by side */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6 text-center">Expérience</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Développeur Senior</h3>
                <p className="text-gray-300">Tech Company Inc.</p>
                <p className="text-gray-400 mt-2">
                  Dirigé le développement de plusieurs projets à fort impact et mentoré des développeurs juniors.
                </p>
              </div>
              <span className="text-gray-400">2020 - Présent</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Développeur Full Stack</h3>
                <p className="text-gray-300">Digital Solutions Ltd.</p>
                <p className="text-gray-400 mt-2">
                  Développé et maintenu diverses applications web en utilisant des technologies modernes.
                </p>
              </div>
              <span className="text-gray-400">2018 - 2020</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Développeur Frontend</h3>
                <p className="text-gray-300">Creative Web Studio</p>
                <p className="text-gray-400 mt-2">
                  Créé des interfaces utilisateur réactives et amélioré les métriques de performance des sites web.
                </p>
              </div>
              <span className="text-gray-400">2016 - 2018</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Développeur Web Junior</h3>
                <p className="text-gray-300">Innovation Labs</p>
                <p className="text-gray-400 mt-2">
                  Assisté à la construction et aux tests d'applications web tout en apprenant les pratiques modernes de développement.
                </p>
              </div>
              <span className="text-gray-400">2014 - 2016</span>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6 text-center">École et Formation</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Master en Développement Web</h3>
                <p className="text-gray-300">Université de Technologie</p>
                <p className="text-gray-400 mt-2">
                  Spécialisation en développement d'applications web et technologies front-end modernes.
                </p>
              </div>
              <span className="text-gray-400">2012 - 2014</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Licence en Informatique</h3>
                <p className="text-gray-300">École Supérieure d'Informatique</p>
                <p className="text-gray-400 mt-2">
                  Formation en programmation, algorithmes et structures de données.
                </p>
              </div>
              <span className="text-gray-400">2009 - 2012</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Certification en UX/UI Design</h3>
                <p className="text-gray-300">Design Academy</p>
                <p className="text-gray-400 mt-2">
                  Maîtrise des principes de design d'interface et d'expérience utilisateur.
                </p>
              </div>
              <span className="text-gray-400">2013</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Baccalauréat Scientifique</h3>
                <p className="text-gray-300">Lycée International</p>
                <p className="text-gray-400 mt-2">
                  Option Mathématiques et Sciences de l'Ingénieur.
                </p>
              </div>
              <span className="text-gray-400">2009</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
