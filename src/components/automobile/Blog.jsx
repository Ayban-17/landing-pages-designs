'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ChevronRight, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1200",
      title: "10 Must-Have Car Mods for 2024",
      excerpt: "Discover the latest trends in car modification and what's making waves in the auto scene.",
      author: "Mike Rodriguez",
      date: "Jan 15, 2024",
      category: "Trends"
    },
    {
      image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1200",
      title: "The Art of Paint Protection",
      excerpt: "Everything you need to know about keeping your car's paint pristine and protected.",
      author: "Sarah Chen",
      date: "Jan 20, 2024",
      category: "Tips"
    },
    {
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1200",
      title: "Ultimate Guide to Body Kits",
      excerpt: "From selection to installation - make your car stand out with the perfect body kit.",
      author: "James Wilson",
      date: "Jan 25, 2024",
      category: "Guides"
    }
  ];

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-red-500 text-lg font-medium tracking-wider mb-4"
          >
            LATEST UPDATES
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Car Mod Blog
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-red-600 mx-auto mb-8"
          />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-neutral-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-neutral-800/50 group"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <motion.img
                  variants={imageVariants}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-4 right-4 bg-red-600 text-white text-sm px-3 py-1 rounded-full"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {post.category}
                </motion.span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredCard === index ? 1 : 0,
                    y: hoveredCard === index ? 0 : 10
                  }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 flex items-center text-red-500 font-medium"
                >
                  Read More 
                  <motion.div
                    animate={{ x: hoveredCard === index ? [0, 5, 0] : 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button 
            className="px-8 py-4 bg-transparent border-2 border-red-600 text-white rounded-full hover:bg-red-600 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block ml-2"
            >
              <ChevronRight className="w-5 h-5 inline" />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;