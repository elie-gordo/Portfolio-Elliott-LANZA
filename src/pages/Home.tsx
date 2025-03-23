
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleExploreClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/index");
    }, 800); // Delay navigation to match animation duration
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#121212] to-[#1a1a1a] px-4 sm:px-6">
      <AnimatePresence>
        {!isExiting ? (
          <motion.div 
            key="content"
            initial={{ opacity: 0, y: -20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.7 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight">
              Bienvenu sur mon portfolio
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg mx-auto">
              Découvrez mes projets, compétences et expériences professionnelles
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={mounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleExploreClick}
                className="text-lg px-8 py-6 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:shadow-lg"
                size="lg"
              >
                Explorez mon site
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="exit-animation"
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: 0,
              scale: 1.2,
              filter: "blur(10px)",
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-blue-500 animate-pulse"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
