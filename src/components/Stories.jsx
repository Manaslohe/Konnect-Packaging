import * as React from "react";
import { useState } from "react";
import '@fontsource/krona-one/400.css';

function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const VoicesIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4C35.05 4 44 12.95 44 24C44 35.05 35.05 44 24 44C12.95 44 4 35.05 4 24C4 12.95 12.95 4 24 4ZM24 8C15.16 8 8 15.16 8 24C8 32.84 15.16 40 24 40C32.84 40 40 32.84 40 24C40 15.16 32.84 8 24 8ZM24 14C27.31 14 30 16.69 30 20V28C30 31.31 27.31 34 24 34C20.69 34 18 31.31 18 28V20C18 16.69 20.69 14 24 14Z" fill="black"/>
    </svg>
  );

  const PartnershipsIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18C12 14.69 14.69 12 18 12C21.31 12 24 14.69 24 18C24 21.31 21.31 24 18 24C14.69 24 12 21.31 12 18ZM30 12C33.31 12 36 14.69 36 18C36 21.31 33.31 24 30 24C26.69 24 24 21.31 24 18C24 14.69 26.69 12 30 12ZM18 26C22.42 26 26 29.58 26 34V36H10V34C10 29.58 13.58 26 18 26ZM30 26C34.42 26 38 29.58 38 34V36H30V34C30 31.24 28.76 28.78 26.83 27.17C28.47 26.42 29.2 26 30 26Z" fill="black"/>
    </svg>
  );

  const PerformIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17ZM19.59 21.41L21 22.83L26.59 17.24L39 29.66L40.41 28.24L26.59 14.41L19.59 21.41Z" fill="black"/>
    </svg>
  );

  const ClientsIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L29.09 13.26L40 14.74L32 22.54L34.18 33.45L24 28.77L13.82 33.45L16 22.54L8 14.74L18.91 13.26L24 4Z" fill="black"/>
    </svg>
  );

  const featureCardsData = [
    {
      id: 'voices',
      icon: VoicesIcon,
      title: 'Voices of Trust',
      description: 'Our clients share how Konnect Packaging made a difference. Real stories from real industries — built on reliability and results. Their trust fuels our drive to deliver more every day.'
    },
    {
      id: 'partnerships',
      icon: PartnershipsIcon,
      title: 'Partnerships That Deliver',
      description: 'Hear directly from businesses that trust our packaging expertise. Every success story reflects our commitment to quality and innovation. These testimonials are proof of our purpose-driven approach.'
    },
    {
      id: 'perform',
      icon: PerformIcon,
      title: 'Built to Perform',
      description: 'Explore testimonials from industry-diverse sectors. From export protection to eco-packaging — we go beyond expectations. Decades of experience shaped by every client we serve.'
    },
    {
      id: 'clients',
      icon: ClientsIcon,
      title: 'What Our Clients Say',
      description: 'Insights from hundreds of satisfied businesses worldwide. Their words reflect the impact, consistency, and value we bring. It\'s not just packaging — it\'s confidence in every layer.'
    }
  ];

  const testimonialsData = [
    {
      id: 'fahrettin',
      name: 'Fahrettin Yılmaz',
      position: 'Packaging Lead',
      initial: 'F',
      testimonial: "The quality of VCI laminates and their moisture-barrier technology has extended our product shelf life significantly. Konnect is our go-to partner.",
      badge: 'Aug 3, 2020',
      location: 'Ankara, Turkey'
    },
    {
      id: 'ankur',
      name: 'Ankur Mehta',
      position: 'Procurement Head',
      initial: 'A',
      testimonial: "Konnect's anti-corrosion packaging helped us reduce product damage during export by over 80%. Their team truly understands logistics-grade protection.",
      badge: 'June 18, 2021',
      location: 'Stuttgart, Germany'
    },
    {
      id: 'om',
      name: 'Om Pawar',
      position: 'Multimedia designer',
      initial: 'O',
      testimonial: "From material selection to delivery timelines, Konnect has been reliable and responsive. Their custom solutions fit perfectly with our OEM processes.",
      badge: 'Mar 9, 2023',
      location: 'Pune, India'
    },
    {
      id: 'claire',
      name: 'Claire van Dijk',
      position: 'Director',
      initial: 'C',
      testimonial: "We've worked with many suppliers, but Konnect stands out for its innovation and quality. Their R&D-backed packaging gave us a competitive edge in Europe.",
      badge: 'Nov 25, 2022',
      location: 'Rotterdam, Netherlands'
    }
  ];

  const FeatureCard = ({ icon: IconComponent, title, description }) => (
    <div className="bg-white border-2 border-black/60 rounded-[20px] p-8 pt-14 relative">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center">
        <IconComponent />
      </div>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-black">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed text-center">
        {description}
      </p>
    </div>
  );

  const TestimonialCard = ({ name, position, initial, testimonial, badge, location }) => (
    <div className="bg-gradient-to-br from-[#E9C77F] to-[#FBE6B7] rounded-[20px] p-8 relative">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
          {initial}
        </div>
        <div>
          <h4 className="text-xl font-bold text-black">{name}</h4>
          <p className="text-sm text-black">{position}</p>
        </div>
      </div>
      <p className="text-black text-sm leading-relaxed mb-6">
        {testimonial}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="bg-black text-white px-3 py-1 rounded-full text-xs">{badge}</span>
        </div>
        <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">{location}</span>
      </div>
    </div>
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonialsData.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const isDesktop = window.innerWidth >= 768;
    const itemsToShow = isDesktop ? 3 : 1;
    
    if (testimonialsData.length <= itemsToShow) {
      return testimonialsData;
    }
    
    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % testimonialsData.length;
      visibleItems.push(testimonialsData[index]);
    }
    return visibleItems;
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white py-16 px-6 lg:px-12" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header Section */}
      <div className="bg-gradient-to-tr from-[#E9C77F] to-[#FBE6B7] rounded-[20px] p-8 lg:p-12 mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Krona One, sans-serif' }}>
          Testimonials & Client Stories
        </h1>
        <p className="text-lg lg:text-xl font-bold text-black mb-2">
          Real feedback. Real results.
        </p>
        <p className="text-base lg:text-lg text-black leading-relaxed">
          Hear from our global clients who trust Konnect Packaging for reliability, innovation, and performance.
          <br />
          Explore success stories that showcase how our solutions made a measurable impact.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {featureCardsData.map((card) => (
          <FeatureCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* Global Trust Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8" style={{ fontFamily: 'Krona One, sans-serif' }}>
          Global Trust. Proven Impact.
        </h2>
      </div>

      {/* Client Testimonials Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-gradient-to-br from-[#E9C77F] to-[#FBE6B7] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-br from-[#E9C77F] to-[#FBE6B7]' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-gradient-to-br from-[#E9C77F] to-[#FBE6B7] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 transition-all duration-500">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${currentIndex}-${index}`}
              className="transform transition-all duration-500"
            >
              <TestimonialCard
                name={testimonial.name}
                position={testimonial.position}
                initial={testimonial.initial}
                testimonial={testimonial.testimonial}
                badge={testimonial.badge}
                location={testimonial.location}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stories;
