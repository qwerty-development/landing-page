import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles,
  Clock,
  Star,
  Users,
  MapPin,
  Gift,
  MessageCircle,
  Shield,
  ChevronRight,
  Calendar,
  Bell,
  Zap
} from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const mainFeatures = [
    {
      icon: Sparkles,
      title: 'AI-Powered Discovery',
      description: 'Our intelligent algorithm learns your preferences to suggest the perfect dining experience every time.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
    },
    {
      icon: Clock,
      title: 'Instant Reservations',
      description: 'Book your table in seconds with real-time availability across Lebanon\'s premier restaurants.',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
    },
    {
      icon: Star,
      title: 'Curated Experiences',
      description: 'From intimate dinners to celebrations, discover restaurants that match your occasion perfectly.',
      image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale',
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
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mainFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const gridFeatures = [
    {
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'Find hidden gems in your neighborhood.',
      delay: '0ms'
    },
    {
      icon: Users,
      title: 'Group Booking',
      description: 'Coordinate effortlessly for any party size.',
      delay: '100ms'
    },
    {
      icon: Gift,
      title: 'Exclusive Access',
      description: 'Early access to new restaurants and events.',
      delay: '200ms'
    },
    {
      icon: MessageCircle,
      title: 'Social Dining',
      description: 'Share experiences and discover through friends.',
      delay: '300ms'
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className={`text-5xl md:text-7xl font-thin text-white mb-6 tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Designed for the way
            <span className="block font-light italic text-gray-500">
              you experience dining
            </span>
          </h2>
        </div>

        {/* Interactive Feature Showcase */}
        <div className={`mb-32 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Feature Selector */}
            <div className="space-y-6">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer p-8 rounded-3xl transition-all duration-700 border ${
                    activeFeature === index 
                      ? 'bg-white/5 border-white/20 backdrop-blur-xl' 
                      : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-700 ${
                      activeFeature === index ? 'bg-white text-black' : 'bg-white/10 text-white'
                    }`}>
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className={`flex items-center gap-2 mt-4 text-white font-light transition-all duration-500 ${
                        activeFeature === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}>
                        Explore feature
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Image */}
            <div className="relative h-[600px] overflow-hidden rounded-3xl">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeFeature === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <feature.icon className="w-10 h-10 mb-4 text-white/80" />
                    <h3 className="text-3xl font-light mb-2">{feature.title}</h3>
                  </div>
                </div>
              ))}
              
              {/* Progress Indicators */}
              <div className="absolute bottom-8 right-8 flex gap-2">
                {mainFeatures.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-700 ${
                      index === activeFeature ? 'w-12 bg-white' : 'w-3 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {gridFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: feature.delay }}
            >
              <feature.icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors duration-500 mb-6" />
              
              <h3 className="text-lg font-light text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white group cursor-pointer transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative z-10">
              <Bell className="w-10 h-10 mb-6 text-white/80" />
              <h3 className="text-3xl font-light mb-4">Smart Notifications</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Get personalized alerts for new restaurant openings, special menus, and exclusive events.
              </p>
              <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-1000"></div>
          </div>

          <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-12 text-white group cursor-pointer transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative z-10">
              <Calendar className="w-10 h-10 mb-6 text-white/80" />
              <h3 className="text-3xl font-light mb-4">Plan Ahead</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Schedule reservations weeks in advance and sync with your calendar automatically.
              </p>
              <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
                <span>Discover</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;