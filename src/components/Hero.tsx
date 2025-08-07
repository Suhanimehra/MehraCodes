import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.section
      ref={ref}
      id="home"
      style={{ opacity, scale }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground"
    >
      <AnimatePresence>
        {isLoaded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10"
          >

            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-6xl font-extrabold leading-tight relative z-10"
              >
                Hi, I'm <span className="gradient-text">Suhani Mehra</span>
                <br />
                <span className="text-primary">Full-Stack Developer</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0"
              >
                Passionate about building scalable web apps, intuitive dashboards, and data-driven solutions using React, Python, Firebase, and Power BI.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button variant="default" className="px-6 py-3 text-base">
                  View My Projects
                </Button>
                <Button variant="outline" className="px-6 py-3 text-base">
                  Download CV
                </Button>
              </motion.div>

              {/* Social Icons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="flex gap-4 mt-4 justify-center md:justify-start"
              >
                <a href="https://github.com/Suhanimehra" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:text-primary transition" />
                </a>
                <a href="https://www.linkedin.com/in/suhanimehra" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:text-primary transition" />
                </a>
                <a href="mailto:mehrasuhani.sm88@gmail.com">
                  <Mail className="w-5 h-5 hover:text-primary transition" />
                </a>
              </motion.div>
            </div>{/* Right Side Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center md:justify-end relative z-10"
            >
              <img
                src="/assets/avatar.png" 
                alt="Suhani Avatar"
                className="w-[320px] md:w-[400px] object-contain drop-shadow-xl rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.p 
          className="text-sm text-muted-foreground mb-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll to explore
        </motion.p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>



      {/* Enhanced background animation */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated shapes */}
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 150 + 50;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full blur-xl"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
                background: i % 3 === 0 
                  ? 'radial-gradient(circle, rgba(var(--primary), 0.3) 0%, rgba(var(--primary), 0) 70%)' 
                  : i % 3 === 1 
                    ? 'radial-gradient(circle, rgba(var(--secondary), 0.3) 0%, rgba(var(--secondary), 0) 70%)' 
                    : 'radial-gradient(circle, rgba(var(--accent), 0.3) 0%, rgba(var(--accent), 0) 70%)',
              }}
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.8 + 0.2],
              }}
              transition={{
                duration: 15 + Math.random() * 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                width: size,
                height: size,
                opacity: Math.random() * 0.4 + 0.1,
              }}
            />
          );
        })}
        
        {/* Animated gradient mesh */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(var(--primary), 0.4) 0%, rgba(var(--primary), 0) 70%), radial-gradient(circle at 70% 70%, rgba(var(--secondary), 0.4) 0%, rgba(var(--secondary), 0) 70%), radial-gradient(circle at 50% 50%, rgba(var(--accent), 0.3) 0%, rgba(var(--accent), 0) 70%)'
          }}
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(var(--primary), 0.4) 0%, rgba(var(--primary), 0) 70%), radial-gradient(circle at 70% 70%, rgba(var(--secondary), 0.4) 0%, rgba(var(--secondary), 0) 70%), radial-gradient(circle at 50% 50%, rgba(var(--accent), 0.3) 0%, rgba(var(--accent), 0) 70%)',
              'radial-gradient(circle at 40% 40%, rgba(var(--primary), 0.4) 0%, rgba(var(--primary), 0) 70%), radial-gradient(circle at 60% 60%, rgba(var(--secondary), 0.4) 0%, rgba(var(--secondary), 0) 70%), radial-gradient(circle at 40% 60%, rgba(var(--accent), 0.3) 0%, rgba(var(--accent), 0) 70%)',
              'radial-gradient(circle at 30% 30%, rgba(var(--primary), 0.4) 0%, rgba(var(--primary), 0) 70%), radial-gradient(circle at 70% 70%, rgba(var(--secondary), 0.4) 0%, rgba(var(--secondary), 0) 70%), radial-gradient(circle at 50% 50%, rgba(var(--accent), 0.3) 0%, rgba(var(--accent), 0) 70%)'
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background opacity-80" />
      </div>
    </motion.section>
  );
};

export default Hero;
