
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force le scroll immédiatement et après le rendu
    window.scrollTo(0, 0);
    
    // Double vérification après un micro-délai
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    // Et encore après un délai plus long pour être sûr
    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
