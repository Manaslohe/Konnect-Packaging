import * as React from "react";
import { useState } from "react";
import '@fontsource/krona-one/400.css';

// Certification data array
const certifications = [
  {
    id: "zed",
    title: "ZED",
    description: "ZED‑certified enterprises follow India's \"Zero Defect Zero Effect\" standards, delivering defect‑free products while minimizing environmental impact and meeting global quality and sustainability expectations.",
    svgId: "2026:7",
    titlePosition: "left-[179px]",
    titleWidth: "w-[62px]"
  },
  {
    id: "rohs",
    title: "ROHS",
    description: "RoHS-certified products are free from harmful substances like lead and mercury, making them safe and eco-friendly. This certification ensures compliance with global standards, especially in electronics and packaging.",
    svgId: "2026:8",
    titlePosition: "left-[163px]",
    titleWidth: "w-[94px]"
  },
  {
    id: "ce",
    title: "CE",
    description: "CE‑certified products meet the European Union's safety, health, and environmental protection standards, ensuring they are reliable, consumer‑safe, and eligible for sale across the EU single market.",
    svgId: "2026:9",
    titlePosition: "left-[189px]",
    titleWidth: "w-[42px]"
  }
];

// Reusable Card component
const CertificationCard = ({ certification }) => {
  const { id, title, description, svgId, titlePosition, titleWidth } = certification;

  return (
    <div className="relative max-w-full mx-auto h-[265px] w-[421px] max-md:h-[220px] max-md:w-[350px] max-sm:h-[200px] max-sm:w-[300px]">
      <div
        dangerouslySetInnerHTML={{
          __html: `<svg id="${svgId}" width="100%" height="100%" viewBox="0 0 423 267" fill="none" xmlns="http://www.w3.org/2000/svg"> 
              <path d="M6.42837 265.748H211.5H416.572L422 260.32V6.42764L416.572 1H305.592H292.591L211.5 1L130.074 1H119.821H6.42837L1 6.42764V260.32L6.42837 265.748Z" fill="url(#paint0_linear_${svgId.replace(":", "_")})" stroke="black"></path> 
              <defs> 
                <linearGradient id="paint0_linear_${svgId.replace(":", "_")}" x1="1" y1="265.748" x2="422" y2="1" gradientUnits="userSpaceOnUse"> 
                  <stop stop-color="#FFD57F"></stop> 
                  <stop offset="1" stop-color="#F6DFAB"></stop> 
                </linearGradient> 
              </defs> 
            </svg>`
        }}
      />
      <div className="absolute top-11 left-[140px] h-px w-[140px]" />
      <div className={`absolute top-3.5 text-2xl max-md:text-xl max-sm:text-lg text-black h-[30px] ${titlePosition} ${titleWidth}`}>
        {title}
      </div>
      <div 
        className="absolute h-[1.5px] left-[10%] right-[10%] w-[80%] top-[45px]"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0))'
        }}
      ></div>
      <div className="absolute text-sm max-md:text-xs max-sm:text-[11px] font-normal text-center text-black top-[72px] left-[18px] w-[386px] max-md:w-80 max-md:left-[15px] max-sm:left-[15px] max-sm:w-[270px]">
        {description}
      </div>
      <div className="flex absolute shrink-0 justify-center items-center h-8 left-[155px] top-[212px] w-[110px] max-md:left-[120px] max-sm:top-40 max-sm:left-[95px]">
        {/* Replaced SVG with PNG image */}
        <img 
          src="/hero/check.png" 
          alt="Certification check" 
          className="w-[122px] h-[22px] max-md:w-[118px] max-md:h-[18px]" 
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

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) goToNextCard();
    if (touchEnd - touchStart > 50) goToPrevCard();
  };

  const goToPrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="box-border px-8 py-12 w-full bg-white font-['Krona_One']">
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
        <div className="flex justify-center">
          <CertificationCard certification={certifications[currentCardIndex]} />
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-6 gap-3">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentCardIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certi;
  