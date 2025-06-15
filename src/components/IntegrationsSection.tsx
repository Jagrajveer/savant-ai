
import React from 'react';
import { Database, Mail, Calendar, MessageSquare, Video, Workflow, Cloud, Users, BarChart3, Settings, Globe, Zap } from 'lucide-react';

const IntegrationsSection = () => {
  const integrations = [
    { name: "Salesforce", icon: Cloud, color: "text-blue-400" },
    { name: "HubSpot", icon: BarChart3, color: "text-orange-400" },
    { name: "Gmail", icon: Mail, color: "text-red-400" },
    { name: "Calendly", icon: Calendar, color: "text-blue-400" },
    { name: "Slack", icon: MessageSquare, color: "text-purple-400" },
    { name: "Zoom", icon: Video, color: "text-blue-400" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-gray-400/20 rounded-full animate-neural-network"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400/20 rounded-full animate-neural-network delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-gray-500/10 rounded-full animate-circuit-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-blue-500/10 rounded-full animate-circuit-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-white mb-8">Works With Your Favorite Tools</h3>
          
          {/* Integration Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-3 p-6 glass rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-bounce-fade-in card-hover-bounce"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 ${integration.color} bg-opacity-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-500/20`}>
                  <integration.icon className={`w-6 h-6 ${integration.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-300 animate-fade-in-up delay-600">
            <Workflow className="w-5 h-5" />
            <p>+ Many more through custom integrations</p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="glass rounded-2xl p-12 text-center animate-bounce-fade-in delay-800 hover:shadow-xl transition-all duration-500 card-hover-bounce border border-gray-700">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <Video className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">See AI Automation in Action</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Watch a demo to see how our AI solutions can transform your business operations.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="flex items-center space-x-2 glass text-gray-400 px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group border border-gray-600">
              <Video className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch a Demo</span>
            </button>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Book Free Strategy Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
