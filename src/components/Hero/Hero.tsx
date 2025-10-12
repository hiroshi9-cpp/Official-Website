import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [currentText, setCurrentText] = useState("Hi, I'm Himon");
  const texts = ["Hi, I'm Himon", "Welcome"];

  useEffect(() => {
  let mounted = true;

  function scheduleGlitch() {
    if (!mounted) return;
    const delay = 500 + Math.random() * 5000; // 0.5–1.5s randomized

    const t = setTimeout(() => {
      if (!mounted || !titleRef.current) return;
      const el = titleRef.current;

      // random hue shift for cyan-related colors (150-210 degrees)
      const cyanHue = 150 + Math.random() * 60; // cyan to blue range
      el.style.setProperty("--hue", `${cyanHue}deg`);

      // apply glitch + sweep and alternate text
      el.classList.add(styles.glitch);
      el.classList.add(styles.sweepActive || "");
      
      // Alternate text during glitch
      setCurrentText(prev => prev === texts[0] ? texts[1] : texts[0]);

      // quick secondary burst (optional)
      setTimeout(() => {
        if (mounted && el) {
          el.classList.add(styles.glitch);
          setTimeout(() => el.classList.remove(styles.glitch), 150);
        }
      }, 150 + Math.random() * 150);

      // remove classes after animation
      setTimeout(() => {
        el.classList.remove(styles.glitch);
        el.classList.remove(styles.sweepActive || "");
      }, 520);

      scheduleGlitch();
    }, delay);

    return t;
  }

  const timer = scheduleGlitch();
  return () => {
    mounted = false;
    clearTimeout(timer as unknown as number);
  };
}, []);


  return (
    <section
      id="Home"
      className="relative flex flex-col justify-center items-center min-h-screen text-center text-white overflow-hidden"
    >



      <div className={`relative z-10 flex flex-col items-center px-4 ${styles.heroTextWrapper}`} style={{ minHeight: '100vh', justifyContent: 'center' }}>
        <div className="flex flex-col items-center space-y-6">
          <h1
            ref={titleRef}
            data-text={currentText}
            className={`${styles.heroTitle} ${styles.titleAnimated}`}
            style={{ fontSize: "clamp(3rem, 10vw, 20rem)" }}
          >
            {/* visible text */}
            {currentText}
            {/* sweep overlay element (animated via CSS when .sweepActive present) */}
            <span className={styles.sweepOverlay} aria-hidden="true" />
          </h1>

          <h2 className={`${styles.heroSub}`} style={{ fontSize: "clamp(1.6rem, 4.2vw, 4rem)" }}>
            <Typewriter
              words={[
                "Security Engineer",
                "AI & Cloud Enthusiast",
                "Cyber Defense Specialist",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
        </div>

        <div className={`${styles.heroDesc} ${styles.teleprompter} text-gray-300`}>
  <div className={styles.teleprompterText}>
  <p>Security Engineer | AI-Powered Cyber Defense | Security Automation Architect</p>
  
  <p>Microsoft Certified: AZ-900 • SC-200 • SC-400</p>
  
  <p>SIEM Engineering — Exabeam (EQL) • Microsoft Sentinel (KQL) • Threat Detection Automation</p>
  <p>EDR Operations — CrowdStrike Falcon • Real-Time Incident Response</p>
  
  <p>Security Automation — Azure Logic Apps • PowerShell • Python Engineering</p>
  <p>AI & Cloud Security — LLM Vulnerability Testing • Trustworthy AI Evaluation</p>
  
  
  <p>Building Resilient, Adaptive, and Intelligence-Driven Defense Systems</p>
</div>
</div>
      </div>
    </section>
  );
};


export default Hero;
