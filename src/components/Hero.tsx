import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [textGlitch, setTextGlitch] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
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
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setTextGlitch(true);
      setTimeout(() => setTextGlitch(false), 200);
    }, 5000);
    return () => clearInterval(glitchInterval);
  }, []);

  // Particle effect canvas (independent fizz animation)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
    }> = [];

    // Create a burst of fizz particles at random positions
    const createFizz = () => {
      const centerX = Math.random() * canvas.width;
      const centerY = Math.random() * canvas.height * 0.7 + canvas.height * 0.15;
      for (let i = 0; i < 18; i++) {
        const angle = (Math.PI * 2 * i) / 18;
        const speed = Math.random() * 1.5 + 0.5;
        particles.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2 + 1,
          life: 1
        });
      }
    };

  let fizzTimeout: number;
  let fizzInterval: number;

    // Shorter initial delay
    fizzTimeout = setTimeout(() => {
      createFizz();
      fizzInterval = setInterval(createFizz, 1800);
    }, 400); // Shorter delay before first fizz

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.012;
        p.size *= 0.98;
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      clearTimeout(fizzTimeout);
      clearInterval(fizzInterval);
    };
  }, []);

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to film section (HowItWorks)
  const scrollToFilm = () => {
    const element = document.getElementById('play-button');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-30"
      />

      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Base Images */}
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-4000 ${
              index === currentImage ? 'opacity-30 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`
            }}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
        ))}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5 animate-mesh-1"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 via-transparent to-white/5 animate-mesh-2"></div>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-float-2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Animated Tag */}
          <div className="inline-flex items-center gap-3 px-8 py-4 mt-20  rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-10 animate-slide-down hover:bg-white/10 transition-all duration-500 cursor-pointer group">
            <Sparkles className="w-5 h-5 animate-spin-slow" />
            <span className="text-sm text-gray-300 tracking-[0.3em] font-light">THE FUTURE OF DINING</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading with Glitch Effect */}
          <h1 className="relative text-7xl md:text-9xl lg:text-[12rem] font-thin text-white mb-2 leading-none tracking-tighter">
            <span className={`block animate-slide-up opacity-0 ${textGlitch ? 'glitch' : ''}`} 
                  style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default"
                    style={{ transform: `translateZ(${mousePosition.x * 0.1}px)` }}>
                Dining
              </span>
            </span>
            <span className={`block font-extralight italic text-neutral-400 bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white animate-gradient-x animate-slide-up opacity-0 ${textGlitch ? 'glitch' : ''}`} 
                  style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default"
                    style={{ transform: `translateZ(${-mousePosition.x * 0.1}px)` }}>
                Perfected
              </span>
            </span>
          </h1>

          {/* Subtitle with Typewriter Effect */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-16 leading-relaxed max-w-4xl mx-auto font-extralight animate-fade-in opacity-0 tracking-wide" 
             style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            The future of restaurant reservations. Seamless bookings, 
            <span className="text-white"> curated experiences</span>, 
            and intelligent recommendations—all in one 
            <span className="text-white"> elegant app</span>.
          </p>

          {/* CTA Buttons with Liquid Effect */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-slide-up opacity-0"
               style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
            <button
              onClick={scrollToDownload}
              className="group relative px-12 py-6 overflow-hidden rounded-full font-light text-lg"
            >
              <div className="absolute inset-0 bg-white transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="relative z-10 flex items-center gap-4 text-black">
                Download Now
                <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform duration-500" />
              </span>
              {/* Liquid effect */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-white rounded-full blur-3xl opacity-0 group-hover:opacity-30 group-hover:-bottom-10 transition-all duration-700"></div>
            </button>
            {/* Watch Film Button - smooth scroll to film section */}
            <button 
              onClick={scrollToFilm}
              className="group flex items-center gap-5 text-white/60 hover:text-white transition-all duration-700"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-all duration-700 group-hover:scale-110">
                  <div className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                  <Play className="w-8 h-8 ml-1 relative z-10" />
                </div>
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full border border-white/20 animate-ping"></div>
              </div>
              <span className="font-light tracking-widest text-lg">WATCH FILM</span>
            </button>
          </div>
        </div>

 
      </div>

      <style >{`
        @keyframes mesh-1 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(30px, -30px) rotate(120deg) scale(1.1); }
          66% { transform: translate(-20px, 20px) rotate(240deg) scale(0.9); }
          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
        }

        @keyframes mesh-2 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-30px, 30px) rotate(-120deg) scale(0.9); }
          66% { transform: translate(20px, -20px) rotate(-240deg) scale(1.1); }
          100% { transform: translate(0, 0) rotate(-360deg) scale(1); }
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.05; }
          50% { transform: translate(100px, -100px) scale(1.2); opacity: 0.1; }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.03; }
          50% { transform: translate(-100px, 100px) scale(1.3); opacity: 0.08; }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.02; transform: scale(1); }
          50% { opacity: 0.05; transform: scale(1.1); }
        }

        .animate-mesh-1 {
          animation: mesh-1 20s ease-in-out infinite;
        }

        .animate-mesh-2 {
          animation: mesh-2 25s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 15s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 20s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 2s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 1.5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .duration-4000 {
          transition-duration: 4000ms;
        }

        /* Glitch Effect */
        .glitch {
          position: relative;
          animation: glitch-animation 0.3s ease-in-out;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch::before {
          animation: glitch-1 0.2s ease-in-out;
          color: #ff00ff;
          z-index: -1;
        }

        .glitch::after {
          animation: glitch-2 0.2s ease-in-out;
          color: #00ffff;
          z-index: -2;
        }

        @keyframes glitch-animation {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-1 {
          0%, 100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); transform: translate(0); }
          25% { clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%); transform: translate(-5px); }
          50% { clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%); transform: translate(5px); }
        }

        @keyframes glitch-2 {
          0%, 100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); transform: translate(0); }
          25% { clip-path: polygon(0 0, 100% 0, 100% 60%, 0 60%); transform: translate(5px); }
          50% { clip-path: polygon(0 40%, 100% 40%, 100% 100%, 0 100%); transform: translate(-5px); }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(60px);
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

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .animate-slide-down {
          animation: slide-down 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-up {
          animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;