'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Clock, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items array
  const navigationItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll handler using arrow function
  const handleScroll = () => setIsScrolled(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Component for contact info item
  const ContactInfoItem = ({ icon: Icon, text }) => (
    <span className="flex items-center">
      <Icon className="w-4 h-4 mr-2" />
      {text}
    </span>
  );

  // Component for navigation link
  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-white text-sm tracking-wider hover:text-red-500 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </a>
  );

  // Component for mobile navigation link
  const MobileNavLink = ({ href, children }) => (
    <a
      href={href}
      className="block py-3 text-white text-sm tracking-wider hover:text-red-500 transition-colors"
      onClick={() => setMobileMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-black text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <ContactInfoItem icon={Clock} text="Mon-Sat: 9AM-6PM" />
            <ContactInfoItem icon={Phone} text="+63 912 345 6789" />
          </div>
          <ContactInfoItem icon={Mail} text="info@frbumper.com" />
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`
          fixed w-full z-50 transition-all duration-300 
          ${isScrolled 
            ? 'bg-black/95 backdrop-blur-sm shadow-lg top-0' 
            : 'bg-transparent md:top-10 top-0'}
        `}
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-red-600">YBN</span>
              <span className="text-2xl font-light text-white ml-2">BUMPER</span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map(({ name, href }) => (
                <NavLink key={name} href={href}>{name}</NavLink>
              ))}
            </div>

            {/* Book Now Button */}
            <button className="hidden md:block px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm shadow-xl">
              <div className="px-4 py-2 space-y-2">
                {navigationItems.map(({ name, href }) => (
                  <MobileNavLink key={name} href={href}>{name}</MobileNavLink>
                ))}
                <button className="w-full py-3 mt-4 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navigation;