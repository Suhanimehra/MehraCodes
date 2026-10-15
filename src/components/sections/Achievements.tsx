import React from "react";
import { Award, ExternalLink, CheckCircle, Trophy, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { achievements } from "@/data";

const achievementIcons: Record<string, React.ReactNode> = {
  "IIT Guwahati (NPTEL)": <BookOpen className="w-5 h-5 text-foreground" />,
  "IBM": <Award className="w-5 h-5 text-foreground" />,
  "Kaggle": <Award className="w-5 h-5 text-foreground" />,
  "Ministry of Defence, Govt of India": <CheckCircle className="w-5 h-5 text-foreground" />,
  "MITS Inter-College Coding Event": <Trophy className="w-5 h-5 text-foreground" />,
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-muted-foreground">
            <span>HONORS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-foreground">
            Recognitions & <span className="text-muted-foreground font-normal">Credentials</span>.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            Continuous validation of technical skills through industry benchmarks and academic institutions.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-neutral-600 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground">
                    {achievementIcons[item.issuer] || <Award className="w-5 h-5 text-foreground" />}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-foreground mb-1">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-muted-foreground mb-3">
                  {item.issuer}
                </div>

                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-border flex items-center justify-between text-xs font-mono">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-muted-foreground/60">Verified Honor</span>
                )}
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
