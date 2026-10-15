import React, { useRef } from "react";
import { Github, Linkedin, Mail, Terminal, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { profile, contact } from "@/data";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const ScrollWord: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block transition-colors mr-[0.28em] will-change-transform"
    >
      {children}
    </motion.span>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress across the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 0.2"],
  });

  // Manifesto paragraph to reveal word-by-word on scroll
  const manifesto =
    "I engineer high-performance web systems, real-time computer vision models, and analytical dashboards. Built with architectural discipline, clean modular code, and an obsession with speed.";

  const words = manifesto.split(" ");

  // Headline subtle parallax and fade on deep scroll
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.25]);
  const headlineScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.97]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[140vh] border-b border-border/40 flex flex-col justify-between pt-16 pb-24 px-6 max-w-7xl mx-auto"
    >
      {/* Top Meta Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 pb-12 border-b border-border/40 font-mono text-xs text-muted-foreground"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-foreground tracking-wide uppercase font-medium">
            {profile.name}
          </span>
          <span className="text-neutral-600">/</span>
          <span>{profile.title}</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:inline-block text-neutral-500">
            {contact.location}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={contact.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={contact.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={contact.socials.emailUrl}
              className="hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Massive Enlarged Headline */}
      <motion.div
        style={{ opacity: headlineOpacity, scale: headlineScale }}
        className="py-16 md:py-24 space-y-6"
      >
        <div className="space-y-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter text-foreground leading-[0.92] select-none">
              SOFTWARE
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter text-muted-foreground/80 leading-[0.92] select-none">
              ENGINEER
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter text-foreground leading-[0.92] select-none">
              & ANALYST.
            </h1>
          </motion.div>
        </div>

        {/* Status prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex items-center gap-3 pt-4 text-xs font-mono text-muted-foreground"
        >
          <Terminal className="w-3.5 h-3.5 text-foreground" />
          <span>{profile.systemConfig.stack.join(" • ")}</span>
        </motion.div>
      </motion.div>

      {/* Scroll-Driven Text Reveal Paragraph */}
      <div className="pt-12 pb-20 border-t border-border/40">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground shrink-0 pt-2">
            [ Manifesto // 01 ]
          </div>

          <div className="max-w-4xl">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-display leading-[1.25] tracking-tight">
              {words.map((word, i) => {
                const start = (i / words.length) * 0.7;
                const end = start + (1 / words.length) * 1.5;
                return (
                  <ScrollWord
                    key={`${word}-${i}`}
                    progress={scrollYProgress}
                    range={[Math.min(start, 0.85), Math.min(end, 0.98)]}
                  >
                    {word}
                  </ScrollWord>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex items-center justify-between text-xs font-mono text-muted-foreground/60 pt-6 border-t border-border/20"
      >
        <span className="uppercase tracking-wider">
          {profile.systemConfig.metrics.map((m) => `${m.value} ${m.label}`).join(" • ")}
        </span>
        <div className="flex items-center gap-2">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
