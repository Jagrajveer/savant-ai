
import React from 'react';
import { MessageCircle, Settings, Rocket, Users, Clock, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: MessageCircle,
      secondaryIcons: [Users, Clock],
      number: 1,
      title: "Free AI Strategy Call",
      description: "We evaluate your business and find the highest-impact automation opportunities.",
      features: ["Process analysis", "ROI calculation", "Custom roadmap"],
      gradient: "from-slate-500 to-slate-600",
      color: "slate"
    },
    {
      icon: Settings,
      secondaryIcons: [TrendingUp, Sparkles],
      number: 2,
      title: "Custom Automation Plan", 
      description: "We build a tailored solution using voice bots, task automation, or analytics — based on your exact needs.",
      features: ["Custom design", "Integration planning", "Solution mapping"],
      gradient: "from-indigo-500 to-indigo-600",
      color: "indigo"
    },
    {
      icon: Rocket,
      secondaryIcons: [CheckCircle, Sparkles],
      number: 3,
      title: "Launch & Save Time",
      description: "Your system goes live fast. You start saving hours and operating more efficiently right away.",
      features: ["Quick deployment", "Team training", "Instant results"],
      gradient: "from-gray-500 to-gray-600", 
      color: "gray"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Tech Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute top-20 left-20 w-3 h-3 bg-slate-400/20 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-indigo-400/20 rounded-full animate-neural-network-smooth delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-slate-500/10 rounded-full animate-circuit-pulse-smooth"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-indigo-500/10 rounded-full animate-circuit-pulse-smooth delay-1000"></div>
        {/* Connection lines between steps */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-slate-400/20 via-indigo-400/40 to-gray-400/20 animate-data-flow-smooth"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Here's How We Set You Up for <span className="bg-gradient-to-r from-slate-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-shift">AI-Powered Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process gets you from manual work to smart automation in just days, not months.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={200 + index * 200}>
              <AnimatedCard delay={300 + index * 150} bounceDelay={400} className="text-center group relative">
                {/* Connection line to next step */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-gradient-to-r from-slate-400/40 to-transparent animate-data-flow-smooth" style={{ animationDelay: `${index * 500}ms` }}></div>
                )}
                
                <div className="relative mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 animate-float-smooth animate-circuit-pulse-smooth relative overflow-hidden`} style={{ animationDelay: `${index * 1000}ms` }}>
                    {/* Animated background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                    
                    {/* Primary icon */}
                    <step.icon className="w-10 h-10 text-white transition-all duration-500 group-hover:rotate-12 relative z-10" />
                    
                    {/* Secondary floating icons */}
                    {step.secondaryIcons.map((SecondaryIcon, iconIndex) => (
                      <div key={iconIndex} className={`absolute ${iconIndex === 0 ? '-top-1 -right-1' : '-bottom-1 -left-1'} opacity-0 group-hover:opacity-100 transition-all duration-500`} style={{ transitionDelay: `${iconIndex * 200}ms` }}>
                        <SecondaryIcon className={`w-4 h-4 text-${step.color}-300 animate-bounce`} style={{ animationDelay: `${iconIndex * 300}ms` }} />
                      </div>
                    ))}
                    
                    {/* Orbiting particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                      <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                      <div className="absolute left-0 top-1/2 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
                    </div>
                  </div>
                  <div className={`absolute -top-3 -right-3 w-10 h-10 bg-${step.color}-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 animate-pulse border-2 border-${step.color}-500`} style={{ animationDelay: `${index * 200}ms` }}>
                    <span className="text-white text-lg font-bold">{step.number}</span>
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-${step.color}-400 transition-colors duration-300`}>{step.title}</h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{step.description}</p>
                
                <div className={`text-${step.color}-400 text-sm group-hover:translate-y-1 transition-transform duration-300`}>
                  {step.features.map((feature, featureIndex) => (
                    <ScrollReveal key={featureIndex} direction="up" delay={400 + index * 150 + featureIndex * 100}>
                      <div className="flex items-center justify-center space-x-2 mb-2 group/feature hover:scale-105 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 group-hover/feature:animate-elastic-bounce" />
                        <span className="group-hover/feature:font-semibold transition-all duration-300">{feature}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Enhanced Timeline Badge */}
        <ScrollReveal direction="scale" delay={600}>
          <div className="text-center">
            <AnimatedCard delay={700} bounceDelay={300}>
              <div className="inline-flex items-center space-x-3 glass text-slate-300 px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg border border-gray-600 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <Rocket className="w-5 h-5 animate-pulse group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="font-semibold text-lg relative z-10 group-hover:text-white transition-colors duration-300">Average Timeline: 7-14 Days to Launch</span>
              </div>
            </AnimatedCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessSection;
