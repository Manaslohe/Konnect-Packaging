import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [direction, setDirection] = useState(0);

  const productData = [
    // First Slide
    [
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
        image: '/VCI/VCI Kraft Paper (K101 A).png'
      },
      {
        id: 3,
        name: 'VCI 3-Ply Paper',
        code: '(KP 301)',
        image: '/VCI/VCI Kraft Paper (K101 A).png'
      },
      {
        id: 4,
        name: 'VCI LDPE Film',
        code: '(K101 VCF)',
        image: '/VCI/VCI Kraft Paper (K101 A).png'
      },
      {
        id: 5,
        name: 'VCI Strength Fabric',
        code: '(K101 SF)',
        image: '/VCI/VCI Kraft Paper (K101 A).png'
      },
      {
        id: 6,
        name: 'VCI MET PET Laminated Paper',
        code: '(K101 AMP)',
        image: '/VCI/VCI Kraft Paper (K101 A).png'
      },
      {
        id: 7,
        name: 'VCI 4-Ply Fabric',
        code: '(K104 PF)',
        image: '/VCI/VCI Kraft Paper (K101 A).png'
      }
    ],
    // Second Slide
    [
      {
        id: 8,
        name: 'VCI Shrink Film',
        code: '(K102 SF)',
        image: '/VCI/VCI Shrink Film.png'
      },
      {
        id: 9,
        name: 'VCI Desiccant',
        code: '(K103 DC)',
        image: '/VCI/VCI Desiccant.png'
      },
      {
        id: 10,
        name: 'VCI Masterbatch',
        code: '(K106 MB)',
        image: '/VCI/VCI Masterbatch.png'
      },
      {
        id: 11,
        name: 'VCI Power Stretch Film',
        code: '(K107 PSF)',
        image: '/VCI/VCI Power Stretch.png'
      },
      {
        id: 12,
        name: 'Industrial Wax Paper',
        code: '(IWP101)',
        image: '/VCI/Industrial Wax Paper.png'
      },
      {
        id: 13,
        name: 'Alu Barrier Bags',
        code: '(K108 ABB)',
        image: '/VCI/Alu Barrier Bags.png'
      }
    ]
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute'
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % productData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + productData.length) % productData.length);
  };

  const handleViewClick = (product) => {
    setSelectedProduct(product);
    // Add your view functionality here
    console.log("Viewing product:", product);
  };

  return (
    <div id="products" className="pb-6 pt-6 bg-white font-['Krona_One']">
      {/* Main Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-6 tracking-wider font-['Krona_One']">
        Our Products
      </h2>
      
      {/* Product Container */}
      <div className="max-w-full mx-auto">
        <div
            className="bg-[#f1d598] rounded-3xl p-1 relative overflow-hidden"
            style={{ minHeight: '130vh', height: '110vh' }}
          >          
          {/* Subtitle */}
          <h3 className="text-xl md:text-3xl font-normal text-center text-black mb-4 pt-4 md:mb-16 font-['Krona_One']">
            VCI Packaging Solutions
          </h3>
          
          {/* Navigation and Products Container */}
          <div className="relative flex items-center h-[650px] md:h-[650px] sm:h-auto">
            {/* Products Grid */}
            <div className="w-full relative h-full">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "tween", duration: 0.3, ease: "easeInOut" },
                    opacity: { duration: 0.2 }
                  }}
                  className="w-full h-full"
                >
                  {/* First Row */}
                  <div className="px-2 md:px-0 mb-4 md:mb-8">
                    {/* Mobile Layout - 2 columns */}
                    <div className="grid grid-cols-2 gap-2 justify-items-center md:hidden">
                      {productData[currentSlide].slice(0, 4).map((product) => (
                        <div key={product.id} className="rounded-2xl p-2 w-full max-w-[180px] relative group">
                          {/* View Button with Ring */}
                          <div className="absolute top-1 right-1 z-10">
                            <div className="relative">
                              <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <button 
                                onClick={() => handleViewClick(product)}
                                className="relative bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium hover:scale-105 transition-transform duration-300"
                              >
                                View
                              </button>
                            </div>
                          </div>
                          
                          {/* Product Image Container */}
                          <div className="bg-[#f8ecd6] rounded-2xl mb-2 border-2 border-black aspect-square">
                            <div className="w-full h-full flex items-center justify-center p-2">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-4/5 h-4/5 object-contain transform group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          
                          {/* Product Info */}
                          <div className="text-center">
                            <h4 className="font-bold text-black text-xs mb-1 font-['Krona_One'] leading-tight">
                              {product.name}
                            </h4>
                            <p className="text-gray-600 text-xs font-['Krona_One']">
                              {product.code}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Desktop Layout - 4 columns with original size */}
                    <div className="hidden md:grid md:grid-cols-4 md:gap-8 justify-items-center">
                      {productData[currentSlide].slice(0, 4).map((product) => (
                        <div key={product.id} className="rounded-2xl p-6 w-80 relative group">
                          {/* View Button with Ring */}
                          <div className="absolute top-1 right-1 z-10">
                            <div className="relative">
                              <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <button 
                                onClick={() => handleViewClick(product)}
                                className="relative bg-black text-white w-18 h-18 rounded-full flex items-center justify-center text-base font-medium hover:scale-105 transition-transform duration-300"
                              >
                                View
                              </button>
                            </div>
                          </div>
                          
                          {/* Product Image Container */}
                          <div className="bg-[#f8ecd6] rounded-4xl mb-4 border-2 border-black aspect-square">
                            <div className="w-full h-full flex items-center justify-center">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-4/5 h-4/5 object-contain transform group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          
                          {/* Product Info */}
                          <div className="text-center">
                            <h4 className="font-bold text-black text-lg mb-1 font-['Krona_One']">
                              {product.name}
                            </h4>
                            <p className="text-gray-600 text-base font-['Krona_One']">
                              {product.code}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Second Row */}
                  <div className="flex justify-center px-2 md:px-0">
                    {currentSlide === 0 ? (
                      // First slide layout
                      <div className="w-full md:max-w-[1000px]">
                        {/* Mobile Layout - 2 columns */}
                        <div className="grid grid-cols-2 gap-2 md:hidden">
                          {productData[currentSlide].slice(4, 6).map((product) => (
                            <div key={product.id} className="rounded-2xl p-2 w-full max-w-[180px] relative group mx-auto">
                              {/* View Button with Ring */}
                              <div className="absolute top-1 right-1 z-10">
                                <div className="relative">
                                  <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <button 
                                    onClick={() => handleViewClick(product)}
                                    className="relative bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium hover:scale-105 transition-transform duration-300"
                                  >
                                    View
                                  </button>
                                </div>
                              </div>
                              
                              {/* Product Image Container */}
                              <div className="bg-[#f8ecd6] rounded-2xl p-2 mb-2 border-2 border-black aspect-square">
                                <div className="w-full h-full flex items-center justify-center">
                                  <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-4/5 h-4/5 object-contain transform group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                              </div>
                              
                              {/* Product Info */}
                              <div className="text-center">
                                <h4 className="font-bold text-black text-xs mb-1 font-['Krona_One'] leading-tight">
                                  {product.name}
                                </h4>
                                <p className="text-gray-600 text-xs font-['Krona_One']">
                                  {product.code}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Last card centered on mobile */}
                        {productData[currentSlide].slice(6, 7).length > 0 && (
                          <div className="flex justify-center mt-2 md:hidden">
                            {productData[currentSlide].slice(6, 7).map((product) => (
                              <div key={product.id} className="rounded-2xl p-2 w-full max-w-[180px] relative group">
                                {/* View Button with Ring */}
                                <div className="absolute top-1 right-1 z-10">
                                  <div className="relative">
                                    <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <button 
                                      onClick={() => handleViewClick(product)}
                                      className="relative bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium hover:scale-105 transition-transform duration-300"
                                    >
                                      View
                                    </button>
                                  </div>
                                </div>
                                
                                {/* Product Image Container */}
                                <div className="bg-[#f8ecd6] rounded-2xl mb-2 border-2 border-black aspect-square">
                                  <div className="w-full h-full flex items-center justify-center p-2">
                                    <img 
                                      src={product.image} 
                                      alt={product.name}
                                      className="w-4/5 h-4/5 object-contain transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                </div>
                                
                                {/* Product Info */}
                                <div className="text-center">
                                  <h4 className="font-bold text-black text-xs mb-1 font-['Krona_One'] leading-tight">
                                    {product.name}
                                  </h4>
                                  <p className="text-gray-600 text-xs font-['Krona_One']">
                                    {product.code}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Desktop Layout - 3 columns with original size */}
                        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
                          {productData[currentSlide].slice(4, 7).map((product) => (
                            <div key={product.id} className="rounded-2xl p-6 w-80 relative group">
                              {/* View Button with Ring */}
                              <div className="absolute top-1 right-1 z-10">
                                <div className="relative">
                                  <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <button 
                                    onClick={() => handleViewClick(product)}
                                    className="relative bg-black text-white w-18 h-18 rounded-full flex items-center justify-center text-base font-medium hover:scale-105 transition-transform duration-300"
                                  >
                                    View
                                  </button>
                                </div>
                              </div>
                              
                              {/* Product Image Container */}
                              <div className="bg-[#f8ecd6] rounded-4xl p-4 mb-4 border-2 border-black aspect-square">
                                <div className="w-full h-full flex items-center justify-center">
                                  <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-4/5 h-4/5 object-contain transform group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                              </div>
                              
                              {/* Product Info */}
                              <div className="text-center">
                                <h4 className="font-bold text-black text-lg mb-1 font-['Krona_One']">
                                  {product.name}
                                </h4>
                                <p className="text-gray-600 text-base font-['Krona_One']">
                                  {product.code}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Second slide layout (2 cards centered)
                      <div className="w-full md:max-w-[700px]">
                        {/* Mobile Layout */}
                        <div className="grid grid-cols-2 gap-4 md:hidden">
                          {productData[currentSlide].slice(4, 6).map((product) => (
                            <div key={product.id} className="rounded-2xl p-3 w-full max-w-[160px] relative group mx-auto">
                              {/* View Button with Ring */}
                              <div className="absolute top-2 right-2 z-10">
                                <div className="relative">
                                  <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <button 
                                    onClick={() => handleViewClick(product)}
                                    className="relative bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xs font-medium hover:scale-105 transition-transform duration-300"
                                  >
                                    View
                                  </button>
                                </div>
                              </div>
                              
                              {/* Product Image Container */}
                              <div className="bg-[#f8ecd6] rounded-xl p-2 mb-2 border-2 border-black aspect-square">
                                <div className="w-full h-full flex items-center justify-center">
                                  <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-4/5 h-4/5 object-contain transform group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                              </div>
                              
                              {/* Product Info */}
                              <div className="text-center">
                                <h4 className="font-bold text-black text-xs mb-1 font-['Krona_One'] leading-tight">
                                  {product.name}
                                </h4>
                                <p className="text-gray-600 text-xs font-['Krona_One']">
                                  {product.code}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Desktop Layout - 2 columns with original size */}
                        <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                          {productData[currentSlide].slice(4, 6).map((product) => (
                            <div key={product.id} className="rounded-2xl p-6 w-80 relative group">
                              {/* View Button with Ring */}
                              <div className="absolute top-4 right-4 z-10">
                                <div className="relative">
                                  <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <button 
                                    onClick={() => handleViewClick(product)}
                                    className="relative bg-black text-white w-16 h-16 rounded-full flex items-center justify-center text-base font-medium hover:scale-105 transition-transform duration-300"
                                  >
                                    View
                                  </button>
                                </div>
                              </div>
                              
                              {/* Product Image Container */}
                              <div className="bg-[#f8ecd6] rounded-xl p-4 mb-4 border-2 border-black aspect-square">
                                <div className="w-full h-full flex items-center justify-center">
                                  <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-4/5 h-4/5 object-contain transform group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                              </div>
                              
                              {/* Product Info */}
                              <div className="text-center">
                                <h4 className="font-bold text-black text-lg mb-1 font-['Krona_One']">
                                  {product.name}
                                </h4>
                                <p className="text-gray-600 text-base font-['Krona_One']">
                                  {product.code}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="absolute -left-3 md:-left-6 -bottom-30 z-10 bg-white rounded-xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-['Krona_One']"
            >
              <svg className="w-8 h-8 md:w-12 md:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="absolute -right-3 md:-right-6 -bottom-30 z-10 bg-white rounded-xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-['Krona_One']"
            >
              <svg className="w-8 h-8 md:w-12 md:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 gap-4">
          {productData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`flex flex-col items-center transition-all duration-300 ${
                index === currentSlide ? 'scale-110' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <div className={`w-5 h-5 rounded-full mb-2 ${
                index === currentSlide 
                  ? 'bg-black' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}></div>
             
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
