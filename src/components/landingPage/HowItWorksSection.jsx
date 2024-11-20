'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Code, Zap, Globe, Sparkles, Shield, Coffee } from 'lucide-react';
import Image from 'next/image';

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 6);
    }, 5000);

    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    // Initial height set
    updateHeight();
    setIsVisible(true);

    // Update height on window resize
    window.addEventListener('resize', updateHeight);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const allFeatures = [
    { 
      icon: Code, 
      title: 'Easy Integration', 
      desc: 'Simple setup in minutes',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80'
    },
    { 
      icon: Zap, 
      title: 'Lightning Fast', 
      desc: 'Optimized for performance',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&q=80'
    },
    { 
      icon: Globe, 
      title: 'Global Scale', 
      desc: 'Deploy worldwide instantly',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80'
    },
    { 
      icon: Sparkles, 
      title: 'Smart Features', 
      desc: 'AI-powered capabilities',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80'
    },
    { 
      icon: Shield, 
      title: 'Enterprise Security', 
      desc: 'Bank-grade protection',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&q=80'
    },
    { 
      icon: Coffee, 
      title: '24/7 Support', 
      desc: 'Always here to help',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&q=80'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div 
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-800 text-sm font-semibold mb-4 inline-block">
            Discover Our Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Experience the future of development with our cutting-edge platform
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column - Navigation */}
          <div 
            ref={navRef}
            className={`w-full md:w-1/2 space-y-4 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`}
          >
            {allFeatures.map((feature, i) => (
              <div
                key={i}
                className={`bg-white p-6 rounded-2xl border cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  activeTab === i
                    ? 'border-violet-200 shadow-lg bg-gradient-to-br from-violet-50 to-indigo-50' 
                    : 'border-gray-100 hover:shadow-md'
                }`}
                onClick={() => setActiveTab(i)}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeTab === i ? 'bg-violet-600 rotate-[360deg]' : 'bg-gray-100 rotate-0'
                    }`}
                  >
                    <feature.icon className={`h-6 w-6 transition-colors ${
                      activeTab === i ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700 text-sm mt-1">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div 
            className={`w-full md:w-1/2 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
            }`}
            style={{ height: navHeight > 0 ? `${navHeight}px` : 'auto' }}
          >
            <div className="bg-gradient-to-br from-violet-200 to-indigo-200 p-1.5 rounded-3xl shadow-2xl h-full">
              <div className="bg-white rounded-2xl overflow-hidden h-full">
                <div className="relative h-full">
                  {allFeatures.map((feature, i) => (
                    <Image
                      key={i}
                      src={feature.image}
                      alt={feature.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                        activeTab === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      width={300}
                      height={300}
                    />
                  ))}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
                    {activeTab + 1} / {allFeatures.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          {[
            { label: 'Active Users', value: '100K+' },
            { label: 'Global Deployments', value: '50M+' },
            { label: 'Response Time', value: '<100ms' },
            { label: 'Uptime', value: '99.99%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-gray-700 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;