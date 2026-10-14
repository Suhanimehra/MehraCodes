import {
  Code,
  Database,
  Cpu,
  Hammer,
  Cloud,
  Brain,
  Users,
  GitBranch,
  BarChart,
  MessageCircle,
  Timer,
  LucideIcon
} from "lucide-react";

const skills = {
  technical: [
    { name: "Python", icon: Cpu },
    { name: "C/C++", icon: Code },
    { name: "SQL", icon: Database },
    { name: "Data Analysis", icon: BarChart },
    { name: "OpenCV", icon: Brain },
  ],
  frameworks: [
    { name: "React.js", icon: Hammer },
    { name: "Next.js", icon: Hammer },
    { name: "Node.js", icon: Hammer },
    { name: "Tailwind CSS", icon: Hammer },
    { name: "Firebase", icon: Cloud },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "Power BI", icon: BarChart },
    { name: "Jupyter Notebook", icon: Cpu },
    { name: "Google Colab", icon: Cloud },
    { name: "VS Code", icon: Code },
  ],
  softSkills: [
    { name: "Teamwork", icon: Users },
    { name: "Communication", icon: MessageCircle },
    { name: "Time Management", icon: Timer },
    { name: "Problem Solving", icon: Brain },
  ],
};

const SkillBlock = ({
  title,
  list,
}: {
  title: string;
  list: { name: string; icon: LucideIcon }[];
}) => (
  <div className="bg-muted/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {list.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex items-center gap-3 bg-muted/20 rounded-lg px-3 py-2 hover:bg-muted/30 transition"
        >
          <Icon className="w-5 h-5 text-primary" />
          <span className="text-sm">{name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="gradient-text">Skills</span> & Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillBlock title="Technical Skills" list={skills.technical} />
          <SkillBlock title="Frameworks & Libraries" list={skills.frameworks} />
          <SkillBlock title="Tools & Platforms" list={skills.tools} />
          <SkillBlock title="Soft Skills" list={skills.softSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
