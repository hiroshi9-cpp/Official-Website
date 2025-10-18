import { useState, useEffect, useRef } from "react";
import styles from "./Interests.module.css";

interface Interest {
  id: number;
  title: string;
  description: string;
  images: string[];
  details: string;
}

const interests: Interest[] = [
  {
    id: 1,
    title: "Scuba Diving & Ocean Adventures",
    description: "Exploring the vibrant world beneath the waves 🌊",
    images: ["/src/assets/Interests/scuba/scuba1.jpeg", "/src/assets/Interests/scuba/scuba2.jpeg"],
    details:
      "Discovered my love for the ocean while scuba diving in the Andamans — an unforgettable underwater experience. I also enjoy snorkeling and swimming, constantly drawn to the beauty and calm of the sea.",
  },
  {
    id: 2,
    title: "Fitness & Strength Training",
    description: "Building discipline, one rep at a time 💪",
    images: ["/src/assets/Interests/fitness/gym1.jpeg", "/src/assets/Interests/fitness/gym2.jpeg", "/src/assets/Interests/fitness/gym3.jpeg"],
    details:
      "A daily gym-goer passionate about strength and endurance training. I can do 40 pushups and 15 pullups in a single set, and I’m always chasing progress — physically and mentally.",
  },
  {
    id: 3,
    title: "Music & Guitar",
    description: "Strumming stories through six strings 🎸",
    images: ["/src/assets/Interests/music/jimi.jpeg", "/src/assets/Interests/music/guitar.jpeg", "/src/assets/Interests/music/mayer.jpeg", "/src/assets/Interests/music/guitar2.jpeg", "/src/assets/Interests/music/pinkfloyd.jpeg", "/src/assets/Interests/music/page.jpeg"],
    details:
      "I’m a guitarist with a Fender Strat at home. Deeply inspired by legends like Jimi Hendrix, Pink Floyd, John Mayer, and Jimmy Page. Music is my escape — from classic rock to Linkin Park and The Beatles.",
  },
  {
    id: 4,
    title: "Travel & Culture",
    description: "Discovering new places, people, and cuisines 🌍",
    images: ["/src/assets/Interests/travel/travel1.jpeg", "/src/assets/Interests/travel/travel2.jpeg", "/src/assets/Interests/travel/travel3.jpeg", "/src/assets/Interests/travel/travel4.jpeg"],
    details:
      "I love exploring new destinations, meeting diverse people, and tasting local foods. Every journey teaches me something new about the world and myself.",
  },
  {
    id: 5,
    title: "Driving & Automobiles",
    description: "Finding freedom on open roads 🚗",
    images: ["/src/assets/Interests/driving/car1.jpeg", "/src/assets/Interests/driving/car2.jpeg", "/src/assets/Interests/driving/car3.jpeg"],
    details:
      "I own a Hyundai i10 — my first car, bought from my first salary. It’s more than just a ride; it’s a symbol of independence and countless memories of late-night drives and road trips.",
  },
  {
    id: 6,
    title: "Cycling & Outdoor Challenges",
    description: "Pedaling through passion and perseverance 🚴‍♂️",
    images: ["/src/assets/Interests/cycling/cycle1.jpeg", "/src/assets/Interests/cycling/cycle2.jpeg", "/src/assets/Interests/cycling/cycle3.jpeg"],
    details:
      "I enjoy long cycling sessions and even compete occasionally. It’s my way to stay active, challenge myself, and enjoy the great outdoors.",
  },
  {
    id: 7,
    title: "Gaming",
    description: "Immersing in digital adventures 🎮",
    images: ["/src/assets/Interests/gaming/blackflag.jpeg", "/src/assets/Interests/gaming/blacklist.jpeg", "/src/assets/Interests/gaming/fifa.jpeg"],
    details:
      "Gaming fuels my competitive spirit and creativity. Favorites include GTA V, Splinter Cell: Blacklist, Assassin’s Creed: Black Flag, and FIFA 14.",
  },
  {
    id: 8,
    title: "AI & Tech Innovation",
    description: "Building the future, one line of code at a time 🤖",
    images: ["/src/assets/Interests/tech/tech1.jpeg", "/src/assets/Interests/tech/tech2.jpeg", "/src/assets/Interests/tech/tech3.jpeg"],
    details:
      "Fascinated by AI, coding, and emerging tech. I love experimenting with new AI tools, building small projects, and exploring how technology can shape smarter, safer systems.",
  },
  {
    id: 9,
    title: "Photography",
    description: "Capturing emotions through frames 📸",
    images: ["/src/assets/Interests/photography/cam1.jpeg", "/src/assets/Interests/photography/cam2.jpeg", "/src/assets/Interests/photography/cam3.jpeg", "/src/assets/Interests/photography/cam4.jpeg"],
    details:
      "Photography lets me express my perspective — from street shots to landscapes. I enjoy framing moments that tell stories without words.",
  },
  {
    id: 10,
    title: "Social Life & Parties",
    description: "Connecting, celebrating, and living the moment 🎉",
    images: ["/src/assets/Interests/social/party1.jpeg"],
    details:
      "I’m a social animal who loves good company, music, and parties. During my time at Grant Thornton, I’ve made some unforgettable memories with amazing people.",
  },
];

const Interests = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
    setCurrentImageIndex(0);
    setIsAutoRotating(true);
  };

  const handlePrevImage = () => {
    if (selectedInterest) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedInterest.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedInterest) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedInterest.images.length
      );
    }
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
                  <img src={interest.images[0]} alt={interest.title} />
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
                src={selectedInterest.images[currentImageIndex]} 
                alt={selectedInterest.title}
                className={styles.modalImage}
              />
              {selectedInterest.images.length > 1 && (
                <>
                  <button 
                    className={styles.imageNavButton + ' ' + styles.prevButton}
                    onClick={handlePrevImage}
                  >
                    ←
                  </button>
                  <button 
                    className={styles.imageNavButton + ' ' + styles.nextButton}
                    onClick={handleNextImage}
                  >
                    →
                  </button>
                  <div className={styles.imageCounter}>
                    {currentImageIndex + 1} / {selectedInterest.images.length}
                  </div>
                </>
              )}
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