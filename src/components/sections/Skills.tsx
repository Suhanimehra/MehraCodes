import React from "react";
import {
  Code2,
  Layers,
  Cloud,
  Brain,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data";

const domainIcons: Record<string, React.ReactNode> = {
  languages: <Code2 className="w-4 h-4 text-foreground" />,
  frontend: <Layers className="w-4 h-4 text-foreground" />,
  data: <Brain className="w-4 h-4 text-foreground" />,
  backend: <Cloud className="w-4 h-4 text-foreground" />,
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start space-y-2 mb-10">
          <Badge variant="secondary" className="px-3 py-0.5 text-[11px] font-mono rounded-full">
            <span>CAPABILITIES & TOOLING</span>
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-foreground">
            Technical Stack & <span className="text-muted-foreground font-normal">Architecture</span>.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Core programming languages, client architectures, analytical libraries, and cloud runtimes.
          </p>
        </div>

        {/* All 4 Domain Cards in One Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="h-full"
            >
              <Card className="rounded-xl bg-card border-border hover:border-neutral-600 transition-colors h-full flex flex-col justify-between p-4 sm:p-5">
                <CardHeader className="p-0 pb-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center text-foreground shrink-0">
                      {domainIcons[category.id] || <Code2 className="w-4 h-4 text-foreground" />}
                    </div>
                    <Badge variant="outline" className="font-mono text-[10px] text-muted-foreground px-2 py-0">
                      {category.skills.length} Tools
                    </Badge>
                  </div>

                  <div>
                    <CardTitle className="text-sm font-bold font-display text-foreground">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-[11px] text-muted-foreground leading-snug line-clamp-2 pt-0.5">
                      {category.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="p-0 pt-2 flex-1 flex flex-col justify-between">
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-2 py-1 text-[11px] font-mono bg-secondary hover:bg-foreground hover:text-background text-muted-foreground border border-border rounded-md transition-colors cursor-default"
                      >
                        <span className="w-1 h-1 rounded-full bg-emerald-500 mr-1.5 shrink-0 inline-block" />
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-muted-foreground/80">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-foreground/70" />
                      <span>Production</span>
                    </span>
                    <span className="text-neutral-500">Active</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
