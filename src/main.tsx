import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Component for random positioned data streams
const RandomDataStreams = () => {
  const streams = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: Math.random() * 90 + 5, // Random between 5% and 95%
    duration: Math.random() * 10 + 15, // Random between 15s and 25s
    delay: Math.random() * 10, // Random between 0s and 10s
    opacity: Math.random() * 0.4 + 0.6 // Random between 0.6 and 1.0
  }));

  return (
    <div className="global-data-rain">
      {streams.map(stream => (
        <div 
          key={stream.id}
          className="global-data-stream" 
          style={{
            left: `${stream.left}%`,
            animationDuration: `${stream.duration}s`,
            animationDelay: `${stream.delay}s`,
            opacity: stream.opacity
          }}
        />
      ))}
    </div>
  );
};

import Scrollbar from './components/Scrollbar/Scrollbar.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Hero from "./components/Hero/Hero.tsx";
import WorkExperience from "./components/WorkExperience/WorkExperience.tsx";
import Resume from "./components/Resume/Resume.tsx";
import Education from "./components/Education/Education.tsx";
import Interests from "./components/Interests/Interests.tsx";
import Contact from "./components/Contact/Contact.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Global scrollbar logic */}
    <Scrollbar />
    
    {/* Global space background */}
    <div className="global-space-background">
      <div className="global-stars"></div>
      <div className="global-nebula"></div>
      <div className="global-asteroid" style={{left: '25%', top: '15%', animationDelay: '0s'}}></div>
      <div className="global-asteroid" style={{left: '40%', top: '45%', animationDelay: '2s'}}></div>
      <div className="global-asteroid" style={{left: '55%', top: '25%', animationDelay: '4s'}}></div>
      <div className="global-asteroid" style={{left: '70%', top: '55%', animationDelay: '6s'}}></div>
      <div className="global-asteroid" style={{left: '85%', top: '35%', animationDelay: '8s'}}></div>
      <div className="global-asteroid" style={{left: '95%', top: '65%', animationDelay: '10s'}}></div>
      <div className="global-satellite" style={{animationDelay: '0s', animationDuration: '20s'}}>
        <div className="global-satellite-body"></div>
        <div className="global-solar-panels"></div>
      </div>
      <div className="global-satellite" style={{animationDelay: '8s', animationDuration: '25s'}}>
        <div className="global-satellite-body"></div>
        <div className="global-solar-panels"></div>
      </div>
      <div className="global-satellite" style={{animationDelay: '16s', animationDuration: '30s'}}>
        <div className="global-satellite-body"></div>
        <div className="global-solar-panels"></div>
      </div>
      <div className="global-earth-container">
        <div className="global-earth">
          <div className="global-continents"></div>
          <div className="global-network-grid"></div>
          <div className="global-network-node" style={{transform: 'rotateY(0deg) translateZ(150px) rotateX(-30deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(30deg) translateZ(150px) rotateX(0deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(60deg) translateZ(150px) rotateX(30deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(90deg) translateZ(150px) rotateX(-30deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(120deg) translateZ(150px) rotateX(0deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(150deg) translateZ(150px) rotateX(30deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(180deg) translateZ(150px) rotateX(-30deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(210deg) translateZ(150px) rotateX(0deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(240deg) translateZ(150px) rotateX(30deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(270deg) translateZ(150px) rotateX(-30deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(300deg) translateZ(150px) rotateX(0deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{transform: 'rotateY(330deg) translateZ(150px) rotateX(30deg)'}}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-data-beam" style={{transform: 'rotateY(0deg) rotateX(-10deg)'}}></div>
          <div className="global-data-beam" style={{transform: 'rotateY(45deg) rotateX(10deg)'}}></div>
          <div className="global-data-beam" style={{transform: 'rotateY(90deg) rotateX(-10deg)'}}></div>
          <div className="global-data-beam" style={{transform: 'rotateY(135deg) rotateX(10deg)'}}></div>
          <div className="global-data-beam" style={{transform: 'rotateY(180deg) rotateX(-10deg)'}}></div>
          <div className="global-data-beam" style={{transform: 'rotateY(225deg) rotateX(10deg)'}}></div>
          <div className="global-data-beam" style={{transform: 'rotateY(270deg) rotateX(-10deg)'}}></div>
          <div className="global-data-beam" style={{transform: 'rotateY(315deg) rotateX(10deg)'}}></div>
        </div>
      </div>
    </div>
    
    {/* Global falling pulsars */}
    <RandomDataStreams />
    
    {/* Global fixed moon */}
    <div className="global-moon"></div>

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
