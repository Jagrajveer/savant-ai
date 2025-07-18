
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default Index;
