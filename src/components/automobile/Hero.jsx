'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight,
  Star,
  Clock,
  ShieldCheck,
  Trophy,
  Wrench,
  Settings,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1607603750909-408e193868c7?q=80&w=1920", // Cool matte black sports car in workshop
      title: "Transform Your Ride",
      subtitle: "Premium Car Aesthetics & Bumper Solutions",
      accent: "Unleash the Beauty"
    },
    {
      image: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?q=80&w=1920", // Red car being detailed
      title: "Quality Meets Style",
      subtitle: "Professional Car Modification Services",
      accent: "Expert Touch"
    },
    {
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1920", // Sleek modified car
      title: "Level Up Your Car Game",
      subtitle: "Custom Body Kits & Installations",
      accent: "Stand Out"
    }
  ];

  const features = [
    { Icon: Star, text: "Premium", desc: "Top-tier materials" },
    { Icon: Clock, text: "Quick Install", desc: "Same day service" },
    { Icon: ShieldCheck, text: "Warranty", desc: "100% guaranteed" },
    { Icon: Trophy, text: "Expert Work", desc: "Certified pros" },
    { Icon: Wrench, text: "Custom Mods", desc: "Your style, our craft" },
    { Icon: Settings, text: "Full Service", desc: "Complete solutions" },
    { Icon: Sparkles, text: "Pro Finish", desc: "Showroom ready" },
    { Icon: Star, text: "Best Rated", desc: "Customer choice" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Accent text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-red-500 text-lg font-medium tracking-widest uppercase"
          >
            {slides[currentSlide].accent}
          </motion.p>

          {/* Red accent line */}
          <motion.div
            className="w-20 h-1 bg-red-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />

          {/* Main heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[currentSlide].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#dc2626" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-red-600 rounded-full flex items-center justify-center space-x-2"
            >
              <span>Book Appointment</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "black" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white rounded-full transition"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.Icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
                  className="flex flex-col items-center space-y-2 p-4 bg-black/30 rounded-lg backdrop-blur-sm cursor-pointer"
                >
                  <IconComponent className="w-8 h-8 text-red-500" />
                  <span className="text-sm font-medium">{feature.text}</span>
                  <span className="text-xs text-gray-400">{feature.desc}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Centered Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative h-3 transition-all duration-300 ${
                currentSlide === index ? 'w-12 bg-red-600' : 'w-3 bg-white/50'
              } rounded-full overflow-hidden`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {currentSlide === index && (
                <motion.div
                  className="absolute left-0 top-0 h-full bg-red-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}