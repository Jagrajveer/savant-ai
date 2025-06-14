
import React from 'react';

const TrustSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Growing Businesses <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Choose SavantAI</span>
          </h2>
          <p className="text-xl text-gray-600">We're here to simplify your growth with automation — not complicate it.</p>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Done-for-You Setup */}
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-emerald-600 text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Done-for-You Setup</h3>
            <p className="text-gray-600">We build and integrate everything for you</p>
          </div>

          {/* Tailored to You */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-blue-600 text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tailored to You</h3>
            <p className="text-gray-600">No generic bots — every solution is built around your business</p>
          </div>

          {/* Fast Turnaround */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-purple-600 text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Turnaround</h3>
            <p className="text-gray-600">Most projects are ready to launch in 7-14 days</p>
          </div>

          {/* No Technical Headaches */}
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-orange-600 text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">No Technical Headaches</h3>
            <p className="text-gray-600">No code. No confusion. Just results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
