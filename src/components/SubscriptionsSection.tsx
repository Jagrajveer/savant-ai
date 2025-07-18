import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const SubscriptionsSection = () => {
  const subscriptions = [
    {
      name: "Basic",
      description: "For businesses looking to start with AI and automations.",
      features: [
        "1 Developer",
        "Basic chatbots & Model",
        "5 Monthly Check Ups",
        "Cancel & pause anytime"
      ],
      gradient: "from-purple-600 to-purple-700",
      popular: false
    },
    {
      name: "Professional",
      description: "For businesses looking to outperform their competition with AI and automations.",
      features: [
        "2 developers",
        "Custom chatbots & Models",
        "15 Monthly Check Ups",
        "Cancel & pause anytime"
      ],
      gradient: "from-blue-600 to-purple-600",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For businesses looking to fully leverage AI and automations to become an industry leader.",
      features: [
        "3 developers",
        "Premium Custom chatbots & Models",
        "Unlimited Check Ups",
        "Cancel & pause anytime"
      ],
      gradient: "from-purple-600 to-pink-600",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400/20 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400/20 rounded-full animate-neural-network-smooth delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-purple-500/10 rounded-full animate-circuit-pulse-smooth"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-blue-500/10 rounded-full animate-circuit-pulse-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">Subscriptions</span>
            </h2>
            <p className="text-xl text-gray-300">Three different subscriptions to match your companies' needs.</p>
          </div>
        </ScrollReveal>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {subscriptions.map((subscription, index) => (
            <ScrollReveal key={index} direction="up">
              <AnimatedCard>
                <div className={`glass rounded-2xl p-8 border border-gray-700/50 hover-lift transition-all duration-500 group relative overflow-hidden ${subscription.popular ? 'ring-2 ring-purple-500/50' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${subscription.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {subscription.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${subscription.gradient} bg-clip-text text-transparent`}>
                      {subscription.name}
                    </h3>
                    <p className="text-gray-300 mb-8 group-hover:text-gray-200 transition-colors duration-300">
                      {subscription.description}
                    </p>
                    
                    <Link
                      to="/demo-call"
                      className={`w-full bg-gradient-to-r ${subscription.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 inline-block text-center mb-8`}
                    >
                      Book Your <span className="text-purple-200">Call</span>
                    </Link>
                    
                    <div className="space-y-4">
                      {subscription.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/40">
                            <Check className="w-3 h-3 text-purple-400" />
                          </div>
                          <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
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

export default SubscriptionsSection;