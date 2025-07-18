import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const DemoCall = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 animate-fade-in relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-5"></div>
        <div className="absolute top-20 left-20 w-3 h-3 bg-slate-400/20 rounded-full animate-neural-network"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400/20 rounded-full animate-neural-network"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-slate-500/10 rounded-full animate-circuit-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-blue-500/10 rounded-full animate-circuit-pulse"></div>
      </div>

      <Header />
      
      <div className="pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-all duration-300 hover:translate-x-1"
          >
            <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Calendly Embed */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 animate-fade-in-up hover:shadow-2xl transition-all duration-300 border border-slate-700/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Select a Day</h3>
                <p className="text-gray-300">Choose a time that works best for you</p>
              </div>
              
              {/* Calendly Embed */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/jagrajveer9/30min"
                style={{ minWidth: '320px', height: '630px' }}
              ></div>
            </div>

            {/* Right Side - Information */}
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm text-blue-400 px-4 py-2 rounded-full mb-8 animate-scale-in border border-slate-700/50">
                <span className="text-sm">💬 Get in Touch</span>
              </div>

              {/* Header */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                Contact <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">Dr.AI</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 animate-fade-in-up">
                Get in touch with our AI experts to discuss your custom AI solution needs.
              </p>

              {/* What You'll Get */}
              <div className="space-y-8 mb-12 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-white">How We Can Help</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300 animate-bounce-fade-in">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-purple-600/50">
                      <span className="text-purple-400">🔍</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Business Analysis</h4>
                      <p className="text-gray-300">We analyze your workflows to identify high-impact AI opportunities for your business.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300 animate-bounce-fade-in">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-blue-600/50">
                      <span className="text-blue-400">⚙️</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Custom AI Solutions</h4>
                      <p className="text-gray-300">We build tailored AI solutions prioritizing quality and security at every step.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300 animate-bounce-fade-in">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-purple-600/50">
                      <span className="text-purple-400">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Ongoing Support</h4>
                      <p className="text-gray-300">We deliver ongoing maintenance and performance enhancements to maximize your AI investment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCall;
