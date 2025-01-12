import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../../img/logo.jpeg'; // Import the logo image

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-r from-pink-500 to-purple-600 py-8"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
        style={{ backgroundImage: `url(${logoImage})` }} // Use the imported image
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          <motion.div 
            className="flex items-center mb-4 md:mb-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={logoImage} // Use the imported image
              alt="Miss Bloom Global Logo"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg mr-4"
            />
            <div>
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Miss Bloom Global
              </motion.h1>
              <motion.p 
                className="text-pink-100 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Empowering Women Worldwide
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-purple-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              Join Us
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors cursor-pointer"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
