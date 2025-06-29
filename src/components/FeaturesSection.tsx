import React, { useEffect, useRef, useState } from 'react';
import { Bot, Zap, BarChart3, Puzzle, Sparkles, Brain, Target, Cog } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    {
      icon: Bot,
      secondaryIcon: Brain,
      title: "Voice AI",
      description: "AI-powered chat and phone agents that answer questions, qualify leads, and support customers — 24/7.",
      capabilities: ["24/7 customer support", "Lead qualification", "Automated responses", "Natural conversations"],
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/25",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Zap,
      secondaryIcon: Target,
      title: "Task Automation",
      description: "Free your team from busywork like scheduling, follow-ups, and data entry.",
      capabilities: ["Automated scheduling", "Smart follow-ups", "Data processing", "Workflow automation"],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/25",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: BarChart3,
      secondaryIcon: Sparkles,
      title: "Analytics & Insights",
      description: "Turn complex data into decisions with easy-to-read AI-powered dashboards.",
      capabilities: ["Real-time metrics", "Smart insights", "Custom dashboards", "Performance tracking"],
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "shadow-emerald-500/25",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Puzzle,
      secondaryIcon: Cog,
      title: "Custom AI Solutions",
      description: "Got a unique use case? We'll build something just for your workflow.",
      capabilities: ["Custom development", "Unique solutions", "Tailored AI", "Seamless integration"],
      gradient: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/25",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate when the section should start and end being pinned
      const startPin = -rect.top;
      const endPin = sectionHeight - windowHeight;
      
      if (startPin >= 0 && startPin <= endPin) {
        // Section is pinned
        const progress = startPin / endPin;
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
        
        // Calculate which feature should be active
        const featureProgress = progress * (features.length - 1);
        const currentIndex = Math.floor(featureProgress);
        setActiveFeatureIndex(Math.min(currentIndex, features.length - 1));
      } else if (startPin < 0) {
        setScrollProgress(0);
        setActiveFeatureIndex(0);
      } else {
        setScrollProgress(1);
        setActiveFeatureIndex(features.length - 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
      style={{ height: `${400 + (features.length * 100)}vh` }} // Dynamic height for scroll distance
    >
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

      {/* Sticky/Pinned Container */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
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

          {/* Features Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="relative h-96 overflow-hidden">
              {features.map((feature, index) => {
                const isActive = index === activeFeatureIndex;
                const featureProgress = scrollProgress * (features.length - 1);
                const individualProgress = Math.max(0, Math.min(1, featureProgress - index));
                
                return (
                  <AnimatedCard 
                    key={index}
                    activeProgress={individualProgress}
                    isActive={isActive}
                    className="absolute inset-0 transition-all duration-500"
                  >
                    <div className="space-y-6">
                      {/* Icon container */}
                      <div className="relative mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center transition-all duration-500 animate-circuit-pulse-smooth relative overflow-hidden`}>
                          <feature.icon className="w-10 h-10 text-white transition-all duration-500 relative z-10" />
                          
                          {/* Secondary floating icon */}
                          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform">
                            <div className={`w-6 h-6 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center animate-bounce`}>
                              <feature.secondaryIcon className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {feature.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center space-x-2 transition-all duration-300 relative">
                            <div className="w-2 h-2 bg-blue-400 rounded-full transition-transform duration-300 animate-pulse relative">
                              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                            </div>
                            <span className="text-sm text-gray-400 transition-colors duration-300">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>

            {/* Right Side - Image */}
            <div className="relative h-96 overflow-hidden rounded-2xl">
              {features.map((feature, index) => {
                const isActive = index === activeFeatureIndex;
                const featureProgress = scrollProgress * (features.length - 1);
                const individualProgress = Math.max(0, Math.min(1, featureProgress - index));
                
                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-700"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: `translateY(${isActive ? 0 : 20}px) scale(${isActive ? 1 : 0.95})`
                    }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl"
                      style={{
                        transform: `translateY(${(1 - individualProgress) * 30}px)`,
                        opacity: individualProgress
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeFeatureIndex ? 'bg-blue-400 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;