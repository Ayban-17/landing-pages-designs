'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Layout, Palette, MousePointer2, ExternalLink } from 'lucide-react';

// Floating shapes component with more dynamic animations
const FloatingShape = ({ color }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDelay = Math.random() * 2;
  const randomDuration = 15 + Math.random() * 15;

  return (
    <motion.div
      className={`absolute w-16 h-16 rounded-full bg-${color}/30 backdrop-blur-xl`}
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      animate={{
        y: [`${randomY}%`, `${randomY - 20}%`, `${randomY}%`],
        x: [`${randomX}%`, `${randomX + 20}%`, `${randomX}%`],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "easeInOut",
      }}
    />
  );
};

const DesignNavigator = () => {
  const [hoveredDesign, setHoveredDesign] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const designs = [
    {
      id: 1,
      title: "Minimalist",
      route: "/minimalist",
      description: "Clean, minimalist aesthetic with bold typography and smooth interactions",
      icon: Sparkles,
      color: "group-hover:from-[#FF3CAC] group-hover:via-[#784BA0] group-hover:to-[#2B86C5]"
    },
    {
      id: 2,
      title: "Luxury",
      route: "/luxury",
      description: "Luxurious aesthetics with premium feel and sophisticated interactions ",
      icon: Layout,
      color: "group-hover:from-[#8EC5FC] group-hover:via-[#E0C3FC] group-hover:to-[#FF9CAC]"
    },
    {
      id: 3,
      title: "Modern",
      route: "/modern",
      description: "Dynamic layouts with immersive animations and modern components",
      icon: Palette,
      color: "group-hover:from-[#FAD961] group-hover:via-[#F76B1C] group-hover:to-[#FF5ACD]"
    }
  ];

  // Array of colors for floating shapes
  const shapeColors = ['purple-500', 'pink-500', 'blue-500', 'indigo-500', 'cyan-500'];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Multiple floating shapes */}
        {[...Array(15)].map((_, i) => (
          <FloatingShape key={i} color={shapeColors[i % shapeColors.length]} />
        ))}

        {/* Additional glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
      </div>

      {/* Grid overlay */}
      <div 
        className="fixed inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Mouse follower */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: hoveredDesign ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <MousePointer2 className="w-full h-full text-white opacity-50" />
      </motion.div>

      {/* Content Overlay to slightly dim the background */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 relative"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-500 to-pink-500">
            Design Gallery
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our carefully crafted landing page designs. Each with its unique style and personality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full px-4">
          <AnimatePresence>
            {designs.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className={`
                    relative rounded-2xl overflow-hidden backdrop-blur-xl
                    border border-white/10 p-8
                    transition-all duration-500 ease-out
                    bg-gradient-to-br from-white/5 to-white/10
                    hover:border-white/20 hover:shadow-2xl
                    ${hoveredDesign === design.id ? 'scale-105' : 'scale-100'}
                  `}
                  onMouseEnter={() => setHoveredDesign(design.id)}
                  onMouseLeave={() => setHoveredDesign(null)}
                >
                  {/* Gradient overlay */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-70
                    transition-opacity duration-500 bg-gradient-to-br ${design.color}
                  `} />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      animate={{
                        rotate: hoveredDesign === design.id ? 360 : 0,
                        scale: hoveredDesign === design.id ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                      className="mb-6"
                    >
                      <design.icon className="w-12 h-12 mx-auto text-white" />
                    </motion.div>

                    <h2 className="text-2xl font-bold mb-4 text-center text-white group-hover:text-white transition-colors">
                      {design.title}
                    </h2>
                    <p className="text-gray-200 text-center mb-6 text-sm group-hover:text-white/90 transition-colors">
                      {design.description}
                    </p>

                    <motion.a
                      href={design.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center justify-center space-x-2
                        py-3 px-6 rounded-full
                        bg-white/20 hover:bg-white/30
                        transition-all duration-300
                        group/button
                        text-white
                      "
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Design</span>
                      <ExternalLink className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Ayban Trademark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 right-8 text-white/50"
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm font-light tracking-wider">crafted by</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Ayban™
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignNavigator;