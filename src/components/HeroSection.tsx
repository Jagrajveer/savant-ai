import React from 'react';
import { Zap, CheckCircle, Play, BarChart3, Calendar, Brain, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced AI Background Elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Parallax background elements */}
        <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
          {/* Neural Network Nodes with enhanced animations */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-slate-400/30 rounded-full animate-neural-network-smooth delay-0 relative gpu-accelerated">
            <div className="absolute inset-0 bg-slate-400/20 rounded-full animate-ping"></div>
          </div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-indigo-400/30 rounded-full animate-neural-network-smooth delay-500 relative gpu-accelerated">
            <div className="absolute inset-0 bg-indigo-400/20 rounded-full animate-ping delay-300"></div>
          </div>
          <div className="absolute bottom-32 left-16 w-5 h-5 bg-gray-400/30 rounded-full animate-neural-network-smooth delay-1000 relative gpu-accelerated">
            <div className="absolute inset-0 bg-gray-400/20 rounded-full animate-ping delay-600"></div>
          </div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-stone-400/30 rounded-full animate-neural-network-smooth delay-1500 relative gpu-accelerated">
            <div className="absolute inset-0 bg-stone-400/20 rounded-full animate-ping delay-900"></div>
          </div>
          
          {/* Enhanced Data Flow Lines with scroll-linked animation */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent animate-data-flow-smooth delay-0"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-data-flow-smooth delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent animate-data-flow-smooth delay-2000"></div>
          
          {/* Enhanced Floating AI Elements */}
          <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-slate-400/20 rounded-lg animate-circuit-pulse-smooth delay-0 rotate-45 gpu-accelerated">
            <div className="absolute inset-4 border border-slate-400/10 rounded animate-circuit-pulse-smooth delay-500"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-indigo-400/20 rounded-lg animate-circuit-pulse-smooth delay-1000 rotate-12 gpu-accelerated">
            <div className="absolute inset-3 border border-indigo-400/10 rounded animate-circuit-pulse-smooth delay-1500"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Enhanced Trust Badge with micro-interactions */}
        <ScrollReveal direction="scale" delay={0}>
          <div className="inline-flex items-center space-x-3 glass text-slate-300 px-6 py-3 rounded-full mb-8 hover:scale-105 transition-all duration-300 hover-lift group border border-slate-600 gpu-accelerated cursor-pointer">
            <div className="relative">
              <Zap size={18} className="animate-pulse text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">Custom AI Solutions for Your Business</span>
            <Sparkles size={16} className="text-slate-400 animate-pulse delay-300 group-hover:text-indigo-400 transition-colors duration-300" />
          </div>
        </ScrollReveal>

        {/* Main Headline with staggered animation */}
        <ScrollReveal direction="up" delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Scale Smarter with{' '}
            </span>
            <span className="bg-gradient-to-r from-slate-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-shift relative inline-block animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              Custom AI Automation
              {/* Floating accent elements */}
              <Brain className="absolute -top-8 -right-8 w-8 h-8 text-indigo-400/30 animate-float-smooth" />
              <Target className="absolute -bottom-6 -left-6 w-6 h-6 text-slate-400/30 animate-float-smooth delay-500" />
            </span>
          </h1>
        </ScrollReveal>

        {/* Subheadline with fade animation */}
        <ScrollReveal direction="fade" delay={200}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            Save time, cut costs, and grow faster by automating the work that slows your team down.
          </p>
        </ScrollReveal>

        {/* Enhanced Social Proof Badge */}
        <ScrollReveal direction="scale" delay={300}>
          <div className="inline-flex items-center space-x-3 glass text-gray-300 px-6 py-3 rounded-full mb-12 hover:scale-105 transition-all duration-300 hover-lift group border border-gray-600 cursor-pointer">
            <div className="relative">
              <BarChart3 className="w-5 h-5 text-stone-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm group-hover:text-white transition-colors duration-300">Built for growing businesses — over 80% of automation projects are ready in under 14 days</span>
            <Sparkles className="w-4 h-4 text-gray-400 animate-pulse delay-300 group-hover:text-green-400 transition-colors duration-300" />
          </div>
        </ScrollReveal>

        {/* Enhanced What You'll Get Section */}
        <AnimatedCard className="max-w-2xl mx-auto mb-12" delay={400} hoverEffect="glow">
          <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-700 group relative overflow-hidden gpu-accelerated">
            {/* Animated background accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-lg font-semibold text-gray-200 mb-6 relative z-10 group-hover:text-white transition-colors duration-300">What You'll Get on Your Free Call:</h3>
            <div className="space-y-4 text-left relative z-10">
              {[
                "A 15-minute audit of your business workflows",
                "A custom AI automation roadmap", 
                "Answers to your top questions — no tech skills needed"
              ].map((item, index) => (
                <ScrollReveal key={index} direction="left" delay={500 + index * 100}>
                  <div className="flex items-center space-x-4 group/item hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 bg-stone-500/20 rounded-full flex items-center justify-center group-hover/item:scale-110 group-hover/item:animate-elastic-bounce transition-transform duration-300 border border-stone-500/30 animate-circuit-pulse-smooth relative">
                      <CheckCircle className="w-5 h-5 text-stone-400 group-hover/item:text-green-400 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-stone-400/20 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 animate-ping"></div>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Enhanced CTA Buttons with micro-interactions */}
        <ScrollReveal direction="up" delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/demo-call"
              className="bg-gradient-to-r from-slate-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-slate-700 hover:to-indigo-700 transition-all duration-300 flex items-center space-x-3 hover:scale-105 hover:shadow-2xl transform active:scale-95 group animate-glow relative overflow-hidden gpu-accelerated"
            >
              {/* Animated background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Book a Free AI Strategy Call</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 relative z-10">→</span>
            </Link>
            <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 group glass px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-500 relative overflow-hidden gpu-accelerated">
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Play className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
              <span className="relative z-10">Watch a Demo</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Bottom tagline with staggered animation */}
        <ScrollReveal direction="fade" delay={700}>
          <p className="text-gray-400 mt-8 flex items-center justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
            <span className="animate-fade-in-left" style={{ animationDelay: '1100ms' }}>No code required</span>
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="animate-fade-in-up" style={{ animationDelay: '1200ms' }}>Custom solutions</span>
            <Sparkles className="w-4 h-4 animate-pulse delay-300" />
            <span className="animate-fade-in-right" style={{ animationDelay: '1300ms' }}>Fast implementation</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;