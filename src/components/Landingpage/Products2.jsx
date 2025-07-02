import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [direction, setDirection] = useState(0);

  const productData = [
    // First Slide
    [
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
      }
    ],
    // Second Slide
    [
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
    window.location.href = `/product/${product.id}`;
  };

  return (
    <div id="products" className="pb-6 pt-6 bg-white font-['Krona_One']">      
      {/* Product Container */}
      <div className="max-w-full mx-auto">
        <div
            className="bg-[#f1d598] rounded-3xl p-1 relative overflow-hidden"
            style={{ 
              minHeight: window.innerWidth < 768 ? '100vh' : '130vh', 
              height: window.innerWidth < 768 ? '120vh' : '120vh' 
            }}
          >          
          {/* Subtitle */}
          <h3 className="text-xl md:text-3xl font-normal text-center text-black mb-4 pt-4 md:mb-16 font-['Krona_One']">
            Food & Agro Packaging
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
                        <div 
                          key={product.id} 
                          className="rounded-2xl p-2 w-full max-w-[180px] relative group cursor-pointer"
                          onClick={() => handleViewClick(product)}
                        >
                          {/* View Button with Ring */}
                          <div className="absolute top-1 right-1 z-10">
                            <div className="relative">
                              <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleViewClick(product);
                                }}
                                className="relative bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                        <div 
                          key={product.id} 
                          className="rounded-2xl p-6 w-80 relative group cursor-pointer"
                          onClick={() => handleViewClick(product)}
                        >
                          {/* View Button with Ring */}
                          <div className="absolute top-1 right-1 z-10">
                            <div className="relative">
                              <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleViewClick(product);
                                }}
                                className="relative bg-black text-white w-18 h-18 rounded-full flex items-center justify-center text-base font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                            <div 
                              key={product.id} 
                              className="rounded-2xl p-2 w-full max-w-[180px] relative group mx-auto cursor-pointer"
                              onClick={() => handleViewClick(product)}
                            >
                              {/* View Button with Ring */}
                              <div className="absolute top-1 right-1 z-10">
                                <div className="relative">
                                  <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleViewClick(product);
                                    }}
                                    className="relative bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                              <div 
                                key={product.id} 
                                className="rounded-2xl p-2 w-full max-w-[180px] relative group cursor-pointer"
                                onClick={() => handleViewClick(product)}
                              >
                                {/* View Button with Ring */}
                                <div className="absolute top-1 right-1 z-10">
                                  <div className="relative">
                                    <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleViewClick(product);
                                      }}
                                      className="relative bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                            <div 
                              key={product.id} 
                              className="rounded-2xl p-6 w-80 relative group cursor-pointer"
                              onClick={() => handleViewClick(product)}
                            >
                              {/* View Button with Ring */}
                              <div className="absolute top-1 right-1 z-10">
                                <div className="relative">
                                  <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleViewClick(product);
                                    }}
                                    className="relative bg-black text-white w-18 h-18 rounded-full flex items-center justify-center text-base font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                            <div 
                              key={product.id} 
                              className="rounded-2xl p-3 w-full max-w-[160px] relative group mx-auto cursor-pointer"
                              onClick={() => handleViewClick(product)}
                            >
                              {/* View Button with Ring */}
                              <div className="absolute top-2 right-2 z-10">
                                <div className="relative">
                                  <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleViewClick(product);
                                    }}
                                    className="relative bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xs font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
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
                            <div 
                              key={product.id} 
                              className="rounded-2xl p-6 w-80 relative group cursor-pointer"
                              onClick={() => handleViewClick(product)}
                            >
                              {/* View Button with Ring */}
                              <div className="absolute top-4 right-4 z-10">
                                <div className="relative">
                                  <div className="absolute -inset-1.5 bg-black rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <button 
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleViewClick(product);
                                    }}
                                    className="relative bg-black text-white w-16 h-16 rounded-full flex items-center justify-center text-base font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
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
              className="absolute left-2 md:left-4 -bottom-30 z-10 bg-white rounded-xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-['Krona_One']"
            >
              <BsChevronLeft className="w-8 h-8 md:w-14 md:h-14 text-gray-600" />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="absolute right-2 md:right-4 -bottom-30 z-10 bg-white rounded-xl p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-['Krona_One']"
            >
              <BsChevronRight className="w-8 h-8 md:w-14 md:h-14 text-gray-600" />
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
