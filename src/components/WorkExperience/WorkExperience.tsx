import React, { useState } from "react";
import styles from "./WorkExperience.module.css";

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  image: string;
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "Grant Thornton Advisors LLC",
    position: "Security Engineer",
    duration: "2023 – Present",
    location: "Chicago, IL",
    description:
      "Building resilient, automated, and intelligence-driven defense systems for enterprise clients.",
    technologies: [
      "Azure Sentinel",
      "CrowdStrike",
      "Python",
      "PowerShell",
      "SIEM",
    ],
    achievements: [
      "Developed custom EQL/KQL rules reducing false positives by 25%",
      "Led real-time remediation under 1-hour SLA across multiple sectors",
      "Built automated threat-hunting workflows cutting manual effort by 95%",
    ],
    image: "/src/assets/work-ex/grant-thornton.png",
  },
  {
    id: 2,
    company: "Caravel Labs",
    position: "Cybersecurity Research Intern",
    duration: "2022",
    location: "Remote",
    description:
      "Worked on privacy-preserving ML systems and secure architecture audits.",
    technologies: [
      "Machine Learning",
      "Privacy Engineering",
      "Security Audits",
      "Python",
    ],
    achievements: [
      "Developed privacy-preserving ML algorithms",
      "Conducted secure code and architecture reviews",
      "Published research on secure ML systems",
    ],
    image: "/src/assets/work-ex/caravel-labs.png",
  },
  {
    id: 3,
    company: "Centre for Development of Advanced Computing (CDAC)",
    position: "Research Intern – Cyber Forensics",
    duration: "2021",
    location: "Pune, India",
    description:
      "Developed automation tools for forensic data analysis and malware detection.",
    technologies: [
      "Digital Forensics",
      "Malware Analysis",
      "Automation",
      "Python",
      "Linux",
    ],
    achievements: [
      "Built automated forensic analysis tools",
      "Improved malware detection accuracy by 30%",
      "Streamlined forensic investigation processes",
    ],
    image: "/src/assets/work-ex/cdac.png",
  },
  {
    id: 4,
    company: "IIT Kharagpur",
    position: "Research Assistant",
    duration: "2020",
    location: "Kharagpur, India",
    description:
      "Worked on AI-driven network intrusion detection models under academic supervision.",
    technologies: [
      "AI/ML",
      "Network Security",
      "Intrusion Detection",
      "TensorFlow",
      "Python",
    ],
    achievements: [
      "Developed AI-based intrusion detection system",
      "Achieved 95% accuracy in threat detection",
      "Co-authored research paper on network security",
    ],
    image: "/src/assets/work-ex/iit-kgp.png",
    },
];

const WorkExperience: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<WorkExperience | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const handleCardClick = (work: WorkExperience) => {
    setSelectedWork(work);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  const handleCardHover = (index: number) => {
    setHoveredCardIndex(index);
  };

  const handleCardLeave = () => {
    setHoveredCardIndex(null);
  };

  return (
    <section id="WorkExperience" className={styles.workSection}>

      <div className={styles.warpLines}></div>
      <div className={styles.comets}></div>
      <div className={styles.shootingStars}></div>
      <div className={styles.planets}></div>
      <h2 className={styles.title}>Work Experience</h2>

      {/* Scrollable Card Container */}
      <div className={styles.cardsContainer} id="work-cards-container">
        <div className={styles.cardsWrapper}>
          {workExperiences.map((work, index) => (
            <div
              key={work.id}
              className={styles.workCard}
              onClick={() => handleCardClick(work)}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div 
                className={styles.cardInner}
                style={{
                  backgroundImage: `url(${work.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className={styles.cardOverlay}></div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.company}>{work.company}</h3>
                  <span className={styles.duration}>{work.duration}</span>
                </div>

                <h4 className={styles.position}>{work.position}</h4>
                <p className={styles.location}>{work.location}</p>
                <p className={styles.description}>{work.description}</p>

                <div className={styles.technologies}>
                  {work.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                  {work.technologies.length > 3 && (
                    <span className={styles.tech}>+{work.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cyberpunk Scrollbar */}
      <div className={styles.floatingScrollbar}>
        <div className={styles.scrollTrack}>
          <div className={styles.scrollThumb}></div>
          <div className={styles.scrollGlow}></div>
        </div>
        <div className={styles.scrollIndicators}>
          {workExperiences.map((_, index) => (
            <div 
              key={index} 
              className={`${styles.scrollDot} ${hoveredCardIndex === index ? styles.scrollDotActive : ''}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedWork && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cinematic Background Effects */}
            <div className={styles.modalBorderGlow}></div>
            <div className={styles.modalFireGlow}></div>
            <div className={styles.modalParticles}>
              <div className={styles.modalParticle}></div>
              <div className={styles.modalParticle}></div>
              <div className={styles.modalParticle}></div>
              <div className={styles.modalParticle}></div>
              <div className={styles.modalParticle}></div>
            </div>
            
            <button
              className={styles.closeButton}
              onClick={handleCloseModal}
            >
              ×
            </button>

            <div className={styles.modalHeader}>
              <h2 className={styles.modalCompany}>{selectedWork.company}</h2>
              <span className={styles.modalDuration}>{selectedWork.duration}</span>
            </div>

            <h3 className={styles.modalPosition}>{selectedWork.position}</h3>
            <p className={styles.modalLocation}>{selectedWork.location}</p>

            <div className={styles.modalSection}>
              <h4>Description</h4>
              <p>{selectedWork.description}</p>
            </div>

            <div className={styles.modalSection}>
              <h4>Technologies</h4>
              <div className={styles.modalTechnologies}>
                {selectedWork.technologies.map((tech, i) => (
                  <span key={i} className={styles.modalTech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.modalSection}>
              <h4>Key Achievements</h4>
              <ul className={styles.achievements}>
                {selectedWork.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkExperience;
