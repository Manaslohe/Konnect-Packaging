import * as React from "react";
import { Trophy, Award, FileText } from "lucide-react";

function AwardsCertifications() {
  return (
    <div className="w-full bg-gray-100 py-12 px-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-[#E9C77F] to-[#FBE6B7] rounded-2xl p-8 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Awards & Certifications
          </h1>
          <p className="text-lg text-black/80 leading-relaxed max-w-4xl">
            Recognized for excellence in sustainable packaging solutions, 
            Konnect holds industry certifications that validate our innovation and 
            ESG commitment.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-12">
            <h2 className="text-3xl font-bold text-black">Awards</h2>
            <Trophy className="w-8 h-8 text-black" />
          </div>

          {/* Awards Flow Chart */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-black/20 transform -translate-x-px"></div>
            
            {/* Top Row - Two Awards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Award */}
              <div className="relative">
                <div className="bg-black text-white px-6 py-3 rounded-full text-center font-semibold mb-4 mx-auto max-w-sm">
                  Recognized as an Innovator in Sustainable Packaging
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border relative">
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Konnect was acknowledged for its breakthrough development of VCI paper and jumbo bags, a first-of-its-kind eco-friendly packaging solution co-developed with Hindalco.
                  </p>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">$</span>
                  </div>
                </div>
              </div>

              {/* Right Award */}
              <div className="relative">
                <div className="bg-black text-white px-6 py-3 rounded-full text-center font-semibold mb-4 mx-auto max-w-sm">
                  Featured in Government-Led ESG Procurement Pipelines
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border relative">
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    The company's packaging products align with India's sustainable development and Zero Effect, Zero Defect (ZED) vision, earning attention in government and ESG-based tenders.
                  </p>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">$</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Award - Centered */}
            <div className="flex justify-center">
              <div className="max-w-md">
                <div className="bg-black text-white px-6 py-3 rounded-full text-center font-semibold mb-4">
                  Brand Excellence in Industrial Packaging
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border relative">
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Konnect's branding and product innovation have been recognized within the B2B industrial segment for its commitment to packaging sustainability and product durability.
                  </p>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-12">
            <h2 className="text-3xl font-bold text-black">Certifications</h2>
            <FileText className="w-8 h-8 text-black" />
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ROHS Certification */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                  View Certificate
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 mt-6">
                ROHS (Restriction of Hazardous Substances)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                Confirms that Konnect's packaging materials are free from harmful substances, making them safe for industrial and export applications.
              </p>
              <div className="absolute bottom-4 right-4">
                <div className="w-10 h-8 bg-black rounded flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* ZED Certification */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                  View Certificate
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 mt-6">
                ZED (Zero Effect, Zero Defect) Certification
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                A prestigious Indian government certification promoting quality manufacturing with minimal environmental impact.
              </p>
              <div className="absolute bottom-4 right-4">
                <div className="w-10 h-8 bg-black rounded flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* CE Certification */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                  View Certificate
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 mt-6">
                CE Certification
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                Ensures Konnect's products meet European safety, health, and environmental protection standards—critical for international trade and credibility.
              </p>
              <div className="absolute bottom-4 right-4">
                <div className="w-10 h-8 bg-black rounded flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
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