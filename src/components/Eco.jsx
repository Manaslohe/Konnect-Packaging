import * as React from "react";
import '@fontsource/krona-one/400.css';

function Eco() {
  const RecycleIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      <path d="M12 8L8 12M8 12L12 16M8 12H16C18.2091 12 20 13.7909 20 16V20M28 32L32 28M32 28L28 24M32 28H24C21.7909 28 20 26.2091 20 24V20M20 20L16 16M20 20L24 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const sustainabilityFeatures = [
    {
      id: 'recyclable',
      title: 'Recyclable & Biodegradable Materials',
      description: "Konnect's packaging products, such as VCI Kraft Paper and VCI-X-Dry Paper, are made with eco-friendly materials, reducing environmental impact and waste generation."
    },
    {
      id: 'elimination',
      title: 'Elimination of Harmful Substances',
      description: "All products are nitrite-free and compliant with RoHS, ensuring they are free from hazardous chemicals, making them safe for both users and the environment."
    },
    {
      id: 'certificate',
      title: 'Sustainable Certificate & Commitment',
      description: "Konnect Packaging holds ZED (Zero Effect Zero Defect) and CE certifications, reflecting our commitment to sustainable manufacturing, minimal environmental impact, and high product quality."
    },
    {
      id: 'protection',
      title: 'Long-Lasting Protection, Less Waste',
      description: "Konnect's VCI technologies extend the lifespan of metal components during storage and transport, reducing the need for frequent replacements and maximizing material efficiency to sustainable industrial practices."
    }
  ];

  const FeatureCard = ({ title, description }) => (
    <div className="bg-black rounded-[20px] p-6 relative pb-12">
      <div className="bg-white rounded-t-[15px] rounded-b-none p-4 mb-4 text-center">
        <h3 className="text-black text-lg font-bold leading-tight">{title}</h3>
      </div>
      <p className="text-white text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
        <RecycleIcon />
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white py-16 px-6 lg:px-12 relative" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Desktop Tree Image - Top Right (Hidden on mobile/tablet) */}
      <div className="absolute top-2 right-12 lg:right-24 z-10 hidden lg:block">
        <img src="/eco.png" alt="Eco Tree" className="w-48 lg:w-200 h-auto" />
      </div>

      {/* Header Section */}
      <div className="text-left mb-16 max-w-2xl pt-16 lg:pt-64">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-8" style={{ fontFamily: 'Krona One, sans-serif' }}>
          <span className="text-5xl md:text-7xl lg:text-8xl">E</span>co-Friendly<br />
          Sustainability
        </h1>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Promoting a greener future through eco-friendly and sustainable practices.
        </p>
      </div>

      {/* Mobile/Tablet Tree Image (Shown only on mobile/tablet) */}
      <div className="flex justify-center mb-16 lg:hidden">
        <img src="/eco.png" alt="Eco Tree" className="w-100 md:w-80 h-auto" />
      </div>

      {/* Desktop Spacer (Hidden on mobile/tablet) */}
      <div className="mb-32 lg:mb-71 hidden lg:block"></div>

      {/* Features Grid */}
      <div className="flex justify-center lg:justify-end">
        <div className="bg-gradient-to-br border-2 border-black/60 from-[#E9C77F] to-[#FBE6B7] rounded-[30px] p-6 md:p-8 lg:p-12 relative z-0 w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {sustainabilityFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eco;
