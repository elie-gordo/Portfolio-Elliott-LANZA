import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { forceScrollToTopGlobal } from '@/lib/scrollUtils';

export default function ForceScrollToTop() {
  const { pathname } = useLocation();

  // useLayoutEffect pour agir AVANT le rendu
  useLayoutEffect(() => {
    forceScrollToTopGlobal();
  }, [pathname]);

  // useEffect comme backup avec multiple tentatives
  useEffect(() => {
    // Force immédiatement
    forceScrollToTopGlobal();
    
    // Force avec des délais échelonnés pour couvrir tous les cas
    const delays = [0, 1, 5, 10, 25, 50, 100, 200, 300, 500];
    const timeouts: NodeJS.Timeout[] = [];
    
    delays.forEach(delay => {
      const timeout = setTimeout(() => {
        forceScrollToTopGlobal();
        
        // Vérification additionnelle et correction si nécessaire
        setTimeout(() => {
          if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
            forceScrollToTopGlobal();
          }
        }, 10);
      }, delay);
      timeouts.push(timeout);
    });
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [pathname]);

  return null;
}
