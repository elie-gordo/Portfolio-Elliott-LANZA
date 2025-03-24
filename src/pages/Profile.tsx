
import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Edit, Settings, LogOut, Camera, MapPin, Briefcase, GraduationCap } from "lucide-react";

const Profile = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* En-tête du profil */}
        <div className="relative">
          <div className="h-48 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700"></div>
          <div className="absolute -bottom-16 left-6 border-4 border-background">
            <Avatar className="h-32 w-32">
              <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Photo de profil" />
            </Avatar>
            <button className="absolute bottom-0 right-0 p-2 rounded-full bg-blue-500 text-white">
              <Camera size={16} />
            </button>
          </div>
          <div className="absolute right-4 top-4 space-x-2">
            <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-md text-white border-white/20">
              <Edit size={16} className="mr-2" /> Modifier
            </Button>
            <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-md text-white border-white/20">
              <Settings size={16} />
            </Button>
          </div>
        </div>

        {/* Informations du profil */}
        <div className="pt-16 px-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">Thomas Durand</h1>
              <p className="text-gray-400 flex items-center mt-1">
                <MapPin size={16} className="mr-1" /> Paris, France
              </p>
              <p className="text-gray-400 flex items-center mt-1">
                <Briefcase size={16} className="mr-1" /> Développeur Frontend
              </p>
            </div>
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
              <LogOut size={16} className="mr-2" /> Déconnexion
            </Button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">À propos</h2>
            <p className="mt-2 text-gray-300">
              Développeur passionné avec plus de 5 ans d'expérience dans la création d'interfaces utilisateur modernes et performantes. 
              Spécialisé en React, TypeScript et technologies web modernes. Toujours à la recherche de nouveaux défis et d'opportunités d'apprentissage.
            </p>
          </div>

          <Separator className="my-6" />

          {/* Expérience */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center">
              <Briefcase size={20} className="mr-2" /> Expérience professionnelle
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card hover:bg-card-hover transition-colors border border-white/5">
                <h3 className="font-medium">Senior Frontend Developer</h3>
                <p className="text-sm text-gray-400">TechCorp • 2020 - Présent</p>
                <p className="mt-2 text-sm text-gray-300">
                  Développement d'applications web réactives avec React et TypeScript. Implémentation des meilleures pratiques pour l'accessibilité et l'expérience utilisateur.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card hover:bg-card-hover transition-colors border border-white/5">
                <h3 className="font-medium">Frontend Developer</h3>
                <p className="text-sm text-gray-400">WebStudio • 2018 - 2020</p>
                <p className="mt-2 text-sm text-gray-300">
                  Création d'interfaces utilisateur pour diverses applications web et mobiles. Collaboration avec l'équipe design pour implémenter des maquettes fidèles.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Formation */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center">
              <GraduationCap size={20} className="mr-2" /> Formation
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-card hover:bg-card-hover transition-colors border border-white/5">
                <h3 className="font-medium">Master en Développement Web</h3>
                <p className="text-sm text-gray-400">Université de Paris • 2016 - 2018</p>
                <p className="mt-2 text-sm text-gray-300">
                  Spécialisation en technologies front-end et expérience utilisateur. Projets en équipe et stages en entreprise.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-card hover:bg-card-hover transition-colors border border-white/5">
                <h3 className="font-medium">Licence en Informatique</h3>
                <p className="text-sm text-gray-400">Université de Lyon • 2013 - 2016</p>
                <p className="mt-2 text-sm text-gray-300">
                  Fondamentaux de la programmation, algorithmes et structures de données. Introduction aux technologies web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
