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

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-800 rounded-full animate-spin border-t-white"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-light text-sm animate-pulse">Booklet</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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