import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Force le scroll avant même que la page ne soit rendue
    const scrollToTop = () => {
      // Méthode 1: Reset direct des propriétés de scroll
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Méthode 2: window.scrollTo
      window.scrollTo(0, 0);
      
      // Méthode 3: Force avec behavior instant
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });

      // Méthode 4: Info viewport (lecture seule, juste pour débug)
      if (window.visualViewport) {
        // On ne peut pas modifier offsetTop car c'est en lecture seule
        console.log('Viewport offset:', window.visualViewport.offsetTop);
      }
    };

    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    // Backup avec multiples tentatives
    const attempts = [0, 1, 10, 50, 100, 200, 500];
    const timeouts: NodeJS.Timeout[] = [];

    attempts.forEach(delay => {
      const timeout = setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
        
        // Force aussi sur tous les conteneurs potentiels
        const containers = ['#root', '.app', 'main', '[data-scroll-container]'];
        containers.forEach(selector => {
          const element = document.querySelector(selector) as HTMLElement;
          if (element && element.scrollTop !== undefined) {
            element.scrollTop = 0;
          }
        });
      }, delay);
      
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [pathname]);
}
