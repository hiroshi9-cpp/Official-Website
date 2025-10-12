import { useState, useEffect } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cpuUsage] = useState(Math.floor(Math.random() * 30 + 15));
  const [memUsage] = useState(Math.floor(Math.random() * 40 + 30));
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className={styles.footer}>
      {/* Sweep beam effect */}
      <div className={styles.sweepBeam}></div>
      
      {/* Left section - Status */}
      <div className={styles.leftSection}>
        <span className={styles.statusIndicator}></span>
        <span className={styles.statusText}>SYSTEM ONLINE</span>
        <div className={styles.separator}></div>
        <span className={styles.metric}>CPU: {cpuUsage}%</span>
        <span className={styles.metric}>MEM: {memUsage}%</span>
      </div>

      {/* Center section */}
      <div className={styles.centerSection}>
        <span className={styles.copyrightText}>
          Designed & Developed by Himon Sarkar @2025
        </span>
      </div>

      {/* Right section - Time & Build */}
      <div className={styles.rightSection}>
        <span className={styles.timeText}>
          {currentTime.toLocaleTimeString('en-US', { hour12: false })} UTC
        </span>
        <div className={styles.separator}></div>
        <span className={styles.buildText}>
          BUILD: {Math.random().toString(36).substr(2, 6).toUpperCase()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;