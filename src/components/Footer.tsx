
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SavantAI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transform your business with intelligent automation. We help growing companies save time, reduce costs, and scale efficiently through custom AI solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">📧</span>
                <span className="text-gray-300">hello@savantai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">📞</span>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">📍</span>
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <nav className="space-y-3">
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors">How It Works</a>
              <button className="block text-gray-400 hover:text-white transition-colors text-left">Demo</button>
            </nav>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <nav className="space-y-3">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
            </nav>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Business?</h3>
            <p className="text-blue-100 mb-6">Book your free 15-minute strategy call now</p>
            <Link 
              to="/demo-call"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>📅</span>
              <span>Book Free Strategy Call</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
