
import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build Your First AI Agent — Free
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            You don't need to know how AI works — you just need to know it's working for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link 
              to="/demo-call"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <span>⏰</span>
              <span>Book My Free AI Strategy Call</span>
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center space-x-2">
              <span>📈</span>
              <span>Still Curious? Watch the Demo</span>
            </button>
          </div>
          
          <p className="text-blue-200">✨ No code required. Just smart automation that works for you.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">7-14</div>
            <div className="text-blue-200">Days to Launch</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-200">AI Support</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
            <div className="text-blue-200">Custom Built</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">0</div>
            <div className="text-blue-200">Code Required</div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <span className="text-white font-semibold">Done-for-You Setup</span>
            </div>
            <p className="text-blue-100">We handle everything from setup to integration, so you can focus on your business</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <span className="text-white font-semibold">Tailored to Your Business</span>
            </div>
            <p className="text-blue-100">Every automation is custom-built around your unique business needs and workflows</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <span className="text-white font-semibold">Fast 7-14 Day Launch</span>
            </div>
            <p className="text-blue-100">Most projects are ready to launch in 7-14 days, delivering value quickly</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <span className="text-white font-semibold">No Technical Headaches</span>
            </div>
            <p className="text-blue-100">No coding required - we make automation simple and hassle-free</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
