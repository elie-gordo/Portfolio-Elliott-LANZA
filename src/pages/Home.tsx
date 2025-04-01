
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  // Track mouse position for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const { clientX, clientY } = e;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to container center
    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;
    
    mousePositionRef.current = { x, y };
    
    // Apply motion to title and subtitle
    if (titleRef.current) {
      titleRef.current.style.transform = `translate(${x * -20}px, ${y * -10}px)`;
    }
    
    if (subtitleRef.current) {
      subtitleRef.current.style.transform = `translate(${x * -10}px, ${y * -5}px)`;
    }
  };
  
  useEffect(() => {
    setMounted(true);
    
    // Reset transforms when mouse leaves the container
    const resetTransforms = () => {
      if (titleRef.current) {
        titleRef.current.style.transform = 'translate(0, 0)';
      }
      
      if (subtitleRef.current) {
        subtitleRef.current.style.transform = 'translate(0, 0)';
      }
    };
    
    containerRef.current?.addEventListener('mouseleave', resetTransforms);
    
    return () => {
      containerRef.current?.removeEventListener('mouseleave', resetTransforms);
    };
  }, []);

  const handleExploreClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/index");
    }, 800); // Delay navigation to match animation duration
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-transparent px-4 sm:px-6 relative overflow-hidden"
    >
      <AnimatePresence>
        {!isExiting ? (
          <motion.div 
            key="content"
            initial={{ opacity: 0, y: -20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.7 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl font-poppins relative z-10"
          >
            <motion.div
              animate={{ scale: [0.9, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-white/5 blur-3xl"
            />
            
            <motion.div
              animate={{ scale: [1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-white/5 blur-3xl"
            />
            
            <h1 
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient tracking-tight transition-transform duration-200 ease-out"
            >
              Bienvenu sur mon portfolio
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg mx-auto font-light transition-transform duration-200 ease-out"
            >
              Découvrez mes projets, compétences et expériences professionnelles
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={mounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(255, 255, 255, 0)", "0 0 0 10px rgba(255, 255, 255, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-xl"
              />
              
              <Button 
                onClick={handleExploreClick}
                className="text-lg px-8 py-6 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-300 hover:shadow-white/10 font-medium relative overflow-hidden group"
                size="lg"
              >
                <span className="relative z-10">Explorez mon site</span>
                <motion.span 
                  className="absolute inset-0 bg-white/10 z-0"
                  initial={{ x: "-100%", opacity: 0.5 }}
                  whileHover={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
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
            <div className="w-20 h-20 rounded-full bg-white/30 animate-pulse"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      
      <motion.div 
        className="absolute bottom-20 left-10 md:left-20 w-20 h-20 bg-gradient-to-tr from-white/5 to-white/10 rounded-full blur-xl"
        animate={{ y: [-10, 10], opacity: [0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="absolute top-20 right-10 md:right-20 w-24 h-24 bg-gradient-to-tr from-white/5 to-white/10 rounded-full blur-xl"
        animate={{ y: [10, -10], opacity: [0.3, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};

export default Home;
