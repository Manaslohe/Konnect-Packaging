import * as React from "react";
import '@fontsource/krona-one/400.css';

function VisionAndMission() {
  const EyeIcon = () => (
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[74px] h-[74px] absolute left-0 top-0"
    >
      <path
        d="M7.7085 25.2434C8.02916 18.7684 8.98808 14.7292 11.8617 11.8617C14.7292 8.98808 18.7684 8.02916 25.2434 7.7085M66.2918 25.2434C65.9712 18.7684 65.0122 14.7292 62.1386 11.8617C59.2711 8.98808 55.2319 8.02916 48.7569 7.7085M48.7569 66.2918C55.2319 65.9712 59.2711 65.0122 62.1386 62.1386C65.0122 59.2711 65.9712 55.2319 66.2918 48.7569M25.2434 66.2918C18.7684 65.9712 14.7292 65.0122 11.8617 62.1386C8.98808 59.2711 8.02916 55.2319 7.7085 48.7569M60.5414 34.8973C61.2907 35.8347 61.6668 36.3064 61.6668 37.0002C61.6668 37.6939 61.2907 38.1657 60.5414 39.103C57.1713 43.321 48.5657 52.4168 37.0002 52.4168C25.4346 52.4168 16.829 43.321 13.4589 39.103C12.7097 38.1657 12.3335 37.6939 12.3335 37.0002C12.3335 36.3064 12.7097 35.8347 13.4589 34.8973C16.829 30.6793 25.4346 21.5835 37.0002 21.5835C48.5657 21.5835 57.1713 30.6793 60.5414 34.8973Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.1668 37.0002C43.1668 35.3647 42.5171 33.7961 41.3607 32.6397C40.2042 31.4832 38.6357 30.8335 37.0002 30.8335C35.3647 30.8335 33.7961 31.4832 32.6397 32.6397C31.4832 33.7961 30.8335 35.3647 30.8335 37.0002C30.8335 38.6357 31.4832 40.2042 32.6397 41.3607C33.7961 42.5171 35.3647 43.1668 37.0002 43.1668C38.6357 43.1668 40.2042 42.5171 41.3607 41.3607C42.5171 40.2042 43.1668 38.6357 43.1668 37.0002Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const MissionIcon = () => (
    <svg
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[74px] h-[74px] absolute left-0 top-0"
    >
      <path
        d="M24.6665 27.75V46.25M36.9998 27.75V46.25M24.6665 37H40.0832C42.9568 37 44.3937 37 45.5253 36.5313C46.2739 36.2214 46.9542 35.767 47.5272 35.194C48.1002 34.621 48.5546 33.9408 48.8645 33.1921C49.3332 32.0605 49.3332 30.6237 49.3332 27.75"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="37" cy="34" r="30.5" stroke="black" />
    </svg>
  );

  const Bullet = () => (
    <div className="w-3 h-3 bg-black rounded-full mr-4 mt-2 flex-shrink-0" />
  );

  const BorderLine = ({ className }) => (
    <svg
      width="1346"
      height="361"
      viewBox="0 0 1346 361"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M383 2H1344.5V359H-1" stroke="black" strokeWidth="3" />
    </svg>
  );

  const BorderDot = ({ className }) => (
    <div className={`w-[18px] h-[18px] bg-black rounded-full ${className}`} />
  );

  const visionPoints = [
    "Become a global leader in innovative packaging solutions.",
    "Set new standards in quality, design, and sustainability.",
    "Empower brands to create strong consumer connections.",
    "Inspire change through eco-conscious packaging practices.",
    "Continuously evolve to meet future industry needs."
  ];

  const missionPoints = [
    "Deliver high-quality, customized packaging for every client.",
    "Promote sustainable and recyclable materials in all products.",
    "Ensure customer satisfaction through reliable service and support.",
    "Invest in cutting-edge technology for efficient manufacturing.",
    "Build long-term partnerships with brands around the world."
  ];

  return (
    <div className="relative mx-auto my-0 w-full bg-white h-[1405px] max-w-[1440px] max-md:p-5 max-md:h-auto max-sm:p-4" style={{ fontFamily: 'Krona One, sans-serif' }}>
      <div className="absolute bg-gradient-to-tr from-[#E9C77F] to-[#FBE6B7] h-[171px] left-[29px] rounded-[30px] top-[104px] w-[1382px] max-md:left-5 max-md:h-[120px] max-md:top-[84px] max-md:w-[calc(100%_-_40px)] max-sm:rounded-3xl max-sm:h-[100px] max-sm:left-[15px] max-sm:top-[74px] max-sm:w-[calc(100%_-_30px)]" />

      <div className="absolute text-6xl text-black h-[75px] left-[46px] top-[152px] w-[722px] max-md:text-4xl max-md:left-[30px] max-md:top-[120px] max-md:w-[calc(100%_-_60px)] max-sm:text-3xl max-sm:left-[25px] max-sm:top-[100px] max-sm:w-[calc(100%_-_50px)]">
        Vision and Mission
      </div>

      {/* Vision Section */}
      <div className="absolute left-[46px] top-[354px] w-[1361px] max-md:left-[30px] max-md:top-[250px] max-md:w-[calc(100%_-_60px)] max-sm:left-[25px] max-sm:top-[200px] max-sm:w-[calc(100%_-_50px)]">
        <EyeIcon />
        <div className="absolute top-0.5 text-5xl font-bold text-black h-[75px] left-[88px] w-[239px] max-md:text-4xl max-md:left-[88px] max-sm:top-0 max-sm:text-3xl max-sm:left-[60px]">
          Vision
        </div>
        <div className="absolute left-[88px] top-[92px] w-[1273px] max-md:left-[88px] max-md:w-[calc(100%_-_118px)] max-sm:left-[60px] max-sm:top-[60px] max-sm:w-[calc(100%_-_85px)]">
          {visionPoints.map((point, index) => (
            <div key={index} className="flex items-start mb-4 font-normal text-2xl text-black leading-[32px] max-md:mb-4 max-md:text-lg max-sm:flex-col max-sm:items-start max-sm:mb-3 max-sm:text-normal">
              <Bullet />
              <div>{point}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Border */}
      <div className="absolute left-0 top-[394px] max-md:hidden">
        <BorderLine className="w-[1346px] h-[357px] stroke-[3px] stroke-black" />
        <BorderDot className="absolute left-[379px] top-[-9px]" />
      </div>

      {/* Mission Section */}
      <div className="absolute left-[46px] top-[804px] w-[1361px] max-md:left-[30px] max-md:top-[600px] max-md:w-[calc(100%_-_60px)] max-sm:left-[25px] max-sm:top-[480px] max-sm:w-[calc(100%_-_50px)]">
        <MissionIcon />
        <div className="absolute top-0.5 text-5xl font-bold text-black h-[75px] left-[88px] w-[239px] max-md:text-4xl max-md:left-[88px] max-sm:top-0 max-sm:text-3xl max-sm:left-[60px]">
          Mission
        </div>
        <div className="absolute left-[88px] top-[90px] w-[1273px] max-md:left-[88px] max-md:w-[calc(100%_-_118px)] max-sm:left-[60px] max-sm:top-[60px] max-sm:w-[calc(100%_-_85px)]">
          {missionPoints.map((point, index) => (
            <div key={index} className="flex items-start mb-4 text-2xl text-black leading-[32px] max-md:mb-4 max-md:text-lg max-sm:flex-col max-sm:items-start max-sm:mb-3 max-sm:text-base">
              <Bullet />
              <div>{point}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Border */}
      <div className="absolute left-0 top-[846px] max-md:hidden">
        <BorderLine className="w-[1346px] h-[357px] stroke-[3px] stroke-black" />
        <BorderDot className="absolute left-[379px] top-[-9px]" />
      </div>
    </div>
  );
}

export default VisionAndMission;
