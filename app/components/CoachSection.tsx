
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Bot, FileText, ChevronRight, ChevronLeft } from 'lucide-react';

const CoachSection: React.FC = () => {
  const pillars = [
    { label: 'RESEARCH', icon: <TrendingUp size={16} />, desc: 'Build on your understanding of the account. Go deeper and brainstorm value.' },
    { label: 'CREATE', icon: <TrendingUp size={16} />, desc: 'Generate new assets and artifacts to support your engagements.' },
    { label: 'REFINE', icon: <TrendingUp size={16} />, desc: 'Tweak the value hypothesis, business case, or questioning until it\'s customer-ready. Edit the business case based on buyer feedback.' },
    { label: 'ENRICH', icon: <TrendingUp size={16} />, desc: 'Add context based on inside knowledge of the account. Upload value frameworks, decks, past business cases, account plans, or call transcripts to mature the business case.' }
  ];

  const [activeTab, setActiveTab] = useState(0);

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % pillars.length);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + pillars.length) % pillars.length);
  };

  return (
    <section id="meet-coach" className="py-24 relative bg-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold mb-8">
            Coach: Your thought partner in <span className="text-white/40">building, <br /> refining, and executing</span> your value strategy
          </h2>
          <p className="text-[16px] font-normal text-gray-400 max-w-3xl mx-auto">
            Business casing is a dynamic process. Coach helps sellers instantly tailor insights to the moment – whether prepping for an executive meeting or refining your business case.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {/* Mobile Tabs/Pillars - Card Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="block lg:hidden mb-0"
          >
            <div className="bg-[#414946] rounded-none px-6 py-6 border border-white/10">
              {/* Coach Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border border-[#71D5CB]/30 flex items-center justify-center bg-black/20 flex-shrink-0">
                  <Bot size={20} className="text-[#71D5CB]" />
                </div>
                <span className="text-white font-bold text-[14px]">Coach</span>
              </div>
              
              {/* Tab Content */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-white font-bold text-[16px] mb-2 tracking-wide">
                    {pillars[activeTab].label}
                  </h4>
                  <p className="text-white/80 text-[14px] leading-[120%]">
                    {pillars[activeTab].desc}
                  </p>
                </div>
                
                {/* Navigation */}
                <div className="flex flex-col items-center gap-3 ml-4">
                  <button
                    onClick={nextTab}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>
                  <span className="text-white text-[12px] font-medium">
                    {activeTab + 1}/{pillars.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Tabs/Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="hidden lg:grid grid-cols-4 w-full relative z-10 lg:-mb-8"
          >
            {pillars.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`pt-8 px-8 pb-14 text-left transition-all relative rounded-t-3xl border-t border-l border-r border-white/5 cursor-pointer ${activeTab === idx
                  ? 'bg-[#414946] border-none'
                  : 'bg-[#000000] hover:bg-white/5'
                  }`}
              >
                <div className={`mb-4 ${activeTab === idx ? 'text-[#71D5CB]' : 'text-gray-500'}`}>
                  {p.icon}
                </div>
                <h4 className={`text-[13px] font-bold mb-3 tracking-wide ${activeTab === idx ? 'text-white' : 'text-gray-500'}`}>
                  {p.label}
                </h4>
                <p className={`text-[14px] leading-[120%] ${activeTab === idx ? 'text-white/80' : 'text-gray-500'}`}>
                  {p.desc}
                </p>
              </button>
            ))}
          </motion.div>

          {/* Main Coach Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col bg-[#414946] rounded-b-3xl lg:rounded-3xl overflow-hidden min-h-[600px] shadow-2xl border-[0.5px] border-t-0 border-white/10 relative z-20"
          >
            {/* Coach Header */}
            <div className="hidden lg:flex p-8 pb-6 items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-[#71D5CB]/30 flex items-center justify-center bg-black/20 flex-shrink-0">
                <Bot size={20} className="text-[#71D5CB]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="relative inline-block leading-none">
                  <span className="text-[14px] font-bold text-white">Coach</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#71D5CB]"></div>
                </div>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#71D5CB]"></div>
                  <span className="text-[8px] font-bold text-[#71D5CB] tracking-[0.1em] uppercase leading-none">
                    OPERATIONAL: RESEARCH
                  </span>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <motion.div 
              layout
              className="flex-1 bg-black p-8 space-y-8 flex flex-col justify-start"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Coach Message */}
              <div className="flex justify-start">
                <div className="bg-[#1A1D1F] border border-white/10 p-6 rounded-[24px] rounded-tl-none max-w-[700px]">
                  <p className="text-[16px] text-white/90 leading-relaxed font-normal">
                    Hello! I am your Value Selling Coach. Ask me questions or upload documents for me to guide you effectively
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex flex-col items-end gap-3 pt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#1A1D1F] border border-[#71D5CB]/40 p-6 rounded-[24px] rounded-tr-none max-w-[560px] shadow-lg shadow-[#71D5CB]/5"
                  >
                    <p className="text-[16px] text-white/90 leading-relaxed font-normal">
                      {activeTab === 0 && "Dive deeper into where Acme is currently spending to mitigate risk as it relates to their undergrounding/wildfire initiatives and tell me how I might consider a narrative that highlights our ability to optimize their spend."}
                      {activeTab === 1 && "This business case proposes a mix of both our grid and consulting solutions to be rolled out over the course of a year and a half. I need to brief my team at (our company) on our account and value strategy so that we can begin mapping requirements and assigning roles. Draft a success plan that covers joint objectives and milestones with estimated roles and responsibilities."}
                      {activeTab === 2 && "Rebuild a business case that angles more towards their need to sustain 2-3% reductions in non fuel O&M each year, highlighting downstream effects on their broader financial model if this isn't achieved, and positioning our cost and productivity benchmarking capabilities as the recommended approach."}
                      {activeTab === 3 && "Here is an example of an ROI model for a similar account. Use this framework and the benchmarks for cost savings against Acme's specific context to inform a new business case."}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  {activeTab === 3 && (
                    <motion.div
                      initial={{ y: 20, opacity: 0, scale: 0.95 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: 20, opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-[#1A1D1F] border border-[#71D5CB]/40 p-4 rounded-[16px] rounded-tr-none flex items-center gap-3 w-fit pr-12 shadow-lg shadow-[#71D5CB]/5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                        <FileText size={16} className="text-white/40" />
                      </div>
                      <span className="text-[16px] text-white/90 font-medium tracking-tight">ROI_model.pptx</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Typing Indicator */}
              <div className="pt-2 flex justify-start">
                <div className="bg-[#1A1D1F] border border-white/10 p-4 rounded-full rounded-tl-none flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-[#71D5CB] rounded-full animate-bounce [animation-duration:800ms]"></div>
                  <div className="w-1.5 h-1.5 bg-[#71D5CB] rounded-full animate-bounce [animation-duration:800ms] [animation-delay:150ms]"></div>
                  <div className="w-1.5 h-1.5 bg-[#71D5CB] rounded-full animate-bounce [animation-duration:800ms] [animation-delay:300ms]"></div>
                </div>
              </div>
            </motion.div>

            {/* Coach Input Footer */}
            <div className="p-8 pt-6">
              <div className="h-16 w-full bg-black/40 border border-white/10 rounded-full flex items-center px-6 text-white/40 text-[13px] font-normal">
                Ask Coach anything...
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default CoachSection;
