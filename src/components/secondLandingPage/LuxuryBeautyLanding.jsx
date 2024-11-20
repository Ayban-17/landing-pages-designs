import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CollectionsSection from './CollectionsSection';
import ProductsSection from './ProductsSection';
import ContactSection from './ContactSection';

const LuxuryBeautyLanding = () => {
  return (
    <div className="min-h-screen bg-[#faf7f5]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
};

export default LuxuryBeautyLanding;