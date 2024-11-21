'use client';

import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-red-500 font-medium tracking-wide"
              >
                READY TO TRANSFORM YOUR RIDE?
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white"
              >
                Let's Make Your Car 
                <span className="text-red-500"> Stand Out</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg"
              >
                Book a consultation with our expert team and start your car's transformation journey today.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <PhoneCall className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-gray-400">Give us a call</p>
                  <p className="text-white font-medium">+63 912 345 6789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-gray-400">Email us at</p>
                  <p className="text-white font-medium">info@frbumper.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-gray-400">Visit our shop</p>
                  <p className="text-white font-medium">123 Car Mod Street, Metro Manila</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800/50 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  required
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="bodykit">Body Kit Installation</option>
                  <option value="paint">Custom Paint Job</option>
                  <option value="detail">Car Detailing</option>
                  <option value="performance">Performance Mods</option>
                </motion.select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  rows="4"
                  placeholder="Tell us about your project"
                  className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.5 }}
                className="w-full px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Book Consultation</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;