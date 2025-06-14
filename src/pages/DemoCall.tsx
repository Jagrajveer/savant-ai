
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const DemoCall = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <span className="mr-2">←</span>
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Information */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8">
                <span className="text-sm">📅 15-Minute Strategy Call</span>
              </div>

              {/* Header */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Book Your Free <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Strategy Call</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12">
                Get a custom automation roadmap and see exactly how AI can transform your business operations.
              </p>

              {/* What You'll Get */}
              <div className="space-y-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900">What You'll Get</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600">⏰</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">15-Minute Workflow Audit</h4>
                      <p className="text-gray-600">We'll analyze your current processes and identify the highest-impact automation opportunities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">📈</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom AI Roadmap</h4>
                      <p className="text-gray-600">Get a tailored plan showing exactly how AI can streamline your specific business operations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
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
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
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
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Select a Day</h3>
                <p className="text-gray-600">Choose a time that works best for you</p>
              </div>
              
              {/* Calendly Embed */}
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Calendly booking widget will be embedded here</p>
                  <a 
                    href="https://calendly.com/jagrajveer9/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                  >
                    Book Your Call on Calendly
                  </a>
                </div>
              </div>
              
              {/* Time Zone */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">Time zone</p>
                <p className="text-sm text-gray-700">Central Time - US & Canada (6:53pm)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCall;
