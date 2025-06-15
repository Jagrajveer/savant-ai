
import React from 'react';
import { Zap, CheckCircle, Play, BarChart3, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced AI Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural Network Nodes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500/30 rounded-full animate-neural-network delay-0"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500/30 rounded-full animate-neural-network delay-500"></div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-cyan-500/30 rounded-full animate-neural-network delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-emerald-500/30 rounded-full animate-neural-network delay-1500"></div>
        
        {/* Data Flow Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-data-flow delay-0"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-data-flow delay-1000"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-data-flow delay-2000"></div>
        
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        {/* Floating AI Elements */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-blue-500/20 rounded-lg animate-circuit-pulse delay-0 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-purple-500/20 rounded-lg animate-circuit-pulse delay-1000 rotate-12"></div>
        
        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-96 h-96">
            <div className="absolute w-3 h-3 bg-blue-400/40 rounded-full animate-ai-orbit"></div>
            <div className="absolute w-2 h-2 bg-purple-400/40 rounded-full animate-ai-orbit" style={{ animationDelay: '5s' }}></div>
            <div className="absolute w-4 h-4 bg-cyan-400/40 rounded-full animate-ai-orbit" style={{ animationDelay: '10s' }}></div>
          </div>
        </div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute left-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent animate-matrix-rain delay-0"></div>
        <div className="absolute right-20 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-matrix-rain delay-2000"></div>
        <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-matrix-rain delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Trust Badge */}
        <div className="inline-flex items-center space-x-2 glass text-blue-300 px-4 py-2 rounded-full mb-8 animate-bounce-fade-in hover:scale-105 transition-all duration-300 card-hover-bounce">
          <Zap size={16} className="animate-pulse text-blue-400" />
          <span className="text-sm font-medium">Custom AI Solutions for Your Business</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up delay-200">
          Scale Smarter with{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
            Custom AI Automation
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-up delay-400">
          Save time, cut costs, and grow faster by automating the work that slows your team down.
        </p>

        {/* Social Proof Badge */}
        <div className="inline-flex items-center space-x-2 glass text-gray-300 px-4 py-2 rounded-full mb-12 animate-bounce-fade-in delay-500 hover:scale-105 transition-all duration-300 card-hover-bounce">
          <BarChart3 className="w-4 h-4 text-emerald-400" />
          <span className="text-sm">Built for growing businesses — over 80% of automation projects are ready in under 14 days</span>
        </div>

        {/* What You'll Get */}
        <div className="glass rounded-2xl p-8 mb-12 max-w-2xl mx-auto animate-bounce-fade-in delay-600 hover:shadow-2xl transition-all duration-500 card-hover-bounce border border-gray-700">
          <h3 className="text-lg font-semibold text-gray-200 mb-6">What You'll Get on Your Free Call:</h3>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300">
              <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-emerald-500/30 animate-circuit-pulse">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-gray-300">A 15-minute audit of your business workflows</span>
            </div>
            <div className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300 delay-100">
              <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-emerald-500/30 animate-circuit-pulse">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-gray-300">A custom AI automation roadmap</span>
            </div>
            <div className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300 delay-200">
              <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-emerald-500/30 animate-circuit-pulse">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-gray-300">Answers to your top questions — no tech skills needed</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-800">
          <Link
            to="/demo-call"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-lg transform active:scale-95 group animate-glow"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Free AI Strategy Call</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group glass px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-500">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Watch a Demo</span>
          </button>
        </div>

        {/* Bottom tagline */}
        <p className="text-gray-400 mt-8 animate-fade-in-up delay-1000">No code required • Custom solutions • Fast implementation</p>
      </div>
    </section>
  );
};

export default HeroSection;
