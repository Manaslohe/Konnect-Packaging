import * as React from "react";
import { Settings, Lightbulb, Shield, Eye } from "lucide-react";
import '@fontsource/krona-one/400.css';

function Study2() {
  const storyFeatures = [
    {
      id: 'founded',
      icon: Settings,
      title: 'Founded in Innovation, Built for the Future',
      description: 'Established in November 2023 in Borgaon (Madhya Pradesh), Konnect Packaging delivers certified, sustainable VCI solutions for global industries built to protect, preserve, and perform.'
    },
    {
      id: 'pioneering',
      icon: Lightbulb,
      title: 'Pioneering Innovation with Hindalco',
      description: 'From VCI paper bags to VCI-coated fabric, our wide range of products ensures product safety with an eco-friendly approach.'
    },
    {
      id: 'driving',
      icon: Shield,
      title: "Driving India's ESG & ZED Goals",
      description: 'Leading corrosion protection with water-based VCI technologies, reducing damage and increasing product shelf life.'
    },
    {
      id: 'vision',
      icon: Eye,
      title: 'Led by Vision, Powered by Compliance',
      description: 'Driven by founders Parth Chandra and Suchitra Gupta, Konnect blends legal precision, lean operations, and sustainable innovation to build the future of industrial packaging.'
    }
  ];

  return (
    <div className="w-full py-16 px-6 lg:px-12" style={{ fontFamily: 'Krona One, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto lg:grid lg:grid-cols-2 gap-16 lg:items-center">
        {/* Left Side - Our Story */}
        <div className="relative mb-12 lg:mb-0">
          {/* Large circular background - hidden on mobile */}
          <div className="hidden lg:block absolute inset-0 w-[120vh] -top-40 -left-76 h-[120vh] bg-gradient-to-br from-[#E6C274] to-[#FFECC2] rounded-full -translate-x-16 -translate-y-8"></div>
          
          {/* Mobile background circle */}
          <div className="lg:hidden absolute -top-48 -right-24 w-[70vh] h-[70vh] bg-gradient-to-br from-[#E6C274] to-[#FFECC2] rounded-full"></div>
          
          <div className="relative z-10 lg:pl-8">
            <img src="/story.png" alt="Konnect Packaging" className="h-100 lg:h-130 mb-8" />
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="space-y-8 lg:space-y-11 relative">
          {storyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const isFirstOrLast = index === 0 || index === storyFeatures.length - 1;
            const overlayClass = isFirstOrLast ? "lg:-ml-32 lg:pr-12 relative z-20" : "";
            
            return (
              <div key={feature.id} className={`flex items-start gap-4 lg:gap-6 ${overlayClass}`}>
                {/* Icon in circle */}
                <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 border-2 border-black rounded-full flex items-center justify-center bg-transparent">
                  <IconComponent className="w-5 h-5 lg:w-7 lg:h-7 text-black" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg lg:text-xl lg:text-2xl text-black mb-2 lg:mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-black/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Study2;