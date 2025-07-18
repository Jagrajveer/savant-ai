import React from 'react';
import { MessageCircle, Bot, Brain, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900/20 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400/20 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400/20 rounded-full animate-neural-network-smooth delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-purple-500/10 rounded-full animate-circuit-pulse-smooth"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-blue-500/10 rounded-full animate-circuit-pulse-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Your AI prescription for <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">business evolution.</span>
            </h2>
            <div className="flex justify-center mb-8">
              <Link
                to="/demo-call"
                className="glass text-purple-400 hover:text-purple-300 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-purple-500/30 hover:border-purple-400/50 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get in </span>
                <span className="relative z-10 underline">touch</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - What we do */}
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-12">
                What we <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">do</span>
              </h3>
              
              {/* Chat Interface Mockup */}
              <div className="glass rounded-2xl p-6 border border-gray-700/50 hover-lift transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* User Message */}
                <div className="flex items-start space-x-3 mb-6 relative z-10">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">You</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm mb-1">8:15 AM</div>
                    <div className="text-gray-300">Schedule a Google meeting with John for 3:45PM tomorrow!</div>
                  </div>
                </div>
                
                {/* AI Response */}
                <div className="flex items-start space-x-3 relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-purple-400 font-semibold text-sm">AI Assistant</span>
                      <span className="text-gray-400 text-sm">8:15 AM</span>
                    </div>
                    <div className="text-gray-300">I've successfully scheduled a Google meeting with John for 3:45PM tomorrow.</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - AI Visualization */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Main AI Circle */}
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-circuit-pulse-smooth"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full animate-circuit-pulse-smooth delay-500"></div>
                <div className="absolute inset-8 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-12 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center animate-float-smooth">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-4 right-8 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center animate-neural-network-smooth">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                </div>
                <div className="absolute bottom-8 left-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center animate-neural-network-smooth delay-1000">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute top-1/2 right-0 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center animate-neural-network-smooth delay-500">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              
              {/* Business Label */}
              <div className="absolute bottom-0 right-0 glass px-4 py-2 rounded-lg border border-gray-600/50">
                <span className="text-gray-300 text-sm font-medium">BUSINESS</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;