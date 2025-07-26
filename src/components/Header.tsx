import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">
              Booklet
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Download App
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 py-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium py-2"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('download')}
                className="text-left bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-sm mt-4"
              >
                Download App
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;