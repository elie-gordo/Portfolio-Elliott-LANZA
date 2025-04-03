
import { Home, FolderOpen, Mail, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Accueil" },
    { path: "/index", icon: FolderOpen, label: "Portfolio" },
    { path: "/services", icon: Briefcase, label: "Prestations" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="rounded-2xl bg-[#1E1E1E] border border-[#333333] backdrop-blur-md mx-auto max-w-[260px]"
      >
        <div className="flex justify-between items-center px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex items-center justify-center p-2 rounded-xl transition-all ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <item.icon size={20} />
              {location.pathname === item.path && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-white"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Extra padding for content not to be hidden behind the navbar */}
      <div className="h-12" />
    </div>
  );
};

export default BottomNav;
