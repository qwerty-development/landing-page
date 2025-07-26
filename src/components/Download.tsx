import React from 'react';
import { Download as DownloadIcon, Star } from 'lucide-react';

const Download = () => {
  return (
    <section id="download" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2 fill-current text-gray-400" />
              Over 50,000 downloads
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight tracking-tight">
              Ready to Transform
              <span className="font-medium block">Your Dining Experience?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed font-light">
              Join thousands of Lebanese food lovers who've already discovered the easiest way to dine out. Download Booklet now and never wait for a table again
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-lg font-light text-white">30s</div>
                <div className="text-sm text-gray-400 font-light">Book in seconds</div>
              </div>
              <div>
                <div className="text-lg font-light text-white">Points</div>
                <div className="text-sm text-gray-400 font-light">Earn rewards</div>
              </div>
              <div>
                <div className="text-lg font-light text-white">Free</div>
                <div className="text-sm text-gray-400 font-light">No payment required</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Phone */}
              <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
                  
                  {/* Content */}
                  <div className="pt-8 px-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                          <DownloadIcon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900">Booklet</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>

                    {/* Download Badge */}
                    <div className="bg-gray-900 text-white p-4 rounded-2xl mb-6 text-center">
                      <DownloadIcon className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Ready to Download</div>
                      <div className="text-xs text-gray-300">Free • No payment required</div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">Instant Booking</div>
                          <div className="text-xs text-gray-500 font-light">30 second reservations</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">Loyalty Rewards</div>
                          <div className="text-xs text-gray-500 font-light">Earn points & perks</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                          <Star className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">100% Secure</div>
                          <div className="text-xs text-gray-500 font-light">No payment required</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white text-gray-900 p-3 rounded-2xl shadow-lg">
                <div className="text-xs font-medium">Free Download</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gray-800 text-white p-3 rounded-2xl shadow-lg">
                <div className="text-xs font-medium">4.8★ Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-2xl font-light mb-1">50K+</div>
              <div className="text-gray-400 text-sm font-light">Downloads</div>
            </div>
            <div>
              <div className="text-2xl font-light mb-1">500+</div>
              <div className="text-gray-400 text-sm font-light">Restaurants</div>
            </div>
            <div>
              <div className="text-2xl font-light mb-1">4.8★</div>
              <div className="text-gray-400 text-sm font-light">App Rating</div>
            </div>
            <div>
              <div className="text-2xl font-light mb-1">24/7</div>
              <div className="text-gray-400 text-sm font-light">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;