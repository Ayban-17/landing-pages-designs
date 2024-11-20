'use client'
// components/CollectionsSection.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const CollectionsSection = () => {
  return (
    <section id="collections" className="relative bg-[#f4efe9] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4 inline-block">
            Our Collections
          </span>
          <h2 className="text-4xl font-light tracking-wider mb-6">Signature Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/5938440/pexels-photo-5938440.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Signature serum"
              className="w-full h-[700px] object-cover"
              width={300}
              height={300}
            />
          </div>
          <div className="max-w-lg">
            <h3 className="text-5xl font-light tracking-wider mb-8 leading-tight">The Divine Elixir</h3>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
              Our signature serum combines the power of precious gems with advanced peptides, delivering unprecedented results for ageless beauty.
            </p>
            <button className="group flex items-center gap-2 text-lg tracking-wider hover:text-neutral-600 transition-colors">
              Discover More 
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;