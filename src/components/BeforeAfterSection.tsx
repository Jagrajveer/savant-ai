
import React from 'react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const BeforeAfterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-24 h-24 border border-red-500/10 rounded-lg animate-circuit-pulse-smooth rotate-45"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 border border-emerald-500/10 rounded-lg animate-circuit-pulse-smooth delay-1000 rotate-12"></div>
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-red-400/30 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-emerald-400/30 rounded-full animate-neural-network-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <AnimatedCard delay={100} bounceDelay={200}>
              <div className="inline-flex items-center space-x-2 glass text-blue-300 px-4 py-2 rounded-full mb-6 border border-blue-500/30 hover:scale-105 transition-all duration-300 group">
                <span className="text-sm group-hover:font-semibold transition-all duration-300">✓ Real Results</span>
              </div>
            </AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What This Looks Like <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">in Real Life</span>
            </h2>
            <p className="text-xl text-gray-300">How SavantAI helped a service business cut scheduling time by 90%</p>
          </div>
        </ScrollReveal>

        {/* Before vs After Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Before AI */}
          <ScrollReveal direction="left" delay={200}>
            <AnimatedCard delay={300} bounceDelay={400}>
              <div className="glass rounded-2xl p-8 border border-red-500/30 bg-red-500/5 hover-lift transition-all duration-500 hover:border-red-500/50 hover:bg-red-500/10 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center space-x-3 mb-6 relative z-10">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/40 animate-circuit-pulse-smooth group-hover:scale-110 group-hover:animate-elastic-bounce transition-transform duration-300">
                    <span className="text-red-400 text-sm">⏰</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">Before AI</h3>
                </div>
                
                <div className="space-y-4 relative z-10">
                  {[
                    "Manual calendar checking",
                    "Back-and-forth emails", 
                    "Phone tag with clients",
                    "Double bookings"
                  ].map((item, index) => (
                    <ScrollReveal key={index} direction="right" delay={400 + index * 100}>
                      <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 group/item">
                        <div className="relative">
                          <span className="text-red-400 animate-pulse">•</span>
                          <div className="absolute inset-0 bg-red-400/20 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 animate-ping"></div>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-red-500/10 rounded-lg border border-red-500/30 transition-all duration-300 hover:bg-red-500/15 relative z-10">
                  <p className="text-red-300 font-semibold group-hover:text-red-200 transition-colors duration-300">4+ hours spent on scheduling per week</p>
                </div>
              </div>
            </AnimatedCard>
          </ScrollReveal>

          {/* After AI */}
          <ScrollReveal direction="right" delay={300}>
            <AnimatedCard delay={400} bounceDelay={500}>
              <div className="glass rounded-2xl p-8 border border-emerald-500/30 bg-emerald-500/5 hover-lift transition-all duration-500 hover:border-emerald-500/50 hover:bg-emerald-500/10 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center space-x-3 mb-6 relative z-10">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/40 animate-circuit-pulse-smooth delay-500 group-hover:scale-110 group-hover:animate-elastic-bounce transition-transform duration-300">
                    <span className="text-emerald-400 text-sm">📅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">After AI</h3>
                </div>
                
                <div className="space-y-4 relative z-10">
                  {[
                    "Instant AI scheduling",
                    "Smart availability sync",
                    "Automated reminders", 
                    "Zero conflicts"
                  ].map((item, index) => (
                    <ScrollReveal key={index} direction="left" delay={500 + index * 100}>
                      <div className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 group/item">
                        <div className="relative">
                          <span className="text-emerald-400 animate-pulse">•</span>
                          <div className="absolute inset-0 bg-emerald-400/20 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 animate-ping"></div>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/15 relative z-10">
                  <p className="text-emerald-300 font-semibold group-hover:text-emerald-200 transition-colors duration-300">Just 20 minutes of oversight weekly</p>
                </div>
              </div>
            </AnimatedCard>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={600}>
          <div className="text-center">
            <button className="text-blue-400 hover:text-blue-300 transition-all duration-300 text-lg font-medium hover:scale-105 transform group relative">
              <span className="relative z-10">See how we can automate your workflows</span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <div className="absolute inset-0 bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
