import React from "react";
import styles from "./Interests.module.css";

const movieRollsData = [
  {
    id: 1,
    direction: 'left',
    speed: 'slow',
    items: [
      { type: 'text', content: 'AI SECURITY' },
      { type: 'image', content: '/src/assets/interests/ai-security.jpg' },
      { type: 'text', content: 'THREAT HUNTING' },
      { type: 'image', content: '/src/assets/interests/threat-hunting.jpg' },
      { type: 'text', content: 'CLOUD SECURITY' },
      { type: 'image', content: '/src/assets/interests/cloud-security.jpg' },
      { type: 'text', content: 'MALWARE ANALYSIS' },
      { type: 'image', content: '/src/assets/interests/malware.jpg' }
    ]
  },
  {
    id: 2,
    direction: 'right',
    speed: 'medium',
    items: [
      { type: 'image', content: '/src/assets/interests/machine-learning.jpg' },
      { type: 'text', content: 'MACHINE LEARNING' },
      { type: 'image', content: '/src/assets/interests/automation.jpg' },
      { type: 'text', content: 'AUTOMATION' },
      { type: 'image', content: '/src/assets/interests/blockchain.jpg' },
      { type: 'text', content: 'BLOCKCHAIN' },
      { type: 'image', content: '/src/assets/interests/iot.jpg' },
      { type: 'text', content: 'IOT SECURITY' }
    ]
  },
  {
    id: 3,
    direction: 'left',
    speed: 'fast',
    items: [
      { type: 'text', content: 'COMPETITIVE PROGRAMMING' },
      { type: 'image', content: '/src/assets/interests/programming.jpg' },
      { type: 'text', content: 'OPEN SOURCE' },
      { type: 'image', content: '/src/assets/interests/opensource.jpg' },
      { type: 'text', content: 'TECH BLOGGING' },
      { type: 'image', content: '/src/assets/interests/blogging.jpg' },
      { type: 'text', content: 'GAMING' },
      { type: 'image', content: '/src/assets/interests/gaming.jpg' }
    ]
  }
];

const Interests: React.FC = () => {
  return (
    <section id="Interests" className={styles.interestsSection}>
      <div className={styles.floatingParticles}></div>
      <div className={styles.lightRays}></div>
      
      <div className={styles.header}>
        <h2 className={styles.title}>Interests & Passions</h2>
        <p className={styles.subtitle}>What drives my curiosity</p>
      </div>
      
      <div className={styles.movieRollsContainer}>
        {movieRollsData.map((roll, index) => (
          <div 
            key={roll.id} 
            className={`${styles.movieRoll} ${styles[roll.direction]} ${styles[roll.speed]}`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <div className={styles.rollTrack}>
              {/* Duplicate items for seamless loop */}
              {[...roll.items, ...roll.items, ...roll.items].map((item, itemIndex) => (
                <div 
                  key={`${roll.id}-${itemIndex}`} 
                  className={`${styles.rollItem} ${styles[item.type]}`}
                >
                  {item.type === 'text' ? (
                    <span className={styles.rollText}>{item.content}</span>
                  ) : (
                    <div className={styles.rollImageContainer}>
                      <img 
                        src={item.content} 
                        alt="Interest" 
                        className={styles.rollImage}
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100%25" height="100%25" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" fill="%2300ffff" text-anchor="middle" dy=".3em"%3EInterest%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <div className={styles.imageGlow}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.rollGlow}></div>
            <div className={styles.rollBorder}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
