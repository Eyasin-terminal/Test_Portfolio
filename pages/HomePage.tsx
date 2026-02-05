
import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import ExperienceSection from '../sections/ExperienceSection';
import ProjectsSection from '../sections/ProjectsSection';
import Contact from '../sections/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <About />
      <ExperienceSection />
      <ProjectsSection />
      <Contact />
    </div>
  );
};

export default HomePage;
