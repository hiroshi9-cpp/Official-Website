import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log(form);
    alert("Message transmitted successfully!");
    setForm({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="Contact" className={styles.contactSection}>
      <div className={styles.floatingParticles}></div>
      <div className={styles.lightRays}></div>
      
      <div className={styles.header}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>Let's connect and build something amazing</p>
      </div>
      
      <div className={styles.contentContainer}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={form.name} 
              onChange={handleChange} 
              className={styles.input}
              required
              disabled={isSubmitting}
            />
            <div className={styles.inputGlow}></div>
          </div>
          
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={form.email} 
              onChange={handleChange} 
              className={styles.input}
              required
              disabled={isSubmitting}
            />
            <div className={styles.inputGlow}></div>
          </div>
          
          <div className={styles.inputGroup}>
            <textarea 
              name="message" 
              placeholder="Message" 
              value={form.message} 
              onChange={handleChange} 
              className={`${styles.input} ${styles.textarea}`}
              rows={5}
              required
              disabled={isSubmitting}
            />
            <div className={styles.inputGlow}></div>
          </div>
          
          <button 
            type="submit" 
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
            disabled={isSubmitting}
          >
            <span className={styles.buttonText}>
              {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
            </span>
            <div className={styles.buttonGlow}></div>
            {isSubmitting && (
              <>
                <div className={styles.transmissionWave}></div>
                <div className={styles.dataStream}></div>
                <div className={styles.quantumField}></div>
              </>
            )}
          </button>
        </form>
        
        <div className={styles.socialLinks}>
          <a 
            href="mailto:your.email@example.com" 
            className={styles.emailLink}
          >
            <span className={styles.linkIcon}>📧</span>
            <span className={styles.linkText}>your.email@example.com</span>
            <div className={styles.linkGlow}></div>
          </a>
          
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.linkedinLink}
          >
            <span className={styles.linkIcon}>💼</span>
            <span className={styles.linkText}>Connect on LinkedIn</span>
            <div className={styles.linkGlow}></div>
          </a>
        </div>
      </div>
      
      {/* Background Animations */}
      <div className={styles.matrixRain}>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className={styles.matrixColumn} style={{ left: `${i * 5}%`, animationDelay: `${i * 0.5}s` }}>
            <div className={styles.matrixChar}>0</div>
            <div className={styles.matrixChar}>1</div>
            <div className={styles.matrixChar}>0</div>
            <div className={styles.matrixChar}>1</div>
          </div>
        ))}
      </div>
      
      <div className={styles.circuitBoard}>
        <div className={styles.circuitLine} style={{ top: '20%', left: '10%', width: '30%' }}></div>
        <div className={styles.circuitLine} style={{ top: '60%', right: '15%', width: '25%' }}></div>
        <div className={styles.circuitLine} style={{ bottom: '30%', left: '20%', width: '40%' }}></div>
        <div className={styles.circuitNode} style={{ top: '20%', left: '40%' }}></div>
        <div className={styles.circuitNode} style={{ top: '60%', right: '15%' }}></div>
        <div className={styles.circuitNode} style={{ bottom: '30%', left: '60%' }}></div>
      </div>
    </section>
  );
};

export default Contact;
