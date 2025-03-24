
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import MaltIcon from "@/components/icons/MaltIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-b from-[#121212] to-[#1a1a1a] border-t border-[#333333] py-16 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Portfolio</h3>
            <p className="text-gray-400 leading-relaxed">
              Créer des expériences web élégantes et fonctionnelles est ma passion.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="mailto:your@email.com"
                 className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
                <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://malt.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110">
                <MaltIcon className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">Accueil</Link>
              <Link to="/index" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">Portfolio</Link>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">À Propos</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300">Contact</a>
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="flex flex-col space-y-3">
              <li className="text-gray-400 transition-colors duration-300 hover:text-white">Développement Web</li>
              <li className="text-gray-400 transition-colors duration-300 hover:text-white">UI/UX Design</li>
              <li className="text-gray-400 transition-colors duration-300 hover:text-white">Architecture Front-end</li>
              <li className="text-gray-400 transition-colors duration-300 hover:text-white">Consultation Technique</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p className="flex items-center"><span className="inline-block w-4 h-4 mr-2 rounded-full bg-blue-500/20"></span>Paris, France</p>
              <p className="flex items-center"><span className="inline-block w-4 h-4 mr-2 rounded-full bg-blue-500/20"></span>your@email.com</p>
              <p className="flex items-center"><span className="inline-block w-4 h-4 mr-2 rounded-full bg-blue-500/20"></span>+33 6 XX XX XX XX</p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#333333] mt-12 pt-8 flex justify-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Votre Nom. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
