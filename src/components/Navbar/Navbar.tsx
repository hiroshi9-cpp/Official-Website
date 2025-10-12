import { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const sections = ["Home", "Work Experience", "Resume", "Education", "Interests", "Contact"];

  const triggerEasterEgg = () => {
    console.log('Easter egg triggered!');
    setIsEasterEggActive(true);
    setTimeout(() => setIsEasterEggActive(false), 8000);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <span className={styles.brand} onClick={triggerEasterEgg} style={{ cursor: 'pointer' }}>DEFENSE // ACTIVATED</span>
        <ul className={styles.navList}>
          {sections.map((section, i) => (
            <li
              key={section}
              className={styles.navItem}
              style={{ "--i": i } as React.CSSProperties}
            >
              <Link
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                activeClass={styles.active}
                containerId="scroll-container"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {isEasterEggActive && (
        <div className={styles.easterEgg}>
          <div className={styles.shockwave}></div>
          <div className={styles.matrixRain}>
            {[...Array(50)].map((_, i) => (
              <div key={i} className={styles.matrixColumn} style={{ "--delay": `${i * 0.1}s`, "--left": `${i * 2}%` } as React.CSSProperties}>
                {[...Array(20)].map((_, j) => (
                  <span key={j} className={styles.matrixChar}>{Math.random() > 0.5 ? '1' : '0'}</span>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.hologram}>
            <div className={styles.hologramText}>SYSTEM OVERRIDE</div>
            <div className={styles.hologramSubtext}>QUANTUM ENCRYPTION ACTIVATED</div>
          </div>
          <div className={styles.energyBeams}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={styles.energyBeam} style={{ "--angle": `${i * 45}deg` } as React.CSSProperties}></div>
            ))}
          </div>
          <div className={styles.particleExplosion}>
            {[...Array(30)].map((_, i) => (
              <div key={i} className={styles.particle} style={{ "--angle": `${i * 12}deg` } as React.CSSProperties}></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
