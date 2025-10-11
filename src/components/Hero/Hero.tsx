import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { Typewriter } from "react-simple-typewriter";
import bgVideo from "../../assets/hero-bg.mp4"; 

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

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

      // apply glitch + sweep
      el.classList.add(styles.glitch);
      el.classList.add(styles.sweepActive || "");

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
      {/* optional background */}
      {<video className="absolute inset-0 w-full h-full object-cover" src={bgVideo} autoPlay loop muted playsInline />}
      <div className="absolute inset-0 bg-black/24 z-0" />

      <div className={`relative z-10 flex flex-col items-center justify-center space-y-6 px-4 ${styles.heroTextWrapper}`}>
        <h1
          ref={titleRef}
          data-text="Hi, I'm Himon"
          className={`${styles.heroTitle} ${styles.titleAnimated}`}
          style={{ fontSize: "clamp(3rem, 10vw, 20rem)" }}
        >
          {/* visible text */}
          Hi, I'm Himon
          {/* sweep overlay element (animated via CSS when .sweepActive present) */}
          <span className={styles.sweepOverlay} aria-hidden="true" />
        </h1>

        <h2 className={`${styles.heroSub}`} style={{ fontSize: "clamp(1.6rem, 4.2vw, 5rem)" }}>
          <Typewriter
            words={[
              "Security Engineer",
              "AI & Cloud Enthusiast",
              "Cyber Defense Specialist",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <p className={`${styles.heroDesc} text-gray-300 leading-relaxed max-w-2xl`} style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}>
          I build resilient, automated defense systems and research applied AI for security.
        </p>
      </div>

      <div className="absolute right-0 top-0 h-full w-1 bg-cyber-blue/70" />
    </section>
  );
};

export default Hero;
