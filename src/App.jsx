import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Particles from "./components/Particles/Particles";
import BackToTopButton from "./components/BackToTop/BackToTopButton";

const App = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div style={{ width: '100%', height: '600%', position: 'relative' }}>
    <Particles
      particleColors={['#ffffff', '#ffffff']}
      particleCount={1000}
      particleSpread={15}
      speed={0.1}
      particleBaseSize={80}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
      />
      </div>
      </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Experience />
          <Projects />
          <Contact />
          <BackToTopButton />
        </div>
    </div>
  );
};

export default App;