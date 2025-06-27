import React from 'react';
import { ArrowRight, Car, Mic, Sparkles, MapPin, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Ride-Hailing
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smarter Rides with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  AI Technology
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the future of transportation with predictive demand algorithms, 
                dynamic pricing, fraud detection, computer vision verification, and intelligent 
                driver-passenger matching powered by advanced AI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                <Car className="mr-2 h-5 w-5" />
                Book a Ride
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                <Mic className="mr-2 h-5 w-5" />
                Voice Booking
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2M+</div>
                <div className="text-gray-600 font-medium">Active Riders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">500K+</div>
                <div className="text-gray-600 font-medium">Verified Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">99.8%</div>
                <div className="text-gray-600 font-medium">Safety Score</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg"
                alt="AI-powered ride-hailing interface"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-3xl blur-xl"></div>
            
            {/* Real-time Matching Indicator */}
            <div className="absolute top-8 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                  <Car className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">AI Match Found</div>
                  <div className="text-xs text-gray-600">Driver arriving in 3 mins</div>
                </div>
              </div>
            </div>
            
            {/* Safety Verification */}
            <div className="absolute bottom-8 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-500" />
                <div>
                  <div className="text-sm font-medium text-gray-800">Verified Safe</div>
                  <div className="text-xs text-gray-600">Computer vision active</div>
                </div>
              </div>
            </div>

            {/* Dynamic Pricing */}
            <div className="absolute top-1/2 -left-8 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
              <div className="text-xs text-gray-600">Dynamic Price</div>
              <div className="text-lg font-bold text-green-600">$12.50</div>
              <div className="text-xs text-gray-500">↓ 15% off peak</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;