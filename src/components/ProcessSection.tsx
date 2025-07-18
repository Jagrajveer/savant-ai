import React from 'react';
import { Search, Code, Wrench, BarChart3, CheckCircle, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      number: "01",
      title: "Analyze",
      description: "We assess your workflows to identify high-impact AI opportunities.",
      gradient: "from-purple-500 to-purple-600",
      color: "purple"
    },
    {
      icon: Code,
      number: "02", 
      title: "Build & Implement",
      description: "We build tailored AI solutions, prioritizing quality and security at every step.",
      gradient: "from-blue-500 to-blue-600",
      color: "blue"
    },
    {
      icon: Wrench,
      number: "03",
      title: "Maintain & Improve",
      description: "We deliver ongoing maintenance and performance enhancements to maximize your AI investment.",
      gradient: "from-purple-500 to-blue-500",
      color: "purple"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Tech Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400/20 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400/20 rounded-full animate-neural-network-smooth delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-purple-500/10 rounded-full animate-circuit-pulse-smooth"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-blue-500/10 rounded-full animate-circuit-pulse-smooth delay-1000"></div>
        {/* Connection lines between steps */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-purple-400/20 via-blue-400/40 to-purple-400/20 animate-data-flow-smooth"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">process</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <ScrollReveal key={index} direction="up">
              <AnimatedCard className="text-left group relative">
                {/* Connection line to next step */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-gradient-to-r from-purple-400/40 to-transparent animate-data-flow-smooth" style={{ animationDelay: `${index * 500}ms` }}></div>
                )}
                
                <div className="glass rounded-2xl p-8 border border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover-lift relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 animate-circuit-pulse-smooth relative overflow-hidden`} style={{ animationDelay: `${index * 1000}ms` }}>
                        <step.icon className="w-8 h-8 text-white transition-all duration-500 group-hover:rotate-12 relative z-10" />
                      </div>
                      <div className={`text-6xl font-bold text-${step.color}-400/20 group-hover:text-${step.color}-400/40 transition-colors duration-300`}>
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-${step.color}-400 transition-colors duration-300`}>{step.title}</h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{step.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Code Editor and Statistics Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left - Process Icons */}
          <ScrollReveal direction="left">
            <div className="glass rounded-2xl p-8 border border-gray-700/50 hover-lift transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="grid grid-cols-3 gap-6 relative z-10">
                {/* Process Icons */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/40">
                    <Search className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/40">
                    <BarChart3 className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/40">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/40">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/40">
                    <Wrench className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/40">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Center - Code Editor */}
          <ScrollReveal direction="up">
            <div className="glass rounded-2xl p-6 border border-gray-700/50 bg-gray-900/50 hover-lift transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Editor Header */}
              <div className="flex items-center space-x-2 mb-4 relative z-10">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex space-x-4 ml-8">
                  <span className="text-gray-400 text-sm">HTML</span>
                  <span className="text-purple-400 text-sm font-semibold">React</span>
                  <span className="text-gray-400 text-sm">CSS</span>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="font-mono text-sm relative z-10">
                <div className="space-y-1">
                  <div className="flex">
                    <span className="text-gray-500 w-6">1</span>
                    <span className="text-gray-400">&lt;html lang="en"&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-6">2</span>
                    <span className="text-gray-400">&lt;head&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-6">3</span>
                    <span className="text-gray-400 ml-4">&lt;meta charset="UTF-8"&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-6">4</span>
                    <span className="text-gray-400 ml-4">&lt;meta name="viewport"</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-6">5</span>
                    <span className="text-gray-400 ml-8">content="width=device-</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-6">6</span>
                    <span className="text-gray-400 ml-8">width, initial-scale=1.0"&gt;</span>
                    <span className="text-purple-400 animate-pulse ml-1">|</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Statistics */}
          <ScrollReveal direction="right">
            <div className="space-y-4">
              <div className="glass rounded-xl p-4 border border-gray-700/50 hover-lift transition-all duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Software speed</span>
                  <span className="text-green-400 font-semibold">+48%</span>
                </div>
              </div>
              
              <div className="glass rounded-xl p-4 border border-gray-700/50 hover-lift transition-all duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Workflow efficiency</span>
                  <span className="text-green-400 font-semibold">+25%</span>
                </div>
              </div>
              
              <div className="glass rounded-xl p-4 border border-gray-700/50 hover-lift transition-all duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Operational cost</span>
                  <span className="text-green-400 font-semibold">-11%</span>
                </div>
              </div>
              
              <div className="glass rounded-xl p-4 border border-gray-700/50 hover-lift transition-all duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Update available</span>
                  <span className="text-purple-400 font-semibold">Update ↑</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;