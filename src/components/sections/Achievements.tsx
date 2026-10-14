import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "User-Centric Computing for Human Interaction",
    issuer: "IIT Guwahati (NPTEL)",
    icon: "🎓",
    link: "https://drive.google.com/your-nptel-cert-link", // Replace
  },
  {
    title: "IBM SkillsBuild – Decoding Data: Insights & Impact",
    issuer: "IBM",
    icon: "📊",
    link: "https://drive.google.com/your-ibm-cert-link", // Replace
  },
  {
    title: "Kaggle Learning Track – Python, ML, Viz, Time Series, Cleaning",
    issuer: "Kaggle",
    icon: "🧠",
    link: "https://www.kaggle.com/learn/certification/your-kaggle-profile", // Replace
  },
  {
    title: "NCC ‘C’ Certificate",
    issuer: "National Cadet Corps",
    icon: "📜",
    link: "", // optional
  },
  {
    title: "Code Condolence – 9th Place",
    issuer: "MITS Inter-college Coding Event",
    icon: "🏆",
    link: "", // optional
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Achievements & <span className="gradient-text">Certifications</span>
        </h2>

        <div className="space-y-6">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-primary mt-1 text-lg">{cert.icon}</span>
              <div className="flex-1">
                <p className="font-medium">{cert.title}</p>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2"
                  >
                    <Button variant="link" size="sm" className="p-0 h-auto text-sm">
                      View Credential
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
