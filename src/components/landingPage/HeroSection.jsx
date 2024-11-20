'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-indigo-50"></div>
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-violet-200/30 to-indigo-200/30 rounded-full blur-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}></div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Announcement Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200 mb-8 animate-bounce">
            <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
              ✨ Launching Something Amazing
            </span>
          </div>
          
          {/* Headline */}
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Create the Future with Our Innovative Solution
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Transform your ideas into reality with our powerful platform. Join thousands of creators who are already building the next big thing.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:opacity-90 transition flex items-center justify-center font-medium group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white text-gray-700 px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 transition flex items-center justify-center font-medium group">
              Watch Demo
              <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center space-x-8">
            <div className="flex -space-x-4">
              {avatars.map((avatar, i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full border-4 border-white relative transition-transform hover:-translate-y-2 duration-300"
                  style={{ zIndex: avatars.length - i }}
                >
                  
                  <Image
                    src={avatar}
                    alt={`User ${i + 1}`}
                    className="w-full h-full rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
            
            <div className="text-left">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">From 1,000+ happy users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `scale(${0.5 + Math.random() * 0.5})`
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-full backdrop-blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;