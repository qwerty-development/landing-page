import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Zap, Shield, Award, Star, Diamond } from 'lucide-react';

const Benefits = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const experiences = [
    {
      title: 'Romantic Evenings',
      description: 'Discover intimate settings perfect for special moments',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
      icon: Heart,
    },
    {
      title: 'Business Dining',
      description: 'Professional venues for important meetings',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
      icon: Award,
    },
    {
      title: 'Family Gatherings',
      description: 'Welcoming spaces for all generations',
      image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
      icon: Shield,
    },
    {
      title: 'Quick Bites',
      description: 'Fast, casual dining when you\'re on the go',
      image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
      icon: Zap,
    }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale', title: 'Fine Dining' },
    { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale', title: 'Culinary Art' },
    { url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale', title: 'Fresh Ingredients' },
    { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale', title: 'Signature Dishes' },
    { url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale', title: 'Local Flavors' },
    { url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale', title: 'Sweet Endings' }
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

  const handleScroll = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 400;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      galleryRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % experiences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className={`text-5xl md:text-7xl font-thin text-white mb-6 tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Every occasion
            <span className="block font-light italic text-gray-500">
              perfectly crafted
            </span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            From casual coffees to celebration dinners, Booklet adapts to your dining needs with personalized recommendations.
          </p>
        </div>

        {/* Experience Carousel */}
        <div className={`relative mb-32 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="overflow-hidden rounded-3xl">
            <div className="relative h-[700px]">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1500 ${
                    index === activeSlide 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : index < activeSlide 
                        ? 'opacity-0 -translate-x-full scale-95' 
                        : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute left-16 bottom-16 max-w-2xl text-white">
                    <exp.icon className="w-12 h-12 mb-6 text-white/80" />
                    <h3 className="text-6xl font-thin mb-4">{exp.title}</h3>
                    <p className="text-2xl text-white/80 font-light leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`transition-all duration-500 ${
                  index === activeSlide 
                    ? 'w-12 h-2 bg-white' 
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                } rounded-full`}
              />
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className={`mb-32 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-4xl font-thin text-white mb-12 text-center">
            Culinary Excellence Awaits
          </h3>
          
          <div className="relative">
            {/* Gallery Container */}
            <div 
              ref={galleryRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] h-[500px] rounded-3xl overflow-hidden group cursor-pointer relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <h4 className={`text-white text-2xl font-light transition-all duration-500 ${
                      hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      {image.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Navigation */}
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Zap, title: 'Instant Confirmation', desc: 'Book with confidence', delay: '0ms' },
            { icon: Shield, title: 'Secure & Private', desc: 'Your data protected', delay: '100ms' },
            { icon: Award, title: 'Curated Selection', desc: 'Only the finest venues', delay: '200ms' },
            { icon: Diamond, title: 'Exclusive Perks', desc: 'Member-only benefits', delay: '300ms' }
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: item.delay }}
            >
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 group-hover:scale-110">
                <item.icon className="w-10 h-10 text-white/60 group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-xl font-light text-white mb-3">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style >{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Benefits;