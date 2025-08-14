import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Zap,
  Shield,
  Award,
  Diamond,
  Sparkles,
  Crown,
} from "lucide-react";

// Gallery Card Component
const GalleryCard = ({
  image,
  index,
  onClick,
}: {
  image: { url: string; title: string; category: string };
  index: number;
  onClick: () => void;
}) => {
  return (
    <div
      className="flex-shrink-0 relative group hover:scale-105 transition-transform duration-300"
      onClick={onClick}
    >
      <div className="relative w-[400px] h-[500px] rounded-3xl">
        {/* Image */}
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-full object-cover rounded-3xl"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
          <span className="text-sm text-white/60 mb-2">{image.category}</span>
          <h4 className="text-2xl font-light text-white">{image.title}</h4>
        </div>
      </div>
    </div>
  );
};

const Benefits = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Romantic Evenings",
      subtitle: "Intimate moments, perfectly crafted",
      description: "Discover candlelit corners and sunset terraces",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      icon: Heart,
      accent: "bg-gradient-to-br from-white/20 to-white/5",
    },
    {
      title: "Business Excellence",
      subtitle: "Where deals are made",
      description: "Professional settings for important conversations",
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      icon: Award,
      accent: "bg-gradient-to-br from-white/15 to-white/5",
    },
    {
      title: "Family Celebrations",
      subtitle: "Memories in the making",
      description: "Welcoming spaces where generations gather",
      image:
        "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=1200&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      icon: Shield,
      accent: "bg-gradient-to-br from-white/25 to-white/5",
    },
    {
      title: "Casual Encounters",
      subtitle: "Spontaneous and delightful",
      description: "Quick bites that don't compromise on quality",
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      icon: Zap,
      accent: "bg-gradient-to-br from-white/20 to-white/5",
    },
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      title: "Fine Dining",
      category: "Luxury",
    },
    {
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      title: "Culinary Art",
      category: "Creative",
    },
    {
      url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      title: "Fresh Flavors",
      category: "Organic",
    },
    {
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      title: "Chef's Special",
      category: "Signature",
    },
    {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      title: "Local Cuisine",
      category: "Traditional",
    },
    {
      url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      title: "Sweet Endings",
      category: "Dessert",
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

  const handleScroll = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const scrollAmount = 420;
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      galleryRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Morphing Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10">
          <div className="absolute inset-0 bg-white rounded-full blur-3xl animate-morph-1"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-5">
          <div className="absolute inset-0 bg-white rounded-full blur-3xl animate-morph-2"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2
            className={`text-5xl md:text-7xl lg:text-8xl font-thin text-white mb-8 tracking-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span
              className="inline-block animate-fade-in-word"
              style={{ animationDelay: "0ms" }}
            >
              Every
            </span>{" "}
            <span
              className="inline-block animate-fade-in-word"
              style={{ animationDelay: "100ms" }}
            >
              occasion
            </span>
            <span className="block font-light italic text-gray-500 mt-2">
              <span
                className="inline-block animate-fade-in-word"
                style={{ animationDelay: "200ms" }}
              >
                deserves
              </span>{" "}
              <span
                className="inline-block animate-fade-in-word"
                style={{ animationDelay: "300ms" }}
              >
                perfection
              </span>
            </span>
          </h2>
          <p
            className={`text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            From spontaneous coffee meetings to grand celebrations, we craft
            experiences that match your moment.
          </p>
        </div>

        {/* 3D Experience Carousel */}
        <div
          className={`relative mb-32 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative h-[800px] perspective-1000">
            {experiences.map((exp, index) => {
              const offset = index - activeSlide;
              const isActive = index === activeSlide;

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1500 ${
                    isActive ? "z-20" : "z-10"
                  }`}
                  style={{
                    transform: `
                      translateX(${offset * 120}px) 
                      translateZ(${Math.abs(offset) * -200}px) 
                      rotateY(${offset * -15}deg)
                      scale(${isActive ? 1 : 0.8})
                    `,
                    opacity:
                      Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.3,
                  }}
                >
                  <div
                    className="relative h-full rounded-3xl overflow-hidden group"
                    onClick={() => setActiveSlide(index)}
                  >
                    {/* Image */}
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-3xl overflow-hidden">
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div
                      className={`absolute inset-0 ${exp.accent} opacity-30`}
                    ></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-12">
                      <div
                        className={`transition-all duration-700 ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        <exp.icon className="w-16 h-16 mb-6 text-white/80" />
                        <h3 className="text-6xl font-thin mb-3 text-white">
                          {exp.title}
                        </h3>
                        <p className="text-2xl text-white/80 font-light mb-2">
                          {exp.subtitle}
                        </p>
                        <p className="text-lg text-white/60">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`transition-all duration-500 focus:outline-none ${
                  index === activeSlide
                    ? "w-16 h-2 bg-white"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                } rounded-full`}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Interactive Gallery */}
        <div
          className={`mb-32 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-4xl md:text-5xl font-thin text-white mb-16 text-center">
            A Taste of Excellence
          </h3>

          <div className="relative">
            {/* Gallery Container */}
            <div
              ref={galleryRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth py-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryImages.map((image, index) => (
                <GalleryCard
                  key={index}
                  image={image}
                  index={index}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>

            {/* Gallery Navigation */}
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-black/80 transition-all duration-300 group border border-white/10"
            >
              <ChevronLeft className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-black/80 transition-all duration-300 group border border-white/10"
            >
              <ChevronRight className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
            </button>
          </div>
        </div>

        {/* Feature Grid with 3D Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              desc: "Instant confirmations",
              color: "from-white/20 to-white/5",
              delay: "0ms",
            },
            {
              icon: Crown,
              title: "VIP Treatment",
              desc: "Premium experiences",
              color: "from-white/15 to-white/5",
              delay: "100ms",
            },
            {
              icon: Diamond,
              title: "Hidden Gems",
              desc: "Exclusive venues",
              color: "from-white/25 to-white/5",
              delay: "200ms",
            },
            {
              icon: Sparkles,
              title: "Magic Moments",
              desc: "Unforgettable dining",
              color: "from-white/20 to-white/5",
              delay: "300ms",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: item.delay,
                perspective: "1000px",
              }}
            >
              <div className="relative p-10 rounded-3xl border border-white/10 bg-gradient-to-br ${item.color} backdrop-blur-xl transition-all duration-700">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden group-hover:bg-white/20 transition-colors duration-700">
                    <item.icon className="w-10 h-10 text-white relative z-10" />

                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-white/20 blur-2xl scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute -inset-4">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-icon-particle"
                        style={{
                          left: "50%",
                          top: "50%",
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <h4 className="text-2xl font-light text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>

                {/* Card Shine Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for Selected Image */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <div className="w-full h-auto rounded-3xl overflow-hidden">
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm text-white/60 mb-2">
                {galleryImages[selectedImage].category}
              </p>
              <h3 className="text-4xl font-light">
                {galleryImages[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes morph-1 {
          0%, 100% { 
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: rotate(0deg) scale(1);
          }
          33% { 
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
            transform: rotate(60deg) scale(1.1);
          }
          66% { 
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: rotate(-60deg) scale(0.9);
          }
        }

        @keyframes morph-2 {
          0%, 100% { 
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
            transform: rotate(0deg) scale(1);
          }
          33% { 
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: rotate(-60deg) scale(0.9);
          }
          66% { 
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
            transform: rotate(60deg) scale(1.1);
          }
        }

        @keyframes float-particle {
          0% { 
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { 
            transform: translate(${Math.random() * 200 - 100}px, ${
        Math.random() * 200 - 100
      }px) scale(0);
            opacity: 0;
          }
        }

        @keyframes fade-in-word {
          from { 
            opacity: 0;
            transform: translateY(20px) rotateX(90deg);
          }
          to { 
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes holographic {
          0% { opacity: 0; }
          50% { opacity: 0.5; }
          100% { opacity: 0; }
        }

        @keyframes icon-particle {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + ${
              Math.random() * 60 - 30
            }px), calc(-50% + ${Math.random() * 60 - 30}px)) scale(1);
            opacity: 0;
          }
        }

        .animate-morph-1 {
          animation: morph-1 20s ease-in-out infinite;
        }

        .animate-morph-2 {
          animation: morph-2 25s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-fade-in-word {
          animation: fade-in-word 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-holographic {
          animation: holographic 2s ease-in-out;
        }

        .animate-icon-particle {
          animation: icon-particle 1s ease-out forwards;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Benefits;
