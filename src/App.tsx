import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Interests from './components/IDeprecated2/Interests';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Scrollbar from './components/Scrollbar/Scrollbar';

function App() {
  return (
    <div className="App">
      {/* Global Space Background */}
      <div className="global-space-background">
        <div className="global-stars"></div>
        <div className="global-nebula"></div>
        <div className="global-asteroid" style={{ top: '20%', animationDelay: '0s' }}></div>
        <div className="global-asteroid" style={{ top: '60%', animationDelay: '5s' }}></div>
        <div className="global-asteroid" style={{ top: '80%', animationDelay: '10s' }}></div>
      </div>

      {/* Global Moon */}
      <div className="global-moon"></div>

      {/* Global Satellite */}
      <div className="global-satellite">
        <div className="global-satellite-body">
          <div className="global-solar-panels"></div>
        </div>
      </div>

      {/* Global Earth */}
      <div className="global-earth-container">
        <div className="global-earth">
          <div className="global-continents"></div>
          <div className="global-network-grid"></div>
          <div className="global-network-node" style={{ transform: 'rotate(0deg) translateX(120px)' }}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{ transform: 'rotate(120deg) translateX(120px)' }}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-network-node" style={{ transform: 'rotate(240deg) translateX(120px)' }}>
            <div className="global-pulse-ring"></div>
          </div>
          <div className="global-data-beam" style={{ transform: 'rotate(45deg)' }}></div>
          <div className="global-data-beam" style={{ transform: 'rotate(135deg)' }}></div>
          <div className="global-data-beam" style={{ transform: 'rotate(225deg)' }}></div>
          <div className="global-data-beam" style={{ transform: 'rotate(315deg)' }}></div>
        </div>
      </div>

      {/* Global Data Rain */}
      <div className="global-data-rain">
        <div className="global-data-stream" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="global-data-stream" style={{ left: '25%', animationDelay: '2s' }}></div>
        <div className="global-data-stream" style={{ left: '40%', animationDelay: '4s' }}></div>
        <div className="global-data-stream" style={{ left: '55%', animationDelay: '1s' }}></div>
        <div className="global-data-stream" style={{ left: '70%', animationDelay: '3s' }}></div>
        <div className="global-data-stream" style={{ left: '85%', animationDelay: '5s' }}></div>
      </div>

      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="scroll-snap-container">
        <div className="scroll-snap-section">
          <Hero />
        </div>
        <div className="scroll-snap-section">
          <Education />
        </div>
        <div className="scroll-snap-section">
          <WorkExperience />
        </div>
        <div className="scroll-snap-section">
          <Interests />
        </div>
        <div className="scroll-snap-section">
          <Resume />
        </div>
        <div className="scroll-snap-section">
          <Contact />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Custom Scrollbar */}
      <Scrollbar />
    </div>
  );
}

export default App
