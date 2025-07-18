import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black relative overflow-hidden flex items-center">
      {/* Enhanced AI Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural Network Nodes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-400/30 rounded-full animate-neural-network-smooth delay-0 relative gpu-accelerated">
          <div className="absolute inset-0 bg-purple-400/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400/30 rounded-full animate-neural-network-smooth delay-500 relative gpu-accelerated">
          <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping delay-300"></div>
        </div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-purple-400/30 rounded-full animate-neural-network-smooth delay-1000 relative gpu-accelerated">
          <div className="absolute inset-0 bg-purple-400/20 rounded-full animate-ping delay-600"></div>
        </div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400/30 rounded-full animate-neural-network-smooth delay-1500 relative gpu-accelerated">
          <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping delay-900"></div>
        </div>
        
        {/* Enhanced Data Flow Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-data-flow-smooth delay-0"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-data-flow-smooth delay-1000"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-data-flow-smooth delay-2000"></div>
        
        {/* Enhanced Floating AI Elements */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-purple-400/20 rounded-lg animate-circuit-pulse-smooth delay-0 rotate-45 gpu-accelerated">
          <div className="absolute inset-4 border border-purple-400/10 rounded animate-circuit-pulse-smooth delay-500"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-blue-400/20 rounded-lg animate-circuit-pulse-smooth delay-1000 rotate-12 gpu-accelerated">
          <div className="absolute inset-3 border border-blue-400/10 rounded animate-circuit-pulse-smooth delay-1500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Headline */}
        <ScrollReveal direction="up">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Dr.</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">AI</span>
          </h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal direction="up">
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We develop custom AI solutions for Your companies.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="glass text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600 hover:border-gray-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">our services</span>
            </button>
            <Link
              to="/demo-call"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-3 hover:scale-105 hover:shadow-2xl transform active:scale-95 group animate-glow relative overflow-hidden gpu-accelerated"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10">contact us</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 relative z-10">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;