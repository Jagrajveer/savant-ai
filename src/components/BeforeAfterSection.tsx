
import React from 'react';

const BeforeAfterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-24 h-24 border border-red-500/10 rounded-lg animate-circuit-pulse rotate-45"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 border border-emerald-500/10 rounded-lg animate-circuit-pulse delay-1000 rotate-12"></div>
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-red-400/30 rounded-full animate-neural-network"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-emerald-400/30 rounded-full animate-neural-network delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass text-blue-300 px-4 py-2 rounded-full mb-6 border border-blue-500/30 animate-bounce-fade-in card-hover-bounce">
            <span className="text-sm">✓ Real Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up delay-200">
            What This Looks Like <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">in Real Life</span>
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in-up delay-400">How SavantAI helped a service business cut scheduling time by 90%</p>
        </div>

        {/* Before vs After Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Before AI */}
          <div className="glass rounded-2xl p-8 border border-red-500/30 bg-red-500/5 animate-bounce-fade-in delay-600 card-hover-bounce">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/40 animate-circuit-pulse">
                <span className="text-red-400 text-sm">⏰</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Before AI</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2">
                <span className="text-red-400 animate-pulse">•</span>
                <span className="text-gray-300">Manual calendar checking</span>
              </div>
              <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 delay-100">
                <span className="text-red-400 animate-pulse">•</span>
                <span className="text-gray-300">Back-and-forth emails</span>
              </div>
              <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 delay-200">
                <span className="text-red-400 animate-pulse">•</span>
                <span className="text-gray-300">Phone tag with clients</span>
              </div>
              <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 delay-300">
                <span className="text-red-400 animate-pulse">•</span>
                <span className="text-gray-300">Double bookings</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-500/10 rounded-lg border border-red-500/30 transition-all duration-300 hover:bg-red-500/15">
              <p className="text-red-300 font-semibold">4+ hours spent on scheduling per week</p>
            </div>
          </div>

          {/* After AI */}
          <div className="glass rounded-2xl p-8 border border-emerald-500/30 bg-emerald-500/5 animate-bounce-fade-in delay-800 card-hover-bounce">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/40 animate-circuit-pulse delay-500">
                <span className="text-emerald-400 text-sm">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-white">After AI</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2">
                <span className="text-emerald-400 animate-pulse">•</span>
                <span className="text-gray-300">Instant AI scheduling</span>
              </div>
              <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 delay-100">
                <span className="text-emerald-400 animate-pulse">•</span>
                <span className="text-gray-300">Smart availability sync</span>
              </div>
              <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 delay-200">
                <span className="text-emerald-400 animate-pulse">•</span>
                <span className="text-gray-300">Automated reminders</span>
              </div>
              <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 delay-300">
                <span className="text-emerald-400 animate-pulse">•</span>
                <span className="text-gray-300">Zero conflicts</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/15">
              <p className="text-emerald-300 font-semibold">Just 20 minutes of oversight weekly</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up delay-1000">
          <button className="text-blue-400 hover:text-blue-300 transition-all duration-300 text-lg font-medium hover:scale-105 transform">
            See how we can automate your workflows →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
