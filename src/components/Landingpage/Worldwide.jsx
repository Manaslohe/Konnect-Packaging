import * as React from "react";
import { useState } from "react";
import '@fontsource/krona-one/400.css'; // Regular weight font import
import '@fontsource/montserrat'; // Import Montserrat font

function Worldwide() {
  // Country data array for reusable cards
  const countries = [
    {
      id: "2015:27",
      name: "INDIA",
      type: "Headquarter",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f70d605a2ea2cc5dbc06c200a8381192a80966c",
      imageStyle: { width: '80%', height: '87%', left: '11%', top: '5%' },
      description: "Konnect Packaging Proudly Rooted in India, Delivering Globally."
    },
    {
      id: "2015:32",
      name: "TURKEY",
      type: "OFFICE",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9af9452fce63bf2f75d5182a0dfa2cc3cf3e1907",
      imageStyle: { width: '86%', height: '37%', left: '7%', top: '29%' },
      description: "Delivering quality products across Turkey"
    },
    {
      id: "2015:37",
      name: "SERBIA",
      type: "OFFICE",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0492bf98b49f6501dcbdf863df50689a0cb0982e",
      imageStyle: { width: '53%', height: '76%', left: '24%', top: '12%' },
      description: "Delivering quality products across Serbia"
    },
    {
      id: "2015:42",
      name: "LITHUANIA",
      type: "OFFICE",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a1c092ff68133d0941e96eb5e5e0d8ea4f0afe7",
      imageStyle: { width: '87%', height: '65%', left: '7%', top: '19%' },
      description: "Delivering quality products across Lithuania"
    }
  ];

  // Reusable CountryCard component
  const CountryCard = ({ country }) => {
    const { id, name, type, image, imageStyle, description } = country;
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className="relative w-full pb-[100%] cursor-pointer" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card container with instant and smooth shape transition */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{
            background: 'linear-gradient(to top right, #E7C478, #FDE9BD)',
            border: '1px solid #000',
            borderRadius: isHovered ? '16px' : '50%',
            transition: 'border-radius 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease-out',
            boxShadow: isHovered ? '0 10px 25px rgba(0,0,0,0.15)' : '0 2px 4px rgba(0,0,0,0.05)',
          }}
        >
          {/* Normal state (circle with country silhouette and text) */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center" 
            style={{
              opacity: isHovered ? 0 : 1,
              transform: isHovered ? 'scale(0.95)' : 'scale(1)',
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            }}
          >
            {/* Country silhouette image */}
            <img
              src={image}
              className="absolute"
              alt={name}
              style={{
                ...imageStyle,
                transition: 'opacity 0.3s ease-out',
              }}
            />
            
            {/* Country name and type overlay */}
            <div className="absolute text-sm md:text-lg font-medium text-center text-white w-[70%] left-[50%] top-[42%] transform -translate-x-1/2 leading-tight">
              {name}
            </div>
            <div className="absolute text-[10px] md:text-xs text-center text-white w-[70%] left-[50%] top-[52%] transform -translate-x-1/2">
              {type}
            </div>
          </div>
          
          {/* Hover state (square with description) */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center p-3 md:p-4"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
            }}
          >
            {/* Three dots at the top right */}
            <div className="absolute top-3 right-3 flex space-x-1">
              <div 
                className="w-1.5 h-1.5 rounded-full bg-black"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'scale(1)' : 'scale(0)',
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                  transitionDelay: '0.1s'
                }}
              ></div>
              <div 
                className="w-1.5 h-1.5 rounded-full bg-black"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'scale(1)' : 'scale(0)',
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                  transitionDelay: '0.15s'
                }}
              ></div>
              <div 
                className="w-1.5 h-1.5 rounded-full bg-black"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'scale(1)' : 'scale(0)',
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                  transitionDelay: '0.2s'
                }}
              ></div>
            </div>
            
            {/* Black country silhouette at top */}
            <div 
              className="w-full flex justify-center items-center mb-3" 
              style={{ height: '35%' }}
            >
              <img
                src={image}
                className="h-[80%] max-w-[70%] object-contain"
                alt={name}
                style={{ 
                  filter: 'brightness(0)',
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(-15px) scale(0.8)',
                  transition: 'opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: '0.1s'
                }}
              />
            </div>
            
            {/* Country name with slide-up animation */}
            <div 
              className="text-black font-bold text-base md:text-lg mb-2 text-center leading-tight"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '0.15s'
              }}
            >
              {name}
            </div>
            
            {/* Description text with slide-up animation */}
            <p 
              className="text-black text-xs md:text-sm text-center px-2 md:px-3 leading-relaxed"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0)' : 'translateY(25px)',
                transition: 'opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: '0.2s'
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full bg-white py-[5%] px-[2%] max-w-[1519px] mx-auto" style={{ fontFamily: "'Krona One', sans-serif" }}>
      <h1 className="text-xl md:text-5xl text-center text-black w-full mx-auto mb-[5%] font-normal">
        Our Offices Worldwide
      </h1>
      
      {/* World map image container, not absolute, so cards are always below */}
      <div
        className="relative w-full mb-[1%] max-w-[100%] mx-auto flex flex-col items-center"
        style={{ height: "auto" }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d04903ce5b967357a61ddea4f98adab76beb3981"
          className="w-full h-[25vh] md:h-[75vh] object-contain"
          alt="World Map"
          style={{ maxHeight: "75vh" }}
        />
      </div>
      
      {/* Cards are now placed below the image */}
      <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[6%] max-w-[95%] md:max-w-[90%] mx-auto">
        {countries.map((country, index) => (
          <div 
            key={index} 
            className={`w-full`}
            style={{
              maxWidth: '250px',
              margin: '0 auto'
            }}
          >
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Worldwide;