import React from 'react';
import { Car, Users, Building, Smartphone } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Smart Fleet Management',
      description: 'AI-powered fleet optimization with predictive maintenance, fuel efficiency monitoring, and automated dispatch systems.',
      features: ['Predictive maintenance alerts', 'Fuel optimization routes', 'Real-time fleet tracking', 'Driver performance analytics'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Passenger Experience AI',
      description: 'Personalized ride experiences with preference learning, mood detection, and proactive service recommendations.',
      features: ['Personalized ride preferences', 'Mood-based music selection', 'Proactive service suggestions', 'Loyalty program optimization'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Smart City Integration',
      description: 'Seamless integration with urban infrastructure for traffic optimization, public transport coordination, and city planning.',
      features: ['Traffic light synchronization', 'Public transport integration', 'Urban planning insights', 'Emergency response coordination'],
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Multimodal Transport Hub',
      description: 'Unified platform combining ride-hailing, public transport, bike-sharing, and walking routes for optimal journey planning.',
      features: ['Multi-transport route planning', 'Real-time transit updates', 'Carbon footprint tracking', 'Cost optimization across modes'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Complete AI{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Transportation Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform urban mobility with our comprehensive AI-powered transportation ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-2 bg-gradient-to-r ${solution.gradient}`}></div>
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-full ${solution.bgColor} mb-6`}>
                  <div className={solution.color}>
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient}`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Real-Time AI Processing
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Sub-second driver matching across 50+ cities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Real-time fraud detection with 99.9% accuracy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Dynamic pricing updates every 30 seconds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Computer vision verification in under 2 seconds</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                alt="AI transportation dashboard"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;