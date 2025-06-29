import React, { useRef, useState, useEffect } from 'react';
import { Bot, Zap, BarChart3, Puzzle, Sparkles, Brain, Target, Cog } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate progress based on section position in viewport
      const startOffset = windowHeight * 0.2; // Start animation when section is 20% visible
      const endOffset = windowHeight * 0.8; // End animation when section is 80% through viewport
      
      let progress = 0;
      
      if (rect.top <= startOffset && rect.bottom >= endOffset) {
        // Section is in the animation zone
        const scrollableDistance = sectionHeight - (endOffset - startOffset);
        const scrolled = startOffset - rect.top;
        progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      } else if (rect.bottom < endOffset) {
        // Section has scrolled past
        progress = 1;
      }

      setScrollProgress(progress);

      // Apply horizontal transform to track
      const maxTranslateX = (features.length - 1) * 100;
      const translateX = progress * maxTranslateX;
      trackRef.current.style.transform = `translateX(-${translateX}%)`;

      // Apply opacity to individual cards
      const cards = trackRef.current.children;
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const cardProgress = progress * (features.length - 1);
        const cardCenter = i;
        const distance = Math.abs(cardProgress - cardCenter);
        
        // Calculate opacity based on distance from center
        let opacity = 1;
        if (distance > 0.5) {
          opacity = Math.max(0.3, 1 - (distance - 0.5) * 2);
        }
        
        card.style.opacity = opacity.toString();
        
        // Add scale effect for active card
        const scale = distance < 0.5 ? 1 + (0.05 * (1 - distance * 2)) : 1;
        const cardInner = card.querySelector('.feature-card-inner') as HTMLElement;
        if (cardInner) {
          cardInner.style.transform = `scale(${scale})`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [features.length]);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
      style={{ minHeight: '200vh' }} // Make section taller to allow for scroll animation
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 sticky top-20 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-2xl p-8 z-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We Can <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">Automate for You</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From customer interactions to back-office tasks, we build custom AI solutions that make your business run smoother.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal Slider Container */}
        <div className="relative w-full h-[600px] overflow-hidden mt-20">
          <div 
            ref={trackRef}
            className="flex w-full h-full transition-transform duration-100 ease-out"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-full h-full flex items-center justify-center px-8"
              >
                <div className={`feature-card-inner glass rounded-2xl p-8 hover:shadow-2xl hover:${feature.glowColor} transition-all duration-500 border border-gray-700 hover-lift relative overflow-hidden gpu-accelerated max-w-2xl w-full`}>
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon container with enhanced animations */}
                  <div className="relative mb-6">
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
                  
                  <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-blue-400 relative z-10">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg relative z-10">{feature.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 relative z-10">
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
                  
                  {/* Interactive corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-bl ${feature.gradient} opacity-10 rounded-bl-3xl`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12 space-x-2">
          {features.map((_, index) => {
            const isActive = Math.round(scrollProgress * (features.length - 1)) === index;
            return (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;