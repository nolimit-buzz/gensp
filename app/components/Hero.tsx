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
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#b0f2d1] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_#1d4ed8_0%,_transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#b0f2d1] opacity-[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#80E0CC] text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#80E0CC] animate-pulse"></span>
            Intelligence Augmented Value Engineering
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8"
          >
            Value Selling Starts <br />
            with a <span className="text-[#80E0CC] italic">Hypothesis.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-[#8D9190] font-normal leading-relaxed mb-10 max-w-xl"
          >
            Scale elite selling behavior with rapid, AI-augmented value engineering – from first draft hypotheses to executive-ready business cases.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5"
          >
            <button className="bg-[#80E0CC] text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(128,224,204,0.2)] cursor-pointer">
              Get Started <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 rounded-full font-bold flex items-center gap-2 border border-white/10 hover:bg-white/5 transition-all cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={14} fill="white" />
              </div>
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center gap-8 text-gray-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#80E0CC]" />
              <span className="text-sm font-medium">Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#80E0CC]" />
              <span className="text-sm font-medium">No Training Required</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual: Business Case Diagram Component */}
        <motion.div
          variants={diagramVariants}
          initial="hidden"
          animate="visible"
          className="relative flex items-center justify-center select-none"
        >
          <div className="relative w-full  aspect-[4/3] lg:aspect-square flex items-center justify-center">
            <BusinessCaseDiagram2 width="100%" height="100%" />
          </div>
        </motion.div>
      </div>

      {/* Section Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Explore The Shift</span>
        <div className="w-px h-8 bg-white/50"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
