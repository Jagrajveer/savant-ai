
import React from 'react';

const BeforeAfterSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
            <span className="text-sm">✓ Real Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What This Looks Like <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">in Real Life</span>
          </h2>
          <p className="text-xl text-gray-600">How SavantAI helped a service business cut scheduling time by 90%</p>
        </div>

        {/* Before vs After Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Before AI */}
          <div className="bg-red-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-sm">⏰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Before AI</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-red-500">•</span>
                <span className="text-gray-700">Manual calendar checking</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">•</span>
                <span className="text-gray-700">Back-and-forth emails</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">•</span>
                <span className="text-gray-700">Phone tag with clients</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">•</span>
                <span className="text-gray-700">Double bookings</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-100 rounded-lg">
              <p className="text-red-700 font-semibold">4+ hours spent on scheduling per week</p>
            </div>
          </div>

          {/* After AI */}
          <div className="bg-emerald-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 text-sm">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">After AI</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-emerald-500">•</span>
                <span className="text-gray-700">Instant AI scheduling</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-emerald-500">•</span>
                <span className="text-gray-700">Smart availability sync</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-emerald-500">•</span>
                <span className="text-gray-700">Automated reminders</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-emerald-500">•</span>
                <span className="text-gray-700">Zero conflicts</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-emerald-100 rounded-lg">
              <p className="text-emerald-700 font-semibold">Just 20 minutes of oversight weekly</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium">
            See how we can automate your workflows →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
