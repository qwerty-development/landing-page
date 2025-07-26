import React from 'react';
import { Search, Calendar, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'Browse 500+ restaurants with smart filters, AI recommendations, and real-time availability.',
      details: ['Location-based search', 'Cuisine & price filters', 'Personalized suggestions', 'Live availability']
    },
    {
      icon: Calendar,
      title: 'Book',
      description: 'Select your preferred time, party size, and any special requirements in just a few taps.',
      details: ['Choose date & time', 'Set party size', 'Add special requests', 'Instant confirmation']
    },
    {
      icon: CheckCircle,
      title: 'Enjoy',
      description: 'Arrive at your table, enjoy your meal, earn points, and share your experience.',
      details: ['QR code check-in', 'Earn loyalty points', 'Rate your experience', 'Share with friends']
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Book Your Table in
            <span className="font-medium block">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            From discovery to dining, we've streamlined every step to make restaurant booking effortless
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 w-px h-24 bg-gray-200"></div>
              )}
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-20">
                {/* Step Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center mt-3 font-medium text-gray-400 text-sm">
                    Step {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-500 mb-8 max-w-2xl font-light leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Step Details */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center justify-center md:justify-start gap-3 bg-gray-50 p-4 rounded-2xl"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-gray-50 rounded-3xl p-12 text-center">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-3xl font-light text-gray-900 mb-2">30s</div>
              <div className="text-gray-500 font-light">Average booking time</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 mb-2">95%</div>
              <div className="text-gray-500 font-light">Booking success rate</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 mb-2">24/7</div>
              <div className="text-gray-500 font-light">Available anytime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;