import React from "react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { experience } from "@/data";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative border-b border-border/40">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-muted-foreground">
            <span>CAREER PATH & IMPACT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-foreground">
            Experience & <span className="text-muted-foreground font-normal">Milestones</span>.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl">
            Hands-on software engineering experience delivering production code and real-world tools.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-8 border-l border-border space-y-10">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="relative group"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-background" />

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-neutral-600 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold font-display text-foreground">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-muted-foreground">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-foreground/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground bg-secondary border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
