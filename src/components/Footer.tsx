
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
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Dr</span>
              </div>
              <span className="text-xl font-bold">Dr.AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              We develop custom AI solutions for your companies. Transform your business with intelligent automation and cutting-edge technology.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <nav className="space-y-3">
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#process" className="block text-gray-400 hover:text-white transition-colors">Process</a>
              <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
            </nav>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <nav className="space-y-3">
              <a href="#faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-purple-100 mb-6">Get in touch with our AI experts today</p>
            <Link 
              to="/demo-call"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>💬</span>
              <span>Contact Us</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
