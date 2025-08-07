import { useRef, useEffect } from 'react';

interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  easing?: string;
}

export function useTilt(options: TiltOptions = {}) {
  const {
    max = 15,
    perspective = 1000,
    scale = 1.05,
    speed = 500,
    easing = 'cubic-bezier(.03,.98,.52,.99)'
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationFrameId: number | null = null;
    let xRotation = 0;
    let yRotation = 0;
    let xPercent = 0;
    let yPercent = 0;
    let lastX = 0;
    let lastY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;

      const rect = element.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      xPercent = Math.min(Math.max(x / width, 0), 1);
      yPercent = Math.min(Math.max(y / height, 0), 1);
      
      // Calculate rotation based on mouse position
      const rotateX = max * (0.5 - yPercent);
      const rotateY = max * (xPercent - 0.5);

      lastX = rotateX;
      lastY = rotateY;

      updateTransform();
    };

    const updateTransform = () => {
      if (!element) return;
      
      // Apply smooth animation
      xRotation += (lastX - xRotation) * 0.1;
      yRotation += (lastY - yRotation) * 0.1;

      element.style.transform = `perspective(${perspective}px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(${isHovering ? scale : 1}, ${isHovering ? scale : 1}, ${isHovering ? scale : 1})`;
      element.style.transition = isHovering ? `transform ${speed}ms ${easing}` : `transform ${speed * 2}ms ${easing}`;

      animationFrameId = requestAnimationFrame(updateTransform);
    };

    const handleMouseEnter = () => {
      isHovering = true;
      // Reset any existing animation
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      // Start the animation loop
      animationFrameId = requestAnimationFrame(updateTransform);
    };

    const handleMouseLeave = () => {
      isHovering = false;
      lastX = 0;
      lastY = 0;
      // Apply one more frame to reset
      updateTransform();
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove as EventListener);

    // Set initial styles
    element.style.transformStyle = 'preserve-3d';
    element.style.willChange = 'transform';

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove as EventListener);
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [max, perspective, scale, speed, easing]);

  return ref;
}