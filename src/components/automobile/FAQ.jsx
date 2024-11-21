'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Wrench, 
  Clock, 
  Shield, 
  Image, 
  Car, 
  Settings 
} from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const faqs = [
    {
      Icon: Wrench,
      question: "What types of body kits do you offer?",
      answer: "We offer a wide range of body kits including front/rear bumpers, side skirts, spoilers, and full wide-body conversions. All our kits are sourced from premium manufacturers and can be customized to your preferences."
    },
    {
      Icon: Clock,
      question: "How long does a typical modification take?",
      answer: "Project timelines vary depending on complexity. Basic installations take 2-3 days, while full custom builds may take 2-4 weeks. We&apos;ll provide a detailed timeline during consultation."
    },
    {
      Icon: Shield,
      question: "Do you offer warranties on modifications?",
      answer: "Yes! All our installations come with a 1-year warranty covering workmanship. Paint jobs include a 3-year warranty against peeling or fading. Parts warranties vary by manufacturer."
    },
    {
      Icon: Image,
      question: "Can I see the design before installation?",
      answer: "Absolutely! We provide 3D renderings and digital mockups of your car with the planned modifications before starting any work. This helps visualize the final result."
    },
    {
      Icon: Car,
      question: "Do you work on all car brands?",
      answer: "We specialize in most major car brands including Japanese, European, and American vehicles. Contact us with your specific make and model for confirmation."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
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
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="absolute -left-16 top-0 text-red-500/20"
        >
          <Settings className="w-32 h-32" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="absolute -right-16 bottom-0 text-red-500/20"
        >
          <Wrench className="w-32 h-32" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-red-500 font-medium tracking-wide mb-2 block"
          >
            GOT QUESTIONS?
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          
          <motion.div 
            className="w-20 h-1 bg-red-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <p className="text-gray-400 max-w-lg mx-auto">
            Get answers to common questions about our services, process, and guarantees
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const IconComponent = faq.Icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-900/50 border border-neutral-800/50 rounded-xl overflow-hidden backdrop-blur-sm"
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left bg-transparent hover:bg-neutral-800/50 transition-colors duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      animate={{
                        rotate: hoveredIcon === index ? 360 : 0,
                        scale: hoveredIcon === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.6 }}
                      className="bg-red-500/10 p-2 rounded-lg"
                    >
                      <IconComponent className="w-6 h-6 text-red-500" />
                    </motion.div>
                    <span className="text-lg text-white font-medium pr-8">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ 
                      rotate: openIndex === index ? 180 : 0,
                      scale: hoveredIcon === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                  >
                    <ChevronDown className="w-6 h-6 text-red-500" />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                      exit={{ 
                        opacity: 0,
                        y: -20,
                        transition: {
                          duration: 0.2,
                          ease: "easeIn"
                        }
                      }}
                    >
                      <motion.div 
                        className="px-6 pb-6 pl-20"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-gray-400">{faq.answer}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 p-8 rounded-2xl border border-neutral-800/50 backdrop-blur-sm"
        >
          <h3 className="text-xl text-white mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-6">We&apos;re here to help with any other questions you might have</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;