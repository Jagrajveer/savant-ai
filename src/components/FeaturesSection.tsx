import React from 'react';
import { Bot, Zap, BarChart3, Puzzle, Sparkles, Brain, Target, Cog } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      secondaryIcon: Brain,
      title: "Voice AI",
      description: "AI-powered chat and phone agents that answer questions, qualify leads, and support customers — 24/7.",
      capabilities: ["24/7 customer support", "Lead qualification", "Automated responses", "Natural conversations"],
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/25"
    },
    {
      icon: Zap,
      secondaryIcon: Target,
      title: "Task Automation",
      description: "Free your team from busywork like scheduling, follow-ups, and data entry.",
      capabilities: ["Automated scheduling", "Smart follow-ups", "Data processing", "Workflow automation"],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/25"
    },
    {
      icon: BarChart3,
      secondaryIcon: Sparkles,
      title: "Analytics & Insights",
      description: "Turn complex data into decisions with easy-to-read AI-powered dashboards.",
      capabilities: ["Real-time metrics", "Smart insights", "Custom dashboards", "Performance tracking"],
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "shadow-emerald-500/25"
    },
    {
      icon: Puzzle,
      secondaryIcon: Cog,
      title: "Custom AI Solutions",
      description: "Got a unique use case? We'll build something just for your workflow.",
      capabilities: ["Custom development", "Unique solutions", "Tailored AI", "Seamless integration"],
      gradient: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/25"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced Background AI Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/10 rounded-full animate-circuit-pulse-smooth delay-0"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-purple-500/10 rounded-full animate-circuit-pulse-smooth delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-neural-network-smooth delay-500"></div>
        {/* Neural network connection lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-data-flow-smooth"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-data-flow-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We Can <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">Automate for You</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From customer interactions to back-office tasks, we build custom AI solutions that make your business run smoother.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index}
              direction="up"
              delay={index * 150}
              className="group"
            >
              <div className={`glass rounded-2xl p-8 hover:shadow-2xl hover:${feature.glowColor} transition-all duration-500 border border-gray-700 hover-lift relative overflow-hidden gpu-accelerated`}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Main content with flex layout */}
                <div className="flex items-start space-x-6 relative z-10">
                  {/* Icon container (Left Side) */}
                  <ScrollReveal direction="up" delay={index * 150 + 100}>
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:animate-elastic-bounce animate-circuit-pulse-smooth relative overflow-hidden`}>
                        {/* Primary icon */}
                        <feature.icon className="w-10 h-10 text-white transition-all duration-500 group-hover:scale-110 relative z-10" />
                        
                        {/* Secondary floating icon */}
                        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                          <div className={`w-6 h-6 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center animate-bounce`}>
                            <feature.secondaryIcon className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        
                        {/* Orbiting particles */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                          <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                          <div className="absolute left-0 top-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  {/* Text content (Right Side) */}
                  <ScrollReveal direction="scale" delay={index * 150 + 200} className="flex-1">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-blue-400">{feature.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {feature.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300 relative">
                            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 group-hover:animate-elastic-bounce transition-transform duration-300 animate-pulse relative">
                              {/* Ripple effect */}
                              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                            </div>
                            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                
                {/* Interactive corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-bl ${feature.gradient} opacity-10 rounded-bl-3xl`}></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;