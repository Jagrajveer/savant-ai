
import React from 'react';
import { MessageCircle, Settings, Rocket } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400/20 rounded-full animate-neural-network"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-purple-400/20 rounded-full animate-neural-network delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-blue-500/10 rounded-full animate-circuit-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-purple-500/10 rounded-full animate-circuit-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Here's How We Set You Up for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">AI-Powered Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process gets you from manual work to smart automation in just days, not months.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="text-center animate-bounce-fade-in delay-200 group card-hover-bounce">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 animate-float animate-circuit-pulse">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 animate-pulse">
                <span className="text-white text-sm font-bold">1</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Free AI Strategy Call</h3>
            <p className="text-gray-600 mb-6">We evaluate your business and find the highest-impact automation opportunities.</p>
            <div className="text-blue-600 text-sm group-hover:translate-y-1 transition-transform duration-300">
              <p>Process analysis • ROI calculation • Custom roadmap</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center animate-bounce-fade-in delay-400 group card-hover-bounce">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 animate-float animate-circuit-pulse delay-500" style={{ animationDelay: '1s' }}>
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 animate-pulse delay-200">
                <span className="text-white text-sm font-bold">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Custom Automation Plan</h3>
            <p className="text-gray-600 mb-6">We build a tailored solution using voice bots, task automation, or analytics — based on your exact needs.</p>
            <div className="text-purple-600 text-sm group-hover:translate-y-1 transition-transform duration-300">
              <p>Custom design • Integration planning • Solution mapping</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center animate-bounce-fade-in delay-600 group card-hover-bounce">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 animate-float animate-circuit-pulse delay-1000" style={{ animationDelay: '2s' }}>
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 animate-pulse delay-400">
                <span className="text-white text-sm font-bold">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">Launch & Save Time</h3>
            <p className="text-gray-600 mb-6">Your system goes live fast. You start saving hours and operating more efficiently right away.</p>
            <div className="text-emerald-600 text-sm group-hover:translate-y-1 transition-transform duration-300">
              <p>Quick deployment • Team training • Instant results</p>
            </div>
          </div>
        </div>

        {/* Timeline Badge */}
        <div className="text-center animate-bounce-fade-in delay-800">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg card-hover-bounce">
            <Rocket className="w-4 h-4 animate-pulse" />
            <span className="font-semibold">Average Timeline: 7-14 Days to Launch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
