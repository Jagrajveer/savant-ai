
import React from 'react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent animate-data-flow-smooth"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-indigo-500/20 to-transparent animate-data-flow-smooth delay-1000"></div>
        <div className="absolute top-10 right-20 w-4 h-4 bg-gray-400/30 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-10 left-20 w-3 h-3 bg-stone-400/30 rounded-full animate-neural-network-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still doing things <span className="text-red-400 animate-gradient-shift">manually</span> that could be automated?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Many growing businesses waste time and money on repetitive tasks, slow systems, and disconnected tools. 
              SavantAI builds smart, easy-to-use automations that work for you — so you can focus on scaling, not babysitting your back-end.
            </p>
          </div>
        </ScrollReveal>

        {/* Problem vs Solution Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Current Challenges */}
          <ScrollReveal direction="left" delay={200}>
            <div className="group">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-6 h-6 bg-red-400/20 rounded-full flex items-center justify-center border border-red-400/30 animate-circuit-pulse-smooth">
                  <span className="text-red-400 text-sm">⚠️</span>
                </div>
                <span className="text-red-400 font-semibold">Current Challenges</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-red-400 transition-colors duration-300">Manual Work is Holding You Back</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "⏰",
                    title: "Time-Consuming Tasks",
                    description: "Repetitive tasks and manual processes eat up valuable time that could be spent on growth"
                  },
                  {
                    icon: "💸",
                    title: "High Operational Costs", 
                    description: "Manual work and inefficient processes lead to unnecessary expenses and resource waste"
                  },
                  {
                    icon: "🔗",
                    title: "Disconnected Systems",
                    description: "Multiple tools and platforms that don't work together create bottlenecks and confusion"
                  }
                ].map((item, index) => (
                  <AnimatedCard key={index} delay={400 + index * 150} bounceDelay={300}>
                    <div className="glass p-6 rounded-lg border border-red-400/20 bg-red-400/5 hover-lift transition-all duration-300 hover:border-red-400/40 hover:bg-red-400/10 group">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-red-400/30 animate-circuit-pulse-smooth group-hover:scale-110 group-hover:animate-elastic-bounce transition-transform duration-300">
                          <span className="text-red-400 text-sm">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">{item.title}</h4>
                          <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Our Solution */}
          <ScrollReveal direction="right" delay={300}>
            <div className="group">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-6 h-6 bg-stone-400/20 rounded-full flex items-center justify-center border border-stone-400/30 animate-circuit-pulse-smooth">
                  <span className="text-stone-400 text-sm">✓</span>
                </div>
                <span className="text-stone-400 font-semibold">Our Solution</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-stone-400 transition-colors duration-300">Smart Automation Made Simple</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "✓",
                    title: "Done-for-You Setup",
                    description: "We handle everything from setup to integration, so you can focus on your business"
                  },
                  {
                    icon: "✓",
                    title: "Tailored Solutions",
                    description: "Every automation is custom-built around your unique business needs and workflows"
                  },
                  {
                    icon: "✓",
                    title: "Fast Implementation",
                    description: "Most projects are ready to launch in 7-14 days, delivering value quickly"
                  }
                ].map((item, index) => (
                  <AnimatedCard key={index} delay={500 + index * 150} bounceDelay={300}>
                    <div className="glass p-6 rounded-lg border border-stone-400/20 bg-stone-400/5 hover-lift transition-all duration-300 hover:border-stone-400/40 hover:bg-stone-400/10 group">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-stone-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-stone-400/30 animate-circuit-pulse-smooth group-hover:scale-110 group-hover:animate-elastic-bounce transition-transform duration-300">
                          <span className="text-stone-400 text-sm">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2 group-hover:text-stone-400 transition-colors duration-300">{item.title}</h4>
                          <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
