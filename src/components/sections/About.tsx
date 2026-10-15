import React from "react";
import { Code2, Cpu, BarChart3, Layers, ArrowUpRight } from "lucide-react";
import { about, profile } from "@/data";

const pillarIcons: Record<string, React.ReactNode> = {
  web: <Code2 className="w-5 h-5 text-foreground" />,
  data: <BarChart3 className="w-5 h-5 text-foreground" />,
  cloud: <Cpu className="w-5 h-5 text-foreground" />,
};

const About = () => {
  return (
    <section id="about" className="py-24 relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-muted-foreground">
            <span>ABOUT & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-foreground">
            Engineering software with <span className="text-muted-foreground font-normal">clarity & precision</span>.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            {profile.shortBio}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Story Card (8 cols) */}
          <div className="md:col-span-8 p-8 rounded-2xl bg-card border border-border relative overflow-hidden group hover:border-neutral-600 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layers className="w-36 h-36 text-foreground" />
            </div>

            <div className="relative z-10 space-y-4 max-w-2xl">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {about.philosophy.tag}
              </span>
              <h3 className="text-2xl font-bold font-display text-foreground">
                {about.philosophy.heading}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {about.philosophy.paragraph1}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {about.philosophy.paragraph2}
              </p>
            </div>
          </div>

          {/* Quick Stats Bento Card (4 cols) */}
          <div className="md:col-span-4 p-8 rounded-2xl bg-card border border-border flex flex-col justify-between hover:border-neutral-600 transition-colors">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Quick Impact
            </span>
            <div className="my-6 space-y-6">
              {about.stats.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && <div className="h-px bg-border" />}
                  <div>
                    <div className="text-4xl font-bold font-display text-foreground tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase font-mono mt-1">
                      {stat.label}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Actively building & learning</span>
            </div>
          </div>

          {/* 3 Pillar Cards (4 cols each) */}
          {about.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="md:col-span-4 p-6 rounded-2xl bg-card border border-border hover:border-neutral-600 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center mb-5 text-foreground">
                  {pillarIcons[pillar.id] || <Code2 className="w-5 h-5 text-foreground" />}
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-border flex items-center text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                <span>Core Competency</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;