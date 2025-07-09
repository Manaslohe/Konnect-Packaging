import Header from './Header'; // Import the Header component
import '@fontsource/montserrat'; // Import Montserrat font
import React, { useEffect, useState } from "react";

const TITLES = [
  {
    title: (
      <>
        <div>Sealing Quality</div>
        <div>Delivering Trust.</div>
      </>
    ),
    subtitle: (
      <>
        From design to delivery, we ensure every bag reflects your brand's value. Strong. <br className="hidden lg:block"/>
        Stylish. Sustainable. Just like your vision.
      </>
    )
  },
  {
    title: (
      <>
        <div>Guarding Quality,</div>
        <div>Earning Trust.</div>
      </>
    ),
    subtitle: (
      <>
        Crafted from idea to impact, every product mirrors your brand's strength. Reliable. <br className="hidden lg:block"/>
        Refined. Responsible. Just like your vision.
      </>
    )
  }
];

const HERO_IMAGES = [
  "/hero/bg/1.png",
  "/hero/bg/2.png",
  "/hero/bg/3.png",
  "/hero/bg/4.png",
  "/hero/bg/5.png"
];

const Hero = ({ scrollToProducts }) => {
  // Add missing state for text animation
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refined image slider state for perfect transition
  const [imgIndex, setImgIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState("in"); // not used for now, but can be extended

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setImgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        setTransitioning(false);
      }, 700); // Animation duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Wait for current text to slide out completely before bringing in new text
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % TITLES.length);
        setIsAnimating(false);
      }, 5000); // Longer duration for smooth transition
    }, 5000); // Increased interval for better viewing

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <div
      className="min-h-[60vh] md:min-h-[90vh] lg:min-h-[110vh] rounded-[2rem] md:rounded-[2rem] lg:rounded-[3rem] font-['Krona_One'] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAE5B5 0%, #EECF8E 100%)'
      }}
    >
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
        <div className="flex flex-col md:flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-16 items-center min-h-[calc(70vh-120px)] md:min-h-[calc(80vh-120px)] lg:min-h-[calc(100vh-150px)]">
          {/* Left Column - Product Image */}
          <div className="hidden md:flex lg:flex order-2 md:order-2 lg:order-1 flex-col items-start md:items-center lg:items-start space-y-6 pt-4 md:pt-6 lg:pt-8 relative">
            {/* Animated Product Image */}
            <div className="relative z-30 md:left-6 lg:left-16 xl:left-24 2xl:left-32 top-0 w-1/3 md:w-2/5 lg:w-2/5 h-full">
              <img
                key={imgIndex}
                src={HERO_IMAGES[imgIndex]}
                alt={`Konnect Packaging Bags ${imgIndex + 1}`}
                className={`
                  w-full h-auto object-contain scale-75 md:scale-90 lg:scale-100 xl:scale-110 2xl:scale-300 transform origin-center
                  absolute top-0 left-0
                  transition-transform duration-700 ease-in-out
                  ${transitioning ? "opacity-0 scale-95 z-10" : "opacity-100 scale-100 z-20"}
                `}
                style={{
                  transitionProperty: "opacity, transform",
                  zIndex: 20
                }}
              />
              <img
                key={`next-${imgIndex}`}
                src={HERO_IMAGES[(imgIndex + 1) % HERO_IMAGES.length]}
                alt={`Konnect Packaging Bags ${(imgIndex + 2)}`}
                className={`
                  w-full h-auto object-contain scale-75 md:scale-90 lg:scale-100 xl:scale-110 2xl:scale-300 transform origin-center
                  absolute top-0 left-0
                  transition-transform duration-700 ease-in-out
                  ${transitioning ? "opacity-100 scale-100 z-30" : "opacity-0 scale-105 z-10"}
                `}
                style={{
                  transitionProperty: "opacity, transform",
                  zIndex: 30
                }}
              />
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="order-1 md:order-1 lg:order-2 flex flex-col items-start md:items-center lg:items-start text-left md:text-center lg:text-left relative">
            {/* Certification Badge - Positioned top left */}
            <div className="hidden lg:block absolute -top-25 -left-180 z-30">
              <img
                src="/hero/1.png"
                alt="Certification Badge"
                className="w-36 lg:w-44 xl:w-50 2xl:w-46 h-auto object-contain"
              />
            </div>

            <div className="max-w-2xl z-20 relative lg:-top-30">
              <div className="bg-black text-white px-2 md:px-2 lg:px-2 rounded-full text-[0.65rem] md:text-base lg:text-lg xl:text-xl 2xl:text-[1.2rem] font-medium mb-3 md:mb-2 lg:mb-1 inline-block font-['Krona_One']">
                KONNECT PACKAGING
              </div>

              {/* Animated Title Container - Fixed Width */}
              <div className="relative overflow-hidden h-20 w-[23rem] md:h-24 lg:w-[30rem] xl:w-[37rem] 2xl:w-[40rem] lg:h-32 xl:h-40 2xl:h-35">
                <div 
                  className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out ${
                    isAnimating ? 'transform translate-x-full opacity-0' : 'transform translate-x-0 opacity-100'
                  }`}
                >
                  <h1 className="text-3xl md:text-3xl lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[3.5rem] lg:text-nowrap font-normal text-black leading-tight font-['Krona_One']">
                    {TITLES[currentIndex].title}
                  </h1>
                </div>
                
                <div 
                  className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out ${
                    isAnimating ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'
                  }`}
                >
                  <h1 className="text-3xl md:text-3xl lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[3.5rem] lg:text-nowrap font-normal text-black leading-tight font-['Krona_One']">
                    {TITLES[nextIndex].title}
                  </h1>
                </div>
              </div>

              {/* Animated Subtitle Container - Fixed Width */}
              <div className="relative overflow-hidden h-12 md:h-12 lg:h-8 xl:h-8 2xl:h-12 w-full max-w-2xl 2xl:mb-12 mb-0">
                <div 
                  className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out ${
                    isAnimating ? 'transform translate-x-full opacity-0' : 'transform translate-x-0 opacity-100'
                  }`}
                >
                  <p className="text-black lg:text-nowrap font-medium text-[0.65rem] md:text-sm lg:text-[1rem] xl:text-[1rem] 2xl:text-[0.9rem] leading-relaxed max-w-sm md:max-w-md lg:max-w-md px-2 md:px-0 font-['Montserrat']">
                    {TITLES[currentIndex].subtitle}
                  </p>
                </div>
                
                <div 
                  className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out ${
                    isAnimating ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'
                  }`}
                >
                  <p className="text-black lg:text-nowrap font-medium text-[0.65rem] md:text-sm lg:text-[1rem] xl:text-[1rem] 2xl:text-[0.9rem] leading-relaxed max-w-sm md:max-w-md lg:max-w-md px-2 md:px-0 font-['Montserrat']">
                    {TITLES[nextIndex].subtitle}
                  </p>
                </div>
              </div>

              {/* Updated Button Alignment */}
              <div className="w-full flex justify-start md:justify-center lg:justify-end">
                <button 
                  onClick={scrollToProducts}
                  className="bg-black text-white 2xl:pl-4 px-3 md:px-4 lg:px-3 xl:px-4 2xl:px-2 py-2 md:py-2.5 lg:py-2.5 xl:py-3 2xl:py-2 rounded-full flex items-center space-x-2 hover:bg-neutral-900 transition-all duration-300 font-['Krona_One'] font-normal  text-[0.65rem] md:text-sm lg:text-sm xl:text-base 2xl:text-[1rem]"
                >
                  <span className="font-normal">Explore Our Products</span>
                  <img 
                    src="/arrow.png" 
                    alt="Arrow"
                    className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 ml-1"
                  />
                </button>
              </div>
              
              {/* Certification Badge for Mobile - Below text */}
              <div className="flex justify-end pt-4 md:flex md:justify-center lg:hidden mb-2">
                <img
                  src="/hero/1.png"
                  alt="Certification Badge"
                  className="w-36 md:w-35 h-auto object-contain"
                />
              </div>
            </div>

            {/* Large Background Text for Mobile - Beside image */}
            <div className="block md:block lg:hidden flex flex-col text-white/70  leading-none pointer-events-none select-none text-left space-y-1 relative -top-8 z-10">
              <div className="text-[2.1rem] md:text-4xl font-normal">KONNECT</div>
              <div className="text-[2.1rem] md:text-4xl font-normal">PACKAGING</div>
              
              {/* Animated Mobile Product Image */}
              <div className="relative flex justify-center items-center w-full h-auto mt-2">
                {/* Only show the next image during transition, otherwise show just the current image */}
                {!transitioning && (
                  <img
                    key={imgIndex}
                    src={HERO_IMAGES[imgIndex]}
                    alt={`Konnect Packaging Bags Mobile ${imgIndex + 1}`}
                    className={`
                      w-40 md:w-44 h-auto object-contain opacity-80 scale-215 absolute -top-10 left-20
                      transition-all duration-700 ease-in-out
                      opacity-100 translate-x-0 z-20
                    `}
                    style={{
                      transitionProperty: "opacity, transform",
                      zIndex: 20
                    }}
                  />
                )}
                {transitioning && (
                  <img
                    key={`next-mobile-${imgIndex}`}
                    src={HERO_IMAGES[(imgIndex + 1) % HERO_IMAGES.length]}
                    alt={`Konnect Packaging Bags Mobile ${(imgIndex + 2)}`}
                    className={`
                      w-40 md:w-44 h-auto object-contain opacity-80 scale-215 absolute -top-10 left-20
                      transition-all duration-700 ease-in-out
                      opacity-100 translate-x-0 z-30
                    `}
                    style={{
                      transitionProperty: "opacity, transform",
                      zIndex: 30
                    }}
                  />
                )}
              </div>
            </div>
            {/* Large Background Text - Desktop only */}
            <div className="hidden lg:flex absolute right-30 top-35 opacity-60 flex flex-col text-white leading-none pointer-events-none select-none z-0 space-y-6 lg:space-y-6 xl:space-y-8 2xl:space-y-10">
              <div className="text-[3.5rem] lg:text-[4.5rem] xl:text-[6.5rem] 2xl:text-[9rem] font-light">KONNECT</div>
              <div className="text-[3.5rem] lg:text-[4.5rem] xl:text-[6.5rem] 2xl:text-[9rem] font-normal">PACKAGING</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;