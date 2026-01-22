
'use client'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Evolution from './components/Evolution';
import ValueProposition from './components/ValueProposition';
import ProductShowcase from './components/ProductShowcase';
import Testimonial from './components/Testimonial';
import CoachSection from './components/CoachSection';
import Footer from './components/Footer';

const Page: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-[#020014] text-white selection:bg-[#b0f2d1] selection:text-black relative">
      <Navbar />
      <main className="relative">
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-0 pointer-events-none"
          // initial={{ opacity: 0, scale: 0.95 }}
          // animate={{ 
          //   opacity: [0.3, 0.6, 0.3],
          //   scale: [1, 1.05, 1],
          //   y: [0, -20, 0]
          // }}
          // transition={{
          //   duration: 8,
          //   repeat: Infinity,
          //   ease: "easeInOut"
          // }}
        >
          <img 
            src="/gradient.png" 
            alt="" 
            className="w-full h-auto object-contain"
          />
        </motion.div>
        <Hero />
        <Evolution />
        <ValueProposition />
        <ProductShowcase />
        <Testimonial />
        <CoachSection />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
