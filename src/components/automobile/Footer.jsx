'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Body Kits', href: '#' },
      { name: 'Custom Paint', href: '#' },
      { name: 'Detailing', href: '#' },
      { name: 'Performance', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Gallery', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    support: [
      { name: 'Contact', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Privacy', href: '#' }
    ]
  };

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">
                <span className="text-red-600">YBN</span>
                <span className="text-white"> BUMPER</span>
              </h2>
              <p className="text-gray-400 max-w-sm">
                Transform your ride with premium modifications and professional installations. Metro Manila&apos;s trusted car aesthetic specialist.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="bg-neutral-900 p-2 rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-red-500" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-white font-bold mb-6 uppercase">
                {title}
              </h3>
              <ul className="space-y-4">
                {links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                  >
                    <a href={link.href} className="text-gray-400 hover:text-red-500 transition-colors">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-8 mt-8 border-t border-neutral-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 YBN Bumper. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              className="mt-4 md:mt-0 bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;