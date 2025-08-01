import React, { useRef, useEffect, useState } from 'react';
import { Smartphone, Star, Shield, Zap, Download, ChevronRight, Apple } from 'lucide-react';

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

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
      if (phoneRef.current) {
        const rect = phoneRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="download" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className={`text-5xl md:text-7xl lg:text-8xl font-thin text-black mb-8 tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to start
            <span className="block font-light italic text-gray-600">
              your journey?
            </span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join thousands discovering Lebanon's finest dining experiences. 
            Download Booklet and transform how you dine.
          </p>
        </div>

        {/* App Showcase */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="mb-16">
              <h3 className="text-4xl font-thin mb-6 text-black">Available everywhere</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience seamless dining reservations across all your devices. 
                Your preferences sync instantly, making every booking effortless.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-8 mb-16">
              {[
                { icon: Zap, title: 'Lightning Fast', desc: 'Book in seconds, dine in minutes' },
                { icon: Shield, title: 'Privacy First', desc: 'Your data encrypted and protected' },
                { icon: Star, title: 'Earn Rewards', desc: 'Points on every reservation' }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-6 group cursor-pointer"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-light mb-2 text-black">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <a
                href="#"
                className="group relative bg-black text-white px-8 py-5 rounded-2xl hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10 flex items-center justify-center gap-4">
                  <Apple className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-lg font-light">App Store</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>

              <a
                href="#"
                className="group relative bg-white text-black px-8 py-5 rounded-2xl border-2 border-black hover:bg-black hover:text-white transition-all duration-500"
              >
                <div className="flex items-center justify-center gap-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-lg font-light">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div 
            ref={phoneRef}
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div 
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
              }}
            >
              {/* Main Phone */}
              <div className="relative z-20 w-80 h-[650px] bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="relative h-full">
                    <img
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80&fm=jpg&auto=format&fit=crop"
                      alt="App interface"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h4 className="text-2xl font-light mb-2">Welcome to Booklet</h4>
                      <p className="text-white/80">Your dining journey starts here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-black text-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <Download className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white text-black p-4 rounded-2xl shadow-xl border border-gray-200 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <Star className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
    
      </div>

      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-30px) translateX(20px);
          }
          66% {
            transform: translateY(20px) translateX(-20px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default DownloadSection;