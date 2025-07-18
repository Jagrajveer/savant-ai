import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCard from './AnimatedCard';

const AnswersSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is my company a good fit for You?",
      answer: "We work with businesses of all sizes that are looking to leverage AI and automation to improve their operations. If you have repetitive tasks, customer service needs, or data processing requirements, we can help."
    },
    {
      question: "How long does it take to implement my requests?",
      answer: "Implementation timelines vary based on complexity, but most projects are completed within 2-4 weeks. Simple automations can be deployed in as little as a few days, while complex AI solutions may take longer."
    },
    {
      question: "Are your solutions secure?",
      answer: "Yes, security is our top priority. We implement enterprise-grade security measures, including data encryption, secure API connections, and compliance with industry standards like GDPR and SOC 2."
    },
    {
      question: "How many AI can I integrate?",
      answer: "There's no limit to the number of AI integrations we can implement. Our solutions are designed to work together seamlessly, and we can integrate with virtually any system or platform your business uses."
    },
    {
      question: "Do you offer continuous support?",
      answer: "Yes, all our subscription plans include ongoing support and maintenance. We provide regular check-ups, updates, and are available to address any issues or implement improvements as your business grows."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Absolutely. All our plans offer the flexibility to cancel or pause your subscription at any time without penalties. We believe in providing value that makes you want to stay, not contracts that force you to."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400/20 rounded-full animate-neural-network-smooth"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-400/20 rounded-full animate-neural-network-smooth delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-purple-500/10 rounded-full animate-circuit-pulse-smooth"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-blue-500/10 rounded-full animate-circuit-pulse-smooth delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">Answers</span>
            </h2>
            <p className="text-xl text-gray-300">We've gone ahead and answered some of the questions you might have.</p>
          </div>
        </ScrollReveal>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} direction="up">
              <AnimatedCard>
                <div className="glass rounded-xl border border-gray-700/50 hover-lift transition-all duration-300 group">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 rounded-xl"
                  >
                    <span className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/40 group-hover:scale-110 transition-transform duration-300">
                      {openFaq === index ? (
                        <Minus className="w-4 h-4 text-purple-400" />
                      ) : (
                        <Plus className="w-4 h-4 text-purple-400" />
                      )}
                    </div>
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-700/50">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnswersSection;