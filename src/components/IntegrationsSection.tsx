import React from 'react';
import { Video, Calendar, Workflow } from 'lucide-react';
import { SiSalesforce, SiHubspot, SiGmail, SiSlack, SiZoom } from 'react-icons/si';
import { FaCalendarAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const IntegrationsSection = () => {
  const integrations = [
    { 
      name: "Salesforce", 
      icon: SiSalesforce, 
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      hoverColor: "group-hover:text-blue-300"
    },
    { 
      name: "HubSpot", 
      icon: SiHubspot, 
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      hoverColor: "group-hover:text-orange-300"
    },
    { 
      name: "Gmail", 
      icon: SiGmail, 
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      hoverColor: "group-hover:text-red-300"
    },
    { 
      name: "Calendly", 
      icon: FaCalendarAlt, 
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      hoverColor: "group-hover:text-blue-300"
    },
    { 
      name: "Slack", 
      icon: SiSlack, 
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      hoverColor: "group-hover:text-purple-300"
    },
    { 
      name: "Zoom", 
      icon: SiZoom, 
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      hoverColor: "group-hover:text-blue-300"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-gray-400/20 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400/20 rounded-full animate-neural-network-smooth delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-gray-500/10 rounded-full animate-circuit-pulse-smooth"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-blue-500/10 rounded-full animate-circuit-pulse-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">Works With Your Favorite Tools</h3>
            
            {/* Integration Logos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
              {integrations.map((integration, index) => (
                <ScrollReveal key={index} direction="scale">
                  <AnimatedCard>
                    <div className="flex flex-col items-center space-y-3 p-6 glass rounded-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 group hover-lift relative overflow-hidden">
                      {/* Animated background glow */}
                      <div className={`absolute inset-0 ${integration.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}></div>
                      
                      <div className={`w-16 h-16 ${integration.bgColor} rounded-xl flex items-center justify-center group-hover:scale-125 transition-all duration-500 border border-gray-500/20 group-hover:border-gray-400/40 relative overflow-hidden`}>
                        {/* Animated background glow */}
                        <div className={`absolute inset-0 ${integration.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}></div>
                        <integration.icon className={`w-8 h-8 ${integration.color} ${integration.hoverColor} transition-all duration-500 group-hover:rotate-12 relative z-10`} />
                        
                        {/* Floating particles effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className={`absolute top-1 right-1 w-1 h-1 ${integration.color} rounded-full animate-ping`}></div>
                          <div className={`absolute bottom-1 left-1 w-1 h-1 ${integration.color} rounded-full animate-ping delay-300`}></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 group-hover:font-semibold relative z-10">
                        {integration.name}
                      </span>
                    </div>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal direction="up">
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <Workflow className="w-5 h-5 animate-pulse" />
                <p>+ Many more through custom integrations</p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Demo Section */}
        <ScrollReveal direction="up">
          <AnimatedCard>
            <div className="glass rounded-2xl p-12 text-center hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-700 group relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex justify-center mb-6 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none group-hover:scale-110 transition-all duration-500 relative">
                  <Video className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-500" />
                  {/* Orbital rings */}
                  <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full animate-spin"></div>
                  <div className="absolute inset-2 border border-gray-400/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 relative z-10">See AI Automation in Action</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">Watch a demo to see how our AI solutions can transform your business operations.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
                <ScrollReveal direction="left">
                  <button className="flex items-center space-x-2 glass text-gray-400 px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group border border-gray-600 hover:border-gray-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Video className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
                    <span className="relative z-10">Watch a Demo</span>
                  </button>
                </ScrollReveal>
                <ScrollReveal direction="right">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <Calendar className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
                    <span className="relative z-10">Book Free Strategy Call</span>
                  </button>
                </ScrollReveal>
              </div>
            </div>
          </AnimatedCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntegrationsSection;