
import { Home, User, FolderOpen, Mail, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const BottomNav = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { path: "/", icon: Home, label: "Accueil" },
    { path: "/index", icon: FolderOpen, label: "Portfolio" },
    { path: "#contact", icon: Mail, label: "Contact" },
    { path: "#about", icon: User, label: "À Propos" },
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-2">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="rounded-2xl bg-[#1E1E1E] border border-[#333333] backdrop-blur-md mx-auto max-w-md"
      >
        <div className="flex justify-between items-center px-2 py-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-all ${
                location.pathname === item.path
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <item.icon size={20} />
              <motion.span
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                  marginTop: isExpanded ? 4 : 0
                }}
                className="text-xs font-medium overflow-hidden"
              >
                {item.label}
              </motion.span>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-blue-400"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </Link>
          ))}
          <button
            onClick={toggleExpand}
            className="flex flex-col items-center justify-center px-3 py-1 rounded-xl text-gray-400 hover:text-gray-200 transition-all"
          >
            <Menu size={20} />
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
                marginTop: isExpanded ? 4 : 0
              }}
              className="text-xs font-medium overflow-hidden"
            >
              Menu
            </motion.span>
          </button>
        </div>
      </motion.div>

      {/* Extra padding for content not to be hidden behind the navbar */}
      <div className="h-16" />
    </div>
  );
};

export default BottomNav;
