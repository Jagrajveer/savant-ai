
import React from 'react';
import { Mic, Zap, BarChart, Puzzle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Mic,
      title: "Voice AI",
      description: "AI-powered chat and phone agents that answer questions, qualify leads, and support customers — 24/7.",
      capabilities: ["24/7 customer support", "Lead qualification", "Automated responses", "Natural conversations"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Task Automation",
      description: "Free your team from busywork like scheduling, follow-ups, and data entry.",
      capabilities: ["Automated scheduling", "Smart follow-ups", "Data processing", "Workflow automation"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Turn complex data into decisions with easy-to-read AI-powered dashboards.",
      capabilities: ["Real-time metrics", "Smart insights", "Custom dashboards", "Performance tracking"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Puzzle,
      title: "Custom AI Solutions",
      description: "Got a unique use case? We'll build something just for your workflow.",
      capabilities: ["Custom development", "Unique solutions", "Tailored AI", "Seamless integration"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Can <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">Automate for You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From customer interactions to back-office tasks, we build custom AI solutions that make your business run smoother.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-blue-600">{feature.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {feature.capabilities.map((capability, capIndex) => (
                  <div 
                    key={capIndex} 
                    className="flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300"
                    style={{ transitionDelay: `${capIndex * 50}ms` }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-sm text-gray-600">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
