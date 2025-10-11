import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.tsx'
import Hero from "./components/Hero/Hero.tsx";
import WorkExperience from "./components/WorkExperience";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
      <main>
        <Hero />
        <WorkExperience />
        <Resume />
        <Education />
        <Interests />
        <Contact />
      </main>
  </StrictMode>,
)
