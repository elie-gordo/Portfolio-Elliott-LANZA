// Gestionnaire global pour forcer le scroll vers le haut
export const forceScrollToTopGlobal = () => {
  // Méthodes multiples pour garantir le succès
  const methods = [
    () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    () => window.scrollTo(0, 0),
    () => window.scroll(0, 0),
    () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }),
    () => {
      // Reset de tous les conteneurs potentiels
      const selectors = ['html', 'body', '#root', 'main', '.app'];
      selectors.forEach(selector => {
        const element = document.querySelector(selector) as HTMLElement;
        if (element && typeof element.scrollTop === 'number') {
          element.scrollTop = 0;
        }
      });
    }
  ];

  // Exécute toutes les méthodes
  methods.forEach(method => {
    try {
      method();
    } catch (e) {
      console.warn('Méthode de scroll échouée:', e);
    }
  });

  // Force avec requestAnimationFrame aussi
  requestAnimationFrame(() => {
    methods.forEach(method => {
      try {
        method();
      } catch (e) {
        // Ignore les erreurs
      }
    });
  });
};

// Fonction pour surveiller et corriger automatiquement le scroll
export const monitorAndCorrectScroll = () => {
  let correctionTimeout: NodeJS.Timeout;

  const checkAndCorrect = () => {
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
      forceScrollToTopGlobal();
    }
  };

  // Surveille les changements de scroll
  const scrollHandler = () => {
    clearTimeout(correctionTimeout);
    correctionTimeout = setTimeout(checkAndCorrect, 10);
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });

  return () => {
    window.removeEventListener('scroll', scrollHandler);
    clearTimeout(correctionTimeout);
  };
};
