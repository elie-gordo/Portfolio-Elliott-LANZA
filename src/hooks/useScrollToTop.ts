import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Solution brutale - force le scroll de toutes les manières possibles
    const forceScroll = () => {
      // Méthode 1
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      // Méthode 2
      document.documentElement.scrollTop = 0;
      // Méthode 3
      document.body.scrollTop = 0;
      // Méthode 4
      window.pageYOffset = 0;
      // Méthode 5 - pour les navigateurs anciens
      if (window.scrollY !== 0) {
        window.scroll(0, 0);
      }
    };

    // Exécution immédiate
    forceScroll();
    
    // Exécution après chaque frame
    requestAnimationFrame(forceScroll);
    requestAnimationFrame(() => requestAnimationFrame(forceScroll));
    
    // Et pour être vraiment sûr
    const timer = setTimeout(forceScroll, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
};