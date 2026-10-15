import React from "react";
import { Github, Linkedin, Mail, ArrowUp, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, contact } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center gap-2 font-display font-bold text-lg text-foreground">
              <div className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center text-foreground">
                <Code2 className="w-4 h-4" />
              </div>
              <span>
                {profile.name.split(" ")[0]}
                <span className="text-muted-foreground font-normal">.Codes</span>
              </span>
            </div>
            <p className="text-xs font-mono text-muted-foreground text-center md:text-left">
              Engineered with React, TypeScript, GSAP & Tailwind CSS.
            </p>
          </div>

          {/* Socials & Back-to-Top */}
          <div className="flex items-center gap-3">
            <a
              href={contact.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-secondary border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={contact.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-secondary border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={contact.socials.emailUrl}
              className="p-2.5 rounded-xl bg-secondary border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-6 w-px bg-border mx-1" />

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-xl bg-secondary border border-border hover:bg-muted text-muted-foreground hover:text-foreground"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-muted-foreground gap-4">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="text-muted-foreground/60">
            Clean, accessible, production-ready code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;