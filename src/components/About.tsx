import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "HTML" , "CSS", "JavaScript","Tailwind CSS" ,"TypeScript",
    "React", "SQL" , "Python", "C" , "C++","Pandas", "NumPy", "Django","Flask" , "PowerBI",
    "Git", "GitHub", "Firebase"
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive web applications using modern frameworks and technologies."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "PowerBI Dashboarding",
      description: "Leveraging Power BI to create intuitive dashboards that highlight key metrics and performance indicators."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a self-driven Computer Science undergraduate with a strong passion for full-stack development, data analytics, and user-focused solutions.
            With hands-on experience in technologies like React.js, Firebase, Python, and Power BI, I’ve built web applications and dashboards that merge functionality with intuitive design.
            From smart travel platforms to real-time face recognition systems, I enjoy solving real-world problems through scalable and accessible digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              My journey began as an eager Computer Science student, where I quickly discovered a passion for full-stack development, data analysis, and building real-world solutions.
              Through projects like facial recognition systems, campus platforms, and interactive dashboards, I've applied my skills to solve meaningful problems using modern tools and technologies.
            </p>
            <p className="text-muted-foreground">
              From developing accessible travel apps during internships to exploring computer vision and Power BI on my own, I've always been driven by curiosity and impact.
              Outside of code, I enjoy participating in coding competitions, diving into open-source learning, and staying updated on trends in AI and web development.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-accent/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;