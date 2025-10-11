import React, { useState, useEffect } from "react";
import resumePDF from "../../assets/resume.pdf";
import styles from "./Resume.module.css";

const resumeData = {
  personal: {
    name: "Your Name",
    title: "Security Engineer & Full-Stack Developer",
    email: "your.email@domain.com",
    location: "Chicago, IL",
    github: "github.com/yourusername",
    linkedin: "linkedin.com/in/yourprofile"
  },
  skills: {
    "Security": ["Azure Sentinel", "CrowdStrike", "SIEM", "Threat Hunting", "Incident Response"],
    "Programming": ["Python", "JavaScript", "TypeScript", "React", "Node.js"],
    "Cloud & DevOps": ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  experience: [
    {
      company: "Grant Thornton Advisors LLC",
      role: "Security Engineer",
      period: "2023 – Present",
      achievements: [
        "Reduced false positives by 25% with custom EQL/KQL rules",
        "Led real-time remediation under 1-hour SLA",
        "Built automated threat-hunting workflows"
      ]
    },
    {
      company: "Caravel Labs",
      role: "Cybersecurity Research Intern",
      period: "2022",
      achievements: [
        "Developed privacy-preserving ML algorithms",
        "Conducted secure architecture reviews",
        "Published research on secure ML systems"
      ]
    }
  ]
};

const Resume: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [isTerminalActive, setIsTerminalActive] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const commands = {
    "help": "Available commands: personal, skills, experience, download, clear",
    "personal": resumeData.personal,
    "skills": resumeData.skills,
    "experience": resumeData.experience,
    "download": "Downloading resume...",
    "clear": "clear"
  };

  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentCommand.trim()) {
      executeCommand(currentCommand);
      setCurrentCommand("");
    }
  };

  const renderOutput = (output: any, index: number) => {
    if (typeof output === 'string') {
      return <div key={index} className={styles.terminalLine}>{output}</div>;
    }
    
    if (typeof output === 'object') {
      return (
        <div key={index} className={styles.terminalObject}>
          {Object.entries(output).map(([key, value]) => (
            <div key={key} className={styles.terminalProperty}>
              <span className={styles.propertyKey}>{key}:</span>
              <span className={styles.propertyValue}>
                {Array.isArray(value) ? value.join(", ") : String(value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    
    if (Array.isArray(output)) {
      return (
        <div key={index} className={styles.terminalArray}>
          {output.map((item, i) => (
            <div key={i} className={styles.experienceItem}>
              <div className={styles.companyRole}>
                {item.company} - {item.role}
              </div>
              <div className={styles.period}>{item.period}</div>
              {item.achievements.map((achievement: string, j: number) => (
                <div key={j} className={styles.achievement}>• {achievement}</div>
              ))}
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
                onKeyPress={handleKeyPress}
                className={styles.terminalInput}
                placeholder="Type a command..."
                autoFocus
              />
              <span className={styles.cursor}></span>
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
        <button 
          className={styles.quickButton}
          onClick={() => executeCommand("personal")}
        >
          Personal Info
        </button>
        <button 
          className={styles.quickButton}
          onClick={() => executeCommand("skills")}
        >
          Skills
        </button>
        <button 
          className={styles.quickButton}
          onClick={() => executeCommand("experience")}
        >
          Experience
        </button>
        <a href={resumePDF} download className={styles.downloadButton}>
          Download PDF
        </a>
      </div>
    </section>
  );
};

export default Resume;
