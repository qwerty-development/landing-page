import React, { useState, useRef, useEffect } from 'react';
import { Smartphone, Search, Calendar, CheckCircle, ArrowRight, Play } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: '01',
      icon: Smartphone,
      title: 'Download Booklet',
      description: 'Get the app on your iPhone or Android device',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
      features: ['Free download', 'No credit card', 'Quick setup']
    },
    {
      number: '02',
      icon: Search,
      title: 'Discover Restaurants',
      description: 'Browse curated selections tailored to your taste',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
      features: ['AI recommendations', 'Filter by cuisine', 'Read reviews']
    },
    {
      number: '03',
      icon: Calendar,
      title: 'Book Your Table',
      description: 'Select your preferred time and party size',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
      features: ['Real-time availability', 'Instant confirmation', 'Modify anytime']
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Enjoy & Earn',
      description: 'Dine out and collect rewards for future visits',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
      features: ['Earn points', 'Member perks', 'Share experiences']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Animated Lines Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={`${i * 25}%`}
              x2="100%"
              y2={`${(i + 1) * 25}%`}
              stroke="url(#grad1)"
              strokeWidth="1"
              className="animate-draw-line"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className={`text-5xl md:text-7xl font-thin text-white mb-6 tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Start dining better
            <span className="block font-light italic text-gray-500">
              in four simple steps
            </span>
          </h2>
        </div>

        {/* Interactive Steps */}
        <div className={`grid lg:grid-cols-2 gap-20 items-center mb-32 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Steps Navigation */}
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer p-8 rounded-3xl transition-all duration-700 border relative overflow-hidden ${
                    activeStep === index 
                      ? 'bg-white/5 border-white/20 backdrop-blur-xl' 
                      : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Progress Bar */}
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-5000 ${
                    activeStep === index ? 'w-full' : 'w-0'
                  }`} />
                  
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className={`text-4xl font-thin transition-all duration-700 ${
                        activeStep === index ? 'text-white' : 'text-gray-600'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">
                        {step.description}
                      </p>
                      {activeStep === index && (
                        <div className="flex flex-wrap gap-3 mt-4 animate-fade-in">
                          {step.features.map((feature, fIndex) => (
                            <span key={fIndex} className="text-sm px-4 py-2 bg-white/10 rounded-full text-gray-300">
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ArrowRight className={`w-5 h-5 text-white transition-all duration-500 ${
                      activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-[700px] rounded-3xl overflow-hidden">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      activeStep === index 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 text-white">
                      <div className="flex items-center gap-4 mb-6">
                        <step.icon className="w-10 h-10" />
                        <span className="text-6xl font-thin opacity-50">{step.number}</span>
                      </div>
                      <h3 className="text-4xl font-light mb-2">{step.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Step Indicators */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`transition-all duration-500 ${
                      index === activeStep 
                        ? 'w-12 h-1 bg-white' 
                        : 'w-3 h-1 bg-white/30 hover:bg-white/50'
                    } rounded-full`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div 
          ref={videoRef}
          className={`relative rounded-3xl overflow-hidden bg-black h-[600px] group cursor-pointer transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80&fm=jpg&auto=format&fit=crop&grayscale"
            alt="Restaurant interior"
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="relative w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-700">
                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
                <Play className="w-10 h-10 text-white ml-1 relative z-10" />
                <div className="absolute inset-0 rounded-full bg-white/20 scale-100 animate-ping"></div>
              </div>
              <h3 className="text-4xl font-thin text-white mb-2">See Booklet in Action</h3>
              <p className="text-white/60 font-light">2 minute walkthrough</p>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes draw-line {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-draw-line {
          animation: draw-line 3s ease-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;