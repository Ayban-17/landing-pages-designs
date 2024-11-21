'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brush, Wrench, Sparkles, Hammer, Car, Shield, PaintBucket, Gauge } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const services = [
    {
      icon: Car,
      title: "Body Kit Installation",
      description: "Transform your ride with custom body kits and professional installation",
      image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1200",
      features: ["Custom Fitting", "OEM-Grade Materials", "Professional Assembly"]
    },
    {
      icon: PaintBucket,
      title: "Custom Paint Jobs",
      description: "Premium paint services with attention to detail",
      image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?q=80&w=1200",
      features: ["Color Matching", "Ceramic Coating", "Paint Protection"]
    },
    {
        icon: Sparkles,
        title: "Aesthetic Detailing",
        description: "Next-level detailing for that showroom shine",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200",
        features: ["Interior Detailing", "Exterior Polish", "Paint Correction"]
    },
    {
      icon: Wrench,
      title: "Performance Mods",
      description: "Enhance your vehicle's performance and style",
      image: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?q=80&w=1200",
      features: ["ECU Tuning", "Exhaust Systems", "Suspension Setup"]
    }
  ];

  // Floating animation for background elements
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Card hover animation
  const cardAnimation = {
    rest: { 
      scale: 1,
      boxShadow: "0px 0px 0px rgba(239, 68, 68, 0)",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(239, 68, 68, 0.3)",
      transition: {
        duration: 0.4,
        type: "spring",
        bounce: 0.25
      }
    }
  };

  // Title animation
  const titleAnimation = {
    initial: { x: -200, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  // Red line animation
  const lineAnimation = {
    initial: { width: 0 },
    animate: { 
      width: "80px",
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Feature item animation
  const featureAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "-2s" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            variants={titleAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Premium Services
          </motion.h2>
          <motion.div 
            className="h-1 bg-red-600 mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={lineAnimation}
          />
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            Level up your ride with our professional customization services. 
            We specialize in transforming ordinary vehicles into extraordinary masterpieces.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardAnimation}
                initial="rest"
                whileHover="hover"
                whileInView={{ 
                  opacity: [0, 1],
                  y: [50, 0],
                  transition: { 
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
                className="relative group"
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className="relative h-[400px] overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800">
                  {/* Background Image with Parallax */}
                  <motion.div 
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredService === index ? 1.1 : 1,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <AnimatePresence>
                      {hoveredService !== index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <Icon className="w-10 h-10 text-red-500" />
                          </motion.div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                          <p className="text-gray-300 text-sm">{service.description}</p>
                        </motion.div>
                      )}

                      {hoveredService === index && (
                        <motion.ul
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          {service.features.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              variants={featureAnimation}
                              initial="initial"
                              animate="animate"
                              whileHover="hover"
                              custom={idx}
                              className="flex items-center text-sm text-white"
                              onHoverStart={() => setHoveredFeature(idx)}
                              onHoverEnd={() => setHoveredFeature(null)}
                            >
                              <motion.span
                                animate={hoveredFeature === idx ? {
                                  rotate: [0, 360],
                                  transition: { duration: 0.5 }
                                } : {}}
                              >
                                <Sparkles className="w-4 h-4 text-red-500 mr-2" />
                              </motion.span>
                              {feature}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-4 bg-red-600 text-white rounded-full group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Services</span>
            <motion.div
              className="absolute inset-0 bg-red-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;