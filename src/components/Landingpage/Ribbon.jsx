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
  ];

  // Create infinite scrolling effect by duplicating the arrays multiple times
  const topClientsExtended = [...topClients, ...topClients, ...topClients, ...topClients];
  const bottomClientsExtended = [...bottomClients, ...bottomClients, ...bottomClients, ...bottomClients];

  // Animation loop with infinite scrolling
  useEffect(() => {
    const animate = () => {
      if (!isPaused.top && !isDragging.top) {
        setTopRibbonOffset(prev => {
          const newOffset = prev - 1; // Right to left
          const singleSetWidth = topClients.length * 240; // 240px per logo (200px width + 40px margin)
          // Use modulo to create seamless loop
          return newOffset <= -singleSetWidth ? newOffset + singleSetWidth : newOffset;
        });
      }
      
      if (!isPaused.bottom && !isDragging.bottom) {
        setBottomRibbonOffset(prev => {
          const newOffset = prev + 1; // Left to right (opposite direction)
          const singleSetWidth = bottomClients.length * 240; // 240px per logo
          // Use modulo to create seamless loop
          return newOffset >= singleSetWidth ? newOffset - singleSetWidth : newOffset;
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
      className="flex-shrink-0 w-48 h-24 md:w-56 md:h-28 mx-5 cursor-pointer group relative"
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
    <div className="w-full  py-16 px-4 overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-800 mb-4" style={{ fontFamily: 'Krona One, sans-serif' }}>
            Featured Clients
          </h2>
        </div>

        <div className="space-y-12">
          {/* Top Ribbon - Left to Right */}
          <div className="relative overflow-hidden">
            {/* Ribbon Background */}
            <div className="w-full h-32 md:h-36 bg-white rounded-2xl shadow-lg relative">
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
            <div className="w-full h-32 md:h-36 bg-white rounded-2xl shadow-lg relative">
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