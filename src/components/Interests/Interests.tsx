import React, { useState, useEffect, useRef } from "react";
import styles from "./Interests.module.css";

interface Interest {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
  skills: string[];
}

const interests: Interest[] = [
  {
    id: 1,
    title: "Cybersecurity",
    description: "Protecting digital frontiers with advanced threat detection",
    image: "/src/assets/Interests/cybersecurity.svg",
    details: "Passionate about ethical hacking, penetration testing, and building secure systems. Currently working with SIEM tools and threat hunting.",
    skills: ["Penetration Testing", "SIEM", "Threat Hunting", "Incident Response"]
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description: "Building intelligent systems that learn and adapt",
    image: "/src/assets/Interests/ai-ml.svg",
    details: "Exploring deep learning, computer vision, and natural language processing to create innovative AI solutions.",
    skills: ["Deep Learning", "Computer Vision", "NLP", "TensorFlow"]
  },
  {
    id: 3,
    title: "Space Exploration",
    description: "Fascinated by the cosmos and space technology",
    image: "/src/assets/Interests/space.svg",
    details: "Following space missions, studying astrophysics, and dreaming of contributing to space technology development.",
    skills: ["Astrophysics", "Satellite Tech", "Space Missions", "Astronomy"]
  },
  {
    id: 4,
    title: "Photography",
    description: "Capturing moments through the lens of creativity",
    image: "/src/assets/Interests/photography.svg",
    details: "Specializing in landscape and street photography, with a focus on storytelling through visual narratives.",
    skills: ["Landscape", "Street Photography", "Photo Editing", "Visual Storytelling"]
  },
  {
    id: 5,
    title: "Gaming",
    description: "Exploring virtual worlds and game development",
    image: "/src/assets/Interests/gaming.svg",
    details: "Passionate gamer and aspiring game developer, interested in both playing and creating immersive experiences.",
    skills: ["Game Development", "Unity", "Game Design", "Virtual Reality"]
  },
  {
    id: 6,
    title: "Digital Art",
    description: "Creating digital masterpieces with modern tools",
    image: "/src/assets/Interests/digital-art.svg",
    details: "Combining technology and creativity to produce stunning digital artwork and animations.",
    skills: ["Digital Painting", "3D Modeling", "Animation", "Graphic Design"]
  }
];

const Interests: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const restartAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (isAutoRotating) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % interests.length);
      }, 4000);
    }
  };

  useEffect(() => {
    if (isAutoRotating) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % interests.length);
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoRotating]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % interests.length);
    restartAutoplay();
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + interests.length) % interests.length);
    restartAutoplay();
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleCardClick = (interest: Interest) => {
    setSelectedInterest(interest);
    setIsAutoRotating(false);
  };

  const handleCloseModal = () => {
    setSelectedInterest(null);
    setIsAutoRotating(true);
  };

  const getCardPosition = (index: number) => {
    const totalCards = interests.length;
    const angleStep = 360 / totalCards;
    const baseAngle = index * angleStep;
    const rotationOffset = (currentIndex * angleStep);
    let currentAngle = baseAngle - rotationOffset;
    
    // Normalize angle to 0-360 range
    currentAngle = ((currentAngle % 360) + 360) % 360;
    
    const radius = 280;
    const x = Math.sin((currentAngle * Math.PI) / 180) * radius;
    const z = Math.cos((currentAngle * Math.PI) / 180) * radius;
    const rotateY = -currentAngle;
    
    // Check if this is the center card (front-facing)
    const isCenterCard = currentAngle < 1 || currentAngle > 359;
    const scale = isCenterCard ? 1 : 0.8;
    const opacity = isCenterCard ? 1 : 0.7;
    
    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: isCenterCard ? 10 : Math.round(z) + 5
    };
  };

  return (
    <section id="Interests" className={styles.interestsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>My Interests</h2>
        <p className={styles.subtitle}>Exploring the intersection of technology and creativity</p>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carousel3D}>
          {interests.map((interest, index) => (
            <div
              key={interest.id}
              className={`${styles.carouselCard} ${
                index === currentIndex ? styles.activeCard : ''
              } ${isTransitioning ? styles.transitioning : ''}`}
              style={getCardPosition(index)}
              onClick={() => handleCardClick(interest)}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardImage}>
                  <img src={interest.image} alt={interest.title} />
                  <div className={styles.cardGlow}></div>
                  <div className={styles.cardParticles}>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                    <div className={styles.particle}></div>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{interest.title}</h3>
                  <p className={styles.cardDescription}>{interest.description}</p>
                </div>
                <div className={styles.cardBorder}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselControls}>
          <button 
            className={styles.controlButton}
            onClick={handlePrev}
            disabled={isTransitioning}
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
            onClick={handleNext}
            disabled={isTransitioning}
          >
            →
          </button>
        </div>

        <div className={styles.carouselDots}>
          {interests.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ''
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {selectedInterest && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            
            <div className={styles.modalImageContainer}>
              <img 
                src={selectedInterest.image} 
                alt={selectedInterest.title}
                className={styles.modalImage}
              />
              <div className={styles.modalGlow}></div>
              <div className={styles.modalParticles}>
                <div className={styles.modalParticle}></div>
                <div className={styles.modalParticle}></div>
                <div className={styles.modalParticle}></div>
                <div className={styles.modalParticle}></div>
                <div className={styles.modalParticle}></div>
              </div>
            </div>
            
            <div className={styles.modalContent}>
              <h3 className={styles.modalTitle}>{selectedInterest.title}</h3>
              <p className={styles.modalDetails}>{selectedInterest.details}</p>
            </div>
            
            <div className={styles.modalBorder}></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Interests;