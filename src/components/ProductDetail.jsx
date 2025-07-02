import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import productInfoData from './ProductInfoData';
import foodProductInfoData from './FoodProductInfoData';
import BackButton from './BackButton';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Scroll to top when productId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Drag functionality for scroll indicator
  useEffect(() => {
    let isDragging = false;
    let startY = 0;
    
    const handleMouseDown = (e) => {
      isDragging = true;
      startY = e.clientY;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const scrollableContent = document.getElementById('scrollable-content');
      const scrollLine = document.getElementById('scroll-line');
      const indicator = document.getElementById('scroll-indicator');
      
      if (scrollableContent && scrollLine && indicator) {
        const lineRect = scrollLine.getBoundingClientRect();
        const relativeY = e.clientY - lineRect.top;
        const percentage = Math.max(0, Math.min(1, relativeY / lineRect.height));
        
        const maxScrollTop = scrollableContent.scrollHeight - scrollableContent.clientHeight;
        scrollableContent.scrollTop = percentage * maxScrollTop;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const indicator = document.getElementById('scroll-indicator');
    if (indicator) {
      indicator.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (indicator) {
        indicator.removeEventListener('mousedown', handleMouseDown);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [productId]);

  // Product data - includes both VCI and Food products
  const allProducts = [
    // VCI Products (1-13)
    {
      id: 1,
      name: 'VCI Kraft Paper',
      code: '(K101 A)',
      image: '/VCI/VCI Kraft Paper (K101 A).png'
    },
    {
      id: 2,
      name: 'VCI PE Laminated Paper',
      code: '(K101 PE)',
      image: '/VCI/laminated.png'
    },
    {
      id: 3,
      name: 'VCI 3-Ply Paper',
      code: '(KP 301)',
      image: '/VCI/VCI 3-Ply Paper (KP 301) 1.png'
    },
    {
      id: 4,
      name: 'VCI LDPE Film',
      code: '(K101 VCF)',
      image: '/VCI/VCI LDPE Film (K101 VCF) 1.png'
    },
    {
      id: 5,
      name: 'VCI Strength Fabric',
      code: '(K101 SF)',
      image: '/VCI/VCI PE strength fabric (K101 sf) 2.png'
    },
    {
      id: 6,
      name: 'VCI MET PET Laminated Paper',
      code: '(K101 AMP)',
      image: '/VCI/VCI MET PET Laminated Paper (K101 AMP) 1.png'
    },
    {
      id: 7,
      name: 'VCI 4-Ply Fabric',
      code: '(K104 PF)',
      image: '/VCI/VCI 4-Ply Fabric (K104 PF) 1.png'
    },
    {
      id: 8,
      name: 'VCI Shrink Film',
      code: '(K102 SF)',
      image: '/VCI/VCI Shrink Film (K102 SF) 1.png'
    },
    {
      id: 9,
      name: 'VCI Desiccant',
      code: '(K103 DC)',
      image: '/VCI/VCI Desiccant (K103 DC) 1.png'
    },
    {
      id: 10,
      name: 'VCI Masterbatch',
      code: '(K106 MB)',
      image: '/VCI/VCI Masterbatch (K106 MB) 1.png'
    },
    {
      id: 11,
      name: 'VCI Power Stretch Film',
      code: '(K107 PSF)',
      image: '/VCI/VCI Power Stretch Film (K107 PSF) 1.png'
    },
    {
      id: 12,
      name: 'Industrial Wax Paper',
      code: '(IWP101)',
      image: '/VCI/Industrial Wax Paper1 (IWP101) 1.png'
    },
    {
      id: 13,
      name: 'Alu Barrier Bags',
      code: '(K108 ABB)',
      image: '/VCI/Alu Barrier Bags (K108 ABB) 1.png'
    },
    // Food Products (14-22)
    {
      id: 14,
      name: 'SMP Bags',
      code: '(F110 SMP)',
      image: '/Food/smp.png'
    },
    {
      id: 15,
      name: 'Bulk Tea Packaging Bags',
      code: '(F111 BTPB)',
      image: '/Food/2.png'
    },
    {
      id: 16,
      name: 'PE-Coated Paper',
      code: '(Food Grade)',
      image: '/Food/3.png'
    },
    {
      id: 17,
      name: 'Wax Coated Paper',
      code: '(F109 WCP)',
      image: '/Food/4.png'
    },
    {
      id: 18,
      name: 'Paper Aluminum Pouches',
      code: '(F112 PAP)',
      image: '/Food/5.png'
    },
    {
      id: 19,
      name: 'Standing Pouches',
      code: '(F113 SP)',
      image: '/Food/6.png'
    },
    {
      id: 20,
      name: 'HDPE Laminated Paper Bags',
      code: '(F107 LPB)',
      image: '/Food/7.png'
    },
    {
      id: 21,
      name: 'Sugar Paper',
      code: '(F105 SP)',
      image: '/Food/8.png'
    },
    {
      id: 22,
      name: 'Multiwall Paper Bags',
      code: '(F106 MPB)',
      image: '/Food/9.png'
    }
  ];

  const product = allProducts.find(p => p.id === parseInt(productId));
  
  // Get details from appropriate data file based on product ID
  const details = parseInt(productId) >= 14 
    ? foodProductInfoData[productId] || foodProductInfoData[14]
    : productInfoData[productId] || productInfoData[1];

  const handleBack = () => {
    navigate('/');
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white font-['Krona_One'] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Product Not Found</h1>
          <button 
            onClick={handleBack}
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-['Krona_One']">
      {/* Back Button */}
      <BackButton />
      
      {/* Header */}
      <div className="relative p-4 md:p-6">
        {/* Top Right Badge */}
        <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium">
          {parseInt(productId) >= 14 ? 'Food & Agro Packaging' : 'VCI Packaging Solutions'}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Product Image */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center p-8 md:p-8 lg:p-16 bg-white">
          <div className="w-full max-w-md mb-6 relative">
            {/* Product Title - Over image on mobile, above image on desktop */}
            <div className="absolute top-2 left-2 right-2 z-10 text-center lg:relative lg:top-auto lg:left-auto lg:right-auto lg:z-auto lg:text-center lg:mb-4">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight text-black break-words hyphens-auto px-2 py-1 bg-white/80 backdrop-blur-sm rounded-lg lg:bg-transparent lg:backdrop-blur-none">
                {product.name} {product.code}
              </h1>
            </div>
            
            <img 
              // key forces re-mount when product changes
              key={product.id} 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2">
              <span className="text-sm">🔄</span>
              VIEW 360°
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2">
              <FaPlay className="w-4 h-4" />
              WATCH NOW
            </button>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="lg:w-1/2 relative">
          <div
            id="scrollable-content"
            className="
              h-[60vh] md:h-[70vh] lg:h-screen
              min-h-[60vh] md:min-h-[70vh] lg:min-h-screen
              bg-gradient-to-tr from-[#E9C77F] to-[#FBE6B7] text-black
              p-4 md:p-8 lg:p-12
              pr-16 md:pr-20 lg:pr-24
              overflow-y-auto
              rounded-tl-3xl rounded-bl-3xl
              "
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onScroll={(e) => {
              const scrollTop = e.target.scrollTop;
              const scrollHeight = e.target.scrollHeight - e.target.clientHeight;
              const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
              
              const indicator = document.getElementById('scroll-indicator');
              const line = document.getElementById('scroll-line');
              if (indicator && line) {
                const lineHeight = line.clientHeight;
                const dotPosition = (scrollPercent / 100) * (lineHeight - 12);
                indicator.style.top = `${dotPosition}px`;
              }
            }}
          >
            {/* Overview Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-sm">📋</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-black">Overview</h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-black">
                {details.overview}
              </p>
            </div>

            {/* Composition Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-sm">⚗️</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-black">Composition</h2>
              </div>
              <ul className="text-sm md:text-base space-y-1 text-black">
                {details.composition && details.composition.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            {/* Layer Structure Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-black">Layer Structure</h2>
              </div>
              <ul className="text-sm md:text-base space-y-1 text-black">
                {details.layerStructure && details.layerStructure.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            {/* Application Guidelines Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-sm">📋</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-black">Application Guidelines</h2>
              </div>
              <ul className="text-sm md:text-base space-y-1 text-black">
                {details.application && details.application.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            {/* Key Features Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-sm">⭐</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-black">Key Features</h2>
              </div>
              <ul className="text-sm md:text-base space-y-1 text-black">
                {details.features && details.features.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            {/* Technical Specifications Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-sm">📄</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-black">Technical Specifications</h2>
              </div>
              
              {/* Specifications Table */}
              <div className="bg-transparent rounded-lg overflow-hidden border border-black/20">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#b8860b] text-black">
                      <th className="text-left p-3 font-bold border-r border-black/30">Parameter</th>
                      <th className="text-left p-3 font-bold">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="text-black bg-white/40 backdrop-blur-sm">
                    {details.specs && details.specs.map(([param, spec], i) => (
                      <tr key={i} className={i < details.specs.length - 1 ? "border-b border-black/20" : ""}>
                        <td className="p-3 border-r border-black/20">{param}</td>
                        <td className="p-3">{spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Custom GSM Options Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-sm">⚙️</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-black">Custom GSM Options</h2>
              </div>
              
              {/* GSM Options Table */}
              <div className="bg-transparent rounded-lg overflow-hidden border border-black/20">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#b8860b] text-black">
                      <th className="text-left p-3 font-bold border-r border-black/30">Component</th>
                      <th className="text-left p-3 font-bold">GSM Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-black bg-white/40 backdrop-blur-sm">
                    {details.gsm && details.gsm.map(([comp, gsm], i) => (
                      <tr key={i} className={i < details.gsm.length - 1 ? "border-b border-black/20" : ""}>
                        <td className="p-3 border-r border-black/20">{comp}</td>
                        <td className="p-3">{gsm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Custom Scroll Indicator */}
          <div className="absolute top-4 right-4 h-[calc(100%-2rem)] w-1 flex items-center">
            <div id="scroll-line" className="relative w-full h-3/4 bg-black/20 rounded-full">
              <div 
                id="scroll-indicator" 
                className="absolute w-5 h-5 bg-black rounded-full -left-2 transition-all duration-150 ease-out cursor-pointer hover:bg-gray-800 hover:scale-110"
                style={{ top: '0px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

