
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const FinalCTASection = () => {
  const stats = [
    { value: "7-14", label: "Days to Launch" },
    { value: "24/7", label: "AI Support" },
    { value: "100%", label: "Custom Built" },
    { value: "0", label: "Code Required" }
  ];

  const benefits = [
    {
      icon: "✓",
      title: "Done-for-You Setup",
      description: "We handle everything from setup to integration, so you can focus on your business"
    },
    {
      icon: "✓", 
      title: "Tailored to Your Business",
      description: "Every automation is custom-built around your unique business needs and workflows"
    },
    {
      icon: "✓",
      title: "Fast 7-14 Day Launch", 
      description: "Most projects are ready to launch in 7-14 days, delivering value quickly"
    },
    {
      icon: "✓",
      title: "No Technical Headaches",
      description: "No coding required - we make automation simple and hassle-free"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 via-indigo-800 to-gray-800 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-slate-400/20 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-indigo-400/20 rounded-full animate-neural-network-smooth delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-slate-500/10 rounded-full animate-circuit-pulse-smooth"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-indigo-500/10 rounded-full animate-circuit-pulse-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build Your First AI Agent — <span className="bg-gradient-to-r from-slate-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-shift">Free</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto">
              You don't need to know how AI works — you just need to know it's working for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <ScrollReveal direction="left" delay={200}>
                <Link 
                  to="/demo-call"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform active:scale-95 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10">⏰</span>
                  <span className="relative z-10">Book My Free AI Strategy Call</span>
                </Link>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform active:scale-95 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">📈</span>
                  <span className="relative z-10">Still Curious? Watch the Demo</span>
                </button>
              </ScrollReveal>
            </div>
            
            <ScrollReveal direction="up" delay={400}>
              <p className="text-slate-300">✨ No code required. Just smart automation that works for you.</p>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal direction="up" delay={500}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white mb-16">
            {stats.map((stat, index) => (
              <AnimatedCard key={index} delay={600 + index * 100} bounceDelay={300}>
                <div className="glass p-6 rounded-lg hover-lift transition-all duration-300 hover:scale-105 group border border-white/10 hover:border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10">{stat.value}</div>
                  <div className="text-slate-300 group-hover:text-white transition-colors duration-300 relative z-10">{stat.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </ScrollReveal>

        {/* Benefits Grid */}
        <ScrollReveal direction="up" delay={700}>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} delay={800 + index * 150} bounceDelay={300}>
                <div className="glass rounded-lg p-6 hover-lift transition-all duration-300 hover:scale-105 group border border-white/10 hover:border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center space-x-3 mb-4 relative z-10">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:animate-elastic-bounce transition-transform duration-300">
                      <span className="text-white">{benefit.icon}</span>
                    </div>
                    <span className="text-white font-semibold group-hover:text-slate-200 transition-colors duration-300">{benefit.title}</span>
                  </div>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 relative z-10">{benefit.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
