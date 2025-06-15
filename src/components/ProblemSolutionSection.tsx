
import React from 'react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent animate-data-flow"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-indigo-500/20 to-transparent animate-data-flow delay-1000"></div>
        <div className="absolute top-10 right-20 w-4 h-4 bg-gray-400/30 rounded-full animate-neural-network"></div>
        <div className="absolute bottom-10 left-20 w-3 h-3 bg-stone-400/30 rounded-full animate-neural-network delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still doing things <span className="text-red-400">manually</span> that could be automated?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Many growing businesses waste time and money on repetitive tasks, slow systems, and disconnected tools. 
            SavantAI builds smart, easy-to-use automations that work for you — so you can focus on scaling, not babysitting your back-end.
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Current Challenges */}
          <div className="animate-bounce-fade-in delay-200">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-red-400/20 rounded-full flex items-center justify-center border border-red-400/30 animate-circuit-pulse">
                <span className="text-red-400 text-sm">⚠️</span>
              </div>
              <span className="text-red-400 font-semibold">Current Challenges</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8">Manual Work is Holding You Back</h3>
            
            <div className="space-y-6">
              <div className="glass p-6 rounded-lg border border-red-400/20 bg-red-400/5 card-hover-bounce">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-red-400/30 animate-circuit-pulse">
                    <span className="text-red-400 text-sm">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Time-Consuming Tasks</h4>
                    <p className="text-gray-300">Repetitive tasks and manual processes eat up valuable time that could be spent on growth</p>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-lg border border-red-400/20 bg-red-400/5 card-hover-bounce">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-red-400/30 animate-circuit-pulse">
                    <span className="text-red-400 text-sm">💸</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">High Operational Costs</h4>
                    <p className="text-gray-300">Manual work and inefficient processes lead to unnecessary expenses and resource waste</p>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-lg border border-red-400/20 bg-red-400/5 card-hover-bounce">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-red-400/30 animate-circuit-pulse">
                    <span className="text-red-400 text-sm">🔗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Disconnected Systems</h4>
                    <p className="text-gray-300">Multiple tools and platforms that don't work together create bottlenecks and confusion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div className="animate-bounce-fade-in delay-400">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-stone-400/20 rounded-full flex items-center justify-center border border-stone-400/30 animate-circuit-pulse">
                <span className="text-stone-400 text-sm">✓</span>
              </div>
              <span className="text-stone-400 font-semibold">Our Solution</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8">Smart Automation Made Simple</h3>
            
            <div className="space-y-6">
              <div className="glass p-6 rounded-lg border border-stone-400/20 bg-stone-400/5 card-hover-bounce">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-stone-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-stone-400/30 animate-circuit-pulse">
                    <span className="text-stone-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Done-for-You Setup</h4>
                    <p className="text-gray-300">We handle everything from setup to integration, so you can focus on your business</p>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-lg border border-stone-400/20 bg-stone-400/5 card-hover-bounce">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-stone-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-stone-400/30 animate-circuit-pulse">
                    <span className="text-stone-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Tailored Solutions</h4>
                    <p className="text-gray-300">Every automation is custom-built around your unique business needs and workflows</p>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-lg border border-stone-400/20 bg-stone-400/5 card-hover-bounce">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-stone-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-stone-400/30 animate-circuit-pulse">
                    <span className="text-stone-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Fast Implementation</h4>
                    <p className="text-gray-300">Most projects are ready to launch in 7-14 days, delivering value quickly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
