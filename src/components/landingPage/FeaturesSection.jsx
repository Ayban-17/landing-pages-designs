'use client'
import React from 'react';
import { Zap, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Build and deploy in minutes, not hours. Our optimized workflow saves you precious time.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
      stats: ['50% faster deployment', '99.9% uptime', '2x performance'],
      benefits: ['Instant setup', 'Quick updates', 'Real-time sync']
    },
    {
      icon: Shield,
      title: 'Highly Secure',
      description: 'Enterprise-grade security out of the box. Your data is protected with the latest standards.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3',
      stats: ['256-bit encryption', 'SOC 2 certified', 'GDPR compliant'],
      benefits: ['Data protection', 'Secure access', 'Regular backups']
    },
    {
      icon: Globe,
      title: 'Scale Easily',
      description: 'Grow without limits. Our infrastructure automatically scales with your needs.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3',
      stats: ['1M+ requests/sec', 'Global CDN', 'Auto-scaling'],
      benefits: ['Unlimited growth', 'No downtime', 'Global reach']
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: 'float 8s ease-in-out infinite',
              animationDelay: `${i * 2}s`
            }}
          >
            <div 
              className="w-64 h-64 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-full blur-3xl"
              style={{
                transform: `scale(${0.5 + Math.random() * 0.5})`
              }}
            />
          </div>
        ))}
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative">
        <div className="inline-flex items-center bg-violet-50 rounded-full px-4 py-2 mb-6 animate-bounce">
          <span className="text-violet-600 font-medium text-sm">Powerful Features</span>
        </div>
        <h2 className="text-4xl font-bold mb-6">Everything you need to succeed</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the tools that will transform your workflow and boost your productivity
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl relative"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/0" />
                
                {/* Stats */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  {feature.stats.map((stat, index) => (
                    <div
                      key={index}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white transform transition-all duration-300 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Icon Container - FIXED POSITIONING */}
              <div className="relative z-10 -mt-6 ml-6">
                <div 
                  className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform relative"
                  style={{ animation: 'bounce 3s infinite', animationDelay: `${i * 0.2}s` }}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                  <div className="absolute inset-0 rounded-2xl animate-ping bg-violet-600/20" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>

                {/* Expandable Content */}
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-[300px]">
                  {/* Benefits List */}
                  <div className="space-y-3 mt-6">
                    {feature.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        className="flex items-center text-gray-600 transform transition-all duration-300 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        <CheckCircle className="h-5 w-5 text-violet-600 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="flex items-center text-violet-600 font-medium hover:text-violet-700 transition-colors">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border border-violet-500/20 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center relative">
          <button className="inline-flex items-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <span className="font-medium">Explore All Features</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, 10px); }
          50% { transform: translate(0, 20px); }
          75% { transform: translate(-10px, 10px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default FeaturesSection;