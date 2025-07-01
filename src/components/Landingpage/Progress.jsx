import { useState, useEffect } from 'react';
import '@fontsource/krona-one/400.css'; // Import Krona One font

const Progress = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const progressData = [
    {
      number: "1000+",
      title: "Happy Clients",
      description:
        "Trusted by 1000+ happy clients worldwide, Our commitment speaks through every successful delivery.",
      gradient: "bg-gradient-golden-1",
      progressPercentage: 50,
    },
    {
      number: "2000+",
      title: "Projects",
      description:
        "With 2000+ projects delivered and counting, Our work reflects excellence, trust, and consistency.",
      gradient: "bg-gradient-golden-2",
      progressPercentage: 60,
    },
    {
      number: "500+",
      title: "Hard workers",
      description:
        "Powered by 500+ hardworking team members, We turn challenges into achievements every day.",
      gradient: "bg-gradient-golden-3",
      progressPercentage: 60,
    },
  ];

  const CircularProgress = ({ percentage, delay = 0, centerContent }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

    useEffect(() => {
      const timer = setTimeout(() => {
        if (isVisible) {
          setAnimatedPercentage(percentage);
        }
      }, delay);
      return () => clearTimeout(timer);
    }, [isVisible, percentage, delay]);

    return (
      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
        {/* Background circle */}
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#ffffff"
            strokeWidth="24"
            fill="none"
          />
        </svg>

        {/* Progress circle */}
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#000000"
            strokeWidth="24"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-2000 ease-out opacity-70"
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="font-bold text-2xl lg:text-3xl text-black">
              {centerContent}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white py-12 px-4 sm:py-6 sm:px-6 lg:py-6 lg:px-8 font-['Krona_One']">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-6 sm:mb-6 lg:mb-10">
          <h1 className="font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] text-black leading-normal">
            Our Progress in Numbers
          </h1>
        </div>

        {/* Progress cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 justify-items-center">
          {progressData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-[378px] w-full"
            >
              {/* Main card with gradient background from bottom-left to top-right */}
              <div
                className="relative w-full rounded-[30px] flex flex-col items-center py-4 px-4"
                style={{
                  background: 'linear-gradient(to top right, #E7C478, #FDE9BD)'
                }}
              >
                {/* Progress circle with number in center */}
                <div className="mb-4">
                  <CircularProgress 
                    percentage={item.progressPercentage} 
                    centerContent={item.number}
                  />
                </div>

                {/* Title */}
                <div className="mt-2 mb-2">
                  <h3 className="font-normal text-sm sm:text-base lg:text-[18px] text-black text-center">
                    {item.title}
                  </h3>
                </div>
                
                {/* Description - styled exactly as in image */}
                <div className="w-[95%] mx-auto">
                  <div className="border-[1.5px] border-black rounded-b-[30px] py-2 px-5">
                    <p className="text-sm font-normal sm:text-[12px] text-black text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;

