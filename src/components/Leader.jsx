import React from 'react';

function LeadershipTeam() {
  return (
    <div className="w-full min-h-[90vh] pt-20 bg-white flex items-start justify-center p-2">
      <div className="relative flex flex-col items-start justify-start w-[95%] min-h-[95vh] p-[18px_22px_18px_18px] box-border bg-gradient-to-br from-[#F0D395] to-[#EAC882]" 
           style={{ borderBottomRightRadius: '300px' }}>
        
        {/* Content Container */}
        <div className="flex flex-col">
          {/* Main Title */}
          <h1 className="font-normal pb-2 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 
                         text-[#111] mb-1 leading-[1.1] 
                         font-['Krona_One',sans-serif]">
            Leadership Team
          </h1>
          
          {/* Description */}
          <p className="font-normal text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 
                        text-[#222] leading-[1.3] max-w-[340px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] 
                        font-['Montserrat',sans-serif]">
            Led by <span className="font-semibold">Parth Chandra</span> and{' '}
            <span className="font-semibold">Suchitra Gupta</span>, combining legal expertise and operational 
            excellence to drive sustainable innovation and scalable growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeadershipTeam;