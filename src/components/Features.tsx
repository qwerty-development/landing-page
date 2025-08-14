import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Clock,
  Star,
  Users,
  MapPin,
  Gift,
  MessageCircle,
  ChevronRight,
  Calendar,
  Bell,
  Hexagon,
} from "lucide-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const mainFeatures = [
    {
      icon: Sparkles,
      title: "Tailored To You",
      description:
        "Our intelligent algorithm learns your preferences to suggest the perfect dining experience every time.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      gradient: "from-white/20 via-white/5 to-transparent",
      particles: "#ffffff",
    },
    {
      icon: Clock,
      title: "Instant Reservations",
      description:
        "Book your table in seconds with real-time availability across Lebanon's premier restaurants.",
      image:
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      gradient: "from-white/15 via-white/5 to-transparent",
      particles: "#cccccc",
    },
    {
      icon: Star,
      title: "Rising Stars",
      description:
        "Receive weekly recommendations, ensuring you never miss out on the best dining experiences.",
      image:
        "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      gradient: "from-white/25 via-white/5 to-transparent",
      particles: "#eeeeee",
    },
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardsRef.current) {
        const rect = cardsRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gridFeatures = [
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Find hidden gems nearby.",
      delay: "0ms",
    },
    {
      icon: Users,
      title: "Group Booking",
      description: "Coordinate any party size.",
      delay: "100ms",
    },
    {
      icon: Gift,
      title: "Exclusive Access",
      description: "Early access to new venues.",
      delay: "200ms",
    },
    {
      icon: MessageCircle,
      title: "Social Dining",
      description: "Share and discover.",
      delay: "300ms",
    },
  ];

  // Generate consistent particles for each feature
  const [featureParticles] = useState(() =>
    mainFeatures.map(() =>
      Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 10,
      }))
    )
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-32 bg-gray-950 relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Moving Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              className="animate-grid-move"
            />
          </svg>
        </div>

        {/* Floating Hexagons */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <Hexagon
              key={i}
              className="absolute text-white/5 animate-float-hex"
              size={200}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with Split Text Animation */}
        <div className="text-center mb-24 relative">
          <h2
            className={`text-5xl md:text-7xl lg:text-8xl font-thin text-white mb-6 tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="inline-block animate-slide-in-left">
              Designed for
            </span>
            <span className="block font-light italic text-gray-500 mt-2 animate-slide-in-right">
              extraordinary dining
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-expand"></div>
        </div>

        {/* Interactive Feature Showcase with 3D Effect */}
        <div
          className={`mb-32 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Feature Selector with Liquid Effect */}
            <div className="space-y-6">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`group p-8 rounded-3xl transition-all duration-700 border relative overflow-hidden ${
                    activeFeature === index
                      ? "bg-white/5 border-white/20 backdrop-blur-xl transform scale-105"
                      : "border-white/10 hover:border-white/20 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Liquid Background Effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}
                  >
                    <div
                      className={`absolute -inset-10 bg-gradient-to-br ${feature.gradient} blur-3xl animate-liquid`}
                    ></div>
                  </div>

                  <div className="relative flex items-start gap-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-700 relative overflow-hidden ${
                        activeFeature === index
                          ? "bg-white text-black"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      <feature.icon className="w-7 h-7 relative z-10" />
                      {/* Icon Glow */}
                      <div
                        className={`absolute inset-0 bg-white blur-xl transition-opacity duration-700 ${
                          activeFeature === index ? "opacity-50" : "opacity-0"
                        }`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-white mb-3 tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                      <div
                        className={`flex items-center gap-2 mt-4 text-white font-light transition-all duration-500 ${
                          activeFeature === index
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-4"
                        }`}
                      >
                        Explore feature
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  {activeFeature === index && (
                    <div className="absolute bottom-0 left-0 h-px bg-white/20 w-full">
                      <div className="h-full bg-white animate-progress"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Image with 3D Parallax */}
            <div
              className="relative h-[700px] overflow-hidden rounded-3xl"
              ref={cardsRef}
            >
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1500 ${
                    activeFeature === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  {/* Animated Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {activeFeature === index &&
                      featureParticles[index].map((p, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-particle"
                          style={{
                            left: `${p.left}%`,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`,
                          }}
                        />
                      ))}
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <feature.icon className="w-12 h-12 mb-6 text-white/80 animate-pulse-slow" />
                    <h3 className="text-4xl font-thin mb-2 tracking-wide">
                      {feature.title}
                    </h3>
                    <div className="flex gap-2 mt-4">
                      {mainFeatures.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveFeature(i)}
                          className={`h-1 rounded-full transition-all duration-700 focus:outline-none ${
                            i === activeFeature
                              ? "w-12 bg-white"
                              : "w-3 bg-white/30 hover:bg-white/50"
                          }`}
                          aria-label={`Go to feature ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Features with Stagger Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {gridFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-700 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: feature.delay,
                transform:
                  hoveredCard === index ? "translateY(-10px) scale(1.05)" : "",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Morphing Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 animate-morph"></div>
              </div>

              <feature.icon className="w-8 h-8 text-white/60 group-hover:text-white transition-all duration-500 mb-6 relative z-10 group-hover:scale-110 group-hover:rotate-12" />

              <h3 className="text-lg font-light text-white mb-3 relative z-10">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/10 rounded-tr-3xl group-hover:border-white/30 transition-colors duration-700"></div>
            </div>
          ))}
        </div>

        {/* Large Feature Cards with Advanced Hover Effects */}
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white group transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative z-10">
              <Bell className="w-12 h-12 mb-6 text-white/80 group-hover:animate-ring" />
              <h3 className="text-4xl font-thin mb-4 tracking-wide">
                Smart Notifications
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                Get personalized alerts for new restaurant openings and
                exclusive events.
              </p>
              <button className="flex items-center gap-3 text-white/60 hover:text-white transition-all duration-500 group/btn">
                <span className="tracking-wide">Learn more</span>
                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-1000 group-hover:scale-150"></div>
            <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full group-hover:scale-110 group-hover:rotate-90 transition-all duration-1000"></div>
          </div>

          <div
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-12 text-white group transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative z-10">
              <Calendar className="w-12 h-12 mb-6 text-white/80" />
              <h3 className="text-4xl font-thin mb-4 tracking-wide">
                Plan Ahead
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                Schedule reservations weeks in advance with calendar sync.
              </p>
              <button className="flex items-center gap-3 text-white/60 hover:text-white transition-all duration-500 group/btn">
                <span className="tracking-wide">Discover</span>
                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-1000 group-hover:scale-150"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 border border-white/10 rounded-full group-hover:scale-125 group-hover:-rotate-90 transition-all duration-1000"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          from { transform: translate(0, 0); }
          to { transform: translate(50px, 50px); }
        }

        @keyframes float-hex {
          0%, 100% { 
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0.05;
          }
          50% { 
            transform: translateY(-50px) rotate(180deg) scale(1.2);
            opacity: 0.1;
          }
        }

        @keyframes slide-in-left {
          from { 
            opacity: 0;
            transform: translateX(-50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from { 
            opacity: 0;
            transform: translateX(50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expand {
          from { width: 0; }
          to { width: 128px; }
        }

        @keyframes liquid {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes particle {
          0% { 
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }

        @keyframes ring {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          75% { transform: rotate(15deg); }
        }

        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }

        .animate-float-hex {
          animation: float-hex linear infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }

        .animate-expand {
          animation: expand 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
        }

        .animate-liquid {
          animation: liquid 8s ease-in-out infinite;
        }

        .animate-progress {
          animation: progress 4s linear;
        }

        .animate-particle {
          animation: particle linear infinite;
        }

        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }

        .animate-ring {
          animation: ring 1s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Features;
