import * as React from "react";
import '@fontsource/krona-one/400.css';

function Study2() {
  const BrainIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="black" strokeWidth="2"/>
      <path d="M16 18c2-4 6-6 8-4s4 4 8 4c2 0 4 2 2 6s-4 8-8 8-8-2-10-6-2-6 0-8z" stroke="black" strokeWidth="2" fill="none"/>
      <path d="M18 22c2-2 4-2 6 0M26 24c2-2 4-2 6 0M20 28c2 2 4 2 6 0" stroke="black" strokeWidth="1.5"/>
    </svg>
  );

  const LightBulbIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="black" strokeWidth="2"/>
      <circle cx="24" cy="22" r="6" stroke="black" strokeWidth="2" fill="none"/>
      <path d="M20 28h8M21 30h6M22 32h4" stroke="black" strokeWidth="2"/>
      <path d="M24 16v2M30 18l-1 1M32 24h-2M18 18l1 1M16 24h2" stroke="black" strokeWidth="1.5"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="black" strokeWidth="2"/>
      <circle cx="24" cy="24" r="8" stroke="black" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="3" stroke="black" strokeWidth="2" fill="none"/>
      <path d="M24 16v16M16 24h16M19.76 19.76l8.48 8.48M28.24 19.76l-8.48 8.48" stroke="black" strokeWidth="1.5"/>
    </svg>
  );

  const EyeIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="black" strokeWidth="2"/>
      <ellipse cx="24" cy="24" rx="8" ry="4" stroke="black" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="2" fill="black"/>
      <path d="M16 20l2 2M16 28l2-2M32 20l-2 2M32 28l-2-2M24 16v2M24 30v2" stroke="black" strokeWidth="1.5"/>
    </svg>
  );

  const storyFeatures = [
    {
      id: 'founded',
      icon: BrainIcon,
      title: 'Founded in Innovation, Built for the Future',
      description: 'Established in November 2023 in Borgaon (Madhya Pradesh), Konnect Packaging delivers certified, sustainable VCI solutions for global industries built to protect, preserve, and perform.'
    },
    {
      id: 'pioneering',
      icon: LightBulbIcon,
      title: 'Pioneering Innovation with Hindalco',
      description: 'From VCI paper bags to VCI-coated fabric, our wide range of products ensures product safety with an eco-friendly approach.'
    },
    {
      id: 'driving',
      icon: ShieldIcon,
      title: "Driving India's ESG & ZED Goals",
      description: 'Leading corrosion protection with water-based VCI technologies, reducing damage and increasing product shelf life.'
    },
    {
      id: 'vision',
      icon: EyeIcon,
      title: 'Led by Vision, Powered by Compliance',
      description: 'Driven by founders Parth Chandra and Suchitra Gupta, Konnect blends legal precision, lean operations, and sustainable innovation to build the future of industrial packaging.'
    }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-gradient-to-br from-[#E9C77F] to-[#FBE6B7] py-16 px-6 lg:px-12" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side - Our Story */}
        <div className="relative">
          {/* Circular Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E9C77F] to-[#FBE6B7] rounded-full w-96 h-96 lg:w-[500px] lg:h-[500px] opacity-30 -z-10"></div>
          
          <div className="text-left">
            <h2 className="text-lg lg:text-xl text-black mb-4 font-medium">
              Our story
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-8 leading-tight" style={{ fontFamily: 'Krona One, sans-serif' }}>
              KONNECT<br />
              packaging;
            </h1>
            <p className="text-lg lg:text-xl text-black font-medium leading-relaxed">
              Packaging That Connects You to Quality.
            </p>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="space-y-8">
          {storyFeatures.map((feature, index) => (
            <div key={feature.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <feature.icon />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-black mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-800 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Study2;
