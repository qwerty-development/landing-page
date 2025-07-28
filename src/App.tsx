import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate loading with progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-gradient"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white/20 animate-float-random"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="relative text-center">
          {/* Loading Progress */}
          <div className="mb-8">
            <div className="text-8xl font-thin text-white mb-4 animate-pulse">
              {Math.floor(loadingProgress)}%
            </div>
            <div className="w-64 h-px bg-white/10 relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>

          {/* Logo */}
          <div className="relative">
            <h1 className="text-4xl font-thin tracking-widest text-white animate-fade-in">
              BOOKLET
            </h1>
            <div className="absolute -inset-4 bg-white/5 blur-xl animate-pulse"></div>
          </div>

          {/* Loading Text */}
          <p className="text-gray-500 text-sm tracking-widest mt-8 animate-fade-in-delay">
            PREPARING YOUR EXPERIENCE
          </p>
        </div>

        <style >{`
          @keyframes gradient {
            0% { transform: rotate(0deg) scale(2); }
            100% { transform: rotate(360deg) scale(2); }
          }
          @keyframes float-random {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
              opacity: 0;
            }
            10% { opacity: 1; }
            90% { opacity: 1; }
            50% { 
              transform: translate(30px, -30px) scale(1.5);
            }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-delay {
            0% { opacity: 0; transform: translateY(20px); }
            50% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-gradient {
            animation: gradient 20s ease infinite;
          }
          .animate-float-random {
            animation: float-random linear infinite;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-fade-in-delay {
            animation: fade-in-delay 2s ease-out;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-[100] mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate(0, 0)'
        }}
      >
        <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;