// src/App.tsx

import { Footer } from "./components/layout/Footer";
import { Navigation } from "./components/layout/Navigation";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import WorkExperience from "./components/sections/WorkExperience";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-text font-sans selection:bg-primary/30">
      <Navigation onScrollToSection={scrollToSection} />
      <Hero />
      <Skills />
      <Education />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
