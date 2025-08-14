import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Download from "./components/Download";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const lastMoveTimeRef = useRef(Date.now());

  // Loading progress simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
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

  // Smooth cursor with glow and breathing opacity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      lastMoveTimeRef.current = Date.now();
    };
    window.addEventListener("mousemove", handleMouseMove);

    let opacityDirection = 1;
    let opacity = 1;

    const animate = () => {
      if (cursorRef.current && innerRef.current && trailRef.current) {
        // Smooth cursor position
        const rect = cursorRef.current.getBoundingClientRect();
        const x = rect.left + (targetRef.current.x - rect.left - 12) * 0.12;
        const y = rect.top + (targetRef.current.y - rect.top - 12) * 0.12;
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;

        const trailRect = trailRef.current.getBoundingClientRect();
        const tx =
          trailRect.left + (targetRef.current.x - trailRect.left - 20) * 0.08;
        const ty =
          trailRect.top + (targetRef.current.y - trailRect.top - 20) * 0.08;
        trailRef.current.style.transform = `translate(${tx}px, ${ty}px)`;

        // Glow effect based on speed
        const dx = targetRef.current.x - (rect.left + 12);
        const dy = targetRef.current.y - (rect.top + 12);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 1) {
          innerRef.current.style.backgroundColor = "#ffffff";
          innerRef.current.style.boxShadow = "none";
        } else {
          innerRef.current.style.backgroundColor = "#ffffff";
          innerRef.current.style.boxShadow = "none";
        }

        // Breathing effect when idle
        const idleTime = Date.now() - lastMoveTimeRef.current;
        if (idleTime > 1000) {
          // idle after 1s
          opacity += 0.01 * opacityDirection;
          if (opacity >= 1) {
            opacity = 1;
            opacityDirection = -1;
          }
          if (opacity <= 0.5) {
            opacity = 0.5;
            opacityDirection = 1;
          }
        } else {
          opacity = 1; // fully opaque when moving
        }
        innerRef.current.style.opacity = `${opacity}`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
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
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="relative text-center">
          <div className="mb-8">
            <div className="text-8xl font-thin text-white mb-4">
              {Math.floor(loadingProgress)}%
            </div>
            <div className="w-64 h-px bg-white/10 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
          <div className="relative">
            <h1 className="text-4xl font-thin tracking-widest text-white animate-fade-in">
              PLATE
            </h1>
            <div className="absolute -inset-4 bg-white/5 blur-xl"></div>
          </div>
          <p className="text-gray-500 text-sm tracking-widest mt-8 animate-fade-in-delay">
            PREPARING YOUR EXPERIENCE
          </p>
        </div>

        <style>{`
          * { cursor: none !important; }
          @keyframes gradient { 0% { transform: rotate(0deg) scale(2); } 100% { transform: rotate(360deg) scale(2); } }
          @keyframes float-random { 0%, 100% { transform: translate(0,0) scale(1); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 50% { transform: translate(30px,-30px) scale(1.5); } }
          @keyframes fade-in { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
          @keyframes fade-in-delay { 0% { opacity:0; transform:translateY(20px); } 50% { opacity:0; transform:translateY(20px); } 100% { opacity:1; transform:translateY(0); } }
          .animate-gradient { animation: gradient 20s ease infinite; }
          .animate-float-random { animation: float-random linear infinite; }
          .animate-fade-in { animation: fade-in 1s ease-out; }
          .animate-fade-in-delay { animation: fade-in-delay 2s ease-out; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor trail */}
      <div
        ref={trailRef}
        className="cursor-trail custom-cursor fixed w-10 h-10 pointer-events-none z-[90] bg-white/5 rounded-full blur-xl"
      />

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-6 h-6 pointer-events-none z-[100] mix-blend-difference"
      >
        <div
          ref={innerRef}
          className="w-full h-full rounded-full"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 0 8px 2px rgba(255,255,255,0.5)",
            transition:
              "background-color 0.2s, box-shadow 0.2s, opacity 0.1s, transform 0.1s",
          }}
        />
      </div>

      {/* Noise Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
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
