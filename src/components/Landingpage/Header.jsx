import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Responsive styles with dynamic sizing
  const navButtonStyle =
    'text-black font-medium text-xs xl:text-sm 2xl:text-base px-4 lg:px-5 xl:px-6 2xl:px-7 py-2 xl:py-2.5 bg-white rounded-full shadow-sm hover:shadow-lg hover:bg-[#f8f8f8] cursor-pointer transition-all duration-200';
  
  const dropdownItemStyle =
    'block px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm 2xl:text-base text-gray-700 hover:bg-gray-100 transition-colors duration-150';

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
        setActiveDropdown(null);
      }, 500);
    } else {
      setIsMobileMenuOpen(true);
      setActiveDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsAnimating(false);
      setActiveDropdown(null);
    }, 500);
  };

  const handleGlobalFootprintClick = (e) => {
    e.preventDefault();
    setActiveDropdown(null);
    window.location.href = '/global-footprint';
  };

  const handleMobileGlobalFootprintClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    window.location.href = '/global-footprint';
  };

  const handleAwardsCertificationsClick = (e) => {
    e.preventDefault();
    setActiveDropdown(null);
    window.location.href = '/awards-certifications';
  };

  const handleMobileAwardsCertificationsClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    window.location.href = '/awards-certifications';
  };

  return (
    <header className="w-full px-4 lg:px-6 xl:px-8 py-3 lg:py-4 xl:py-5 2xl:py-6 bg-[#f2d896] relative z-50">
      <nav className="flex items-center justify-between max-w-full mx-auto">
        {/* Logo */}
        <a className="flex items-center cursor-pointer" href="/">
          <img 
            src="/logo.png" 
            alt="Konnect Packaging" 
            className="h-12 lg:h-14 xl:h-16 2xl:h-18" 
          />
        </a>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 2xl:space-x-5 rounded-4xl px-1.5 lg:px-2 py-1 bg-white/40">
          <a href="/" className={navButtonStyle}>
            Home
          </a>
          
          {/* About us dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('about')}
              className={`${navButtonStyle} flex items-center space-x-1`}
              type="button"
            >
              <span>About us</span>
              <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full mt-2 w-48 xl:w-52 2xl:w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[9999]">
                <a href="/our-story" className={dropdownItemStyle}>Our Story</a>
                <a href="/vision-values" className={dropdownItemStyle}>Vision & Values</a>
                <a href="#" className={dropdownItemStyle}>Leadership Team</a>
                <a href="/global-footprint" onClick={handleGlobalFootprintClick} className={`${dropdownItemStyle} cursor-pointer`}>Our Global Footprint</a>
                <a href="/awards-certifications" onClick={handleAwardsCertificationsClick} className={`${dropdownItemStyle} cursor-pointer`}>Awards & Certifications</a>
              </div>
            )}
          </div>

          <button onClick={scrollToProducts} className={navButtonStyle}>
            Products
          </button>
          
          {/* EcoSectors dropdown */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('ecosectors')}
              className={`${navButtonStyle} flex items-center space-x-1`}
              type="button"
            >
              <span>EcoSectors</span>
              <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
            </button>
            {activeDropdown === 'ecosectors' && (
              <div className="absolute top-full mt-2 w-56 xl:w-60 2xl:w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[9999]">
                <a href="/industries" className={dropdownItemStyle}>Industries We Serve</a>
                <a href="/eco-sustainability" className={dropdownItemStyle}>Eco-Friendly Sustainability</a>
                <a href="/custom-solutions" className={dropdownItemStyle}>Custom Solutions & Innovation</a>
              </div>
            )}
          </div>

          <a href="/testimonials" className={navButtonStyle}>
            Testimonials
          </a>
          <a href="/blogs" className={navButtonStyle}>
            Blog & Faqs
          </a>
        </div>

        {/* Desktop Contact Button */}
        <a
          href="/contact"
          className="hidden lg:flex items-center space-x-1.5 xl:space-x-2 bg-white/40 px-3 lg:px-4 xl:px-5 py-1.5 xl:py-2 rounded-full shadow-sm hover:shadow-lg hover:bg-white/60 cursor-pointer transition-colors duration-150"
        >
          <img 
            src="/contactlogo.png" 
            alt="Contact" 
            className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" 
          />
          <span className="text-black font-medium text-xs xl:text-sm 2xl:text-base">Contact</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/40 rounded-full shadow-sm hover:shadow-lg hover:bg-white/60 transition-all duration-200 active:scale-95"
          type="button"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {(isMobileMenuOpen || isAnimating) && (
        <div 
          className={`lg:hidden fixed inset-0 bg-black/50 z-[9998] transition-all duration-500 ease-in-out ${
            isMobileMenuOpen && !isAnimating ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`} 
          onClick={closeMobileMenu}
        >
          <div 
            className={`absolute top-0 right-0 w-72 sm:w-80 max-w-[85vw] h-full bg-white shadow-xl transform will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-[9999] ${
              isMobileMenuOpen && !isAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end p-3 sm:p-4">
              <button
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
                type="button"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
            </div>

            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              {/* Mobile Navigation Items */}
              <div className="space-y-1 sm:space-y-2">
                <a href="/" onClick={closeMobileMenu} className="block text-black font-medium text-base sm:text-lg py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Home
                </a>
                
                {/* About us mobile dropdown */}
                <div>
                  <button 
                    onClick={() => toggleDropdown('about')}
                    className="w-full flex items-center justify-between text-black font-medium text-base sm:text-lg py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    type="button"
                  >
                    <span>About us</span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeDropdown === 'about' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="ml-3 sm:ml-4 mt-1.5 sm:mt-2 space-y-1 pb-2">
                      <a href="/our-story" onClick={closeMobileMenu} className="block text-gray-600 text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4 rounded hover:bg-gray-50 transition-colors">Our Story</a>
                      <a href="/vision-values" onClick={closeMobileMenu} className="block text-gray-600 text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4 rounded hover:bg-gray-50 transition-colors">Vision & Values</a>
                      <a href="#" onClick={closeMobileMenu} className="block text-gray-600 text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4 rounded hover:bg-gray-50 transition-colors">Leadership Team</a>
                      <a href="/global-footprint" onClick={handleMobileGlobalFootprintClick} className="block text-gray-600 text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4 rounded hover:bg-gray-50 transition-colors cursor-pointer">Our Global Footprint</a>
                      <a href="/awards-certifications" onClick={handleMobileAwardsCertificationsClick} className="block text-gray-600 text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4 rounded hover:bg-gray-50 transition-colors cursor-pointer">Awards & Certifications</a>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    scrollToProducts();
                    closeMobileMenu();
                  }} 
                  className="block w-full text-left text-black font-medium text-base sm:text-lg py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Products
                </button>
                
                {/* EcoSectors mobile dropdown */}
                <div>
                  <button 
                    onClick={() => toggleDropdown('ecosectors')}
                    className="w-full flex items-center justify-between text-black font-medium text-base sm:text-lg py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    type="button"
                  >
                    <span>EcoSectors</span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${activeDropdown === 'ecosectors' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeDropdown === 'ecosectors' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="ml-3 sm:ml-4 mt-1.5 sm:mt-2 space-y-1 pb-2">
                      <a href="/industries" onClick={closeMobileMenu} className="block text-gray-600 text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4 rounded hover:bg-gray-50 transition-colors">Industries We Serve</a>
                      <a href="/eco-sustainability" onClick={closeMobileMenu} className="block text-gray-600 text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4 rounded hover:bg-gray-50 transition-colors">Eco-Friendly Sustainability</a>
                      <a href="/custom-solutions" onClick={closeMobileMenu} className="block text-gray-600 text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4 rounded hover:bg-gray-50 transition-colors">Custom Solutions & Innovation</a>
                    </div>
                  </div>
                </div>

                <a href="/testimonials" onClick={closeMobileMenu} className="block text-black font-medium text-base sm:text-lg py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Testimonials
                </a>
                <a href="/blogs" onClick={closeMobileMenu} className="block text-black font-medium text-base sm:text-lg py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Blog & Faqs
                </a>

                {/* Mobile Contact Button */}
                <a
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-2.5 sm:space-x-3 bg-[#f2d896] px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 mt-4 sm:mt-6"
                >
                  <img src="/contactlogo.png" alt="Contact" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-black font-medium text-base sm:text-lg">Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;