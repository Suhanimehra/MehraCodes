import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTilt } from "@/hooks/use-tilt";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  
  // Add 3D scroll effects with framer-motion
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [5, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  
  const projects = [
    {
      title: "CollegHive",
      description: "A campus collaboration platform enabling student networking, academic sharing, and event management in real-time.",
      image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=500&h=300&fit=crop",
      technologies: ["React.js", "Firebase", "Firestore"],
      github: "https://github.com/Suhanimehra", 
      live: "#"
    },
    {
      title: "Face Recognition Attendance System",
      description: "Automated real-time attendance system using facial recognition with 90%+ accuracy.",
      image: "https://imgs.search.brave.com/AcwWVwhhRM6CRac-2fgkwg6wGvWR6L48C3_Dlpn6JKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXNh/Z2V0ZWNobm9sb2dp/ZXMuY29tL2FwcC91/cGxvYWRzLzIwMjIv/MDkvRmFjZS1yZWNv/Z25pdGlvbi1mb3It/YWNjZXNzLWNvbnRy/b2wtNTU1eDUwOS53/ZWJw",
      technologies: ["Python", "OpenCV", "SQLite"],
      github: "https://github.com/Suhanimehra/Face-Recognition_attendance-system",
      live: "https://face-recognition-attendance-system-6.onrender.com/"
    },
    {
      title: "Image Cartoonifier",
      description: "Transforms images into cartoon-style visuals using computer vision filters. Hosted for live preview.",
      image: "https://imgs.search.brave.com/uKrqph3toPQ6Ud5-7Zcz0o7FQ7yO30RDPUYsBNluNJg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9vbmxp/bmUudmlzdWFsLXBh/cmFkaWdtLmNvbS9p/bWFnZXMvcGhvdG8t/ZWRpdGluZy9jYXJ0/b29uaXplLXRvb2wu/cG5n",
      technologies: ["Python", "OpenCV", "Render"],
      github: "https://github.com/Suhanimehra", 
      live: "https://image-cartoonifier-1.onrender.com/"
    },
    {
      title: "TapNTrip",
      description: "Travel booking platform tailored for elderly users with accessibility features, seamless UX, and role-based login.",
      image: "https://imgs.search.brave.com/I9Wb9vQOfwFaxUkMWx-6nlI5EomN5jZBS4Vk2H0QEok/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdHJhdmVsLWRl/c3RpbmF0aW9uLWNo/b29zaW5nLWFjY29t/bW9kYXRpb24tYm9v/a2luZy1zeXN0ZW0t/dG91ci1uYXZpZ2F0/b3ItYXBwLXNtYXJ0/LXRyaXAtbmF2aWdh/dGlvbl81NjY4ODYt/MzE1MC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw",
      technologies: ["React.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Suhanimehra/TapNTrip",
      live: "https://tap-n-trip.vercel.app/"
    },
    {
      title: "Delhi Climate Dashboard",
      description: "Interactive Power BI dashboard visualizing temperature, humidity, wind speed & pressure trends from Jan–Apr 2017.",
      image: "https://imgs.search.brave.com/rZfeRJFPF9BBTBwJRlzvT2MsWSMn5-x6Rrzk6bMmVA8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZGF0YS1hbmFs/eXRpY3NfNzczMTg2/LTc5MS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw",
      technologies: ["Power BI", "DAX", "Data Cleaning"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className="py-20 relative overflow-hidden"
      ref={ref}
      style={{ 
        perspective: "1000px",
        opacity,
        scale,
        rotateX,
        rotateY
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-scroll data-scroll-speed="1.2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <motion.div 
              className="absolute -right-6 -top-6 text-primary"
              animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Sparkles size={24} />
            </motion.div>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A selection of my technical work – from real-time web apps and machine learning tools to dashboards and accessible platforms.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card 
                ref={useTilt({ max: 15, scale: 1.05, perspective: 1000, speed: 1000 })}
                className="glass-card border-accent/20 hover:border-primary/40 transition-all duration-300 overflow-hidden group relative"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
              <div className="relative overflow-hidden" style={{ transform: "translateZ(20px)" }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0" style={{ transform: "translateZ(40px)" }}>
                <div className="flex gap-4 w-full">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="glass" size="sm" className="w-full">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="hero" size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </CardFooter>
            </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/Suhanimehra" 
            target="_blank" 
            rel="noopener noreferrer">
            <Button variant="glass" size="lg" className="hover:scale-105 transition-transform duration-300">
              View All Projects
            </Button>
          </a>
        </motion.div>
      </div>
      {/* 3D decorative elements */}
      <div className="absolute -z-10 top-1/4 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 -right-20 w-60 h-60 rounded-full bg-secondary/5 blur-3xl"></div>
    </motion.section>
  );
};

export default Projects;
