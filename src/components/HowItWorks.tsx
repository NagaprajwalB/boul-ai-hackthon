import React from 'react';
import { MapPin, Zap, Car, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Request Your Ride',
      description: 'Open the app, set your destination, and let our AI analyze the best route and pricing options.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'AI Matches Instantly',
      description: 'Our intelligent algorithms instantly find the perfect driver based on location, ratings, and preferences.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Smart Navigation',
      description: 'Drivers receive AI-optimized routes that avoid traffic and get you to your destination efficiently.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Rate & Improve',
      description: 'Your feedback helps our AI learn and continuously improve the matching and routing algorithms.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            How Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              AI Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience seamless rides powered by intelligent automation and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-4 rounded-full ${step.bgColor} mb-6`}>
                  <div className={step.color}>
                    {step.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-teal-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Real-Time Intelligence
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Traffic analysis and route optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Dynamic pricing based on demand</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Fraud detection and safety monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700">Predictive driver positioning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/841286/pexels-photo-841286.jpeg"
                alt="AI dashboard showing real-time analytics"
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

export default HowItWorks;