
import React from 'react';

const ProcessSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Here's How We Set You Up for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-Powered Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process gets you from manual work to smart automation in just days, not months.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-lg">💬</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">1</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free AI Strategy Call</h3>
            <p className="text-gray-600 mb-6">We evaluate your business and find the highest-impact automation opportunities.</p>
            <div className="text-blue-600 text-sm">
              <p>Process analysis • ROI calculation • Custom roadmap</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-lg">⚙️</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Automation Plan</h3>
            <p className="text-gray-600 mb-6">We build a tailored solution using voice bots, task automation, or analytics — based on your exact needs.</p>
            <div className="text-purple-600 text-sm">
              <p>Custom design • Integration planning • Solution mapping</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-lg">🚀</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch & Save Time</h3>
            <p className="text-gray-600 mb-6">Your system goes live fast. You start saving hours and operating more efficiently right away.</p>
            <div className="text-emerald-600 text-sm">
              <p>Quick deployment • Team training • Instant results</p>
            </div>
          </div>
        </div>

        {/* Timeline Badge */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-6 py-3 rounded-full">
            <span className="text-sm">⚡</span>
            <span className="font-semibold">Average Timeline: 7-14 Days to Launch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
