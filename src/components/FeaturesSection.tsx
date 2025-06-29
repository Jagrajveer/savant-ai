import React from 'react';
import { Bot, Zap, BarChart3, Puzzle, Sparkles, Brain, Target, Cog } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      icon: Bot,
      title: "Voice AI",
      description: "AI-powered chat and phone agents that answer questions, qualify leads, and support customers — 24/7.",
      capabilities: ["24/7 customer support", "Lead qualification", "Automated responses", "Natural conversations"],
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/25",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      number: "02",
      icon: Zap,
      title: "Task Automation",
      description: "Free your team from busywork like scheduling, follow-ups, and data entry.",
      capabilities: ["Automated scheduling", "Smart follow-ups", "Data processing", "Workflow automation"],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/25",
      imageUrl: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Turn complex data into decisions with easy-to-read AI-powered dashboards.",
      capabilities: ["Real-time metrics", "Smart insights", "Custom dashboards", "Performance tracking"],
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "shadow-emerald-500/25",
      imageUrl: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      number: "04",
      icon: Puzzle,
      title: "Custom AI Solutions",
      description: "Got a unique use case? We'll build something just for your workflow.",
      capabilities: ["Custom development", "Unique solutions", "Tailored AI", "Seamless integration"],
      gradient: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/25",
      imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
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
        <div className="space-y-16">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={index}
              className="group"
            >
              <div className={`glass rounded-2xl p-8 hover:shadow-2xl hover:${feature.glowColor} transition-all duration-500 border border-gray-700 hover-lift relative overflow-hidden gpu-accelerated`}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Feature Header */}
                <div className="relative mb-8">
                  {/* Feature Number */}
                  <ScrollReveal direction="up">
                    <div className="text-4xl font-bold text-gray-500 mb-4 relative z-10">
                      {feature.number}
                    </div>
                  </ScrollReveal>
                  
                  {/* Icon and Title */}
                  <ScrollReveal direction="up">
                    <div className="flex items-center space-x-3 mb-6 relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:animate-elastic-bounce animate-circuit-pulse-smooth relative overflow-hidden`}>
                        <feature.icon className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-110 relative z-10" />
                        
                        {/* Orbiting particles */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                          <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                          <div className="absolute left-0 top-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">{feature.title}</h3>
                    </div>
                  </ScrollReveal>
                </div>
                
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                  {/* Left Column - Text Content */}
                  <div className="space-y-6">
                    {/* Description */}
                    <ScrollReveal direction="up">
                      <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </ScrollReveal>
                    
                    {/* Capabilities */}
                    <ScrollReveal direction="up" delay={200}>
                      <div className="grid grid-cols-2 gap-3">
                        {feature.capabilities.map((capability, capIndex) => (
                          <div 
                            key={capIndex}
                            className="flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300 relative"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 group-hover:animate-elastic-bounce transition-transform duration-300 animate-pulse relative">
                              {/* Ripple effect */}
                              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                            </div>
                            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </ScrollReveal>
                  </div>
                  
                  {/* Right Column - Image Content */}
                  <div className="flex justify-center">
                    <ScrollReveal direction="scale" delay={400}>
                      <div className="relative group/image">
                        <img 
                          src={feature.imageUrl} 
                          alt={feature.title}
                          className="w-full h-64 rounded-lg object-cover shadow-lg transition-all duration-500 group-hover/image:scale-105 group-hover/image:shadow-2xl"
                        />
                        {/* Image overlay effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover/image:opacity-20 transition-opacity duration-500 rounded-lg`}></div>
                        
                        {/* Floating accent */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-0 group-hover/image:opacity-100 transition-all duration-500 animate-bounce">
                          <Sparkles className="w-4 h-4 text-white m-1" />
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
                
                {/* Interactive corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-bl ${feature.gradient} opacity-10 rounded-bl-3xl`}></div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;