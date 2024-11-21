'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, Trophy, Users, Star } from 'lucide-react';

const Stats = () => {
  const [inView, setInView] = useState(false);

  const stats = [
    {
      icon: Car,
      value: 1500,
      label: "Cars Modified",
      suffix: "+"
    },
    {
      icon: Trophy,
      value: 50,
      label: "Awards Won",
      suffix: "+"
    },
    {
      icon: Users,
      value: 1000,
      label: "Happy Clients",
      suffix: "+"
    },
    {
      icon: Star,
      value: 99,
      label: "Success Rate",
      suffix: "%"
    }
  ];

  // Counter animation
  const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = value;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60fps

        const timer = setInterval(() => {
          start += increment;
          if (start > end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [value, inView]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20"
        />
      </div>

      {/* Stats Container */}
      <motion.div
        className="max-w-7xl mx-auto px-4"
        onViewportEnter={() => setInView(true)}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-sm text-center relative overflow-hidden"
                >
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block bg-red-600/10 p-4 rounded-xl mb-4"
                  >
                    <Icon className="w-8 h-8 text-red-500" />
                  </motion.div>

                  {/* Counter */}
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </motion.h3>

                  {/* Label */}
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;