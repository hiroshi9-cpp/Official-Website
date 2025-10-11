import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Scrollbar from './components/Scrollbar/Scrollbar.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Hero from "./components/Hero/Hero.tsx";
import WorkExperience from "./components/WorkExperience/WorkExperience.tsx";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Global scrollbar logic */}
    <Scrollbar />

    <Navbar />
    <main id="scroll-container" className="scroll-snap-container">
      <section id="Home" className="scroll-snap-section">
        <Hero />
      </section>
      <section id="Work Experience" className="scroll-snap-section">
        <WorkExperience />
      </section>
      <section id="Resume" className="scroll-snap-section">
        <Resume />
      </section>
      <section id="Education" className="scroll-snap-section">
        <Education />
      </section>
      <section id="Interests" className="scroll-snap-section">
        <Interests />
      </section>
      <section id="Contact" className="scroll-snap-section">
        <Contact />
      </section>
    </main>
  </StrictMode>,
);
