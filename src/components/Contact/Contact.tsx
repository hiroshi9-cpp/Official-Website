import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      // Don't initialize EmailJS without a public key. Log a clear warning for developers.
      // This keeps secrets out of the repo - put keys in a local `.env` file.
      // See README.md or .env.example for required vars.
      // The contact form will be disabled until these are provided.
      // eslint-disable-next-line no-console
      console.warn('EmailJS public key (VITE_EMAILJS_PUBLIC_KEY) is not set. Contact form will not send messages.');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;

    if (!serviceId || !templateId) {
      // Missing configuration - abort and notify the user
      // eslint-disable-next-line no-console
      console.error('EmailJS service/template IDs are not configured. Set VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_TEMPLATE_ID in your .env.');
      alert('Contact form is not configured on this site. Please contact the site owner directly.');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message
        }
      );
      
      console.log('Email sent successfully:', result);
      alert("Message transmitted successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error('Email send failed:', error);
      const errorMessage = error?.text || error?.message || JSON.stringify(error);
      alert(`Failed to send message: ${errorMessage}`);
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="Contact" className={styles.contactSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>Let's connect and build something amazing</p>
      </div>
      
      <div className={styles.contentContainer}>
        <form onSubmit={handleSubmit} className={styles.contactForm} name="contact" method="POST" data-netlify="true">
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
            href="mailto:himon.sarkar.us@gmail.com" 
            className={styles.emailLink}
          >
            <span className={styles.linkIcon}>📧</span>
            <span className={styles.linkText}>himon.sarkar.us@gmail.com</span>
            <div className={styles.linkGlow}></div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/himon9/" 
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
      
      <div className={styles.matrixRain}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className={styles.matrixColumn} style={{ left: `${i * 10}%`, animationDelay: `${i * 0.5}s` }}>
            <div className={styles.matrixChar}>{i % 2}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
