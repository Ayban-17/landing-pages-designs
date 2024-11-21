'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const reviews = [
    {
      name: "John Santos",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&h=400&fit=crop",
      role: "Car Enthusiast",
      rating: 5,
      comment: "Best mod shop in town! The body kit installation was flawless.",
      project: "GTR R35 Full Body Kit"
    },
    {
      name: "Maria Garcia",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      role: "Professional Racer",
      rating: 5,
      comment: "Their attention to detail is unmatched. Paint job is absolutely perfect!",
      project: "Custom Racing Livery"
    },
    {
      name: "Dave Cruz",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      role: "Car Collector",
      rating: 5,
      comment: "Outstanding service! They transformed my classic car completely.",
      project: "Vintage Restoration"
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-blue-600/5" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Client Reviews
          </h2>
          <motion.div 
            className="w-20 h-1 bg-red-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </motion.div>

        <div className="relative h-[500px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                <Quote className="w-12 h-12 text-red-500 mb-6 opacity-50" />
                
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div 
                    className="w-24 h-24 rounded-full overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img 
                      src={reviews[currentIndex].image} 
                      alt={reviews[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>

                    <p className="text-white text-lg md:text-xl mb-6">
                      "{reviews[currentIndex].comment}"
                    </p>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">
                        {reviews[currentIndex].name}
                      </h3>
                      <p className="text-gray-400">{reviews[currentIndex].role}</p>
                      <p className="text-red-500 font-medium">
                        Project: {reviews[currentIndex].project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? 'bg-red-600 w-6' : 'bg-gray-500'
                } transition-all duration-300`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;