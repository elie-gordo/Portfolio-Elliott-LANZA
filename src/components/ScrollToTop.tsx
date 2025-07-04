
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force le scroll immédiatement, de manière synchrone
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    // Scroll immédiat
    scrollToTop();
    
    // Vérifications supplémentaires pour s'assurer que le scroll fonctionne
    const timer1 = setTimeout(scrollToTop, 0);
    const timer2 = setTimeout(scrollToTop, 50);
    const timer3 = setTimeout(scrollToTop, 150);
    
    // Une dernière vérification après les animations
    const timer4 = setTimeout(scrollToTop, 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
