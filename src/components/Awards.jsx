import * as React from "react";
import { Trophy, Award, FileText, Star } from "lucide-react";
import '@fontsource/krona-one/400.css';

function AwardsCertifications() {
  return (
    <div className="w-full bg-gray-100 py-12 px-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-[#E9C77F] to-[#FBE6B7] rounded-2xl p-6 lg:p-8 mb-12 hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'Krona One, sans-serif' }}>
            Awards & Certifications
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-black/80 leading-relaxed max-w-4xl" style={{ fontFamily: 'Krona One, sans-serif' }}>
            Recognized for excellence in sustainable packaging solutions, 
            Konnect holds industry certifications that validate our innovation and 
            ESG commitment.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black" style={{ fontFamily: 'Krona One, sans-serif' }}>Awards</h2>
          </div>

          {/* Desktop Tree Diagram */}
          <div className="hidden lg:block relative min-h-[800px]">
            {/* SVG for enhanced connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {/* Main trunk */}
              <line x1="50%" y1="60" x2="50%" y2="200" stroke="#E9C77F" strokeWidth="4" opacity="0.8" />
              
              {/* Primary branches to level 1 */}
              <line x1="50%" y1="140" x2="25%" y2="140" stroke="#E9C77F" strokeWidth="3" opacity="0.7" />
              <line x1="25%" y1="140" x2="25%" y2="220" stroke="#E9C77F" strokeWidth="3" opacity="0.7" />
              
              <line x1="50%" y1="180" x2="75%" y2="180" stroke="#E9C77F" strokeWidth="3" opacity="0.7" />
              <line x1="75%" y1="180" x2="75%" y2="300" stroke="#E9C77F" strokeWidth="3" opacity="0.7" />
              
              {/* Secondary branch to level 2 - connects to node properly */}
              <line x1="50%" y1="200" x2="50%" y2="480" stroke="#E9C77F" strokeWidth="3" opacity="0.7" />
              <line x1="50%" y1="480" x2="50%" y2="560" stroke="#E9C77F" strokeWidth="3" opacity="0.7" />
              
              {/* Decorative curve elements */}
              <path d="M 50% 60 Q 40% 80 50% 100" stroke="#E9C77F" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M 50% 60 Q 60% 80 50% 100" stroke="#E9C77F" strokeWidth="2" fill="none" opacity="0.5" />
            </svg>

            {/* Root Node */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-full flex items-center justify-center shadow-xl">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Level 1 Branch Nodes */}
            <div className="absolute top-[120px] left-1/4 transform -translate-x-1/2 z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-full shadow-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="absolute top-[160px] right-1/4 transform translate-x-1/2 z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-full shadow-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Level 2 Branch Node */}
            <div className="absolute top-[480px] left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-full shadow-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Level 1 Awards - Staggered Heights */}
            <div className="absolute top-[200px] left-0 right-0 z-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Award - Higher Position */}
                <div className="relative">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-full text-center font-semibold mb-4 mx-auto max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300 text-[14px]" style={{ fontFamily: 'Krona One, sans-serif' }}>
                    <span>Recognized as an Innovator in Sustainable Packaging</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow duration-300 relative">
                    <p className="text-base text-gray-800 leading-relaxed mb-4 font-medium">
                      Konnect was acknowledged for its breakthrough aluminum-backed paper jumbo bags, a first-of-its-kind eco-friendly packaging solution co-developed with Hindalco.
                    </p>
                  </div>
                </div>

                {/* Right Award - Lower Position */}
                <div className="relative" style={{ marginTop: '120px' }}>
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-full text-center font-semibold mb-4 mx-auto max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300 text-[14px]" style={{ fontFamily: 'Krona One, sans-serif' }}>
                    <span>Featured in Government-Led ESG Procurement Pipelines</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow duration-300 relative">
                    <p className="text-base text-gray-800 leading-relaxed mb-4 font-medium">
                      The company's packaging products align with India's "Zero Effect, Zero Defect" (ZED) vision, earning attention in government and ESG-based tenders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Level 2 Award - Bottom Level */}
            <div className="absolute top-[560px] left-1/2 transform -translate-x-1/2 z-20">
              <div className="max-w-md">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-full text-center font-semibold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-[14px]" style={{ fontFamily: 'Krona One, sans-serif' }}>
                  <span>Brand Excellence in Industrial Packaging</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow duration-300 relative">
                  <p className="text-base text-gray-800 leading-relaxed mb-4 font-medium">
                    Konnect's branding and product innovation have been recognized within the B2B industrial segment for contributing to packaging sustainability and product durability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Tree Diagram */}
          <div className="block lg:hidden relative">
            {/* Mobile SVG for connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {/* Vertical main trunk */}
              <line x1="50%" y1="40" x2="50%" y2="90%" stroke="#E9C77F" strokeWidth="3" opacity="0.8" />
              
              {/* Branch connectors */}
              <line x1="50%" y1="120" x2="85%" y2="120" stroke="#E9C77F" strokeWidth="2" opacity="0.7" />
              <line x1="50%" y1="320" x2="85%" y2="320" stroke="#E9C77F" strokeWidth="2" opacity="0.7" />
              <line x1="50%" y1="520" x2="85%" y2="520" stroke="#E9C77F" strokeWidth="2" opacity="0.7" />
            </svg>

            {/* Mobile Root Node */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-full flex items-center justify-center shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Mobile Awards Layout */}
            <div className="space-y-8 relative z-20">
              {/* Award 1 */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-full text-center font-semibold mb-3 text-sm" style={{ fontFamily: 'Krona One, sans-serif' }}>
                    <span>Recognized as an Innovator in Sustainable Packaging</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border">
                    <p className="text-base text-gray-800 leading-relaxed font-medium">
                      Konnect was acknowledged for its breakthrough aluminum-backed paper jumbo bags, a first-of-its-kind eco-friendly packaging solution co-developed with Hindalco.
                    </p>
                  </div>
                </div>
              </div>

              {/* Award 2 */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-full text-center font-semibold mb-3 text-sm" style={{ fontFamily: 'Krona One, sans-serif' }}>
                    <span>Featured in Government-Led ESG Procurement Pipelines</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border">
                    <p className="text-base text-gray-800 leading-relaxed font-medium">
                      The company's packaging products align with India's "Zero Effect, Zero Defect" (ZED) vision, earning attention in government and ESG-based tenders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Award 3 */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800  text-white px-4 py-2 rounded-full text-center font-semibold mb-3 text-sm" style={{ fontFamily: 'Krona One, sans-serif' }}>
                    <span>Brand Excellence in Industrial Packaging</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border">
                    <p className="text-base text-gray-800 leading-relaxed font-medium">
                      Konnect's branding and product innovation have been recognized within the B2B industrial segment for contributing to packaging sustainability and product durability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black" style={{ fontFamily: 'Krona One, sans-serif' }}>Certifications</h2>
            <FileText className="w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 text-[#E9C77F]" />
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* ROHS Certification */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-md hover:from-gray-800 hover:to-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer" style={{ fontFamily: 'Krona One, sans-serif' }}>
                  View Certificate
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-[14px] font-bold text-black mb-4 mt-6" style={{ fontFamily: 'Krona One, sans-serif' }}>
                ROHS (Restriction of Hazardous Substances)
              </h3>
              <p className="text-base text-gray-800 leading-relaxed mb-6 font-medium">
                Confirms that Konnect's packaging materials are free from harmful substances, making them safe for industrial and export applications.
              </p>
              <div className="absolute bottom-4 right-4">
                <div className="w-10 lg:w-12 h-8 lg:h-10 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-lg flex items-center justify-center shadow-lg">
                  <FileText className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                </div>
              </div>
            </div>

            {/* ZED Certification */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-md hover:from-gray-800 hover:to-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer" style={{ fontFamily: 'Krona One, sans-serif' }}>
                  View Certificate
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-[14px] font-bold text-black mb-4 mt-6" style={{ fontFamily: 'Krona One, sans-serif' }}>
                ZED (Zero Effect, Zero Defect) Certification
              </h3>
              <p className="text-base text-gray-800 leading-relaxed mb-6 font-medium">
                A prestigious Indian government certification promoting quality manufacturing with minimal environmental impact.
              </p>
              <div className="absolute bottom-4 right-4">
                <div className="w-10 lg:w-12 h-8 lg:h-10 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-lg flex items-center justify-center shadow-lg">
                  <Award className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                </div>
              </div>
            </div>

            {/* CE Certification */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-md hover:from-gray-800 hover:to-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer" style={{ fontFamily: 'Krona One, sans-serif' }}>
                  View Certificate
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-[14px] font-bold text-black mb-4 mt-6" style={{ fontFamily: 'Krona One, sans-serif' }}>
                CE Certification
              </h3>
              <p className="text-base text-gray-800 leading-relaxed mb-6 relative z-10 font-medium">
                Ensures Konnect's products meet European safety, health, and environmental protection standards—critical for international trade and credibility.
              </p>
              <div className="absolute bottom-4 right-4">
                <div className="w-10 lg:w-12 h-8 lg:h-10 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-lg flex items-center justify-center shadow-lg">
                  <FileText className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsCertifications;