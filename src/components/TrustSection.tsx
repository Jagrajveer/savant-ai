import React from 'react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const TrustSection = () => {
  const trustItems = [
    {
      icon: "✓",
      title: "Done-for-You Setup",
      description: "We build and integrate everything for you",
      color: "blue",
      delay: 0
    },
    {
      icon: "📈",
      title: "Tailored to You", 
      description: "No generic bots — every solution is built around your business",
      color: "purple",
      delay: 200
    },
    {
      icon: "⏰",
      title: "Fast Turnaround",
      description: "Most projects are ready to launch in 7-14 days",
      color: "blue", 
      delay: 400
    },
    {
      icon: "🛡️",
      title: "No Technical Headaches",
      description: "No code. No confusion. Just results.",
      color: "purple",
      delay: 600
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-data-flow-smooth"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-500/20 to-transparent animate-data-flow-smooth delay-1000"></div>
        <div className="absolute top-10 right-20 w-4 h-4 bg-blue-400/30 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-10 left-20 w-3 h-3 bg-purple-400/30 rounded-full animate-neural-network-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Growing Businesses <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">Choose SavantAI</span>
            </h2>
            <p className="text-xl text-gray-300">We're here to simplify your growth with automation — not complicate it.</p>
          </div>
        </ScrollReveal>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <AnimatedCard 
              key={index}
              className="text-center group"
            >
              <div className={`glass rounded-xl p-6 border border-gray-700 hover:border-${item.color}-500/50 transition-all duration-500 hover-lift gpu-accelerated`}>
                <div className={`w-16 h-16 bg-${item.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-${item.color}-500/30 animate-circuit-pulse-smooth group-hover:animate-elastic-bounce`}>
                  <span className={`text-${item.color}-400 text-2xl`}>{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;