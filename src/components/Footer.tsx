
import { Github, Linkedin, Mail } from "lucide-react";
import LinkTreeIcon from "@/components/icons/LinkTreeIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-b from-[#121212] to-[#1a1a1a] border-t border-[#333333] py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <h3 className="text-2xl font-bold text-white">Elliott LANZA</h3>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/elie-gordo" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <Github className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/elliott-lanza-a78681265/" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="mailto:contact@elliott-lanza.com"
               className="p-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-white/10 transition-all duration-300">
              <LinkTreeIcon className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
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
