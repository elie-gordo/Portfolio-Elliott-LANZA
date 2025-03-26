
import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  blinkSpeed: number;
  blinkDirection: boolean;
}

interface Meteor {
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
  opacity: number;
  length: number;
}

const StarBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const meteorsRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const starsArray = useRef<Star[]>([]);
  const meteorsArray = useRef<Meteor[]>([]);

  useEffect(() => {
    if (!starsRef.current || !meteorsRef.current) return;

    // Generate stars
    const generateStars = () => {
      const stars: Star[] = [];
      const starCount = window.innerWidth < 768 ? 50 : 100;
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          blinkSpeed: Math.random() * 0.01,
          blinkDirection: Math.random() > 0.5,
        });
      }
      
      starsArray.current = stars;
      renderStars();
    };

    // Generate meteors
    const generateMeteors = () => {
      const meteors: Meteor[] = [];
      const meteorCount = window.innerWidth < 768 ? 3 : 5;
      
      for (let i = 0; i < meteorCount; i++) {
        meteors.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.5,
          size: Math.random() * 1 + 1,
          speed: Math.random() * 10 + 20,
          delay: Math.random() * 15000,
          opacity: 0,
          length: Math.random() * 80 + 100,
        });
      }
      
      meteorsArray.current = meteors;
    };

    // Render stars to DOM
    const renderStars = () => {
      if (!starsRef.current) return;
      
      starsRef.current.innerHTML = '';
      
      starsArray.current.forEach((star) => {
        const starElement = document.createElement('div');
        starElement.classList.add('star');
        starElement.style.left = `${star.x}px`;
        starElement.style.top = `${star.y}px`;
        starElement.style.width = `${star.size}px`;
        starElement.style.height = `${star.size}px`;
        starElement.style.opacity = String(star.opacity);
        
        starsRef.current?.appendChild(starElement);
      });
    };

    // Animation loop for stars blinking
    const animateStars = () => {
      starsArray.current.forEach((star, index) => {
        if (star.blinkDirection) {
          star.opacity += star.blinkSpeed;
          if (star.opacity >= 0.8) star.blinkDirection = false;
        } else {
          star.opacity -= star.blinkSpeed;
          if (star.opacity <= 0.3) star.blinkDirection = true;
        }
        
        const starElement = starsRef.current?.children[index] as HTMLElement;
        if (starElement) {
          starElement.style.opacity = String(star.opacity);
        }
      });
    };

    // Animation loop for meteors
    const animateMeteors = (timestamp: number) => {
      if (!meteorsRef.current) return;
      
      meteorsRef.current.innerHTML = '';
      
      meteorsArray.current.forEach((meteor) => {
        const time = timestamp % (15000 + meteor.delay);
        
        if (time < 1000) {
          meteor.opacity = time / 1000;
          
          const meteorElement = document.createElement('div');
          meteorElement.classList.add('meteor');
          meteorElement.style.left = `${meteor.x}px`;
          meteorElement.style.top = `${meteor.y}px`;
          meteorElement.style.width = `${meteor.length}px`;
          meteorElement.style.height = `${meteor.size}px`;
          meteorElement.style.opacity = String(meteor.opacity);
          meteorElement.style.animationDuration = `${15000 / meteor.speed}ms`;
          
          meteorsRef.current?.appendChild(meteorElement);
        } else if (time < 5000) {
          meteor.opacity = 1;
          
          const meteorElement = document.createElement('div');
          meteorElement.classList.add('meteor');
          meteorElement.style.left = `${meteor.x}px`;
          meteorElement.style.top = `${meteor.y}px`;
          meteorElement.style.width = `${meteor.length}px`;
          meteorElement.style.height = `${meteor.size}px`;
          meteorElement.style.opacity = String(meteor.opacity);
          meteorElement.style.animationDuration = `${15000 / meteor.speed}ms`;
          
          meteorsRef.current?.appendChild(meteorElement);
        }
      });
    };

    // Main animation loop
    const animate = (timestamp: number) => {
      animateStars();
      animateMeteors(timestamp);
      requestRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    generateStars();
    generateMeteors();
    requestRef.current = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="stars">
      <div ref={starsRef} className="stars-container"></div>
      <div ref={meteorsRef} className="meteors-container"></div>
    </div>
  );
};

export default StarBackground;
