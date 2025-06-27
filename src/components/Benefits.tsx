import React from 'react';
import { TrendingUp, Clock, Shield, Users, Zap, Eye, MapPin, MessageCircle } from 'lucide-react';

const Benefits = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: '40%',
      label: 'Faster Pickups',
      description: 'Predictive demand algorithms reduce average wait times significantly',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: '25%',
      label: 'Route Optimization',
      description: 'AI-powered traffic prediction saves time on every journey',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      value: '99.8%',
      label: 'Safety Score',
      description: 'Computer vision and fraud detection ensure maximum security',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: '95%',
      label: 'Match Accuracy',
      description: 'Smart driver-passenger matching based on preferences and ratings',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  const aiCapabilities = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Dynamic Pricing Intelligence',
      description: 'Real-time price optimization based on 50+ variables including demand, weather, events, and traffic patterns.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Computer Vision Security',
      description: 'Advanced facial recognition and document verification for driver and passenger safety.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Smart City Integration',
      description: 'Seamless coordination with traffic systems, public transport, and urban infrastructure.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Conversational AI Support',
      description: 'Natural language chatbots and voice booking with personalized assistance.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Measurable{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              AI Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See tangible improvements across all transportation metrics with our AI-powered platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`inline-flex p-4 rounded-full ${stat.bgColor} mb-6`}>
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aiCapabilities.map((capability, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className={`inline-flex p-3 rounded-full ${capability.bgColor} mb-4`}>
                <div className={capability.color}>
                  {capability.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Urban Mobility?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of riders and thousands of drivers already experiencing the future of transportation with AI-powered ride-hailing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Start Riding Now
            </button>
            <button className="bg-white/20 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-200">
              Become a Driver
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;