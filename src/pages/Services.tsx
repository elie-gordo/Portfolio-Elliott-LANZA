
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Développement Web",
      description: "Création de sites web sur mesure, responsive et optimisés pour les moteurs de recherche. Utilisation des technologies modernes pour une performance optimale.",
      details: ["Sites vitrines", "E-commerce", "Applications web", "Progressive Web Apps"]
    },
    {
      id: 2,
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles natives ou cross-platform pour iOS et Android, avec une expérience utilisateur intuitive et fluide.",
      details: ["Apps iOS", "Apps Android", "Solutions cross-platform", "Maintenance et mise à jour"]
    },
    {
      id: 3,
      title: "Conseil Numérique",
      description: "Accompagnement stratégique pour la transformation digitale de votre entreprise. Audit de vos solutions existantes et recommandations personnalisées.",
      details: ["Stratégie digitale", "Audit technique", "Optimisation UX/UI", "Formation"]
    },
    {
      id: 4,
      title: "Design UI/UX",
      description: "Création d'interfaces utilisateur modernes et attrayantes, avec une expérience utilisateur optimisée pour maximiser l'engagement et la conversion.",
      details: ["Design d'interface", "Prototypage", "Tests utilisateurs", "Identité visuelle"]
    }
  ];

  return (
    <div className="layout-container">
      <div className="content-wrapper pb-20">
        <div className={`max-w-4xl mx-auto px-4 pt-24 pb-12 ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-8">Mes Prestations</h1>
          <p className="text-gray-300 text-lg mb-12">
            Découvrez mes différentes prestations pour répondre à vos besoins en matière de développement et de stratégie numérique.
          </p>
          
          <div className="space-y-16 staggered-fade-in">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * service.id }}
                className="bg-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all"
              >
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gradient mb-4">{service.title}</h2>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-white/70"></div>
                      <span className="text-gray-200">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button 
                className="bg-white text-black hover:bg-white/90 transition-all px-8 py-6 text-lg rounded-full"
              >
                Me contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Services;
