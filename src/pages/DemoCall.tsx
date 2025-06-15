
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const DemoCall = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-all duration-300 hover:translate-x-1"
          >
            <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Information */}
            <div className="animate-fade-in-up delay-200">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8 animate-scale-in delay-300">
                <span className="text-sm">📅 15-Minute Strategy Call</span>
              </div>

              {/* Header */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up delay-400">
                Book Your Free <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">AI Strategy Call</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 animate-fade-in-up delay-500">
                Get a custom automation roadmap and see exactly how AI can transform your business operations.
              </p>

              {/* What You'll Get */}
              <div className="space-y-8 mb-12 animate-fade-in-up delay-600">
                <h3 className="text-2xl font-bold text-gray-900">What You'll Get</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-blue-600">⏰</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">15-Minute Workflow Audit</h4>
                      <p className="text-gray-600">We'll analyze your current processes and identify the highest-impact automation opportunities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300 delay-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-purple-600">📈</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom AI Roadmap</h4>
                      <p className="text-gray-600">Get a tailored plan showing exactly how AI can streamline your specific business operations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300 delay-200">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-emerald-600">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Implementation Timeline</h4>
                      <p className="text-gray-600">Learn how we can have your first automation live in as little as 7 days.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white animate-fade-in-up delay-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">Client Success Story</span>
                </div>
                <blockquote className="text-lg mb-4">
                  "The team helped us cut our scheduling time by 90% — from 4+ hours to just 20 minutes per week."
                </blockquote>
                <div className="text-blue-200">— Service Business Owner</div>
              </div>
            </div>

            {/* Right Side - Calendly Embed */}
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up delay-800 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Select a Day</h3>
                <p className="text-gray-600">Choose a time that works best for you</p>
              </div>
              
              {/* Calendly Embed */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/jagrajveer9/30min"
                style={{ minWidth: '320px', height: '630px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCall;
