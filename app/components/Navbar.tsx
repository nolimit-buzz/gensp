
import React, { useState, useEffect } from 'react';
import { Search, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-[#b0f2d1] flex items-center justify-center transition-transform group-hover:rotate-180 duration-500">
            <div className="w-4 h-4 rounded-full border-2 border-black"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">Gen SP</span>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
          {['The Shift', 'Outcomes', 'How It Works', 'Meet Coach'].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              whileHover={{ scale: 1.05, color: '#b0f2d1' }}
              className="transition-colors relative overflow-hidden group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#b0f2d1] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Search size={20} />
          </motion.button>
          <button className="relative overflow-hidden bg-[#b0f2d1] text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(176,242,209,0.3)] group">
            <span className="relative z-10">Book A Demo</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
          <button className="md:hidden text-gray-400">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
