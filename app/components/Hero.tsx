import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import BusinessCaseDiagram from '@/components/BusinessCaseDiagram';
import BusinessCaseDiagram2 from '@/components/BusinessCaseDiagram2';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const diagramVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 md:pt-50 lg:pt-50 xl:pt-24 pb-8 sm:pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col xl:flex-row gap-8 sm:gap-12 lg:gap-16 items-center w-full relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 relative text-center xl:text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[#80E0CC] text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#80E0CC] animate-pulse"></span>
            Intelligence Augmented Value Engineering
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-6 sm:mb-8"
          >
            Value Selling Starts <br />
            with a <span className="text-[#80E0CC] italic">Hypothesis.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#8D9190] font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto xl:mx-0"
          >
            Scale elite selling behavior with rapid, AI-augmented value engineering – from first draft hypotheses to executive-ready business cases.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 sm:gap-5 justify-center xl:justify-start"
          >
            <button className="bg-[#80E0CC] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(128,224,204,0.2)] cursor-pointer">
              Get Started <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
            <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold flex items-center gap-2 border border-white/10 hover:bg-white/5 transition-all cursor-pointer">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={12} className="sm:w-[14px] sm:h-[14px]" fill="white" />
              </div>
              <span className="hidden sm:inline">Watch Demo</span>
              <span className="sm:hidden">Watch</span>
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-8 text-gray-500 justify-center xl:justify-start"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="sm:w-4 sm:h-4 text-[#80E0CC]" />
              <span className="text-xs sm:text-sm font-medium">Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="sm:w-4 sm:h-4 text-[#80E0CC]" />
              <span className="text-xs sm:text-sm font-medium">No Training Required</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual: Business Case Diagram Component */}
        <motion.div
          variants={diagramVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 relative flex items-center justify-center select-none w-full xl:w-auto"
        >
          <div className="relative w-full max-w-[600px] mx-auto aspect-[4/3] lg:aspect-square flex items-center justify-center">
            <BusinessCaseDiagram2 width="100%" height="100%" />
          </div>
        </motion.div>
      </div>

      {/* Section Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest">Explore The Shift</span>
          <div className="w-px h-6 sm:h-8 bg-white/50"></div>
        </motion.div>
    </section>
  );
};

export default Hero;
