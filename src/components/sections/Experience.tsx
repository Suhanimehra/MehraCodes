const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-6">
          <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary shadow-sm">
            <h3 className="text-xl font-semibold">Web Development Intern @ Eways Services</h3>
            <p className="text-muted-foreground text-sm">May 2024 – July 2024</p>
            <ul className="list-disc pl-5 mt-2 text-muted-foreground text-sm space-y-1">
              <li>Developed a context-aware pilgrimage booking platform tailored for elderly users.</li>
              <li>Integrated features like voice search, emergency alerts, and multilingual UI.</li>
              <li>Built using React.js and Firebase with focus on accessibility.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
