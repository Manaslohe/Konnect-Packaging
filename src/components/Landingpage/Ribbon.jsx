import React, { useState, useRef, useEffect } from 'react';

const FeaturedClients = () => {
  const [topRibbonOffset, setTopRibbonOffset] = useState(0);
  const [bottomRibbonOffset, setBottomRibbonOffset] = useState(-4320); // Start with 3 sets before (3 * 6 logos * 240px = -4320px)
  const [isDragging, setIsDragging] = useState({ top: false, bottom: false });
  const [dragStart, setDragStart] = useState({ x: 0, offset: 0 });
  const [isPaused, setIsPaused] = useState({ top: false, bottom: false });
  
  const topRibbonRef = useRef(null);
  const bottomRibbonRef = useRef(null);
  const animationRef = useRef(null);

  // Sample client logos - you can replace these with actual logo URLs
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

  // Responsive: track window width in state
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive logo width and margin for mobile/desktop
  const logoWidth = isMobile ? 80 : 192; // 20rem (80px) for mobile, 48 (192px) for md+
  const logoMargin = isMobile ? 6 : 20;  // 1.5rem (6px) for mobile, 5 (20px) for md+
  const logoTotal = logoWidth + logoMargin * 2;

  // Animation loop with infinite scrolling
  useEffect(() => {
    const topSpeed = isMobile ? 0.5 : 2; // slower on mobile
    const bottomSpeed = isMobile ? 0.5 : 2;

    const animate = () => {
      if (!isPaused.top && !isDragging.top) {
        setTopRibbonOffset(prev => {
          const newOffset = prev - topSpeed;
          const singleSetWidth = topClients.length * logoTotal;
          // Fix: always use correct set width for reset
          return newOffset <= -singleSetWidth ? newOffset + singleSetWidth : newOffset;
        });
      }
      
      if (!isPaused.bottom && !isDragging.bottom) {
        setBottomRibbonOffset(prev => {
          const singleSetWidth = bottomClients.length * logoTotal;
          let newOffset = prev + bottomSpeed;
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
  }, [isPaused, isDragging, topClients.length, bottomClients.length, logoTotal, isMobile]);

  // Drag handlers
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

  // Global mouse events
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
      className="flex-shrink-0 w-20 h-14 mx-1.5 md:w-48 md:h-24 md:mx-5 cursor-pointer group relative"
      // w-20 (80px), mx-1.5 (6px) for mobile; w-48 (192px), mx-5 (20px) for md+
    >
      <img 
        src={client.logo} 
        alt={client.name}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-125"
        draggable={false}
      />
    </div>
  );

  return (
    <div className="w-full py-8 md:py-12  px-4 overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-2 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-normal text-gray-800 mb-4" style={{ fontFamily: 'Krona One, sans-serif' }}>
            Featured Clients
          </h2>
        </div>

        {/* Reduce space between ribbons on mobile */}
        <div className="space-y-1 md:space-y-6">
          {/* Top Ribbon - Left to Right */}
          <div className="relative overflow-hidden">
            {/* Ribbon Background */}
            <div className="w-full h-32 md:h-36 bg-transparent rounded-2xl shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            
            {/* Logos Container */}
            <div 
              ref={topRibbonRef}
              className="absolute inset-0 flex items-center cursor-grab active:cursor-grabbing select-none px-4"
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
            <div className="w-full h-32 md:h-36 bg-transparent rounded-2xl shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
            
            {/* Logos Container */}
            <div 
              ref={bottomRibbonRef}
              className="absolute inset-0 flex items-center cursor-grab active:cursor-grabbing select-none px-4"
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