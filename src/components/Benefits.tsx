import React from 'react';
import { Clock, Star, Users, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'No more calling restaurants or waiting on hold. Book instantly with one tap.',
      stats: '30 seconds average booking time'
    },
    {
      icon: Star,
      title: 'Earn While You Dine',
      description: 'Collect points for every booking and review to unlock exclusive rewards.',
      stats: 'Up to 10% back in dining credits'
    },
    {
      icon: Users,
      title: 'Perfect for Groups',
      description: 'Coordinate large bookings effortlessly with smart table management.',
      stats: 'Handle groups up to 20+ people'
    },
    {
      icon: Shield,
      title: 'Completely Secure',
      description: 'No payment data stored. Your privacy and security are our priority.',
      stats: '256-bit encryption protection'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Why Thousands Choose
            <span className="font-medium block">
              Booklet
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            More than just table booking — we've redesigned the entire dining experience from discovery to dessert
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-3xl bg-white hover:shadow-lg transition-all duration-500 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 transition-all duration-500">
                <benefit.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-500 mb-6 leading-relaxed font-light">
                {benefit.description}
              </p>
              
              <div className="text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-full inline-block">
                {benefit.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Special Occasions */}
        <div className="bg-white rounded-3xl p-12 border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-12 tracking-tight">
            Perfect for Every Occasion
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Date Night</h4>
              <p className="text-sm text-gray-500 font-light">Romantic, intimate settings with special ambiance filters</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Business Lunch</h4>
              <p className="text-sm text-gray-500 font-light">Quiet, professional venues perfect for meetings</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Celebrations</h4>
              <p className="text-sm text-gray-500 font-light">Birthday perks and special occasion recognition</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Family Time</h4>
              <p className="text-sm text-gray-500 font-light">Family-friendly venues with kid-accommodating features</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;