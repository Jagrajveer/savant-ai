
import React from 'react';
import { Zap, CheckCircle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Trust Badge */}
        <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full mb-8 animate-fade-in-up hover:scale-105 transition-all duration-300">
          <Zap size={16} className="animate-pulse" />
          <span className="text-sm font-medium">Custom AI Solutions for Your Business</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up delay-200">
          Scale Smarter with{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-shift">
            Custom AI Automation
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in-up delay-400">
          Save time, cut costs, and grow faster by automating the work that slows your team down.
        </p>

        {/* Social Proof Badge */}
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-12 animate-fade-in-up delay-500 hover:scale-105 transition-all duration-300">
          <BarChart3 className="w-4 h-4" />
          <span className="text-sm">Built for growing businesses — over 80% of automation projects are ready in under 14 days</span>
        </div>

        {/* What You'll Get */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-600 hover:shadow-2xl transition-all duration-500 hover:scale-105">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">What You'll Get on Your Free Call:</h3>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-gray-600">A 15-minute audit of your business workflows</span>
            </div>
            <div className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300 delay-100">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-gray-600">A custom AI automation roadmap</span>
            </div>
            <div className="flex items-center space-x-3 group hover:translate-x-2 transition-all duration-300 delay-200">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-gray-600">Answers to your top questions — no tech skills needed</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-800">
          <Link
            to="/demo-call"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-lg transform active:scale-95 group"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Free AI Strategy Call</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 group">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Watch a Demo</span>
          </button>
        </div>

        {/* Bottom tagline */}
        <p className="text-gray-500 mt-8 animate-fade-in-up delay-1000">No code required • Custom solutions • Fast implementation</p>
      </div>
    </section>
  );
};

export default HeroSection;
