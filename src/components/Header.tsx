import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Features', id: 'features' },
    { name: 'Experience', id: 'experience' },
    { name: 'Process', id: 'process' },
    { name: 'Reviews', id: 'reviews' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        isScrolled ? 'bg-black/80 backdrop-blur-3xl backdrop-saturate-200' : 'bg-transparent'
      }`}>
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 50%)`
            }}
          />
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 h-[2px] w-full overflow-hidden">
          <div className="h-full bg-white/10 w-full">
            <div 
              className="h-full bg-gradient-to-r from-white/50 via-white to-white/50 transition-all duration-300 shadow-glow"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20" ref={navRef}>
            {/* Logo with Morph Effect */}
            <div className="flex items-center">
              <div className="relative group cursor-pointer">
                <span className={`text-2xl font-thin text-white tracking-[0.3em] transition-all duration-700 ${
                  isScrolled ? 'tracking-[0.2em]' : 'tracking-[0.3em]'
                }`}>
                  PLATE
                </span>
                <div className="absolute -inset-2 bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                
                {/* Logo Particles */}
                <div className="absolute -inset-4">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-logo-particle"
                      style={{
                        left: '50%',
                        top: '50%',
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Navigation with Magnetic Effect */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative px-6 py-3 text-gray-400 hover:text-white transition-all duration-500 text-sm tracking-widest group"
                    style={{
                      transform: hoveredItem === index 
                        ? `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 25) * 0.1}px)` 
                        : '',
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {/* Hover Background */}
                    <div className={`absolute inset-0 bg-white/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500`}></div>
                    
                    {/* Text */}
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Underline */}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-700"></span>
                    
                    {/* Dot Indicator */}
                    <span className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 delay-200`}></span>
                  </button>
                </div>
              ))}
              
              <div className="ml-8">
                <button
                  onClick={() => scrollToSection('download')}
                  className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-light tracking-widest text-sm group hover:scale-105 transition-all duration-700"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get Started
                    <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:scale-150 transition-transform duration-500" />
                  </span>
                  
                  {/* Liquid Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-2 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button with Animation */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute w-full h-[2px] bg-white transition-all duration-500 ${
                  isMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}></span>
                <span className={`absolute w-full h-[2px] bg-white top-2 transition-all duration-500 ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                <span className={`absolute w-full h-[2px] bg-white transition-all duration-500 ${
                  isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}></span>
              </div>
              
              {/* Button Glow */}
              <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Mobile Menu with Advanced Animation */}
          <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-3xl transition-all duration-700 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`} style={{ top: '80px' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), 
                                 radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            <nav className="relative flex flex-col items-center justify-center h-full space-y-8 px-6">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-4xl font-thin text-white hover:text-gray-400 transition-all duration-700 tracking-widest ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-700"></span>
                  </span>
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('download')}
                className={`bg-white text-black px-12 py-5 rounded-full font-light text-lg tracking-widest hover:scale-110 transition-all duration-700 mt-8 ${
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

      <style>{`
        @keyframes logo-particle {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + ${Math.random() * 100 - 50}px), calc(-50% + ${Math.random() * 100 - 50}px)) scale(1);
            opacity: 0;
          }
        }

        .animate-logo-particle {
          animation: logo-particle 1s ease-out forwards;
        }

        .shadow-glow {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  );
};

export default Header;