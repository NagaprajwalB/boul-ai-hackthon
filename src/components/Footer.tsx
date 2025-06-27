import React from 'react';
import { Car, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">RideAI</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing urban transportation with advanced AI technology. 
              Smart matching, predictive analytics, computer vision security, and seamless multimodal integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">AI Solutions</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Predictive Demand
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Dynamic Pricing
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Computer Vision
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Smart Matching
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Fraud Detection
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Platform</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Rider App
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Driver App
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Fleet Management
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                API Documentation
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Smart City Portal
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Safety Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Driver Partners
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Support Center
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 RideAI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Safety Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;