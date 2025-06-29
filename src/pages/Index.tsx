import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import ProcessSection from '../components/ProcessSection';
import IntegrationsSection from '../components/IntegrationsSection';
import TrustSection from '../components/TrustSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      
      {/* Features Section Wrapper - Creates scroll space for sticky behavior */}
      <div style={{ height: '400vh' }}>
        <FeaturesSection />
      </div>
      
      <BeforeAfterSection />
      <ProcessSection />
      <IntegrationsSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;