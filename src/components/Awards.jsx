import * as React from "react";
import { FileText, Trophy } from "lucide-react";
import '@fontsource/montserrat/400.css';
import '@fontsource/krona-one/400.css';

function AwardsCertifications() {
  return (
    <div className="w-full bg-gray-100 py-12 px-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-[#E9C77F] to-[#FBE6B7] rounded-2xl p-6 lg:p-8 mb-12 hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'Krona One, sans-serif' }}>
            Awards & Certifications
          </h1>
          <p className="text-sm font-medium sm:text-base lg:text-lg text-black/80 leading-relaxed max-w-4xl">
            Recognized for excellence in sustainable packaging solutions, 
            Konnect holds industry certifications that validate our innovation and 
            ESG commitment.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black" style={{ fontFamily: 'Krona One, sans-serif' }}>
              Awards
            </h2>
            <Trophy className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#E9C77F]" />
          </div>
          {/* Show award2.png on mobile, award.png on tablet/desktop */}
          <img
            src="/award2.png"
            alt="Awards"
            className="block sm:hidden w-auto max-w-xs"
          />
          <img
            src="/award.png"
            alt="Awards"
            className="hidden sm:block w-auto max-w-xs sm:max-w-md lg:max-w-4xl"
          />
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black" style={{ fontFamily: 'Krona One, sans-serif' }}>Certifications</h2>
            <FileText className="w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 text-[#E9C77F]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* ROHS Certification */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border relative hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-md hover:from-gray-800 hover:to-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  View Certificate
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-lg font-bold text-black mb-4 mt-6" style={{ fontFamily: 'Krona One, sans-serif' }}>
                ROHS (Restriction of Hazardous Substances)
              </h3>
                <p className="text-[14px] text-gray-800 leading-relaxed mb-6 font-bold">
                Confirms that Konnect's packaging materials are free from harmful substances, making them safe for industrial and export applications.
              </p>
              <div className="absolute bottom-4 right-4">
                <div className="w-10 lg:w-12 h-8 lg:h-10 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-lg flex items-center justify-center shadow-lg">
                  <FileText className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                </div>
              </div>
            </div>
            {/* ZED Certification */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border relative hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-md hover:from-gray-800 hover:to-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  View Certificate
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-lg font-bold text-black mb-4 mt-6" style={{ fontFamily: 'Krona One, sans-serif' }}>
                ZED (Zero Effect, Zero Defect) Certification
              </h3>
              <p className="text-[14px] text-gray-800 leading-relaxed mb-6 font-bold">
                A prestigious Indian government certification promoting quality manufacturing with minimal environmental impact.
              </p>
              <div className="absolute bottom-4 right-4">
                <div className="w-10 lg:w-12 h-8 lg:h-10 bg-gradient-to-br from-[#E9C77F] to-[#D4B270] rounded-lg flex items-center justify-center shadow-lg">
                  <FileText className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                </div>
              </div>
            </div>
            {/* CE Certification */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border relative hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-md hover:from-gray-800 hover:to-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  View Certificate
                </div>
              </div>
              <h3 className="text-base sm:text-lg lg:text-lg font-bold text-black mb-4 mt-6" style={{ fontFamily: 'Krona One, sans-serif' }}>
                CE Certification
              </h3>
              <p className="text-[14px] text-gray-800 leading-relaxed mb-6 relative z-10 font-bold">
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