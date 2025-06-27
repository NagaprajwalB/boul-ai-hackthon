import React from 'react';
import { Brain, Eye, Shield, Zap, MapPin, MessageCircle, Mic, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Predictive Demand AI',
      description: 'Advanced algorithms predict ride demand patterns, optimizing driver positioning and reducing wait times by up to 40%.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Dynamic Pricing Engine',
      description: 'Real-time pricing optimization based on demand, traffic, weather, and events to ensure fair pricing for all.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Fraud Detection System',
      description: 'Machine learning models detect suspicious activities, fake accounts, and fraudulent transactions in real-time.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Smart Driver Matching',
      description: 'AI-powered matching considers driver ratings, location, vehicle type, and passenger preferences for optimal pairing.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Computer Vision Verification',
      description: 'Real-time driver and passenger verification using facial recognition and document scanning for enhanced security.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Traffic Prediction & Smart Routes',
      description: 'Predictive traffic analysis and smart city integration for optimal routing and multimodal transport planning.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'AI Support Chatbots',
      description: 'Intelligent customer support with natural language processing for instant issue resolution and personalized assistance.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: 'Voice-Enabled Bookings',
      description: 'Natural language voice commands for hands-free ride booking with multi-language support and context understanding.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Advanced{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              AI Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI platform revolutionizes every aspect of ride-hailing with cutting-edge 
            technology for safety, efficiency, and exceptional user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <div className={`${feature.textColor}`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Explore All AI Capabilities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;