'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - now with hover animation */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text animate-glow hover:animate-wave">
              BRAND.
            </h1>
          </div>
          
          {/* Desktop Menu - with slide in animation */}
          <div className="hidden md:flex items-center space-x-8 animate-slideInRight">
            {['Features', 'Solutions', 'Pricing'].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors hover:animate-float"
              >
                {item}
              </a>
            ))}
            {/* Button with shimmer effect */}
            <button className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:animate-glow">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 animate-shimmer"></div>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center hover:animate-spin3D"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - with slide animation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100 animate-slideInLeft' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {['Features', 'Solutions', 'Pricing'].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-600 hover:bg-violet-50 rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:animate-glow">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;