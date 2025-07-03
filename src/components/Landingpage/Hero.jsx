import Header from './Header'; // Import the Header component

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-[#f1d598] min-h-[60vh] md:min-h-[90vh] lg:min-h-[110vh] rounded-[2rem] md:rounded-[2rem] lg:rounded-[3rem] font-['Krona_One'] overflow-hidden">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
        <div className="flex flex-col md:flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-16 items-center min-h-[calc(70vh-120px)] md:min-h-[calc(80vh-120px)] lg:min-h-[calc(100vh-150px)]">
          {/* Left Column - Product Image */}
          <div className="hidden md:flex lg:flex order-2 md:order-2 lg:order-1 flex-col items-start md:items-center lg:items-start space-y-6 pt-4 md:pt-6 lg:pt-8 relative">
            {/* Product Image */}
            <div className="relative z-30 lg:left-5 lg:top-15 md:relative lg:relative -top-65 -left-10">
              <div className="w-3/4 md:w-full lg:w-full">
                <img
                  src="/hero/bags.png"
                  alt="Konnect Packaging Bags"
                  className="w-full h-auto object-contain scale-90 md:scale-110 lg:scale-160 transform origin-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="order-1 md:order-1 lg:order-2 flex flex-col items-start md:items-center lg:items-start text-left md:text-center lg:text-left relative">
            {/* Certification Badge - Positioned top left */}
            <div className="hidden lg:block absolute -top-25 -left-200 z-30">
              <img
                src="/hero/1.png"
                alt="Certification Badge"
                className="w-50 h-auto object-contain"
              />
            </div>

            <div className="max-w-2xl z-20 relative lg:-top-30">
              <div className="bg-gray-800 text-white px-2 md:px-2 lg:px-1 rounded-full text-sm md:text-lg lg:text-xl font-medium mb-3 md:mb-2 lg:mb-1 inline-block font-['Krona_One']">
                KONNECT PACKAGING
              </div>

              <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[4rem] lg:text-nowrap font-normal text-gray-800 leading-tight mb-4 font-['Krona_One']">
                    <div>Sealing Quality</div>
                    <div>Delivering Trust.</div>
                    </h1>

              <p className="text-gray-700 lg:text-nowrap text-[0.6rem] md:text-base lg:text-[0.8rem] leading-relaxed mb-6 max-w-sm md:max-w-md lg:max-w-md font-['Krona_One'] px-2 md:px-0">
                From design to delivery, we ensure every bag reflects your brand's value. Strong. <br className="hidden lg:block"/>
                Stylish. Sustainable. Just like your vision.
              </p>

            

              {/* Updated Button Alignment */}
              <div className="w-full flex justify-start md:justify-center lg:justify-end">
                <button 
                  onClick={scrollToProducts}
                  className="bg-gray-800 text-white px-4 md:px-5 lg:px-4 py-2 md:py-2.5 lg:py-3 rounded-full flex items-center space-x-2 hover:bg-gray-700 transition-all duration-300 font-['Krona_One'] text-xs md:text-base lg:text-base"
                >
                  <span className="font-normal">Explore Our Products</span>
                  <img 
                    src="/arrow.png" 
                    alt="Arrow"
                    className="w-4 h-4 md:w-5 md:h-5 lg:w-10 lg:h-10 ml-1"
                  />
                </button>
              </div>
                {/* Certification Badge for Mobile - Below text */}
              <div className="flex justify-end pt-4 md:flex md:justify-center lg:hidden mb-2">
                <img
                  src="/hero/1.png"
                  alt="Certification Badge"
                  className="w-35 h-auto object-contain"
                />
              </div>
            </div>

            {/* Large Background Text for Mobile - Beside image */}
            <div className="block md:block lg:hidden flex flex-col text-white/70 leading-none pointer-events-none select-none text-left space-y-1 relative -top-10 z-10">
              <div className="text-4xl md:text-5xl font-light">KONNECT</div>
              <div className="text-4xl md:text-5xl font-normal">PACKAGING</div>
              
              {/* Mobile Product Image - Overlapping large text */}
              <div className="absolute -top-16 right-22 z-20">
                <img
                  src="/hero/bags.png"
                  alt="Konnect Packaging Bags Mobile"
                  className="w-44 h-auto object-contain opacity-80 scale-150"
                />
              </div>
            </div>
 
            {/* Large Background Text - Desktop only */}
            <div className="hidden lg:flex absolute right-10 top-35 opacity-60 flex flex-col text-white leading-none pointer-events-none select-none z-0 space-y-8">
              <div className="text-[4rem] lg:text-[6rem] xl:text-[10rem] font-light">KONNECT</div>
              <div className="text-[4rem] lg:text-[6rem] xl:text-[10rem] font-normal">PACKAGING</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
