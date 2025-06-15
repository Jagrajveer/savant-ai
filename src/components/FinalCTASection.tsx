
import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 via-indigo-800 to-gray-800 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-slate-400/20 rounded-full animate-neural-network"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-indigo-400/20 rounded-full animate-neural-network delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-slate-500/10 rounded-full animate-circuit-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-indigo-500/10 rounded-full animate-circuit-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build Your First AI Agent — Free
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto">
            You don't need to know how AI works — you just need to know it's working for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link 
              to="/demo-call"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 hover:scale-105 transform active:scale-95 group"
            >
              <span>⏰</span>
              <span>Book My Free AI Strategy Call</span>
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center space-x-2 hover:scale-105 transform active:scale-95 group">
              <span>📈</span>
              <span>Still Curious? Watch the Demo</span>
            </button>
          </div>
          
          <p className="text-slate-300">✨ No code required. Just smart automation that works for you.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white mb-16 animate-bounce-fade-in delay-400">
          <div className="glass p-6 rounded-lg card-hover-bounce">
            <div className="text-3xl md:text-4xl font-bold mb-2">7-14</div>
            <div className="text-slate-300">Days to Launch</div>
          </div>
          <div className="glass p-6 rounded-lg card-hover-bounce">
            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
            <div className="text-slate-300">AI Support</div>
          </div>
          <div className="glass p-6 rounded-lg card-hover-bounce">
            <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
            <div className="text-slate-300">Custom Built</div>
          </div>
          <div className="glass p-6 rounded-lg card-hover-bounce">
            <div className="text-3xl md:text-4xl font-bold mb-2">0</div>
            <div className="text-slate-300">Code Required</div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-bounce-fade-in delay-600">
          <div className="glass rounded-lg p-6 card-hover-bounce">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <span className="text-white font-semibold">Done-for-You Setup</span>
            </div>
            <p className="text-slate-300">We handle everything from setup to integration, so you can focus on your business</p>
          </div>
          
          <div className="glass rounded-lg p-6 card-hover-bounce">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <span className="text-white font-semibold">Tailored to Your Business</span>
            </div>
            <p className="text-slate-300">Every automation is custom-built around your unique business needs and workflows</p>
          </div>
          
          <div className="glass rounded-lg p-6 card-hover-bounce">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <span className="text-white font-semibold">Fast 7-14 Day Launch</span>
            </div>
            <p className="text-slate-300">Most projects are ready to launch in 7-14 days, delivering value quickly</p>
          </div>
          
          <div className="glass rounded-lg p-6 card-hover-bounce">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white">✓</span>
              </div>
              <span className="text-white font-semibold">No Technical Headaches</span>
            </div>
            <p className="text-slate-300">No coding required - we make automation simple and hassle-free</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
