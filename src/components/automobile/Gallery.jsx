'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'bodykit', label: 'Body Kits' },
    { id: 'paint', label: 'Custom Paint' },
    { id: 'detail', label: 'Detailing' }
  ];

  const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1200",  // Changed first image
        category: 'bodykit',
        title: "Matte Black Beast",
        description: "Custom wide body kit installation"
      },
      {
        src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200",
        category: 'paint',
        title: "Pearl White Dream",
        description: "Custom paint job with ceramic coating"
      },
      {
        src: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1200",  // Changed third image
        category: 'detail',
        title: "Show Car Finish",
        description: "Full exterior detailing"
      },
    {
      src: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200",
      category: 'bodykit',
      title: "Street Performance",
      description: "Aero kit with carbon accents"
    },
    {
      src: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?q=80&w=1200",
      category: 'paint',
      title: "Racing Red",
      description: "Custom metallic paint finish"
    },
    {
      src: "https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?q=80&w=1200",
      category: 'detail',
      title: "Diamond Shine",
      description: "Premium paint correction"
    }
  ];

  const filteredImages = galleryImages.filter(img => 
    category === 'all' ? true : img.category === category
  );

  const Modal = ({ image, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative max-w-7xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <Image 
          src={image.src} 
          alt={image.title}
          width={300}
          height={300}
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
          <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
          <p className="text-gray-300">{image.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Gallery
          </h2>
          <motion.div 
            className="w-20 h-1 bg-red-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-400">Check out our latest transformations</p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                category === cat.id 
                  ? 'bg-red-600 text-white'
                  : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layoutId={image.src}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="aspect-square relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <motion.div className="relative">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;