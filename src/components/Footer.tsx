
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import MaltIcon from "@/components/icons/MaltIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-[#333333] py-10 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Portfolio</h3>
            <p className="text-gray-400">
              Créer des expériences web élégantes et fonctionnelles est ma passion.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="mailto:your@email.com"
                 className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://malt.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <MaltIcon className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link>
              <Link to="/index" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">À Propos</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Services</h3>
            <ul className="flex flex-col space-y-2">
              <li className="text-gray-400">Développement Web</li>
              <li className="text-gray-400">UI/UX Design</li>
              <li className="text-gray-400">Architecture Front-end</li>
              <li className="text-gray-400">Consultation Technique</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>Paris, France</p>
              <p>your@email.com</p>
              <p>+33 6 XX XX XX XX</p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#333333] mt-10 pt-6 flex justify-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Votre Nom. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
