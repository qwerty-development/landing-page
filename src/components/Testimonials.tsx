import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Khalil',
      location: 'Beirut',
      rating: 5,
      text: 'Finally, no more calling restaurants and waiting on hold. Booklet makes dining out so much easier.',
      avatar: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ahmad Mansour',
      location: 'Jounieh',
      rating: 5,
      text: 'The AI recommendations are spot on. It suggested a perfect romantic restaurant for our anniversary.',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Maya Tabet',
      location: 'Baabda',
      rating: 5,
      text: 'Perfect for planning group dinners. The collaborative playlists feature helped us decide on the perfect venue.',
      avatar: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Rami Joumaa',
      location: 'Zahle',
      rating: 5,
      text: 'As someone who dines out frequently for business, Booklet saves me so much time. The loyalty points are adding up nicely.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Diners' },
    { number: '500+', label: 'Partner Restaurants' },
    { number: '4.8★', label: 'App Store Rating' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Loved by Food Enthusiasts
            <span className="font-medium block">
              Across Lebanon
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands of Lebanese food lovers who've already discovered the easiest way to dine out
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-500 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-3xl hover:shadow-lg transition-all duration-500 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gray-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">
              Trusted & Secure
            </h3>
            <p className="text-gray-500 font-light">
              Your privacy and security are our top priorities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Verified Reviews</h4>
              <p className="text-sm text-gray-500 font-light">Only real diners can leave reviews</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Data Protection</h4>
              <p className="text-sm text-gray-500 font-light">256-bit encryption & GDPR compliant</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.944l5.657 5.657a9 9 0 010 12.728L12 21.071l-5.657-5.657a9 9 0 010-12.728L12 2.944z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-500 font-light">Always here when you need help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;