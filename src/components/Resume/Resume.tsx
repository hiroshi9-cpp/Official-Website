import React, { useState, useEffect } from "react";
import resumePDF from "../../assets/resume.pdf";
import styles from "./Resume.module.css";

const resumeData = {
  personal: {
    name: "Himon Sarkar",
    title: "Cyber Defense Engineer | AI Security & Automation",
    email: "himon.sarkar.us@gmail.com",
    location: "Kolkata, India",
    linkedin: "linkedin.com/in/himon9",
    github: "github.com/himon9",
  },

  bio: "Cybersecurity professional specializing in SIEM, EDR, and AI threat evaluation. Experienced in threat hunting, automation, and enterprise risk mitigation. Passionate about building resilient, intelligence-driven defense systems and researching trustworthy AI and compliance frameworks.",

  summary: "With hands-on experience in SIEM (Exabeam, Sentinel), EDR (CrowdStrike), and automation (Azure Logic Apps, Python), I focus on proactive threat detection and defense automation. I’ve contributed to enterprise cybersecurity operations, secure software consulting, and AI model vulnerability testing — bridging traditional SOC operations with AI-driven risk intelligence.",

  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Heritage Institute of Technology, India",
    duration: "Sept 2020 – June 2024",
    gpa: "3.79 / 4.00",
    highlights: [
      "Ranked 3rd in Computer Science department (378 students)",
      "Project: Implemented a Large Language Model using Transformer Architecture",
      "Coursework: Networks, Operating Systems, DBMS, Software Engineering",
    ],
  },

  certifications: [
    "Microsoft Certified: Azure Fundamentals (AZ-900)",
    "Microsoft Certified: Security Operations Analyst (SC-200)",
    "Microsoft Certified: Information Protection Administrator (SC-400)",
    "Multiple ‘Excellence’ Awards for client engagement and performance",
  ],

  skills: {
    Security: [
      "SIEM Engineering (Exabeam, Microsoft Sentinel)",
      "EDR Operations (CrowdStrike Falcon)",
      "Threat Hunting & IOC Analysis",
      "Incident Response Automation",
      "Vulnerability & CVE Mitigation",
      "AI Security & Trustworthy AI Evaluation",
    ],
    Programming: [
      "Python",
      "TypeScript",
      "PowerShell",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "Node.js",
    ],
    Cloud: ["Azure", "AWS", "Microsoft Purview", "Logic Apps", "CI/CD"],
    Tools: ["Git", "Docker", "VS Code", "Postman", "XrmToolBox"],
    Databases: ["Cosmos DB", "MongoDB", "MS Dataverse"],
  },

  experience: [
    {
      company: "Grant Thornton Advisors LLC",
      role: "Risk Advisory Associate – Cyber Defense",
      period: "July 2024 – Present",
      achievements: [
        "Triaged 20–30+ alerts daily across enterprise clients, reducing false positives by 25%.",
        "Developed EQL correlation rules in Exabeam to detect zero-day exploits, cutting undetected attack vectors.",
        "Automated Microsoft Sentinel threat hunting via Azure Logic Apps, reducing manual effort by 95%.",
        "Led weekly threat hunts and remediated endpoint threats within a 1-hour SLA using CrowdStrike Falcon.",
        "Assessed enterprise LLMs for bias and safety using Moonshot AI toolkit and aligned controls with EU AI Act.",
      ],
    },
    {
      company: "Caravel Labs",
      role: "Consulting Engineer Intern",
      period: "June 2023 – August 2023",
      achievements: [
        "Transformed Figma designs into responsive React front-end with 30% faster component reuse.",
        "Implemented MVVM architecture to improve app security and performance, cutting API latency by 50%.",
        "Designed database schema for 7,000+ book records and 300+ active users, ensuring reliable data management.",
        "Built AI-based recommendation system using regression analysis with 92% accuracy.",
      ],
    },
    {
      company: "Centre for Development of Advanced Computing (C-DAC)",
      role: "Machine Learning Intern",
      period: "April 2023 – July 2023",
      achievements: [
        "Developed Django-based cloud app hosted on AWS EC2/S3 for maize grain image analysis.",
        "Annotated and trained 2,000+ images via RoboFlow achieving 96% model confidence with YOLOv8.",
        "Benchmarked segmentation models (Detectron2, Faster R-CNN) to optimize classification precision.",
      ],
    },
    {
      company: "Indian Institute of Technology (IIT) Kharagpur",
      role: "Research Intern – Digital Microfluidics",
      period: "Dec 2022 – Feb 2023",
      achievements: [
        "Developed C algorithms for electro-wetting control, reducing droplet generation time by 30%.",
        "Implemented Kamada–Kawai graph layout in NetworkX to simulate fluidic mixing and splitting.",
        "Designed 3D microfluidic mixer prototype using Autodesk Fusion 360 and validated via Arduino simulation.",
      ],
    },
  ],

  projects: [
    {
      title: "Blood Glucose Level Prediction (Machine Learning)",
      period: "April 2023 – May 2023",
      link: "https://github.com/hiroshi9-cpp/Glucose-Level-Prediction-Surajit-Sir-",
      description:
        "Implemented Perceptron Learning Algorithm and Multi-Layered ANN models to predict blood glucose levels with 97% accuracy using data preprocessing and visualization techniques (Matplotlib).",
      impact:
        "Achieved reliable health parameter predictions and advanced understanding of biomedical ML pipelines.",
    },
    {
      title: "Multiple Disease Prediction System (Machine Learning)",
      period: "Feb 2023 – Mar 2023",
      link: "https://multiple-disease-prediction-9.streamlit.app/",
      description:
        "Performed EDA and trained ML models in Scikit-Learn achieving 86.38% accuracy on Kaggle datasets. Deployed via Streamlit with integrated models for real-time health predictions.",
      impact:
        "Enabled user-friendly medical risk assessment through web interface powered by ML inference.",
    },
    {
      title: "Visualize Path Finding Algorithms (Data Structures & Algorithms)",
      period: "July 2022 – Aug 2022",
      link: "https://github.com/hiroshi9-cpp/VisualizeAlgorithms",
      description:
        "Used Python’s NetworkX to visualize Dijkstra, Kruskal, and Floyd-Warshall algorithms, enhancing graph algorithm comprehension.",
      impact:
        "Benefited 130+ students by simplifying algorithmic visualization through automated image generation.",
    },
    {
      title: "Manchester City F.C Fan Page (Full-Stack Development)",
      period: "July 2022 – Aug 2022",
      link: "https://mcity-10982.web.app/",
      description:
        "Built a feature-rich web application using Firebase, React, and Node.js with animated UI, server-rendered components, and Firebase authentication.",
      impact:
        "Delivered seamless fan engagement experience with secure real-time data management.",
    },
  ],

  contact: {
    email: "himon.sarkar.us@gmail.com",
    linkedin: "linkedin.com/in/himon9",
    github: "https://github.com/hiroshi9-cpp",
    location: "Kolkata, India",
  },
};

const Resume: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [isTerminalActive, setIsTerminalActive] = useState(false);
  const [commandHistory, setCommandHistory] = useState<any[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const commands = {
    help:
      "Available commands: bio, summary, personal, education, skills, experience, projects, certifications, contact, download, clear",
    bio: resumeData.bio,
    summary: resumeData.summary,
    personal: resumeData.personal,
    education: resumeData.education,
    skills: resumeData.skills,
    experience: resumeData.experience,
    projects: resumeData.projects,
    certifications: resumeData.certifications,
    contact: resumeData.contact,
    download: "Downloading resume...",
    clear: "clear",
  };


  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    // Add to input history if not empty
    if (cmd.trim()) {
      setInputHistory(prev => [...prev, cmd.trim()]);
      setHistoryIndex(-1);
    }
    
    if (command === "clear") {
      setCommandHistory([]);
      return;
    }
    
    if (command === "download") {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'resume.pdf';
      link.click();
    }
    
    const output = commands[command as keyof typeof commands] || `Command '${command}' not found. Type 'help' for available commands.`;
    setCommandHistory(prev => [...prev, `$ ${cmd}`, output]);
  };

  const handleTerminalClick = () => {
    setIsTerminalActive(true);
    if (commandHistory.length === 0) {
      setCommandHistory(["Welcome to Resume Terminal v2.0", "Type 'help' to see available commands"]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentCommand.trim()) {
      executeCommand(currentCommand);
      setCurrentCommand("");
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (inputHistory.length > 0) {
        const newIndex = historyIndex === -1 ? inputHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentCommand(inputHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= inputHistory.length) {
          setHistoryIndex(-1);
          setCurrentCommand("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentCommand(inputHistory[newIndex]);
        }
      }
    }
  };

  const renderOutput = (output: any, index: number) => {
    if (typeof output === 'string') {
      return <div key={index} className={styles.terminalLine}>{output}</div>;
    }
    
    // Handle skills object with special formatting
    if (typeof output === 'object' && output.Security) {
      return (
        <div key={index} className={styles.skillsContainer}>
          {Object.entries(output).map(([category, skills]) => (
            <div key={category} className={styles.skillCategory}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>▶</span>
                <span className={styles.categoryName}>{category}</span>
              </div>
              <div className={styles.skillsList}>
                {(skills as string[]).map((skill, i) => (
                  <div key={i} className={styles.skillItem}>
                    <span className={styles.skillBullet}>●</span>
                    <span className={styles.skillText}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    // Handle personal info object
    if (typeof output === 'object' && output.name) {
      return (
        <div key={index} className={styles.personalContainer}>
          <div className={styles.personalHeader}>═══ PERSONAL INFORMATION ═══</div>
          {Object.entries(output).map(([key, value]) => (
            <div key={key} className={styles.personalItem}>
              <span className={styles.personalKey}>{key.toUpperCase()}:</span>
              <span className={styles.personalValue}>{String(value)}</span>
            </div>
          ))}
        </div>
      );
    }
    
    // Handle education object
    if (typeof output === 'object' && output.degree) {
      return (
        <div key={index} className={styles.educationContainer}>
          <div className={styles.educationHeader}>🎓 EDUCATION</div>
          <div className={styles.educationMain}>
            <div className={styles.degreeInfo}>{output.degree}</div>
            <div className={styles.institutionInfo}>{output.institution}</div>
            <div className={styles.durationInfo}>{output.duration} | GPA: {output.gpa}</div>
          </div>
          <div className={styles.highlightsSection}>
            <div className={styles.highlightsHeader}>Key Highlights:</div>
            {output.highlights.map((highlight: string, i: number) => (
              <div key={i} className={styles.highlightItem}>
                <span className={styles.highlightBullet}>★</span>
                <span className={styles.highlightText}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    // Handle contact object
    if (typeof output === 'object' && output.email) {
      return (
        <div key={index} className={styles.contactContainer}>
          <div className={styles.contactHeader}>📞 CONTACT INFORMATION</div>
          {Object.entries(output).map(([key, value]) => (
            <div key={key} className={styles.contactItem}>
              <span className={styles.contactIcon}>
                {key === 'email' ? '✉' : key === 'linkedin' ? '💼' : key === 'github' ? '🔗' : '📍'}
              </span>
              <span className={styles.contactKey}>{key.toUpperCase()}:</span>
              <span className={styles.contactValue}>{String(value)}</span>
            </div>
          ))}
        </div>
      );
    }
    
    // Handle certifications array
    if (Array.isArray(output) && typeof output[0] === 'string' && output[0].includes('Microsoft')) {
      return (
        <div key={index} className={styles.certificationsContainer}>
          <div className={styles.certificationsHeader}>🏆 CERTIFICATIONS & AWARDS</div>
          {output.map((cert, i) => (
            <div key={i} className={styles.certificationItem}>
              <span className={styles.certBadge}>🎖</span>
              <span className={styles.certText}>{cert}</span>
            </div>
          ))}
        </div>
      );
    }
    
    // Handle projects array
    if (Array.isArray(output) && output[0]?.title) {
      return (
        <div key={index} className={styles.projectsContainer}>
          <div className={styles.projectsHeader}>🚀 KEY PROJECTS</div>
          {output.map((project, i) => (
            <div key={i} className={styles.projectItem}>
              <div className={styles.projectTitle}>
                <span className={styles.projectIcon}>⚡</span>
                {project.title}
              </div>
              <div className={styles.projectPeriod}>📅 {project.period}</div>
              <div className={styles.projectLink}>
                <span className={styles.linkIcon}>🔗</span>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkText}>
                  {project.link}
                </a>
              </div>
              <div className={styles.projectDescription}>{project.description}</div>
              <div className={styles.projectImpact}>
                <span className={styles.impactLabel}>IMPACT:</span>
                <span className={styles.impactText}>{project.impact}</span>
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    // Handle experience array
    if (Array.isArray(output) && output[0]?.company) {
      return (
        <div key={index} className={styles.experienceContainer}>
          <div className={styles.experienceHeader}>💼 WORK EXPERIENCE</div>
          {output.map((item, i) => (
            <div key={i} className={styles.experienceItem}>
              <div className={styles.companyRole}>
                <span className={styles.companyIcon}>🏢</span>
                {item.company} - {item.role}
              </div>
              <div className={styles.period}>📅 {item.period}</div>
              <div className={styles.achievementsSection}>
                {item.achievements.map((achievement: string, j: number) => (
                  <div key={j} className={styles.achievement}>
                    <span className={styles.achievementBullet}>▸</span>
                    <span className={styles.achievementText}>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
    
    return <div key={index} className={styles.terminalLine}>{String(output)}</div>;
  };

  return (
    <section id="Resume" className={styles.resumeSection}>
      <div className={styles.scanlines}></div>
      <div className={styles.crtEffect}></div>
      
      <h2 className={styles.title}>Resume Terminal</h2>
      
      <div className={styles.terminalContainer} onClick={handleTerminalClick}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalButtons}>
            <span className={styles.terminalButton} style={{background: '#ff5f57'}}></span>
            <span className={styles.terminalButton} style={{background: '#ffbd2e'}}></span>
            <span className={styles.terminalButton} style={{background: '#28ca42'}}></span>
          </div>
          <div className={styles.terminalTitle}>resume@terminal:~$</div>
        </div>
        
        <div className={styles.terminalBody}>
          {commandHistory.map((line, index) => renderOutput(line, index))}
          
          {isTerminalActive && (
            <div className={styles.inputLine}>
              <span className={styles.prompt}>$ </span>
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className={styles.terminalInput}
                placeholder="Type a command..."
                autoFocus
              />
            </div>
          )}
          
          {!isTerminalActive && (
            <div className={styles.clickPrompt}>
              <span className={styles.blinkingText}>Click to activate terminal</span>
            </div>
          )}
        </div>
      </div>
      
      <div className={styles.quickActions}>
        <a href={resumePDF} download className={styles.downloadButton}>
          Download PDF
        </a>
      </div>
    </section>
  );
};

export default Resume;
