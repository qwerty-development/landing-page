import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
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
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-black/90 backdrop-blur-2xl' : 'bg-transparent'
      }`}>
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 h-[1px] bg-white/20 w-full">
          <div 
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-light text-white tracking-wider hover:tracking-widest transition-all duration-500 cursor-pointer">
                BOOKLET
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              {['Features', 'Experience', 'Process', 'Reviews'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="relative text-gray-400 hover:text-white transition-all duration-500 text-sm tracking-wide group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('download')}
                className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-light tracking-wide group hover:scale-105 transition-all duration-500"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gray-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  Get Started
                </span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className={`absolute w-6 transition-all duration-500 ${isMenuOpen ? 'rotate-45' : ''}`}>
                <span className={`block h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`block h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-[1px] bg-white transition-all duration-500 ${isMenuOpen ? '-rotate-90 -translate-y-[1px]' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden fixed inset-0 bg-black transition-all duration-700 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`} style={{ top: '80px' }}>
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {['Features', 'Experience', 'Process', 'Reviews'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`text-3xl font-light text-white hover:text-gray-400 transition-all duration-500 ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('download')}
                className={`bg-white text-black px-12 py-4 rounded-full font-light text-lg hover:scale-110 transition-all duration-500 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;