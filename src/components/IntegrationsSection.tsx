
import React from 'react';

const IntegrationsSection = () => {
  const integrations = [
    "Salesforce", "HubSpot", "Gmail", "Calendly", "Slack", "Zoom"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Works With Your Favorite Tools</h3>
          
          {/* Integration Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 opacity-60">
            {integrations.map((integration, index) => (
              <div key={index} className="px-4 py-2 bg-gray-100 rounded-lg">
                <span className="text-gray-600 font-medium">{integration}</span>
              </div>
            ))}
          </div>
          
          <p className="text-gray-600">+ Many more through custom integrations</p>
        </div>

        {/* Demo Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">See AI Automation in Action</h3>
          <p className="text-xl text-gray-600 mb-8">Watch a demo to see how our AI solutions can transform your business operations.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              <span>📹</span>
              <span>Watch a Demo</span>
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Book Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
