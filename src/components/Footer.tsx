import React, { useState } from 'react';
import { Mail, ArrowUpRight, ChevronRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
    }, 2000);
  };

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', action: () => scrollToSection('features') },
        { name: 'How It Works', action: () => scrollToSection('process') },
        { name: 'Pricing', href: '#' },
        { name: 'For Restaurants', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#', badge: '3 open' },
        { name: 'Press', href: '#' },
        { name: 'Contact', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Newsletter', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Community', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Cookies', href: '#' },
        { name: 'Licenses', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Facebook', href: '#' }
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Brand Section */}
          <div>
            <div className="mb-8">
              <span className="text-3xl font-thin tracking-wider">
                PLATE
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-12">
              Transform your dining experience with Lebanon's premier restaurant reservation platform. 
              Discover, book, and enjoy.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="text-sm">{social.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:text-right">
            <h3 className="text-2xl font-light mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-8">
              Get the latest updates on new features and restaurant partnerships.
            </p>
            <form onSubmit={handleSubmit} className="relative max-w-md ml-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ${
                  isSubmitting ? 'scale-0' : 'scale-100'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              {isSubmitting && (
                <div className="absolute right-2 top-1 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
              )}
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 pt-20 border-t border-white/10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-light tracking-wider text-gray-400 mb-6">{section.title.toUpperCase()}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
               
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                        
                      </a>
                    
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
            <span>© 2025 Plate. All rights reserved.</span>
            <span className="hidden md:block">·</span>
            <span>Crafted with love in Lebanon</span>
          </div>
          
          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/40 flex items-center justify-center transition-colors duration-300">
              <ChevronRight className="w-4 h-4 -rotate-90 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;