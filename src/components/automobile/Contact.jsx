'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Add actual form submission logic here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+63 912 345 6789",
      subDetails: "Monday to Saturday, 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@frbumper.com",
      subDetails: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Car Mod Street",
      subDetails: "Metro Manila, Philippines"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-red-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-sm"
                >
                  <div className="bg-red-600/10 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">{info.title}</h3>
                    <p className="text-red-500 font-medium">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.subDetails}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800/50 backdrop-blur-sm"
          >
            <div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                required
              />
            </div>
            <div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                required
              />
            </div>
            <div>
              <motion.select
                whileFocus={{ scale: 1.01 }}
                className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                required
              >
                <option value="">Select Service</option>
                <option value="bodykit">Body Kit Installation</option>
                <option value="paint">Custom Paint Job</option>
                <option value="detail">Car Detailing</option>
              </motion.select>
            </div>
            <div>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-red-600 text-white rounded-lg font-medium relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoverButton(true)}
              onHoverEnd={() => setHoverButton(false)}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    Send Message
                    <motion.span
                      animate={{ x: hoverButton ? [0, 5, 0] : 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Send className="w-5 h-5 ml-2" />
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </div>

        {/* Map or Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/50 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Ready to Transform Your Ride?</h3>
              <p className="text-gray-400">Book an appointment or visit our shop today!</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-red-600 text-white rounded-full font-medium"
            >
              Schedule Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;