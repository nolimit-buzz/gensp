
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Evolution: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="the-shift" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#020014] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 text-[#b0f2d1] text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#b0f2d1]/5 rounded-full"
          >
            <Zap size={12} className="sm:w-[14px] sm:h-[14px]" fill="currentColor" /> The Evolution
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-[1.1] sm:leading-[1.2] font-bold tracking-normal text-center mb-6 sm:mb-8">
            New Buyer Expectations = <span className="text-gray-500">New Selling Benchmarks</span>
          </h2>
          <div className="max-w-[748px] mx-auto text-[#8D9190] text-sm sm:text-base md:text-lg leading-relaxed tracking-[0%] text-center font-normal font-sans space-y-3 sm:space-y-4 px-4 sm:px-0">
            <p>
              The traditional sales process leads with us – our product, our features, our checklist of discovery questions.
            </p>
            <p>But buyers don't care. <span className="text-white font-bold">They're focused on how their business can improve.</span></p>
            <p>
              Top-performers anchor the entire sales motion around a business case from day one – shifting conversations from
              "here's what we do" to "here's the value we can create together".
            </p>
          </div>
        </motion.div>

        {/* Quote Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.1] sm:leading-[1.2] font-bold tracking-normal">
            That's how deals move <span className="text-gray-400">faster</span>
            <br />
            and close <span className="text-gray-400">bigger.</span>
          </h3>
        </motion.div>

        {/* Diagram Flow */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex justify-center w-full"
          >
            <img 
              src="/business-diagrams.png" 
              alt="Business process diagrams" 
              className="hidden lg:block w-full max-w-[1200px] h-auto object-contain"
            />
            <img 
              src="/business-diagrams-mobile.png" 
              alt="Business process diagrams" 
              className="block lg:hidden w-full max-w-[600px] h-auto object-contain mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FlowItem = ({ label, sub, color, active, variants }: { label: string, sub: string, color: string, active?: boolean, variants?: any }) => (
  <motion.div
    variants={variants}
    whileHover={{ y: -5, scale: 1.02 }}
    className={`w-64 p-6 rounded-2xl border transition-colors ${active ? 'bg-[#b0f2d1]/5 border-[#b0f2d1]/20 hover:border-[#b0f2d1]/40' : 'bg-white/5 border-white/10 hover:border-white/20'} backdrop-blur-sm`}
  >
    <h4 className={`text-lg font-bold mb-2 ${active ? 'text-[#b0f2d1]' : 'text-gray-300'}`}>{label}</h4>
    <p className="text-xs text-gray-500 leading-relaxed">{sub}</p>
  </motion.div>
);

const Arrow = ({ direction, color, label }: { direction: 'right' | 'down', color: 'red' | 'teal', label?: string }) => (
  <div className="flex-1 min-w-[80px] flex flex-col items-center justify-center relative px-2">
    {label && (
      <span className={`absolute -top-12 text-[9px] font-bold uppercase text-center w-full leading-tight ${color === 'red' ? 'text-[#ff5f5f]' : 'text-[#b0f2d1]'}`}>
        {label}
      </span>
    )}
    <div className={`h-px w-full ${color === 'red' ? 'bg-[#ff5f5f]/30' : 'bg-[#b0f2d1]/30'} relative`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`absolute inset-0 origin-left ${color === 'red' ? 'bg-[#ff5f5f]' : 'bg-[#b0f2d1]'} h-px`}
      />
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 rotate-45 ${color === 'red' ? 'border-[#ff5f5f]' : 'border-[#b0f2d1]'}`}></div>
    </div>
  </div>
);

export default Evolution;
