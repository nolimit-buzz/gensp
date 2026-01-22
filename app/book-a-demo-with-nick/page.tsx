'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

const BookADemoPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const SkeletonLoader = () => (
    <div className="w-full max-w-[900px] mx-auto mt-12 h-[550px] rounded-2xl bg-[#050707F2]/95 border border-white/5 overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Panel - Event Details */}
        <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/5 p-4 md:p-6 space-y-4">
          {/* Organizer Name */}
          <div className="h-3 bg-white/5 rounded w-20"></div>
          
          {/* Event Title */}
          <div className="space-y-2">
            <div className="h-6 bg-white/5 rounded w-3/4"></div>
            <div className="h-4 bg-white/5 rounded w-1/2"></div>
          </div>

          {/* Duration with Icon */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-white/5 rounded"></div>
            <div className="h-3 bg-white/5 rounded w-12"></div>
          </div>

          {/* Video Conference Info */}
          <div className="flex items-start gap-2">
            <div className="h-4 w-4 bg-white/5 rounded mt-0.5"></div>
            <div className="space-y-1.5 flex-1">
              <div className="h-3 bg-white/5 rounded w-full"></div>
              <div className="h-3 bg-white/5 rounded w-3/4"></div>
            </div>
          </div>

          {/* Cookie Settings Link */}
          <div className="mt-auto pt-2">
            <div className="h-2.5 bg-white/5 rounded w-24"></div>
          </div>
        </div>

        {/* Right Panel - Calendar & Time Selection */}
        <div className="lg:w-2/3 p-4 md:p-6 space-y-4 relative">
          {/* "POWERED BY Calendly" Banner */}
          <div className="absolute top-3 right-3 h-4 bg-white/5 rounded w-24 rotate-12"></div>

          {/* "Select a Date & Time" Heading */}
          <div className="h-6 bg-white/5 rounded w-2/3"></div>

          {/* Calendar Navigation */}
          <div className="flex items-center justify-between">
            <div className="h-6 w-6 bg-white/5 rounded"></div>
            <div className="h-5 bg-white/5 rounded w-24"></div>
            <div className="h-6 w-6 bg-white/5 rounded"></div>
          </div>

          {/* Days of Week Headers */}
          <div className="grid grid-cols-7 gap-1.5">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
              <div key={i} className="h-4 bg-white/3 rounded text-center"></div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1.5 justify-items-center">
            {Array.from({ length: 35 }).map((_, i) => {
              // Some dates are available (highlighted), some are not
              const isAvailable = i >= 21 && i <= 30; // Simulating available dates
              return (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${
                    isAvailable 
                      ? 'bg-white/10 border border-white/10' 
                      : 'bg-white/5'
                  }`}
                />
              );
            })}
          </div>

          {/* Time Zone Selector */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/5">
            <div className="h-3 w-3 bg-white/5 rounded"></div>
            <div className="h-3 bg-white/5 rounded w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );

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
        <div className="w-full mx-auto scrollbar-hide! relative">
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-10"
              >
                <SkeletonLoader />
              </motion.div>
            )}
          </AnimatePresence>
          <iframe
            src="https://calendly.com/nickwasser-perform-llc/30min?embed_domain=gen-sp.netlify.app&embed_type=Inline"
            width="100%"
            height="700"
            frameBorder="0"
            title="Select a Date & Time - Calendly"
            className={`w-full rounded-2xl scrollbar-hide! transition-opacity duration-300 ${
              isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
            style={{ visibility: isLoading ? 'hidden' : 'visible' }}
          />
        </div>
      </main>
    </div>
  );
};

export default BookADemoPage;
