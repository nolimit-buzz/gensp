
import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-12 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-5xl lg:text-7xl font-bold mb-10 leading-tight">
            Ready to make your team <br /> <span className="text-white/40">strategic sellers?</span>
          </h2>
          <p className="text-gray-500 mb-10">See how Gen SP scales business case-driven selling and drives greater deal values.</p>
          <button className="bg-[#b0f2d1] text-black px-12 py-5 rounded-full text-lg font-bold hover:bg-[#9de4c1] transition-all transform hover:scale-105 shadow-[0_10px_40px_rgba(176,242,209,0.3)]">
            Book A Demo
          </button>
        </div>

        <div className="border-t border-white/5 pt-20 pb-10 flex flex-col items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#b0f2d1] flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border-2 border-black"></div>
            </div>
            <span className="text-3xl font-bold tracking-tight">Gen SP</span>
          </div>

          <p className="text-gray-500 text-center max-w-md text-sm leading-relaxed">
            The premium AI platform for elite sales teams to engineer value at scale. Transform every conversation into a strategic business case.
          </p>

          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">The Shift</a>
            <a href="#" className="hover:text-white transition-colors">Outcomes</a>
            <a href="#" className="hover:text-white transition-colors">How It Works</a>
            <a href="#" className="hover:text-white transition-colors">Meet Coach</a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook size={18} fill="currentColor" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Twitter size={18} fill="currentColor" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Youtube size={18} fill="currentColor" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          <p>© 2024 Gen SP Technologies Inc. Crafted for elite performers.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
