import * as React from "react";
import { useState } from "react";
import '@fontsource/krona-one/400.css';
import '@fontsource/montserrat';
import { Carousel } from "../ui/Carousal";
import { ArrowRight } from "lucide-react"; // Use Lucide React icon

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
      className="relative max-w-full mx-auto h-[320px] w-[550px] max-md:h-[220px] max-md:w-[380px] max-sm:h-[200px] max-sm:w-[320px] duration-400 ease-in-out"
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
          className="text-[1.2rem] max-md:text-[12px] max-sm:text-[11px] font-medium text-black text-center leading-[1.3] px-4 overflow-hidden"
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
          className="w-[140px] h-[40px] max-md:w-[100px] max-md:h-[20px] max-sm:w-[80px] max-sm:h-[26px]" 
        />
      </div>
    </div>
  );
};

// Main Certifications component
function Certi() {
  const [currentCardIndex, setCurrentCardIndex] = useState(1); // Sync with Carousel initial index

  // Prepare slides for Carousel (both mobile and desktop)
  // Add clones for infinite effect
  const carouselSlides = [
    {
      ...certifications[certifications.length - 1],
      renderCard: () => (
        <div className="flex items-center justify-center w-full h-full">
          <CertificationCard certification={certifications[certifications.length - 1]} />
        </div>
      ),
    },
    ...certifications.map(cert => ({
      ...cert,
      renderCard: () => (
        <div className="flex items-center justify-center w-full h-full">
          <CertificationCard certification={cert} />
        </div>
      ),
    })),
    {
      ...certifications[0],
      renderCard: () => (
        <div className="flex items-center justify-center w-full h-full">
          <CertificationCard certification={certifications[0]} />
        </div>
      ),
    },
  ];

  // Mobile navigation handlers (wrap around for infinite effect)
  const goPrev = () => setCurrentCardIndex(prev => (prev <= 0 ? carouselSlides.length - 2 : prev - 1));
  const goNext = () => setCurrentCardIndex(prev => (prev >= carouselSlides.length - 2 ? 1 : prev + 1));

  return (
    <div className="box-border py-12 pt-0 w-full bg-white font-['Krona_One']">
      <div className="mb-12 text-5xl text-center text-black max-md:text-4xl max-sm:text-3xl">
        Certifications
      </div>

      {/* Desktop view - use Carousel */}
      <div className="hidden sm:flex w-full justify-center items-center">
        <div className="w-[70vw] max-w-[700px] mx-auto">
          <Carousel slides={carouselSlides} infinite />
        </div>
      </div>

      {/* Mobile view - use Carousel, only one card visible at a time, with navigation buttons */}
      <div className="sm:hidden w-full px-4">
        <div className="relative overflow-hidden w-full py-4 flex flex-col items-center justify-center">
          <div className="w-[90vw] max-w-[340px] mx-auto relative">
            {/* Pass currentCardIndex and setCurrentCardIndex to Carousel for sync (optional, if Carousel supports it) */}
            <Carousel slides={carouselSlides} infinite />
            {/* Navigation buttons for mobile */}
            <div className="flex justify-center w-full mt-4 gap-4">
              <button
                className="w-10 h-10 flex items-center justify-center bg-neutral-200 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
                onClick={goPrev}
                aria-label="Previous"
                type="button"
              >
                <ArrowRight className="text-neutral-600 rotate-180" />
              </button>
              <button
                className="w-10 h-10 flex items-center justify-center bg-neutral-200 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
                onClick={goNext}
                aria-label="Next"
                type="button"
              >
                <ArrowRight className="text-neutral-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certi;
