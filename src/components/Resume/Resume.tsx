import resumePDF from "../../assets/resume.pdf";
import styles from "./Resume.module.css";

const Resume = () => (
  <section id="Resume" className={styles.resumeSection}>
    <h2 className={styles.title}>Resume</h2>
    <div className={styles.downloadContainer}>
      <a href={resumePDF} download className={styles.downloadButton}>
        Download Resume
      </a>
    </div>
  </section>
);

export default Resume;
