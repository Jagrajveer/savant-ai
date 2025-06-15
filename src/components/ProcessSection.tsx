
import React from 'react';
import { MessageCircle, Settings, Rocket, Users, Clock, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Tech Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute top-20 left-20 w-3 h-3 bg-slate-400/20 rounded-full animate-neural-network"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-indigo-400/20 rounded-full animate-neural-network delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-slate-500/10 rounded-full animate-circuit-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-indigo-500/10 rounded-full animate-circuit-pulse delay-1000"></div>
        {/* Connection lines between steps */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-slate-400/20 via-indigo-400/40 to-gray-400/20 animate-data-flow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Here's How We Set You Up for <span className="bg-gradient-to-r from-slate-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-shift">AI-Powered Success</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined process gets you from manual work to smart automation in just days, not months.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="text-center animate-bounce-fade-in delay-200 group card-hover-bounce relative">
            {/* Connection line to next step */}
            <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-gradient-to-r from-slate-400/40 to-transparent"></div>
            
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 animate-float animate-circuit-pulse relative overflow-hidden">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                
                {/* Primary icon */}
                <MessageCircle className="w-10 h-10 text-white transition-all duration-500 group-hover:rotate-12 relative z-10" />
                
                {/* Secondary floating icons */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Users className="w-4 h-4 text-slate-300 animate-bounce" />
                </div>
                <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <Clock className="w-4 h-4 text-slate-300 animate-pulse" />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 animate-pulse border-2 border-slate-500">
                <span className="text-white text-lg font-bold">1</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-slate-400 transition-colors duration-300">Free AI Strategy Call</h3>
            <p className="text-gray-300 mb-6">We evaluate your business and find the highest-impact automation opportunities.</p>
            <div className="text-slate-400 text-sm group-hover:translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span>Process analysis</span>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>ROI calculation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Custom roadmap</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center animate-bounce-fade-in delay-400 group card-hover-bounce relative">
            {/* Connection line to next step */}
            <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-gradient-to-r from-indigo-400/40 to-transparent"></div>
            
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 animate-float animate-circuit-pulse delay-500 relative overflow-hidden" style={{ animationDelay: '1s' }}>
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                
                {/* Primary icon */}
                <Settings className="w-10 h-10 text-white transition-all duration-500 group-hover:rotate-180 relative z-10" />
                
                {/* Orbiting gears */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1 right-2 w-3 h-3 border border-white/50 rounded-full animate-spin"></div>
                  <div className="absolute bottom-1 left-2 w-2 h-2 border border-white/50 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 animate-pulse delay-200 border-2 border-indigo-500">
                <span className="text-white text-lg font-bold">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">Custom Automation Plan</h3>
            <p className="text-gray-300 mb-6">We build a tailored solution using voice bots, task automation, or analytics — based on your exact needs.</p>
            <div className="text-indigo-400 text-sm group-hover:translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span>Custom design</span>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Integration planning</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Solution mapping</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center animate-bounce-fade-in delay-600 group card-hover-bounce relative">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 animate-float animate-circuit-pulse delay-1000 relative overflow-hidden" style={{ animationDelay: '2s' }}>
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                
                {/* Primary icon */}
                <Rocket className="w-10 h-10 text-white transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 relative z-10" />
                
                {/* Launch trail effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-1/2 w-px h-6 bg-gradient-to-t from-orange-400 to-transparent animate-pulse"></div>
                  <div className="absolute bottom-1 left-1/2 w-2 h-1 bg-orange-400/50 rounded-full animate-ping"></div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 animate-pulse delay-400 border-2 border-gray-500">
                <span className="text-white text-lg font-bold">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-400 transition-colors duration-300">Launch & Save Time</h3>
            <p className="text-gray-300 mb-6">Your system goes live fast. You start saving hours and operating more efficiently right away.</p>
            <div className="text-gray-400 text-sm group-hover:translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span>Quick deployment</span>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Team training</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Timeline Badge */}
        <div className="text-center animate-bounce-fade-in delay-800">
          <div className="inline-flex items-center space-x-3 glass text-slate-300 px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg card-hover-bounce border border-gray-600 group">
            <div className="relative">
              <Rocket className="w-5 h-5 animate-pulse group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span className="font-semibold text-lg">Average Timeline: 7-14 Days to Launch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
