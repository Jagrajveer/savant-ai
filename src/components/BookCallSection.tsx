import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const BookCallSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Book a Call */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Book A <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">Call</span>
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-12">
                Today!
              </h3>
              
              <Link
                to="/demo-call"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 inline-block"
              >
                Schedule Your Call
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Side - Newsletter Signup */}
          <ScrollReveal direction="right">
            <AnimatedCard>
              <div className="glass rounded-2xl p-8 border border-gray-700/50 hover-lift transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get the Dr. AI's <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Playbook</span>
                </h3>
                <p className="text-gray-300 mb-8">
                  Don't miss groundbreaking AI insights - join our monthly newsletter to stay ahead of the curve.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                  >
                    Subscribe to Playbook
                  </button>
                </form>
              </div>
            </AnimatedCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;