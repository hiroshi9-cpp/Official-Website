import React, { useState, useEffect } from "react";
import styles from "./Interests.module.css";

interface Interest {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const interests: Interest[] = [
  {
    id: 1,
    title: "Cybersecurity Research",
    description: "Exploring advanced threat detection and AI-driven security solutions",
    image: "/src/assets/Interests/cybersecurity.svg",
    category: "Technology"
  },
  {
    id: 2,
    title: "Space Exploration",
    description: "Fascinated by cosmic mysteries and interstellar possibilities",
    image: "/src/assets/Interests/space.svg",
    category: "Science"
  },
  {
    id: 3,
    title: "Digital Art",
    description: "Creating futuristic visuals and cyberpunk aesthetics",
    image: "/src/assets/Interests/digital-art.svg",
    category: "Creative"
  },
  {
    id: 4,
    title: "Gaming",
    description: "Immersive worlds and competitive esports adventures",
    image: "/src/assets/Interests/gaming.svg",
    category: "Entertainment"
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    description: "Building intelligent systems that shape the future",
    image: "/src/assets/Interests/ai-ml.svg",
    category: "Technology"
  },
  {
    id: 6,
    title: "Photography",
    description: "Capturing moments through a cyberpunk lens",
    image: "/src/assets/Interests/photography.svg",
    category: "Creative"
  }
];

const Interests: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  useEffect(() => {
    if (isAutoRotating) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % interests.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoRotating]);

  const handleInterestClick = (interest: Interest) => {
    setSelectedInterest(interest);
    setIsAutoRotating(false);
  };

  const handleCloseModal = () => {
    setSelectedInterest(null);
  };

  const handleCarouselClick = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    handleInterestClick(interests[index]);
  };

  return (
    <section id="Interests" className={styles.interestsSection}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>My Interests</h2>
        <p className={styles.subtitle}>Exploring the Digital Frontier</p>
      </div>

      {/* 3D Carousel */}
      <div className={styles.carouselContainer}>
        <div className={styles.carousel3D}>
          {interests.map((interest, index) => {
            const angle = (index - currentIndex) * (360 / interests.length);
            const isCenter = index === currentIndex;
            
            return (
              <div
                key={interest.id}
                className={`${styles.carouselItem} ${isCenter ? styles.centerItem : ''}`}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(400px) ${isCenter ? 'scale(1.15)' : 'scale(0.85)'}`,
                  opacity: isCenter ? 1 : 0.7
                }}
                onClick={(e) => handleCarouselClick(index, e)}
              >
                <div className={styles.itemCard}>
                  <div className={styles.cardImage}>
                    <img 
                      src={interest.image} 
                      alt={interest.title}
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#1a1a2e"/>
                            <circle cx="150" cy="100" r="50" fill="#00ffff" opacity="0.3"/>
                            <text x="50%" y="60%" font-family="Arial" font-size="16" fill="#00ffff" text-anchor="middle">${interest.title}</text>
                          </svg>
                        `)}`;
                      }}
                    />
                    <div className={styles.cardOverlay}>
                      <h3 className={styles.cardTitle}>{interest.title}</h3>
                      <span className={styles.cardCategory}>{interest.category}</span>
                    </div>
                    <div className={styles.cardGlow}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Stage Spotlight */}
        <div className={styles.centerSpotlight}></div>
        

      </div>

      {/* Carousel Controls */}
      <div className={styles.carouselControls}>
        <button 
          className={styles.controlButton}
          onClick={() => setCurrentIndex(currentIndex === 0 ? interests.length - 1 : currentIndex - 1)}
        >
          ←
        </button>
        <button 
          className={styles.playPauseButton}
          onClick={() => setIsAutoRotating(!isAutoRotating)}
        >
          {isAutoRotating ? '⏸' : '▶'}
        </button>
        <button 
          className={styles.controlButton}
          onClick={() => setCurrentIndex((currentIndex + 1) % interests.length)}
        >
          →
        </button>
      </div>

      {/* Interest Indicators */}
      <div className={styles.indicators}>
        {interests.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedInterest && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalEffects}>
              <div className={styles.modalParticles}></div>
              <div className={styles.modalGlow}></div>
              <div className={styles.modalBorder}></div>
            </div>
            
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            
            <div className={styles.modalContent}>
              <div className={styles.modalImageContainer}>
                <img 
                  src={selectedInterest.image} 
                  alt={selectedInterest.title}
                  className={styles.modalImage}
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#0a0f1f"/>
                        <circle cx="300" cy="200" r="100" fill="#00ffff" opacity="0.3"/>
                        <text x="50%" y="55%" font-family="Arial" font-size="24" fill="#00ffff" text-anchor="middle">${selectedInterest.title}</text>
                      </svg>
                    `)}`;
                  }}
                />
                <div className={styles.modalImageGlow}></div>
              </div>
              
              <div className={styles.modalInfo}>
                <span className={styles.modalCategory}>{selectedInterest.category}</span>
                <h2 className={styles.modalTitle}>{selectedInterest.title}</h2>
                <p className={styles.modalDescription}>{selectedInterest.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Interests;