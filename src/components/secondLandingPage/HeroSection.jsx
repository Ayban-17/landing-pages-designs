'use client'
// components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen">
      <img
        src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Luxury beauty woman"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40">
        <div className={`max-w-7xl mx-auto px-4 h-full flex items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-white max-w-2xl">
            <span className="text-sm tracking-[0.3em] uppercase mb-6 inline-block">
              Welcome to Luxury
            </span>
            <h1 className="text-6xl md:text-7xl font-light tracking-wider mb-8 leading-tight drop-shadow-lg">
              Timeless Beauty
            </h1>
            <p className="text-xl tracking-wide mb-12 leading-relaxed max-w-xl drop-shadow">
              Experience the essence of luxury skincare, where science meets nature's most precious elements
            </p>
            <div className="flex gap-6">
              <button className="group px-8 py-4 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 tracking-wider flex items-center gap-2">
                Explore Collection
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;