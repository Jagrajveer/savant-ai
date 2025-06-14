
import React from 'react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Still doing things <span className="text-red-500">manually</span> that could be automated?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Many growing businesses waste time and money on repetitive tasks, slow systems, and disconnected tools. 
            SavantAI builds smart, easy-to-use automations that work for you — so you can focus on scaling, not babysitting your back-end.
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Current Challenges */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-sm">⚠️</span>
              </div>
              <span className="text-red-600 font-semibold">Current Challenges</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Manual Work is Holding You Back</h3>
            
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Time-Consuming Tasks</h4>
                    <p className="text-gray-600">Repetitive tasks and manual processes eat up valuable time that could be spent on growth</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">💸</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">High Operational Costs</h4>
                    <p className="text-gray-600">Manual work and inefficient processes lead to unnecessary expenses and resource waste</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">🔗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Disconnected Systems</h4>
                    <p className="text-gray-600">Multiple tools and platforms that don't work together create bottlenecks and confusion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 text-sm">✓</span>
              </div>
              <span className="text-emerald-600 font-semibold">Our Solution</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Smart Automation Made Simple</h3>
            
            <div className="space-y-6">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Done-for-You Setup</h4>
                    <p className="text-gray-600">We handle everything from setup to integration, so you can focus on your business</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tailored Solutions</h4>
                    <p className="text-gray-600">Every automation is custom-built around your unique business needs and workflows</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fast Implementation</h4>
                    <p className="text-gray-600">Most projects are ready to launch in 7-14 days, delivering value quickly</p>
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
