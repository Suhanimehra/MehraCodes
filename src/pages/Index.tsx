import React from "react";
import { Footer } from "@/components/layout";
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
  BackgroundAnimation,
  ScrollProgressBar,
  FloatingActionButton,
  SmoothScroll,
} from "@/components/effects";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground relative selection:bg-neutral-800 selection:text-white">
        <CustomCursor />
        <BackgroundAnimation />
        <ScrollProgressBar />

        <main id="main-content">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Achievements />
          <Contact />
        </main>

        <Footer />
        <FloatingActionButton />
      </div>
    </SmoothScroll>
  );
};

export default Index;
