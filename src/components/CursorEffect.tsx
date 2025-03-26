
import { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  const mousePosRef = useRef({
    x: 0,
    y: 0
  });
  
  const cursorPosRef = useRef({
    dot: { x: 0, y: 0 },
    ring: { x: 0, y: 0 }
  });
  
  const isHovering = useRef(false);

  const onMouseMove = (e: MouseEvent) => {
    mousePosRef.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  const onMouseDown = () => {
    if (cursorRingRef.current) {
      cursorRingRef.current.style.width = '35px';
      cursorRingRef.current.style.height = '35px';
    }
  };

  const onMouseUp = () => {
    if (cursorRingRef.current) {
      cursorRingRef.current.style.width = '40px';
      cursorRingRef.current.style.height = '40px';
    }
  };

  const onMouseEnterInteractive = () => {
    isHovering.current = true;
    if (cursorRingRef.current) {
      cursorRingRef.current.style.width = '60px';
      cursorRingRef.current.style.height = '60px';
      cursorRingRef.current.style.borderColor = 'rgba(255, 255, 255, 0.8)';
      cursorRingRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    }
  };

  const onMouseLeaveInteractive = () => {
    isHovering.current = false;
    if (cursorRingRef.current) {
      cursorRingRef.current.style.width = '40px';
      cursorRingRef.current.style.height = '40px';
      cursorRingRef.current.style.borderColor = 'rgba(255, 255, 255, 0.5)';
      cursorRingRef.current.style.backgroundColor = 'transparent';
    }
  };

  const animateCursor = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Speed factor for smooth movement
      const dotSpeed = 1;
      const ringSpeed = 0.3;
      
      // Update the cursor dot position with higher speed for responsiveness
      cursorPosRef.current.dot.x += (mousePosRef.current.x - cursorPosRef.current.dot.x) * dotSpeed;
      cursorPosRef.current.dot.y += (mousePosRef.current.y - cursorPosRef.current.dot.y) * dotSpeed;
      
      // Update the cursor ring position with lower speed for trailing effect
      cursorPosRef.current.ring.x += (mousePosRef.current.x - cursorPosRef.current.ring.x) * ringSpeed;
      cursorPosRef.current.ring.y += (mousePosRef.current.y - cursorPosRef.current.ring.y) * ringSpeed;
      
      // Apply the positions to the DOM elements
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${cursorPosRef.current.dot.x}px, ${cursorPosRef.current.dot.y}px)`;
      }
      
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(${cursorPosRef.current.ring.x}px, ${cursorPosRef.current.ring.y}px)`;
      }
    }
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    // Initial cursor positions
    cursorPosRef.current = {
      dot: { x: 0, y: 0 },
      ring: { x: 0, y: 0 }
    };
    
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });
    
    // Start animation
    requestRef.current = requestAnimationFrame(animateCursor);
    
    // Check if we need to hide the cursor on mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      if (cursorDotRef.current) cursorDotRef.current.style.display = 'none';
      if (cursorRingRef.current) cursorRingRef.current.style.display = 'none';
    }
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorRingRef} className="cursor-ring"></div>
    </>
  );
};

export default CursorEffect;
