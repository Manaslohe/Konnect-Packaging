import React, { useState, useRef, useEffect } from 'react';

const FeaturedClients = () => {
  const [topRibbonOffset, setTopRibbonOffset] = useState(0);
  const [bottomRibbonOffset, setBottomRibbonOffset] = useState(0);
  const [isDragging, setIsDragging] = useState({ top: false, bottom: false });
  const [dragStart, setDragStart] = useState({ x: 0, offset: 0 });
  const [isPaused, setIsPaused] = useState({ top: false, bottom: false });
  
  const topRibbonRef = useRef(null);
  const bottomRibbonRef = useRef(null);
  const animationRef = useRef(null);

  // Sample client logos
  const topClients = [
    { name: 'ESSAR STEEL', logo: '/ribbon1/1.png' },
    { name: 'HMT', logo: '/ribbon1/2.png' },
    { name: 'NALCO', logo: '/ribbon1/3.png' },
    { name: 'SPMCIL', logo: '/ribbon1/4.png' },
    { name: 'SPMCIL', logo: '/ribbon1/5.png' },
  ];

  const bottomClients = [
    { name: 'ONGC', logo: '/ribbon2/1.png' },
    { name: 'NATIONAL STEEL', logo: '/ribbon2/2.png' },
    { name: 'HAL', logo: '/ribbon2/3.png' },
    { name: 'NAVY', logo: '/ribbon2/4.png' },
    { name: 'ARMY', logo: '/ribbon2/5.png' },
    { name: 'SPM', logo: '/ribbon2/6.png' },
    { name: 'SEVEJNO', logo: '/ribbon2/7.png' },
  ];

  // Create extended arrays (simplified like your original smooth code)
  const topClientsExtended = [...topClients, ...topClients, ...topClients, ...topClients, ...topClients, ...topClients];
  const bottomClientsExtended = [...bottomClients, ...bottomClients, ...bottomClients, ...bottomClients, ...bottomClients, ...bottomClients];

  // Get logo width based on screen size
  const getLogoWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 120 : 240; // 120px for mobile, 240px for desktop
    }
    return 240;
  };

  // Animation loop with simple pixel-based movement (like your original smooth code)
  useEffect(() => {
    const animate = () => {
      const logoWidth = getLogoWidth();
      const speed = window.innerWidth < 768 ? 2.5 : 4; // Increased speed values
      
      // Top ribbon animation (right to left)
      if (!isPaused.top && !isDragging.top) {
        setTopRibbonOffset(prev => {
          const newOffset = prev - speed;
          const singleSetWidth = topClients.length * logoWidth;
          // Reset when we've moved one complete set
          return newOffset <= -singleSetWidth ? newOffset + singleSetWidth : newOffset;
        });
      }
      
      // Bottom ribbon animation (left to right)
      if (!isPaused.bottom && !isDragging.bottom) {
        setBottomRibbonOffset(prev => {
          const singleSetWidth = bottomClients.length * logoWidth;
          let newOffset = prev + speed;
          
          // Wrap around logic like your original
          if (newOffset > 0) {
            return newOffset - singleSetWidth;
          }
          if (newOffset <= -singleSetWidth) {
            return newOffset + singleSetWidth;
          }
          return newOffset;
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging, topClients.length, bottomClients.length]);

  // Initialize bottom ribbon position
  useEffect(() => {
    const logoWidth = getLogoWidth();
    const singleSetWidth = bottomClients.length * logoWidth;
    setBottomRibbonOffset(-singleSetWidth * 3); // Start 3 sets back
  }, [bottomClients.length]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Reset positions on resize to recalculate with new logo width
      setTopRibbonOffset(0);
      const logoWidth = getLogoWidth();
      const singleSetWidth = bottomClients.length * logoWidth;
      setBottomRibbonOffset(-singleSetWidth * 3);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [bottomClients.length]);

  // Drag handlers (simplified like your original)
  const handleMouseDown = (e, ribbon) => {
    setIsDragging(prev => ({ ...prev, [ribbon]: true }));
    setIsPaused(prev => ({ ...prev, [ribbon]: true }));
    setDragStart({
      x: e.clientX,
      offset: ribbon === 'top' ? topRibbonOffset : bottomRibbonOffset
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging.top || isDragging.bottom) {
      const deltaX = e.clientX - dragStart.x;
      const newOffset = dragStart.offset + deltaX;
      
      if (isDragging.top) {
        setTopRibbonOffset(newOffset);
      } else if (isDragging.bottom) {
        setBottomRibbonOffset(newOffset);
      }
    }
  };

  const handleMouseUp = () => {
    if (isDragging.top || isDragging.bottom) {
      setIsDragging({ top: false, bottom: false });
      setTimeout(() => {
        setIsPaused({ top: false, bottom: false });
      }, 1000);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e, ribbon) => {
    handleMouseDown({ clientX: e.touches[0].clientX }, ribbon);
  };

  const handleTouchMove = (e) => {
    handleMouseMove({ clientX: e.touches[0].clientX });
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  // Global event listeners (simplified like your original)
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, dragStart]);

  const ClientLogo = ({ client, index }) => (
    <div 
      key={`${client.name}-${index}`}
      className="flex-shrink-0 w-28 h-16 md:w-56 md:h-28 mx-1 md:mx-5 cursor-pointer group relative"
    >
      <img 
        src={client.logo} 
        alt={client.name}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 md:group-hover:scale-125"
        draggable={false}
        onError={(e) => {
          // Fallback for missing images
          e.target.style.display = 'none';
        }}
      />
    </div>
  );

  return (
    <div className="w-full py-8 md:py-16 px-4 overflow-hidden">
      <div className="w-[95%] md:w-[90%] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-4" style={{ fontFamily: 'Krona One, sans-serif' }}>
            Featured Clients
          </h2>
        </div>

        <div className="space-y-8 md:space-y-12">
          {/* Top Ribbon - Left to Right */}
          <div className="relative overflow-hidden">
            {/* Ribbon Background */}
            <div className="w-full h-20 md:h-32 lg:h-36 bg-white rounded-xl md:rounded-2xl shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            
            {/* Logos Container */}
            <div 
              ref={topRibbonRef}
              className="absolute inset-0 flex items-center cursor-grab active:cursor-grabbing select-none px-2 md:px-4"
              style={{ 
                transform: `translateX(${topRibbonOffset}px)`,
                transition: isDragging.top ? 'none' : 'transform 0.1s ease-out'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'top')}
              onTouchStart={(e) => handleTouchStart(e, 'top')}
            >
              {topClientsExtended.map((client, index) => (
                <ClientLogo key={`top-${index}`} client={client} index={index} />
              ))}
            </div>
          </div>

          {/* Bottom Ribbon - Right to Left */}
          <div className="relative overflow-hidden">
            {/* Ribbon Background */}
            <div className="w-full h-20 md:h-32 lg:h-36 bg-white rounded-xl md:rounded-2xl shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            
            {/* Logos Container */}
            <div 
              ref={bottomRibbonRef}
              className="absolute inset-0 flex items-center cursor-grab active:cursor-grabbing select-none px-2 md:px-4"
              style={{ 
                transform: `translateX(${bottomRibbonOffset}px)`,
                transition: isDragging.bottom ? 'none' : 'transform 0.1s ease-out'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'bottom')}
              onTouchStart={(e) => handleTouchStart(e, 'bottom')}
            >
              {bottomClientsExtended.map((client, index) => (
                <ClientLogo key={`bottom-${index}`} client={client} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClients;