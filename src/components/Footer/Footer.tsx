import { useState, useEffect } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cpuUsage] = useState(Math.floor(Math.random() * 30 + 15));
  const [memUsage] = useState(Math.floor(Math.random() * 40 + 30));
  const [binaryDigits, setBinaryDigits] = useState<string[]>([]);
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const generateBinary = () => {
      const digits = Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0');
      setBinaryDigits(digits);
    };
    generateBinary();
    const binaryTimer = setInterval(generateBinary, 500);
    return () => clearInterval(binaryTimer);
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

      {/* Center section - Floating Binary */}
      <div className={styles.centerSection}>
        {binaryDigits.map((digit, i) => (
          <span 
            key={i}
            className={styles.floatingBinary}
            style={{ 
              "--x": `${Math.random() * 200 - 100}px`,
              "--y": `${Math.random() * 20 - 10}px`,
              "--delay": `${i * 0.1}s`,
              "--duration": `${3 + Math.random() * 2}s`
            } as React.CSSProperties}
          >
            {digit}
          </span>
        ))}
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