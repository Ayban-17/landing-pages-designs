'use client'
import Image from 'next/image';
// components/ProductsSection.jsx
import React from 'react';

const ProductsSection = () => {
  const products = [
    {
      name: 'Divine Cream',
      description: 'Experience transformative hydration',
      image: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Radiance Serum',
      description: 'Illuminate your natural beauty',
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Pure Essence',
      description: 'The foundation of timeless beauty',
      image: 'https://images.pexels.com/photos/3685534/pexels-photo-3685534.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-neutral-500 mb-4 inline-block">
            Our Products
          </span>
          <h2 className="text-4xl font-light tracking-wider mb-6">Luxury Collection</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="relative group overflow-hidden">
              <Image 
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                width={300}
                height={300}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-light tracking-wider mb-2">{product.name}</h3>
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;