import { Navigation, Footer } from "@/components/layout";
import {
  Hero,
  About,
  Projects,
  Skills,
  Experience,
  Achievements,
  Contact,
} from "@/components/sections";
import {
  CustomCursor,
  ScrollAnimations,
  BackgroundAnimation,
  ScrollProgressBar,
  FloatingActionButton,
} from "@/components/effects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <ScrollAnimations />
      <BackgroundAnimation />
      <ScrollProgressBar />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
