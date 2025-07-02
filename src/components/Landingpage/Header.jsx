import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const navButtonStyle =
    'text-black font-medium text-sm px-7 py-2.5 bg-white rounded-full shadow-sm hover:shadow-lg hover:bg-[#f8f8f8] cursor-pointer transition-all duration-200';
  const dropdownItemStyle =
    'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150';

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
      }, 500); // increased from 300 to 500
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
    }, 500); // increased from 300 to 500
  };

  const handleGlobalFootprintClick = (e) => {
    e.preventDefault();
    setActiveDropdown(null);
    // Navigate to global footprint page
    window.location.href = '/global-footprint';
  };

  const handleMobileGlobalFootprintClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    // Navigate to global footprint page
    window.location.href = '/global-footprint';
  };

  return (
    <header className="w-full px-8 py-6 bg-[#f2d896] relative z-50">
      <nav className="flex items-center justify-between max-w-full mx-auto">
        {/* Logo */}
        <a className="flex items-center cursor-pointer" href="/">
          <img src="/logo.png" alt="Konnect Packaging" className="h-18" />
        </a>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-5 rounded-4xl px-2 py-1 bg-white/40">
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
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[9999]">
                <a href="/our-story" className={dropdownItemStyle}>Our Story</a>
                <a href="/vision-values" className={dropdownItemStyle}>Vision & Values</a>
                <a href="#" className={dropdownItemStyle}>Leadership Team</a>
                <a href="/global-footprint" onClick={handleGlobalFootprintClick} className={`${dropdownItemStyle} cursor-pointer`}>Our Global Footprint</a>
                <a href="#" className={dropdownItemStyle}>Awards & Certifications</a>
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
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'ecosectors' && (
              <div className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[9999]">
                <a href="/industries" className={dropdownItemStyle}>Industries We Serve</a>
                <a href="/eco-sustainability" className={dropdownItemStyle}>Eco-Friendly Sustainability</a>
                <a href="/custom-solutions" className={dropdownItemStyle}>Custom Solutions & Innovation</a>
              </div>
            )}
          </div>

          <a href="/testimonials" className={navButtonStyle}>
            Testimonials
          </a>
          <a href="#" className={navButtonStyle}>
            Blog & Faqs
          </a>
        </div>

        {/* Desktop Contact Button */}
        <a
          href="/contact"
          className="hidden lg:flex items-center space-x-2 bg-white/40 px-5 py-2 rounded-full shadow-sm hover:shadow-lg hover:bg-white/60 cursor-pointer transition-colors duration-150"
        >
          <img src="/contactlogo.png" alt="Contact" className="w-8 h-8" />
          <span className="text-black font-medium text-sm">Contact</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-12 h-12 bg-white/40 rounded-full shadow-sm hover:shadow-lg hover:bg-white/60 transition-all duration-200 active:scale-95"
          type="button"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
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
            className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-xl transform will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-[9999] ${
              isMobileMenuOpen && !isAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
                type="button"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="px-6 pb-6">
              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                <a href="/" onClick={closeMobileMenu} className="block text-black font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Home
                </a>
                
                {/* About us mobile dropdown */}
                <div>
                  <button 
                    onClick={() => toggleDropdown('about')}
                    className="w-full flex items-center justify-between text-black font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    type="button"
                  >
                    <span>About us</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeDropdown === 'about' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="ml-4 mt-2 space-y-1 pb-2">
                      <a href="/our-story" onClick={closeMobileMenu} className="block text-gray-600 py-2 px-4 rounded hover:bg-gray-50 transition-colors">Our Story</a>
                      <a href="/vision-values" onClick={closeMobileMenu} className="block text-gray-600 py-2 px-4 rounded hover:bg-gray-50 transition-colors">Vision & Values</a>
                      <a href="#" onClick={closeMobileMenu} className="block text-gray-600 py-2 px-4 rounded hover:bg-gray-50 transition-colors">Leadership Team</a>
                      <a href="/global-footprint" onClick={handleMobileGlobalFootprintClick} className="block text-gray-600 py-2 px-4 rounded hover:bg-gray-50 transition-colors cursor-pointer">Our Global Footprint</a>
                      <a href="#" onClick={closeMobileMenu} className="block text-gray-600 py-2 px-4 rounded hover:bg-gray-50 transition-colors">Awards & Certifications</a>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    scrollToProducts();
                    closeMobileMenu();
                  }} 
                  className="block w-full text-left text-black font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Products
                </button>
                
                {/* EcoSectors mobile dropdown */}
                <div>
                  <button 
                    onClick={() => toggleDropdown('ecosectors')}
                    className="w-full flex items-center justify-between text-black font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    type="button"
                  >
                    <span>EcoSectors</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === 'ecosectors' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeDropdown === 'ecosectors' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="ml-4 mt-2 space-y-1 pb-2">
                      <a href="/industries" onClick={closeMobileMenu} className="block text-gray-600 py-2 px-4 rounded hover:bg-gray-50 transition-colors">Industries We Serve</a>
                      <a href="/eco-sustainability" onClick={closeMobileMenu} className="block text-gray-600 py-2 px-4 rounded hover:bg-gray-50 transition-colors">Eco-Friendly Sustainability</a>
                      <a href="/custom-solutions" onClick={closeMobileMenu} className="block text-gray-600 py-2 px-4 rounded hover:bg-gray-50 transition-colors">Custom Solutions & Innovation</a>
                    </div>
                  </div>
                </div>

                <a href="/testimonials" onClick={closeMobileMenu} className="block text-black font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Testimonials
                </a>
                <a href="#" onClick={closeMobileMenu} className="block text-black font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Blog & Faqs
                </a>

                {/* Mobile Contact Button */}
                <a
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-3 bg-[#f2d896] px-6 py-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 mt-6"
                >
                  <img src="/contactlogo.png" alt="Contact" className="w-8 h-8" />
                  <span className="text-black font-medium text-lg">Contact</span>
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


