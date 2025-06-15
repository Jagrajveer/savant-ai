
import React from 'react';
import { Database, Mail, Calendar, MessageSquare, Video, Workflow } from 'lucide-react';

const IntegrationsSection = () => {
  const integrations = [
    { name: "Salesforce", icon: Database, color: "text-blue-600" },
    { name: "HubSpot", icon: Database, color: "text-orange-600" },
    { name: "Gmail", icon: Mail, color: "text-red-600" },
    { name: "Calendly", icon: Calendar, color: "text-blue-500" },
    { name: "Slack", icon: MessageSquare, color: "text-purple-600" },
    { name: "Zoom", icon: Video, color: "text-blue-400" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Works With Your Favorite Tools</h3>
          
          {/* Integration Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 ${integration.color} bg-opacity-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <integration.icon className={`w-6 h-6 ${integration.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600 animate-fade-in-up delay-600">
            <Workflow className="w-5 h-5" />
            <p>+ Many more through custom integrations</p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center animate-fade-in-up delay-800 hover:shadow-xl transition-all duration-500">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse">
              <Video className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 mb-4">See AI Automation in Action</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Watch a demo to see how our AI solutions can transform your business operations.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
              <Video className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch a Demo</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
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
