import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';

const FeaturedClients = () => {
  const [topRibbonOffset, setTopRibbonOffset] = useState(0);
  const [bottomRibbonOffset, setBottomRibbonOffset] = useState(-4320);
  const [isDragging, setIsDragging] = useState({ top: false, bottom: false });
  const [dragStart, setDragStart] = useState({ x: 0, offset: 0 });
  const [isPaused, setIsPaused] = useState({ top: false, bottom: false });
  const [isMobile, setIsMobile] = useState(false);
  
  const topRibbonRef = useRef(null);
  const bottomRibbonRef = useRef(null);
  const animationRef = useRef(null);
  const lastFrameTime = useRef(0);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Memoize client arrays to prevent unnecessary re-renders
  const topClientsExtended = useMemo(() => 
    [...topClients, ...topClients, ...topClients, ...topClients]
  , []);
  
  const bottomClientsExtended = useMemo(() => 
    [...bottomClients, ...bottomClients, ...bottomClients, ...bottomClients]
  , []);

  // Throttled animation function for better mobile performance
  const animate = useCallback((currentTime) => {
    // Throttle to 30fps on mobile, 60fps on desktop
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;
    
    if (currentTime - lastFrameTime.current < frameInterval) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    
    lastFrameTime.current = currentTime;
    
    const speed = isMobile ? 0.5 : 1; // Slower animation on mobile
    
    if (!isPaused.top && !isDragging.top) {
      setTopRibbonOffset(prev => {
        const newOffset = prev - speed;
        const singleSetWidth = topClients.length * 240;
        return newOffset <= -singleSetWidth ? newOffset + singleSetWidth : newOffset;
      });
    }
    
    if (!isPaused.bottom && !isDragging.bottom) {
      setBottomRibbonOffset(prev => {
        const newOffset = prev + speed;
        const singleSetWidth = bottomClients.length * 240;
        return newOffset >= singleSetWidth ? newOffset - singleSetWidth : newOffset;
      });
    }
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, isDragging, isMobile]);

  // Animation loop with throttling
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

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

  const ClientLogo = React.memo(({ client, index }) => (
    <div 
      key={`${client.name}-${index}`}
      className="flex-shrink-0 w-48 h-24 md:w-56 md:h-28 mx-5 cursor-pointer group relative"
    >
      <img 
        src={client.logo} 
        alt={client.name}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-125"
        draggable={false}
        loading="lazy"
      />
    </div>
  ));

  return (
    <div className="w-full py-16 px-4 overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-800 mb-4" style={{ fontFamily: 'Krona One, sans-serif' }}>
            Featured Clients
          </h2>
        </div>

        <div className="space-y-12">
          {/* Top Ribbon */}
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
                transform: `translate3d(${topRibbonOffset}px, 0, 0)`,
                transition: isDragging.top ? 'none' : 'transform 0.1s ease-out',
                willChange: 'transform'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'top')}
              onTouchStart={(e) => handleTouchStart(e, 'top')}
            >
              {topClientsExtended.map((client, index) => (
                <ClientLogo key={`top-${index}`} client={client} index={index} />
              ))}
            </div>
          </div>

          {/* Bottom Ribbon */}
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
                transform: `translate3d(${bottomRibbonOffset}px, 0, 0)`,
                transition: isDragging.bottom ? 'none' : 'transform 0.1s ease-out',
                willChange: 'transform'
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