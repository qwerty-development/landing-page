import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <span className="text-2xl font-semibold text-gray-900 tracking-tight">
                Booklet
              </span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed font-light">
              Lebanon's premier restaurant reservation app. Discover, book, and enjoy the best dining experiences with zero hassle
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('download')}
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light"
                >
                  Download App
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-500 font-light">
                <Mail className="w-5 h-5" />
                <span>support@booklet.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 font-light">
                <Phone className="w-5 h-5" />
                <span>+961 1 234 567</span>
              </div>
              <div className="flex items-start gap-3 text-gray-500 font-light">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Beirut, Lebanon<br />Available nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* App Stats */}
        <div className="border-t border-gray-100 pt-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">50,000+</div>
              <div className="text-gray-500 text-sm font-light">Happy Users</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">500+</div>
              <div className="text-gray-500 text-sm font-light">Partner Restaurants</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">4.8★</div>
              <div className="text-gray-500 text-sm font-light">App Store Rating</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">95%</div>
              <div className="text-gray-500 text-sm font-light">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm font-light">
            © 2025 Booklet. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500 font-light">
            <a href="#" className="hover:text-gray-900 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;