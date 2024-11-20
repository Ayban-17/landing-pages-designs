'use client'
import Image from 'next/image';
// components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  const features = [
    {
      title: 'PREMIUM INGREDIENTS',
      description: 'Infused with rare botanicals and 24k gold',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'SCIENTIFIC INNOVATION',
      description: 'Advanced formulas for visible results',
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'LUXURY EXPERIENCE',
      description: 'Transform your skincare ritual',
      image: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4 inline-block">
            About Our Brand
          </span>
          <h2 className="text-4xl font-light tracking-wider mb-6">The Art of Beauty</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our unique approach to skincare, combining rare ingredients with innovative science
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <Image 
                src={feature.image}
                alt={feature.title}
                className="w-full h-96 object-cover mb-8"
                width={300}
                height={300}
              />
              <h3 className="text-xl font-light mb-4 tracking-wider">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;