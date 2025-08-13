import React, { useState, useRef, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredReview, setHoveredReview] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Sarah Khalil",
      role: "Food Enthusiast",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      text: "Plate transformed how I explore Beirut's dining scene. The AI recommendations are incredibly accurate, and I've discovered amazing hidden gems I would have never found otherwise.",
      rating: 5,
      location: "Beirut, Lebanon",
    },
    {
      name: "Ahmad Mansour",
      role: "Business Professional",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      text: "As someone who frequently hosts business dinners, Plate has been invaluable. The ability to book premium restaurants instantly has saved me countless hours.",
      rating: 5,
      location: "Jounieh, Lebanon",
    },
    {
      name: "Maya Tabet",
      role: "Event Planner",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      text: "The group booking feature is a game-changer for organizing events. I can coordinate large parties effortlessly, and the restaurants are always prepared for us.",
      rating: 5,
      location: "Baabda, Lebanon",
    },
    {
      name: "Rami Joumaa",
      role: "Tech Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&fm=jpg&auto=format&fit=crop&grayscale",
      text: "The seamless experience from discovery to dining is what sets Plate apart. It's beautifully designed and incredibly intuitive.",
      rating: 5,
      location: "Zahle, Lebanon",
    },
  ];

  const pressLogos = [
    { name: "TECHCRUNCH", opacity: 0.3 },
    { name: "THE VERGE", opacity: 0.25 },
    { name: "WIRED", opacity: 0.3 },
    { name: "FORBES", opacity: 0.25 },
    { name: "FAST COMPANY", opacity: 0.3 },
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
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h2
            className={`text-5xl md:text-7xl font-thin text-white mb-6 tracking-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Loved by diners
            <span className="block font-light italic text-gray-500">
              trusted by thousands
            </span>
          </h2>
        </div>

        {/* Main Testimonial Carousel */}
        <div
          className={`relative max-w-5xl mx-auto mb-32 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative overflow-visible">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20 overflow-hidden">
              <Quote className="w-16 h-16 text-white/10 mb-12" />

              <div className="relative min-h-[300px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === activeTestimonial
                        ? "opacity-100 translate-x-0 scale-100"
                        : index < activeTestimonial
                        ? "opacity-0 -translate-x-full scale-95"
                        : "opacity-0 translate-x-full scale-95"
                    }`}
                  >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-thin text-white mb-16 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-6">
                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                        </div>
                        <div>
                          <h4 className="text-xl font-light text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400">{testimonial.role}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-white text-white"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 flex justify-between pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="pointer-events-auto w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextTestimonial}
                className="pointer-events-auto w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`transition-all duration-500 focus:outline-none ${
                  index === activeTestimonial
                    ? "w-12 h-1 bg-white"
                    : "w-3 h-1 bg-white/30 hover:bg-white/50"
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review Grid */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-32 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              name: "Lina R.",
              text: "The best restaurant booking experience I've ever had. Simple, fast, and reliable.",
              image:
                "https://images.unsplash.com/photo-1559694204-61edb596dab1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Karim H.",
              text: "I love the personalized recommendations. It's like having a food expert in my pocket!",
              image:
                "https://images.unsplash.com/photo-1723854695853-72b191011f34?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Nour M.",
              text: "Group bookings used to be a nightmare. Now it's effortless. Thank you Plate!",
              image:
                "https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredReview(index)}
              onMouseLeave={() => setHoveredReview(null)}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 transition-all duration-500 delay-${
                        i * 50
                      } ${
                        hoveredReview === index
                          ? "fill-white text-white scale-110"
                          : "fill-white/60 text-white/60"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-light text-white">{review.name}</p>
                      <p className="text-sm text-gray-500">Verified User</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 text-white/40 transition-all duration-300 ${
                      hoveredReview === index
                        ? "translate-x-1 -translate-y-1"
                        : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Section */}
        <div
          className={`text-center transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-600 mb-12 text-sm uppercase tracking-widest">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            {pressLogos.map((logo, index) => (
              <div
                key={index}
                className="text-xl font-thin tracking-widest text-white transition-opacity duration-500 hover:opacity-60"
                style={{ opacity: logo.opacity }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
