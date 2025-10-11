import React, { useState, useEffect } from "react";
import styles from "./Education.module.css";

const educationJourney = [
  {
    phase: "High School",
    period: "2014 - 2018",
    story: "Building foundations... Mathematics competitions, science fairs, and late nights debugging my first real programs.",
    highlight: "Science fair winner",
    image: "/src/assets/education/highschool.jpg"
  },
  {
    phase: "Undergraduate",
    period: "2020",
    story: "New beginnings... Stepping into university life, making lifelong friends, and diving deep into computer science.",
    highlight: "Data Structures mastery",
    image: "/src/assets/education/freshman.jpg"
  },
  {
    phase: "Graduate School",
    period: "2021",
    story: "Finding my passion... Discovered cybersecurity, joined the CS society, and started my first research project.",
    highlight: "First hackathon",
    image: "/src/assets/education/sophomore.jpg"
  }
];

const Education: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardStack, setCardStack] = useState(educationJourney);
  const [swipedCards, setSwipedCards] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<typeof educationJourney[0] | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentPhase(prev => (prev + 1) % educationJourney.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const handleCardSwipe = (direction: 'left' | 'right', index: number) => {
    setSwipedCards(prev => [...prev, index]);
    if (direction === 'right' && currentPhase < educationJourney.length - 1) {
      setCurrentPhase(prev => prev + 1);
    }
  };

  const handlePhaseClick = (index: number) => {
    setCurrentPhase(index);
    setIsAutoPlaying(false);
  };

  const handleImageClick = (phase: typeof educationJourney[0]) => {
    setSelectedImage(phase);
    setIsAutoPlaying(false);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="Education" className={styles.educationSection}>
      <div className={styles.floatingParticles}></div>
      <div className={styles.lightRays}></div>
      
      <div className={styles.header}>
        <h2 className={styles.title}>Education Journey</h2>
        <p className={styles.subtitle}>From first code to graduation</p>
      </div>
      
      <div className={styles.journeyContainer}>
        {/* Left Side - Rolling Text */}
        <div className={styles.textJourney}>
          <div className={styles.timelineContainer}>
            {educationJourney.map((phase, index) => (
              <div
                key={index}
                className={`${styles.phaseBlock} ${
                  index === currentPhase ? styles.activePhase : ''
                } ${
                  index < currentPhase ? styles.completedPhase : ''
                }`}
                onClick={() => handlePhaseClick(index)}
              >
                <div className={styles.phaseMarker}>
                  <div className={styles.phaseNumber}>{index + 1}</div>
                </div>
                
                <div className={styles.phaseContent}>
                  <h3 className={styles.phaseTitle}>{phase.phase}</h3>
                  <span className={styles.phasePeriod}>{phase.period}</span>
                  <p className={styles.phaseStory}>{phase.story}</p>
                  <div className={styles.phaseHighlight}>
                    ✨ {phase.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ height: `${((currentPhase + 1) / educationJourney.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Right Side - Tinder Stack */}
        <div className={styles.cardStack}>
          <div className={styles.stackContainer}>
            {educationJourney.map((phase, index) => {
              const isVisible = index >= currentPhase && index < currentPhase + 3;
              const stackIndex = index - currentPhase;
              
              if (!isVisible) return null;
              
              return (
                <div
                  key={index}
                  className={`${styles.educationCard} ${
                    index === currentPhase ? styles.topCard : ''
                  }`}
                  style={{
                    zIndex: 10 - stackIndex,
                    transform: `
                      translateY(${stackIndex * 10}px) 
                      translateX(${stackIndex * 5}px) 
                      rotate(${stackIndex * 2}deg) 
                      scale(${1 - stackIndex * 0.05})
                    `,
                    opacity: 1 - stackIndex * 0.2
                  }}
                  onClick={() => handleImageClick(phase)}
                >
                  <div className={styles.cardImage}>
                    <img 
                      src={phase.image} 
                      alt={phase.phase}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzAwZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVkdWNhdGlvbiBNZW1vcnk8L3RleHQ+PC9zdmc+';
                      }}
                    />
                    <div className={styles.cardOverlay}>
                      <h4 className={styles.cardTitle}>{phase.phase}</h4>
                      <span className={styles.cardPeriod}>{phase.period}</span>
                    </div>
                  </div>
                  
                  <div className={styles.cardGlow}></div>
                </div>
              );
            })}
          </div>
          
          <div className={styles.cardControls}>
            <button 
              className={styles.controlButton}
              onClick={() => setCurrentPhase(currentPhase === 0 ? educationJourney.length - 1 : currentPhase - 1)}
            >
              ←
            </button>
            <button 
              className={styles.playPauseButton}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? '⏸' : '▶'}
            </button>
            <button 
              className={styles.controlButton}
              onClick={() => setCurrentPhase((currentPhase + 1) % educationJourney.length)}
            >
              →
            </button>
          </div>
        </div>
      </div>
      
      {/* Magnified Image Modal */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            
            <div className={styles.modalImageContainer}>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.phase}
                className={styles.modalImage}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZmlsbD0iIzAwZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVkdWNhdGlvbiBNZW1vcnk8L3RleHQ+PC9zdmc+';
                }}
              />
              <div className={styles.modalGlow}></div>
              <div className={styles.modalParticles}>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
              </div>
            </div>
            
            <div className={styles.modalContent}>
              <h3 className={styles.modalTitle}>{selectedImage.phase}</h3>
              <span className={styles.modalPeriod}>{selectedImage.period}</span>
              <p className={styles.modalStory}>{selectedImage.story}</p>
              <div className={styles.modalHighlight}>
                ✨ {selectedImage.highlight}
              </div>
            </div>
            
            <div className={styles.modalBorder}></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
