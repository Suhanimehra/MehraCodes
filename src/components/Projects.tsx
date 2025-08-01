import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of my technical work – from real-time web apps and machine learning tools to dashboards and accessible platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-accent/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
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
              
              <CardFooter className="px-6 pb-6 pt-0">
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
          ))}
        </div>

        <div className="text-center mt-12">
        <a 
          href="https://github.com/Suhanimehra" 
          target="_blank" 
          rel="noopener noreferrer">
          <Button variant="glass" size="lg">
            View All Projects
          </Button>
        </a>
      </div>
      </div>
    </section>
  );
};

export default Projects;
