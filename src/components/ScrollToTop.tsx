import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // useLayoutEffect se déclenche AVANT que le DOM soit peint
  useLayoutEffect(() => {
    // Force le défilement immédiatement avant le rendu
    const forceScrollToTop = () => {
      // Méthode directe et brutale
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Force aussi avec window
      if (window.scrollTo) {
        window.scrollTo(0, 0);
      }

      // Trouve tous les éléments scrollables et les remet à 0
      const scrollableElements = document.querySelectorAll('[style*="overflow"]');
      scrollableElements.forEach((element: Element) => {
        const scrollableElement = element as HTMLElement;
        if (scrollableElement.scrollTop !== undefined) {
          scrollableElement.scrollTop = 0;
        }
      });
    };

    forceScrollToTop();
    
    return () => {
      // Cleanup si nécessaire
    };
  }, [pathname]);

  // useEffect comme backup au cas où useLayoutEffect ne suffit pas
  useEffect(() => {
    const forceScrollToTopDelayed = () => {
      // Force multiple fois avec différents délais
      [0, 10, 50, 100, 200].forEach(delay => {
        setTimeout(() => {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          window.scrollTo(0, 0);
          
          // Force aussi le scroll sur le root element
          const root = document.getElementById('root');
          if (root) {
            root.scrollTop = 0;
          }
        }, delay);
      });
    };

    forceScrollToTopDelayed();
  }, [pathname]);

  return null;
}