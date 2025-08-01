import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Hi, I'm <span className="gradient-text">Suhani Mehra</span>
            <br />
            <span className="text-primary">Full-Stack Developer</span>
          </motion.h1>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0">
            Passionate about building scalable web apps, intuitive dashboards, and data-driven solutions using React, Python, Firebase, and Power BI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="default" className="px-6 py-3 text-base">
              View My Projects
            </Button>
            <Button variant="outline" className="px-6 py-3 text-base">
              Download CV
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a href="https://github.com/Suhanimehra" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-primary transition" />
            </a>
            <a href="https://www.linkedin.com/in/suhanimehra" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-primary transition" />
            </a>
            <a href="mailto:mehrasuhani.sm88@gmail.com">
              <Mail className="w-5 h-5 hover:text-primary transition" />
            </a>
          </div>
        </div>

        {/* Right Side Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/assets/avatar.png" 
            alt="Suhani Avatar"
            className="w-[320px] md:w-[400px] object-contain drop-shadow-xl rounded-full"
          />
        </motion.div>
      </div>

      {/* Floating dots animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
