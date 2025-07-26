import React from 'react';
import { 
  Search, 
  Clock, 
  Star, 
  Users, 
  MapPin, 
  Gift, 
  MessageCircle, 
  Shield 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Discovery',
      description: 'AI-powered recommendations based on your preferences, location, and dining history.',
    },
    {
      icon: Clock,
      title: 'Instant Booking',
      description: 'Reserve tables in 30 seconds with real-time availability at 500+ restaurants.',
    },
    {
      icon: Star,
      title: 'Loyalty Rewards',
      description: 'Earn points with every booking and review. Redeem for exclusive dining perks.',
    },
    {
      icon: Users,
      title: 'Group Coordination',
      description: 'Seamlessly manage bookings for large groups with smart table combinations.',
    },
    {
      icon: MapPin,
      title: 'Local Focus',
      description: 'Built specifically for Lebanese dining culture with district-level precision.',
    },
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Access special promotions, birthday perks, and restaurant-specific deals.',
    },
    {
      icon: MessageCircle,
      title: 'Social Dining',
      description: 'Create restaurant playlists, share experiences, and dine with friends.',
    },
    {
      icon: Shield,
      title: 'No Payment Hassle',
      description: 'Simple booking without credit cards or payment processing complexity.',
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Everything You Need for
            <span className="font-medium block">
              Perfect Dining
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Booklet combines powerful technology with local expertise to deliver Lebanon's most comprehensive restaurant booking experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-transparent hover:border-gray-100"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gray-200 group-hover:bg-gray-900 transition-all duration-500">
                <feature.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-light mb-8 tracking-tight">
            And So Much More...
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300 font-light">
            <div>AI-Powered Restaurant Assistant</div>
            <div>Dark Mode Support</div>
            <div>Tiered Loyalty System</div>
            <div>Dietary Preference Management</div>
            <div>GPS-Based Location Detection</div>
            <div>24/7 Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;