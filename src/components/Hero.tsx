import React, { useState, useEffect } from 'react';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-3000 ${
              index === currentImage ? 'opacity-40 scale-105' : 'opacity-0 scale-110'
            }`}
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`
            }}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover filter grayscale"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated Tag */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl mb-12 animate-slide-down">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300 tracking-wider">INTRODUCING BOOKLET</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white mb-8 leading-none tracking-tight">
            <span className="block animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Dining
            </span>
            <span className="block font-light italic text-gray-300 animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              Perfected
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in opacity-0" 
             style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            The future of restaurant reservations. Seamless bookings, curated experiences, 
            and intelligent recommendations—all in one elegant app.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up opacity-0"
               style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <button
              onClick={scrollToDownload}
              className="group relative px-10 py-5 bg-white text-black rounded-full font-light text-lg overflow-hidden hover:scale-105 transition-all duration-700"
            >
              <span className="relative z-10 flex items-center gap-3">
                Download Now
                <div className="w-5 h-5 rounded-full bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </button>
            
            <button 
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="group flex items-center gap-4 text-white/80 hover:text-white transition-all duration-500"
            >
              <div className="relative w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-all duration-500 group-hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                <Play className="w-6 h-6 ml-1 relative z-10" />
              </div>
              <span className="font-light tracking-wide">Watch Film</span>
            </button>
          </div>
        </div>

   
      </div>

      <style >{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(20px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .animate-slide-down {
          animation: slide-down 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .duration-3000 {
          transition-duration: 3000ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;