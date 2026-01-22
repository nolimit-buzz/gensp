import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Phil Vera",
    role: "Sr. Director, Partner Growth",
    image: "https://picsum.photos/200/200?random=10",
    quote: "We spent the past year experimenting with AI across multiple initiatives, and Gen SP was one of the only use cases we've seen that went beyond 'cool tech', driving improved execution and a documented impact on wins and efficiency across our team."
  },
  {
    name: "Sarah Jenkins",
    role: "VP of Global Sales",
    image: "https://picsum.photos/200/200?random=11",
    quote: "The value hypothesis framework has fundamentally changed how our AEs approach discovery. We're seeing shorter sales cycles because we're aligning with executive priorities from the very first interaction."
  },
  {
    name: "David Chen",
    role: "Enterprise Account Executive",
    image: "https://picsum.photos/200/200?random=12",
    quote: "GenSP's Business Case tool is a masterclass in co-creation. My champions finally have the data and narrative they need to win over the CFO without me having to be in every internal meeting."
  }
];

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b0f2d1] opacity-[0.02] rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Customizable, <span className="text-white/40">not <br />off-the-shelf.</span>
          </h2>
          <div className="text-lg text-gray-400 space-y-6 max-w-md">
            <p>Gen SP is a customizable platform that anchors on the principles of strong value selling. We'll partner together to configure a set of AI prompts based on your organization's thought leadership, full solution set, target customers, etc. to create value insights curated for your sellers.</p>
            <p>This platform can be leveraged across all value planning motions – from deal acceleration to account expansion. Ultimately, enabling all of your sellers to drive <span className="text-white font-bold">more transformational deals.</span></p>
          </div>
        </div>

        <div className="relative h-full flex flex-col justify-center">
          <div className="absolute -top-10 -right-10 text-white/5 pointer-events-none">
            <Quote size={200} />
          </div>
          
          <div className="bg-[#0a0c10] border border-white/10 p-12 rounded-[40px] relative z-10 backdrop-blur-xl min-h-[480px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-10">
                  <img 
                    src={testimonials[activeIndex].image} 
                    className="w-16 h-16 rounded-full border-2 border-[#b0f2d1]/50 object-cover" 
                    alt={testimonials[activeIndex].name} 
                  />
                  <div>
                    <h4 className="font-bold text-xl">{testimonials[activeIndex].name}</h4>
                    <p className="text-[#b0f2d1] text-sm uppercase tracking-widest font-bold">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
                
                <p className="text-2xl font-medium leading-relaxed mb-10 text-gray-200 flex-grow">
                  "{testimonials[activeIndex].quote}"
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <motion.div 
                    key={idx}
                    animate={{ 
                      width: activeIndex === idx ? 32 : 16,
                      backgroundColor: activeIndex === idx ? "#b0f2d1" : "rgba(255, 255, 255, 0.1)"
                    }}
                    className="h-1 rounded-full cursor-pointer"
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[#b0f2d1]/40 transition-all active:scale-90"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-[#b0f2d1]/40 transition-all active:scale-90"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
