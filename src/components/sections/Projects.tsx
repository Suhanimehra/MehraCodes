import React from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FolderGit2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects, contact } from "@/data";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-muted-foreground">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>SELECTED REPOSITORIES & CREATIONS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-foreground">
              Featured <span className="text-muted-foreground font-normal">Engineering Projects</span>.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl">
              Production web applications, computer vision models, and analytical platforms built for performance and reliability.
            </p>
          </div>

          <a
            href={contact.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-end"
          >
            <Button
              variant="outline"
              className="bg-secondary hover:bg-muted text-foreground border-border font-mono text-xs gap-2 rounded-xl py-5"
            >
              <Github className="w-4 h-4" />
              <span>Explore All on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`rounded-2xl bg-card border border-border overflow-hidden flex flex-col justify-between hover:border-neutral-600 transition-colors ${
                project.featured && index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Media Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-background/90 border border-border text-foreground">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-muted-foreground bg-secondary border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-xl bg-secondary hover:bg-muted text-foreground border-border text-xs font-mono gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </Button>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full rounded-xl bg-foreground text-background hover:bg-foreground/90 text-xs font-mono gap-1.5 font-medium"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
