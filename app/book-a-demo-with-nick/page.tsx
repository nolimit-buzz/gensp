'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const BookADemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020014] text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col py-40 lg:py-50 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 lg:mb-0"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Book a Demo <span className="text-[#80E0CC]">with Nick</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#8D9190] font-normal leading-relaxed max-w-2xl mx-auto">
              Schedule a 30-minute session to see how Gen SP can transform your sales process and drive greater deal values.
            </p>
          </motion.div>
        </div>
        {/* <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pb-4 sm:pb-6"> */}
          <div className="w-full mx-auto scrollbar-hide!">
            <iframe
              src="https://calendly.com/nickwasser-perform-llc/30min?embed_domain=gen-sp.netlify.app&embed_type=Inline"
              width="100%"
              height="700"
              frameBorder="0"
              title="Select a Date & Time - Calendly"
              className="w-full rounded-2xl scrollbar-hide!"
            />
          </div>
        {/* </div> */}
      </main>
    </div>
  );
};

export default BookADemoPage;
