
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import ProcessSection from '../components/ProcessSection';
import StatisticsSection from '../components/StatisticsSection';
import SubscriptionsSection from '../components/SubscriptionsSection';
import AnswersSection from '../components/AnswersSection';
import BookCallSection from '../components/BookCallSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <ProcessSection />
      <StatisticsSection />
      <SubscriptionsSection />
      <AnswersSection />
      <BookCallSection />
      <Footer />
    </div>
  );
};

export default Index;
