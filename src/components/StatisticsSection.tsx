import React from 'react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const StatisticsSection = () => {
  const statistics = [
    {
      title: "Projects completed",
      value: "53+",
      description: "We've successfully completed 53 top-tier projects.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Satisfied customers",
      value: "97%",
      description: "We ensure a 97% satisfaction level for our clients.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Hours saved per day",
      value: "3h+",
      description: "Our solutions save our clients an average of 3 hours of work per day.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cost saved per month",
      value: "80k",
      description: "Our solutions save our clients an average of $80,000 per month.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400/20 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400/20 rounded-full animate-neural-network-smooth delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-purple-500/10 rounded-full animate-circuit-pulse-smooth"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-blue-500/10 rounded-full animate-circuit-pulse-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <ScrollReveal key={index} direction="up">
              <AnimatedCard>
                <div className="glass rounded-2xl p-8 border border-gray-700/50 hover-lift transition-all duration-500 group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {stat.title}
                    </h3>
                    <div className={`text-5xl font-bold mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;