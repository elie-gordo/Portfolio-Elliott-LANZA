
import { Github, Linkedin, Mail } from "lucide-react";
import LinkTreeIcon from "@/components/icons/LinkTreeIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Fonction pour forcer l'ouverture du lien
  const handleLinkClick = (url: string, newTab: boolean = true) => {
    if (newTab) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = url;
    }
  };
  
  return (
    <footer className="w-full bg-gradient-to-b from-[#121212] to-[#1a1a1a] border-t border-[#333333] py-8 mt-16 relative z-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <h3 className="text-2xl font-bold text-white">Elliott LANZA</h3>
          </div>

          <div className="flex space-x-4 relative z-50">
            <button 
              onClick={() => handleLinkClick("https://github.com/elie-gordo")}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer group inline-flex items-center justify-center relative z-50 border-none bg-transparent"
              title="GitHub"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </button>
            <button 
              onClick={() => handleLinkClick("https://www.linkedin.com/in/elliott-lanza-a78681265/")}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer group inline-flex items-center justify-center relative z-50 border-none bg-transparent"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </button>
            <button 
              onClick={() => handleLinkClick("mailto:contact@elliott-lanza.com", false)}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer group inline-flex items-center justify-center relative z-50 border-none bg-transparent"
              title="Email"
            >
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </button>
            <button 
              onClick={() => handleLinkClick("https://linktr.ee")}
              className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer group inline-flex items-center justify-center relative z-50 border-none bg-transparent"
              title="LinkTree"
            >
              <LinkTreeIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-[#333333] text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Elliott LANZA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
