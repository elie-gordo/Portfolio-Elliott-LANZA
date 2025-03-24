
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import MaltIcon from "@/components/icons/MaltIcon";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    setIsVisible(true);
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
      <div className={`bento-grid ${isVisible ? 'staggered-fade-in' : ''}`}>
        {/* Welcome Card */}
        <div className="bento-card col-span-2 group">
          <h2 className="text-sm text-blue-400 mb-2 font-medium tracking-wider uppercase">bienvenue</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gradient">
            Bonjour, je suis <span>Votre Nom</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Un développeur passionné par la création d'expériences web belles et fonctionnelles
          </p>
          <div className="mt-8 flex">
            <a href="#contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 rounded-lg text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20">
              Me contacter
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-2xl font-bold mb-6 font-serif">À propos de moi</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Je suis spécialisé dans le développement d'applications web modernes utilisant React, TypeScript et d'autres technologies de pointe.
          </p>
          <div className="space-y-6 mb-6">
            <div>
              <p className="text-lg text-blue-400 mb-3 font-medium">Mes outils:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-3 py-1">React</Badge>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-3 py-1">TypeScript</Badge>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-3 py-1">Node.js</Badge>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-3 py-1">Tailwind CSS</Badge>
              </div>
            </div>
            <div>
              <p className="text-lg text-blue-400 mb-3 font-medium">Mes atouts:</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30 px-3 py-1">Résolution de problèmes</Badge>
                <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30 px-3 py-1">Communication</Badge>
                <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30 px-3 py-1">Adaptabilité</Badge>
                <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30 px-3 py-1">Souci du détail</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card backdrop-blur-lg bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <h2 className="text-lg text-blue-400 mb-4 font-medium">Date et Heure Actuelles</h2>
          <p className="text-xl font-medium mb-2 text-gray-200">
            {time.toLocaleDateString('fr-FR', dateOptions)}
          </p>
          <p className="text-3xl font-mono font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            {time.toLocaleTimeString('fr-FR')}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bento-card backdrop-blur-lg bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
          <h2 className="text-2xl font-bold mb-6 font-serif">Connectons-nous</h2>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors hover:scale-110 transform duration-300">
              <Github className="w-8 h-8 text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors hover:scale-110 transform duration-300">
              <Linkedin className="w-8 h-8 text-blue-400" />
            </a>
            <a href="mailto:your@email.com"
               className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors hover:scale-110 transform duration-300">
              <Mail className="w-8 h-8 text-blue-400" />
            </a>
            <a href="https://malt.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors hover:scale-110 transform duration-300">
              <MaltIcon className="w-8 h-8 text-blue-400" />
            </a>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6 font-serif flex items-center">
            <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <span className="bg-blue-500 w-4 h-4 rounded-full animate-pulse-slow"></span>
            </span>
            Projets en Vedette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div className="project-card" key={i}>
                <div className="w-full">
                  <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
                    <img 
                      src={`https://images.unsplash.com/photo-${[
                        "1488590528505-98d2b5aba04b",
                        "1461749280684-dccba630e44a",
                        "1518770660439-4636190af475",
                        "1486312338219-ce64c42644a7",
                        "1581091226825-a6a2a5aee158",
                        "1649972904349-6e44c42644a7"
                      ][i]}?auto=format&fit=crop&w=500&q=80`}
                      alt={`Projet ${i + 1}`} 
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-0">
                    {["Web App", "Design", "Frontend", "Full Stack", "Mobile", "Backend"][i]}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3">{`Projet ${i + 1}`}</h3>
                  <p className="text-gray-400">
                    {[
                      "Plateforme e-commerce avec interface moderne",
                      "Application de gestion de tâches",
                      "Tableau de bord de prévisions météo",
                      "Outil d'analyse de médias sociaux",
                      "Application de reconnaissance d'image par IA",
                      "Application de chat en temps réel"
                    ][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Card */}
        <div className="bento-card col-span-1 backdrop-blur-lg bg-gradient-to-br from-blue-500/5 to-indigo-500/5">
          <h2 className="text-2xl font-bold mb-6 font-serif">Expérience</h2>
          <div className="space-y-6">
            {[
              {
                title: "Développeur Senior",
                company: "Tech Company Inc.",
                period: "2020 - Présent",
                desc: "Dirigé le développement de plusieurs projets à fort impact et mentoré des développeurs juniors."
              },
              {
                title: "Développeur Full Stack",
                company: "Digital Solutions Ltd.",
                period: "2018 - 2020",
                desc: "Développé et maintenu diverses applications web en utilisant des technologies modernes."
              },
              {
                title: "Développeur Frontend",
                company: "Creative Web Studio",
                period: "2016 - 2018",
                desc: "Créé des interfaces utilisateur réactives et amélioré les métriques de performance des sites web."
              },
              {
                title: "Développeur Web Junior",
                company: "Innovation Labs",
                period: "2014 - 2016",
                desc: "Assisté à la construction et aux tests d'applications web tout en apprenant les pratiques modernes de développement."
              }
            ].map((job, index) => (
              <div className="relative pl-6 border-l border-blue-500/30 hover:border-blue-500 transition-colors duration-300" key={index}>
                <div className="absolute -left-1.5 top-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <h3 className="text-xl font-bold text-blue-400">{job.title}</h3>
                <p className="text-gray-300">{job.company}</p>
                <p className="text-gray-400 mt-1 text-sm">{job.period}</p>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  {job.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className="bento-card col-span-1 backdrop-blur-lg bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
          <h2 className="text-2xl font-bold mb-6 font-serif">École et Formation</h2>
          <div className="space-y-6">
            {[
              {
                title: "Master en Développement Web",
                school: "Université de Technologie",
                period: "2012 - 2014",
                desc: "Spécialisation en développement d'applications web et technologies front-end modernes."
              },
              {
                title: "Licence en Informatique",
                school: "École Supérieure d'Informatique",
                period: "2009 - 2012",
                desc: "Formation en programmation, algorithmes et structures de données."
              },
              {
                title: "Certification en UX/UI Design",
                school: "Design Academy",
                period: "2013",
                desc: "Maîtrise des principes de design d'interface et d'expérience utilisateur."
              },
              {
                title: "Baccalauréat Scientifique",
                school: "Lycée International",
                period: "2009",
                desc: "Option Mathématiques et Sciences de l'Ingénieur."
              }
            ].map((edu, index) => (
              <div className="relative pl-6 border-l border-indigo-500/30 hover:border-indigo-500 transition-colors duration-300" key={index}>
                <div className="absolute -left-1.5 top-1">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                </div>
                <h3 className="text-xl font-bold text-indigo-400">{edu.title}</h3>
                <p className="text-gray-300">{edu.school}</p>
                <p className="text-gray-400 mt-1 text-sm">{edu.period}</p>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Card */}
        <div className="bento-card col-span-1 backdrop-blur-lg bg-gradient-to-br from-purple-500/5 to-blue-500/5">
          <h2 className="text-2xl font-bold mb-6 font-serif">Mes Objectifs</h2>
          <div className="space-y-6">
            {[
              {
                title: "Court Terme",
                goals: ["Maîtriser les dernières technologies frontend", "Contribuer à des projets open source", "Obtenir une certification en IA"]
              },
              {
                title: "Moyen Terme",
                goals: ["Diriger une équipe de développement", "Lancer un produit SaaS indépendant", "Partager mes connaissances via un blog tech"]
              },
              {
                title: "Long Terme",
                goals: ["Créer ma propre entreprise de technologie", "Devenir expert en architecture de systèmes", "Mentorer la prochaine génération de développeurs"]
              },
              {
                title: "Valeurs",
                goals: ["Continuer à apprendre et à m'adapter", "Créer des produits qui ont un impact positif", "Maintenir un équilibre travail-vie personnelle"]
              }
            ].map((goalSet, index) => (
              <div key={index} className="group">
                <h3 className="text-xl font-bold text-purple-400 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                  {goalSet.title}
                </h3>
                <ul className="mt-2 space-y-2">
                  {goalSet.goals.map((goal, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <ArrowRight className="w-3 h-3 text-purple-500/70 mt-1 mr-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
