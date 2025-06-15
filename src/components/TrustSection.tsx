
import React from 'react';

const TrustSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-data-flow"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-blue-500/20 to-transparent animate-data-flow delay-1000"></div>
        <div className="absolute top-10 right-20 w-4 h-4 bg-purple-400/30 rounded-full animate-neural-network"></div>
        <div className="absolute bottom-10 left-20 w-3 h-3 bg-cyan-400/30 rounded-full animate-neural-network delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Why Growing Businesses <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">Choose SavantAI</span>
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in-up delay-200">We're here to simplify your growth with automation — not complicate it.</p>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Done-for-You Setup */}
          <div className="text-center glass rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 animate-bounce-fade-in delay-0 card-hover-bounce">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30 animate-circuit-pulse">
              <span className="text-emerald-400 text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Done-for-You Setup</h3>
            <p className="text-gray-300">We build and integrate everything for you</p>
          </div>

          {/* Tailored to You */}
          <div className="text-center glass rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 animate-bounce-fade-in delay-200 card-hover-bounce">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30 animate-circuit-pulse delay-500">
              <span className="text-blue-400 text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Tailored to You</h3>
            <p className="text-gray-300">No generic bots — every solution is built around your business</p>
          </div>

          {/* Fast Turnaround */}
          <div className="text-center glass rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 animate-bounce-fade-in delay-400 card-hover-bounce">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30 animate-circuit-pulse delay-1000">
              <span className="text-purple-400 text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Fast Turnaround</h3>
            <p className="text-gray-300">Most projects are ready to launch in 7-14 days</p>
          </div>

          {/* No Technical Headaches */}
          <div className="text-center glass rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 animate-bounce-fade-in delay-600 card-hover-bounce">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-orange-500/30 animate-circuit-pulse delay-1500">
              <span className="text-orange-400 text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">No Technical Headaches</h3>
            <p className="text-gray-300">No code. No confusion. Just results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
