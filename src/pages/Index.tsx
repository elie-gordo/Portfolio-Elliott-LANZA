
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import MaltIcon from "@/components/icons/MaltIcon";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    setIsVisible(true);
    return () => clearInterval(timer);
  }, []);

  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  return (
    <div className="layout-container">
      <div className="content-wrapper">
        <div className={`bento-grid ${isVisible ? 'staggered-fade-in' : ''}`}>
          <div className="bento-card col-span-3 md:col-span-2 group">
            <h2 className="text-sm text-gray-400 mb-2 font-medium tracking-wider uppercase">bienvenue</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-8 text-gradient">
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

          <div className="bento-card col-span-3 md:col-span-1 row-span-2">
            <h2 className="text-2xl font-bold mb-6 font-poppins">À propos de moi</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed font-poppins">
              Je suis spécialisé dans le développement d'applications web modernes utilisant React, TypeScript et d'autres technologies de pointe.
            </p>
            <div className="space-y-6 mb-6">
              <div>
                <p className="text-lg text-gray-400 mb-3 font-medium">Mes outils:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">React</Badge>
                  <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">TypeScript</Badge>
                  <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Node.js</Badge>
                  <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Tailwind CSS</Badge>
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-400 mb-3 font-medium">Mes atouts:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Résolution de problèmes</Badge>
                  <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Communication</Badge>
                  <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Adaptabilité</Badge>
                  <Badge variant="outline" className="bg-black/20 text-gray-300 border-gray-700 px-3 py-1">Souci du détail</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card col-span-3 md:col-span-1 backdrop-blur-lg bg-gradient-to-br from-black/40 to-black/20">
            <h2 className="text-lg text-gray-300 mb-4 font-medium">Date et Heure Actuelles</h2>
            <p className="text-xl font-medium mb-2 text-white">
              {time.toLocaleDateString('fr-FR', dateOptions)}
            </p>
            <p className="text-3xl font-mono font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              {time.toLocaleTimeString('fr-FR')}
            </p>
          </div>

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

          <div className="bento-card col-span-3">
            <h2 className="text-2xl font-bold mb-6 font-poppins flex items-center">
              <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <span className="bg-white w-4 h-4 rounded-full animate-pulse-slow"></span>
              </span>
              Projets en Vedette
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div className="project-card" key={i}>
                  <div className="w-full">
                    <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-black/60 to-black/40">
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
                        className="object-cover w-full h-full rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </AspectRatio>
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/20 text-gray-300 hover:bg-black/30 border-0">
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

          <div className="bento-card col-span-1 backdrop-blur-lg bg-gradient-to-br from-black/40 to-black/20">
            <h2 className="text-2xl font-bold mb-6 font-poppins">Expérience</h2>
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
                }
              ].map((job, index) => (
                <div className="relative pl-6 border-l border-white/10 hover:border-white/30 transition-colors duration-300" key={index}>
                  <div className="absolute -left-1.5 top-1">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white font-poppins">{job.title}</h3>
                  <p className="text-gray-300 font-poppins">{job.company}</p>
                  <p className="text-gray-400 mt-1 text-sm font-poppins">{job.period}</p>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed font-poppins">
                    {job.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card col-span-1 backdrop-blur-lg bg-gradient-to-br from-black/40 to-black/20">
            <h2 className="text-2xl font-bold mb-6 font-poppins">École et Formation</h2>
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
                }
              ].map((edu, index) => (
                <div className="relative pl-6 border-l border-white/10 hover:border-white/30 transition-colors duration-300" key={index}>
                  <div className="absolute -left-1.5 top-1">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white font-poppins">{edu.title}</h3>
                  <p className="text-gray-300 font-poppins">{edu.school}</p>
                  <p className="text-gray-400 mt-1 text-sm font-poppins">{edu.period}</p>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed font-poppins">
                    {edu.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card col-span-1 backdrop-blur-lg bg-gradient-to-br from-black/40 to-black/20">
            <h2 className="text-2xl font-bold mb-6 font-poppins">Mes Objectifs</h2>
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
                }
              ].map((goalSet, index) => (
                <div key={index} className="group">
                  <h3 className="text-xl font-bold text-white flex items-center font-poppins">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 group-hover:animate-pulse"></span>
                    {goalSet.title}
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {goalSet.goals.map((goal, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start font-poppins">
                        <ArrowRight className="w-3 h-3 text-white/70 mt-1 mr-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
