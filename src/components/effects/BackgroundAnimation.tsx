import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  depth: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call once and add resize listener
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Default colors in case CSS variables aren't available
    const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#ffffff'];
    
    // Particle class
    class ParticleClass implements ParticleProps {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      depth: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.depth = Math.random() * 5; // For 3D effect
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.7 - this.depth * 0.1; // Transparency based on depth
        ctx.fill();
      }
    }
    
    // Create particles
    const particlesArray: ParticleClass[] = [];
    const numberOfParticles = 50; // Reduced for performance

    // Initialize particles
    const initializeParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new ParticleClass());
      }
    };
    
    initializeParticles();

    // Connect particles with lines
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) { // Connection distance
            const opacity = 1 - distance / 150;
            ctx.beginPath();
            ctx.strokeStyle = particlesArray[a].color;
            ctx.globalAlpha = opacity * 0.5;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(ctx);
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <>
      <motion.canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-background/80 -z-10" />
    </>
  );
};

export default BackgroundAnimation;