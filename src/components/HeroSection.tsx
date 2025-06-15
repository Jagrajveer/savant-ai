
import React from 'react';
import { Zap, CheckCircle, Play, BarChart3, Calendar, Brain, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced AI Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural Network Nodes with enhanced animations */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-slate-400/30 rounded-full animate-neural-network delay-0 relative">
          <div className="absolute inset-0 bg-slate-400/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-indigo-400/30 rounded-full animate-neural-network delay-500 relative">
          <div className="absolute inset-0 bg-indigo-400/20 rounded-full animate-ping delay-300"></div>
        </div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-gray-400/30 rounded-full animate-neural-network delay-1000 relative">
          <div className="absolute inset-0 bg-gray-400/20 rounded-full animate-ping delay-600"></div>
        </div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-stone-400/30 rounded-full animate-neural-network delay-1500 relative">
          <div className="absolute inset-0 bg-stone-400/20 rounded-full animate-ping delay-900"></div>
        </div>
        
        {/* Enhanced Data Flow Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent animate-data-flow delay-0"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-data-flow delay-1000"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent animate-data-flow delay-2000"></div>
        
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        {/* Enhanced Floating AI Elements */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-slate-400/20 rounded-lg animate-circuit-pulse delay-0 rotate-45 relative">
          <div className="absolute inset-4 border border-slate-400/10 rounded animate-circuit-pulse delay-500"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-indigo-400/20 rounded-lg animate-circuit-pulse delay-1000 rotate-12 relative">
          <div className="absolute inset-3 border border-indigo-400/10 rounded animate-circuit-pulse delay-1500"></div>
        </div>
        
        {/* Enhanced Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-96 h-96">
            <div className="absolute w-3 h-3 bg-slate-400/40 rounded-full animate-ai-orbit"></div>
            <div className="absolute w-2 h-2 bg-indigo-400/40 rounded-full animate-ai-orbit" style={{ animationDelay: '5s' }}></div>
            <div className="absolute w-4 h-4 bg-gray-400/40 rounded-full animate-ai-orbit" style={{ animationDelay: '10s' }}></div>
          </div>
        </div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute left-10 top-0 w-px h-full bg-gradient-to-b from-transparent via-slate-500/20 to-transparent animate-matrix-rain delay-0"></div>
        <div className="absolute right-20 top-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-matrix-rain delay-2000"></div>
        <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-500/20 to-transparent animate-matrix-rain delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Enhanced Trust Badge */}
        <div className="inline-flex items-center space-x-3 glass text-slate-300 px-6 py-3 rounded-full mb-8 animate-bounce-fade-in hover:scale-105 transition-all duration-300 card-hover-bounce group border border-slate-600">
          <div className="relative">
            <Zap size={18} className="animate-pulse text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-sm font-medium">Custom AI Solutions for Your Business</span>
          <Sparkles size={16} className="text-slate-400 animate-pulse delay-300" />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up delay-200">
          Scale Smarter with{' '}
          <span className="bg-gradient-to-r from-slate-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-shift relative">
            Custom AI Automation
            {/* Floating accent elements */}
            <Brain className="absolute -top-8 -right-8 w-8 h-8 text-indigo-400/30 animate-float" />
            <Target className="absolute -bottom-6 -left-6 w-6 h-6 text-slate-400/30 animate-float delay-500" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-up delay-400">
          Save time, cut costs, and grow faster by automating the work that slows your team down.
        </p>

        {/* Enhanced Social Proof Badge */}
        <div className="inline-flex items-center space-x-3 glass text-gray-300 px-6 py-3 rounded-full mb-12 animate-bounce-fade-in delay-500 hover:scale-105 transition-all duration-300 card-hover-bounce group border border-gray-600">
          <div className="relative">
            <BarChart3 className="w-5 h-5 text-stone-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-sm">Built for growing businesses — over 80% of automation projects are ready in under 14 days</span>
          <Sparkles className="w-4 h-4 text-gray-400 animate-pulse delay-300" />
        </div>

        {/* Enhanced What You'll Get Section */}
        <div className="glass rounded-2xl p-8 mb-12 max-w-2xl mx-auto animate-bounce-fade-in delay-600 hover:shadow-2xl transition-all duration-500 card-hover-bounce border border-gray-700 group relative overflow-hidden">
          {/* Animated background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h3 className="text-lg font-semibold text-gray-200 mb-6 relative z-10">What You'll Get on Your Free Call:</h3>
          <div className="space-y-4 text-left relative z-10">
            <div className="flex items-center space-x-4 group/item hover:translate-x-2 transition-all duration-300">
              <div className="w-8 h-8 bg-stone-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 border border-stone-500/30 animate-circuit-pulse relative">
                <CheckCircle className="w-5 h-5 text-stone-400" />
                <div className="absolute inset-0 bg-stone-400/20 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 animate-ping"></div>
              </div>
              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">A 15-minute audit of your business workflows</span>
            </div>
            <div className="flex items-center space-x-4 group/item hover:translate-x-2 transition-all duration-300 delay-100">
              <div className="w-8 h-8 bg-stone-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 border border-stone-500/30 animate-circuit-pulse relative">
                <CheckCircle className="w-5 h-5 text-stone-400" />
                <div className="absolute inset-0 bg-stone-400/20 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 animate-ping delay-200"></div>
              </div>
              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">A custom AI automation roadmap</span>
            </div>
            <div className="flex items-center space-x-4 group/item hover:translate-x-2 transition-all duration-300 delay-200">
              <div className="w-8 h-8 bg-stone-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 border border-stone-500/30 animate-circuit-pulse relative">
                <CheckCircle className="w-5 h-5 text-stone-400" />
                <div className="absolute inset-0 bg-stone-400/20 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 animate-ping delay-400"></div>
              </div>
              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">Answers to your top questions — no tech skills needed</span>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-800">
          <Link
            to="/demo-call"
            className="bg-gradient-to-r from-slate-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-slate-700 hover:to-indigo-700 transition-all duration-300 flex items-center space-x-3 hover:scale-105 hover:shadow-2xl transform active:scale-95 group animate-glow relative overflow-hidden"
          >
            {/* Animated background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Book a Free AI Strategy Call</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 relative z-10">→</span>
          </Link>
          <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group glass px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-500 relative overflow-hidden">
            {/* Animated background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <Play className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
            <span className="relative z-10">Watch a Demo</span>
          </button>
        </div>

        {/* Bottom tagline */}
        <p className="text-gray-400 mt-8 animate-fade-in-up delay-1000 flex items-center justify-center space-x-4">
          <span>No code required</span>
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Custom solutions</span>
          <Sparkles className="w-4 h-4 animate-pulse delay-300" />
          <span>Fast implementation</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
