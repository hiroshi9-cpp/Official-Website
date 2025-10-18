import { useState } from "react";
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
    position: "Risk Advisory Associate – Cyber Defense",
    duration: "July 2024 – Present",
    location: "Kolkata, India",
    description:
      "Delivering enterprise-grade cyber defense solutions through SIEM engineering, threat automation, and AI-driven security analytics across global client environments.",
    technologies: [
      "Exabeam (EQL)",
      "Microsoft Sentinel (KQL)",
      "CrowdStrike Falcon",
      "Azure Logic Apps",
      "Microsoft Purview",
      "PowerShell",
      "Python"
    ],
    achievements: [
      "Triaged 20–30+ daily alerts across healthcare, finance, and energy sectors, cutting false positives by 25% via IOC-based investigations.",
      "Developed custom EQL correlation rules in Exabeam to detect zero-day exploits, reducing undetected attack vectors across client environments.",
      "Automated Microsoft Sentinel threat hunts using Azure Logic Apps, slashing query execution and reporting time by 95%.",
      "Led 10+ weekly threat hunts using Exabeam, extracting IOCs/TTPs from OSINT and remediating endpoint threats within 1-hour SLA.",
      "Assessed enterprise LLMs using Moonshot AI toolkit to identify bias and hallucination, strengthening trustworthy AI deployment.",
      "Tested Azure OpenAI against OWASP LLM vulnerabilities, aligning AI controls with EU AI Act compliance to mitigate data leakage risks."
    ],
    image: "/src/assets/work-ex/grant-thornton.png",
  },
  {
    id: 2,
    company: "Caravel Labs",
    position: "Consulting Engineer Intern",
    duration: "June 2023 – Aug 2023",
    location: "Seattle, WA (Remote)",
    description:
      "Engineered secure and high-performance front-end systems for an educational technology initiative focused on social impact and accessibility.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Azure",
      "Cosmos DB",
      "Figma"
    ],
    achievements: [
      "Transformed Figma wireframes into a responsive React front-end, achieving 30% faster development through reusable components.",
      "Implemented MVVM architecture to enhance application security and integration, reducing API response time by 50%.",
      "Designed database schema to manage 7,000+ book records and 300+ active users, ensuring reliability and scalability.",
      "Developed an AI-based recommendation system using regression analysis with 92% accuracy to personalize content delivery."
    ],
    image: "/src/assets/work-ex/caravel-labs.png",
  },
  {
    id: 3,
    company: "Centre for Development of Advanced Computing (C-DAC)",
    position: "Machine Learning Intern",
    duration: "April 2023 – July 2023",
    location: "Kolkata, India",
    description:
      "Built scalable machine learning solutions and cloud-based applications for intelligent image analysis and quality assessment systems.",
    technologies: [
      "Python",
      "Django",
      "TensorFlow",
      "PyTorch",
      "AWS EC2",
      "AWS S3",
      "Nginx"
    ],
    achievements: [
      "Developed and deployed a Django web app on AWS (EC2, S3) for real-time maize grain image analysis and classification.",
      "Annotated and trained 2,000+ labeled images with RoboFlow, achieving 96% model confidence using YOLOv8 and Detectron2.",
      "Optimized cloud architecture for scalability and fault tolerance, ensuring uninterrupted uptime under high traffic.",
      "Benchmarked multiple segmentation frameworks (YOLOv8, Detectron2, Faster R-CNN) to maximize accuracy across 6 grain classes."
    ],
    image: "/src/assets/work-ex/cdac.png",
  },
  {
    id: 4,
    company: "Indian Institute of Technology (IIT) Kharagpur",
    position: "Research Intern – Digital Microfluidics",
    duration: "Dec 2022 – Feb 2023",
    location: "Kharagpur, India",
    description:
      "Conducted algorithmic and simulation-based research in digital microfluidics, focusing on efficient fluid control using computational and hardware modeling.",
    technologies: [
      "C",
      "Python",
      "NetworkX",
      "Matplotlib",
      "Arduino",
      "Autodesk Fusion 360"
    ],
    achievements: [
      "Developed C algorithms for electro-wetting control, reducing single-target concentration generation time by 30%.",
      "Implemented Kamada–Kawai graph layout using NetworkX to model solution mixing and splitting behaviors in microfluidic systems.",
      "Designed and simulated a 3D hexagonal mixer prototype in Autodesk Fusion 360, validated via Arduino-based hardware testing."
    ],
    image: "/src/assets/work-ex/iit-kgp.png",
  },
];

const WorkExperience = () => {
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
