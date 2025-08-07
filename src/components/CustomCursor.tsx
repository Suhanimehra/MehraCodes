import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Track hover state on interactive elements
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Only hide cursor on desktop devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;
    
    document.body.style.cursor = 'none';
    
    // Add cursor-none class to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.classList.add('cursor-none');
    });

    return () => {
      document.body.style.cursor = '';
      interactiveElements.forEach(el => {
        el.classList.remove('cursor-none');
      });
    };
  }, []);

  // Don't render cursor on mobile devices
  if (typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          backgroundColor: '#fff',
        }}
        animate={{
          width: isHovering ? 60 : isClicked ? 16 : 24,
          height: isHovering ? 60 : isClicked ? 16 : 24,
          x: isHovering ? -30 : -12,
          y: isHovering ? -30 : -12,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Trailing cursor */}
      <motion.div
        className="fixed pointer-events-none z-40 rounded-full bg-primary/30"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          width: isClicked ? 40 : 12,
          height: isClicked ? 40 : 12,
          x: -6,
          y: -6,
          opacity: 0.6,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.8,
          delay: 0.03,
        }}
      />
    </>
  );
};

export default CustomCursor;