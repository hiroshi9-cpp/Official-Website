import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Scrollbar from './components/Scrollbar/Scrollbar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Resume from './components/Resume/Resume';
import Education from './components/Education/Education';
import Interests from './components/Interests/Interests';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Optimized background component
const SpaceBackground = () => (
  <>
    <div className="global-space-background">
      <div className="global-stars"></div>
      <div className="global-nebula"></div>
      {[0,2,4,6,8,10].map(delay => (
        <div key={delay} className="global-asteroid" style={{animationDelay: `${delay}s`}}></div>
      ))}
    </div>
    <div className="global-moon"></div>
    <div className="global-earth-container">
      <div className="global-earth">
        <div className="global-continents"></div>
        <div className="global-network-grid"></div>
        {[0,60,120,180,240,300].map(angle => (
          <div key={angle} className="global-network-node" style={{transform: `rotate(${angle}deg) translateX(120px)`}}>
            <div className="global-pulse-ring"></div>
          </div>
        ))}
        {[45,135,225,315].map(angle => (
          <div key={angle} className="global-data-beam" style={{transform: `rotate(${angle}deg)`}}></div>
        ))}
      </div>
    </div>
    <div className="global-data-rain">
      {[10,25,40,55,70,85].map((left, i) => (
        <div key={i} className="global-data-stream" style={{left: `${left}%`, animationDelay: `${i}s`}}></div>
      ))}
    </div>
  </>
);

// Apply programmatic zoom on load
function setSiteZoom(scale = 0.8) {
  try {
    const rootEl = document.documentElement;
    // Prefer the non-standard zoom property when available
    if ('zoom' in rootEl.style) {
      // set as number string (0.8) or '80%'
      // Using numeric makes some browsers interpret as scaling factor
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      rootEl.style.zoom = String(scale);
    } else {
      // Fallback: add a class that uses transform: scale()
      const className = `zoom-${Math.round(scale * 100)}`;
      rootEl.classList.add(className);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Failed to apply site zoom', err);
  }
}

// set the site to 80% zoom on initial load
setSiteZoom(0.8);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Scrollbar />
    <SpaceBackground />
    <Navbar />
    <main id="scroll-container" className="scroll-snap-container">
      <section id="Home" className="scroll-snap-section"><Hero /></section>
      <section id="Work Experience" className="scroll-snap-section"><WorkExperience /></section>
      <section id="Resume" className="scroll-snap-section"><Resume /></section>
      <section id="Education" className="scroll-snap-section"><Education /></section>
      <section id="Interests" className="scroll-snap-section"><Interests /></section>
      <section id="Contact" className="scroll-snap-section"><Contact /></section>
    </main>
    <Footer />
  </StrictMode>,
);
