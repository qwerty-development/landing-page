import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-16 md:pt-18">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2 fill-current text-gray-600" />
              Lebanon's #1 Restaurant App
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              Never Wait for a
              <span className="font-medium block">
                Table Again
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
              Discover and book the best restaurants in Lebanon instantly. Earn rewards, skip the phone calls, and dine like never before.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <button
                onClick={scrollToDownload}
                className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-1 text-lg"
              >
                Download Now
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium">
                Browse as Guest
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
              <div>
                <div className="text-2xl font-light text-gray-900">500+</div>
                <div className="text-sm text-gray-500 font-light">Restaurants</div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900">50K+</div>
                <div className="text-sm text-gray-500 font-light">Bookings</div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900">4.8★</div>
                <div className="text-sm text-gray-500 font-light">App Rating</div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900">30s</div>
                <div className="text-sm text-gray-500 font-light">Avg. Booking</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-50 rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div>
                  
                  {/* App Content */}
                  <div className="pt-8 px-4 h-full bg-white">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm text-gray-500 font-light">Good evening</div>
                        <div className="font-medium text-gray-900">Find your table</div>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full">
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-gray-100 rounded-2xl p-4 mb-6">
                      <div className="text-gray-500 text-sm font-light">Search restaurants...</div>
                    </div>

                    {/* Restaurant Cards */}
                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-gray-900">Al Falamanki</div>
                          <div className="text-gray-600 text-sm">Available</div>
                        </div>
                        <div className="text-sm text-gray-500 font-light">Lebanese • Hamra</div>
                        <div className="flex items-center mt-2">
                          <Star className="w-4 h-4 text-gray-400 fill-current" />
                          <span className="text-sm text-gray-500 ml-1 font-light">4.8 • 15 min</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-gray-900">Mezze House</div>
                          <div className="text-gray-600 text-sm">Busy</div>
                        </div>
                        <div className="text-sm text-gray-500 font-light">Mediterranean • Achrafieh</div>
                        <div className="flex items-center mt-2">
                          <Star className="w-4 h-4 text-gray-400 fill-current" />
                          <span className="text-sm text-gray-500 ml-1 font-light">4.6 • 22 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gray-900 text-white p-3 rounded-2xl shadow-lg">
                <div className="text-xs font-medium">Confirmed</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gray-100 text-gray-700 p-3 rounded-2xl shadow-lg border border-gray-200">
                <div className="text-xs font-medium">+5 points</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;