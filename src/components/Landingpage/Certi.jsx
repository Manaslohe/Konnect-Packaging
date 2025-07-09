import * as React from "react";
import { useState, useEffect, useRef } from "react";
import '@fontsource/krona-one/400.css';
import '@fontsource/montserrat'; // Import Montserrat font

// Certification data array
const certifications = [
  {
    id: "zed",
    title: "ZED",
    description: "ZED‑certified enterprises follow India's \"Zero Defect Zero Effect\" standards, delivering defect‑free products while minimizing environmental impact and meeting global quality and sustainability expectations.",
  },
  {
    id: "rohs",
    title: "ROHS",
    description: "RoHS-certified products are free from harmful substances like lead and mercury, making them safe and eco-friendly. This certification ensures compliance with global standards, especially in electronics and packaging.",
  },
  {
    id: "ce",
    title: "CE",
    description: "CE‑certified products meet the European Union's safety, health, and environmental protection standards, ensuring they are reliable, consumer‑safe, and eligible for sale across the EU single market.",
  },
  {
    id: "gpsd",
    title: "GPSD",
    description: "GPSD-certified products meet EU safety standards (2001/95/EC), ensuring safe, risk-free use and compliance for the EU market. They are tested for consumer safety, durability, and environmental impact.",
  }
];

// Reusable Card component
const CertificationCard = ({ certification }) => {
  const { id, title, description } = certification;

  return (
    <div
      className="relative max-w-full mx-auto h-[280px] w-[450px] max-md:h-[220px] max-md:w-[380px] max-sm:h-[200px] max-sm:w-[320px]
        duration-400 ease-in-out
        hover:shadow-2xl hover:scale-[1.04] hover:z-10"
    >
      {/* Card background with rounded corners and gradient */}
      <div className="w-full h-full bg-gradient-to-tr from-[#FFD57F] to-[#F6DFAB] rounded-[20px] border-2 border-black/60"></div>
      
      {/* Title */}
      <div className="absolute top-[30px] left-0 right-0 text-center text-[32px] max-md:text-[24px] max-sm:text-[20px] text-black font-bold">
        {title}
      </div>
      
      {/* Horizontal line under title with fade effect */}
      <div 
        className="absolute top-[80px] left-[30px] right-[30px] h-[2px] max-md:top-[65px] max-sm:top-[55px] max-md:left-[20px] max-md:right-[20px]"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0))'
        }}
      ></div>
      
      {/* Description text container with fixed height */}
      <div className="absolute top-[110px] left-[25px] right-[25px] h-[100px] max-md:top-[80px] max-md:h-[90px] max-sm:top-[70px] max-sm:h-[85px] max-md:left-[15px] max-md:right-[15px] flex items-center justify-center">
        <div
          className="text-[14px] max-md:text-[12px] max-sm:text-[11px] font-medium text-black text-center leading-[1.3] px-4 overflow-hidden"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {description}
        </div>
      </div>
      
      {/* Check mark icon at the bottom of the card */}
      <div className="absolute bottom-[15px] left-1/2 transform -translate-x-1/2 max-md:bottom-[8px] max-sm:bottom-[6px]">
        <img 
          src="/hero/check.png" 
          alt="Certification check" 
          className="w-[110px] h-[30px] max-md:w-[100px] max-md:h-[20px] max-sm:w-[80px] max-sm:h-[16px]" 
        />
      </div>
    </div>
  );
};

// Main Certifications component
function Certi() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  // Create extended array for infinite scroll
  const extendedCertifications = [
    ...certifications.slice(-1), // Last item at the beginning
    ...certifications,
    ...certifications.slice(0, 1), // First item at the end
  ];

  const totalCards = certifications.length;

  // Initialize position
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidthPercent = 100 / extendedCertifications.length;
      const initialOffset = 1 * cardWidthPercent; // Offset by 1 due to prepended item
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(-${initialOffset}%)`;
    }
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) goToNextCard();
    if (touchEnd - touchStart > 50) goToPrevCard();
  };

  const goToPrevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const newIndex = currentCardIndex - 1;
    setCurrentCardIndex(newIndex);
    
    const cardWidth = 100 / extendedCertifications.length;
    const translateX = -((1 + newIndex) * cardWidth);
    
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.3s ease-in-out';
      carouselRef.current.style.transform = `translateX(${translateX}%)`;
    }
    
    setTimeout(() => {
      if (newIndex < 0) {
        setCurrentCardIndex(totalCards - 1);
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = `translateX(-${(1 + totalCards - 1) * cardWidth}%)`;
        }
      }
      setIsAnimating(false);
    }, 300);
  };

  const goToNextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const newIndex = currentCardIndex + 1;
    setCurrentCardIndex(newIndex);
    
    const cardWidth = 100 / extendedCertifications.length;
    const translateX = -((1 + newIndex) * cardWidth);
    
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.3s ease-in-out';
      carouselRef.current.style.transform = `translateX(${translateX}%)`;
    }
    
    setTimeout(() => {
      if (newIndex >= totalCards) {
        setCurrentCardIndex(0);
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = `translateX(-${1 * cardWidth}%)`;
        }
      }
      setIsAnimating(false);
    }, 300);
  };

  const goToCard = (index) => {
    if (isAnimating || index === currentCardIndex) return;
    setIsAnimating(true);
    setCurrentCardIndex(index);
    
    const cardWidth = 100 / extendedCertifications.length;
    const translateX = -((1 + index) * cardWidth);
    
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.3s ease-in-out';
      carouselRef.current.style.transform = `translateX(${translateX}%)`;
    }
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="box-border py-12 w-full bg-white font-['Krona_One']">
      <div className="mb-12 text-5xl text-center text-black max-md:text-4xl max-sm:text-3xl">
        Certifications
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex flex-wrap gap-7 justify-center max-md:gap-5">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>

      {/* Mobile view */}
      <div
        className="sm:hidden w-full px-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full overflow-hidden py-4">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              width: `${extendedCertifications.length * 100}%`,
            }}
          >
            {extendedCertifications.map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="flex justify-center"
                style={{ 
                  width: `${100 / extendedCertifications.length}%`,
                  padding: '0 10px',
                }}
              >
                <CertificationCard certification={cert} />
              </div>
            ))}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-6 gap-3">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => goToCard(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${
                index === currentCardIndex ? "bg-black scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certi;
