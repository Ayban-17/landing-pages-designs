import React from 'react';
import { ChevronRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-violet-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              transform: `scale(${0.5 + Math.random() * 0.5})`
            }}
          >
            <div className="w-2 h-2 bg-white/10 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join the thousands of creators who are already building the future with our platform.
        </p>
        <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition font-medium inline-flex items-center group">
          Get Started Now
          <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CTASection;