
import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = ['The Shift', 'Outcomes', 'How It Works', 'Meet Coach'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-50 h-24 transition-all duration-500 border-b border-[0.5px] border-[#1B2421] ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-[#020014]/80 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div>
            <svg width="137" height="40" viewBox="0 0 203 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2909_96)">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.90588 8.54145C9.16285 8.54145 11.7943 11.1945 11.7943 14.4299C11.7943 17.6868 9.16285 20.3183 5.90588 20.3183C2.64891 20.3183 0.0174561 17.6868 0.0174561 14.4299C0.0174561 11.1945 2.64891 8.54145 5.90588 8.54145ZM57.0899 7.05317C59.5272 7.05317 61.5116 9.03755 61.5116 11.4749C61.5116 13.9122 59.5272 15.875 57.0899 15.875C54.6526 15.875 52.6682 13.9122 52.6682 11.4749C52.6682 9.03755 54.6526 7.05317 57.0899 7.05317ZM62.6548 22.6047C65.0921 22.6047 67.0765 24.589 67.0765 27.0264C67.0765 29.4637 65.0921 31.4481 62.6548 31.4481C60.2174 31.4481 58.2331 29.4637 58.2331 27.0264C58.2331 24.589 60.2174 22.6047 62.6548 22.6047ZM56.0114 35.6972C58.4703 35.6972 60.4331 37.6816 60.4331 40.1189C60.4331 42.5563 58.4703 44.5407 56.0114 44.5407C53.5741 44.5407 51.6113 42.5563 51.6113 40.1189C51.6113 37.6816 53.5741 35.6972 56.0114 35.6972ZM35.9735 47.6035C38.4109 47.6035 40.3952 49.5879 40.3952 52.0252C40.3952 54.4625 38.4109 56.4469 35.9735 56.4469C33.5362 56.4469 31.5518 54.4625 31.5518 52.0252C31.5518 49.5879 33.5362 47.6035 35.9735 47.6035ZM22.8162 51.0546C25.2536 51.0546 27.2379 53.039 27.2379 55.4763C27.2379 57.9136 25.2536 59.898 22.8162 59.898C20.3789 59.898 18.3945 57.9136 18.3945 55.4763C18.3945 53.039 20.3789 51.0546 22.8162 51.0546ZM7.48044 35.8051C10.7158 35.8051 13.3689 38.4365 13.3689 41.6935C13.3689 44.9505 10.7158 47.5819 7.48044 47.5819C4.22347 47.5819 1.59202 44.9505 1.59202 41.6935C1.59202 38.4365 4.22347 35.8051 7.48044 35.8051ZM32.846 12.5318C40.158 12.5318 46.0895 18.4633 46.0895 25.7753C46.0895 33.0873 40.158 39.0189 32.846 39.0189C25.534 39.0189 19.6024 33.0873 19.6024 25.7753C19.6024 18.4633 25.534 12.5318 32.846 12.5318ZM20.9397 0C23.377 0 25.3614 1.98438 25.3614 4.42171C25.3614 6.85905 23.377 8.82185 20.9397 8.82185C18.5024 8.82185 16.518 6.85905 16.518 4.42171C16.518 1.98438 18.5024 0 20.9397 0Z" fill="#71D5CB" />
                <path fillRule="evenodd" clipRule="evenodd" d="M62.3959 25.9911L58.0605 14.43L58.3193 14.3437L62.6548 25.9264L62.3959 25.9911ZM6.18628 14.3868L20.3358 4.65906L20.4867 4.85318L6.33726 14.5809L6.18628 14.3868ZM22.4496 5.91008L27.4536 13.7397L27.3458 13.826L22.3417 5.97479L22.4496 5.91008ZM8.14909 42.6211L33.0832 25.495L33.3205 25.8401L8.38635 42.9662L8.14909 42.6211ZM9.055 45.5545L20.2279 55.1744L20.0769 55.3254L8.92558 45.7055L9.055 45.5545ZM24.7359 54.3116L33.7734 53.0391L33.795 53.2332L24.7359 54.5058V54.3116ZM39.7266 28.8598L56.5291 39.5151L56.2487 39.8818L39.4462 29.2265L39.7266 28.8598ZM57.4566 37.6386L62.4606 29.9814L62.6116 30.1109L57.6075 37.768L57.4566 37.6386Z" fill="#80E0CC" stroke="#71D5CB" strokeWidth="0.5" />
                <path d="M95.8568 32.877V28.2181H107.806V39.1969C106.641 40.34 104.959 41.3322 102.759 42.195C100.559 43.0578 98.3157 43.4892 96.0509 43.4892C93.1822 43.4892 90.6586 42.8852 88.5232 41.6773C86.3879 40.4694 84.7917 38.7223 83.7133 36.4791C82.6348 34.2359 82.0956 31.777 82.0956 29.124C82.0956 26.2553 82.6995 23.7101 83.9074 21.4669C85.0937 19.2452 86.8624 17.5197 89.1703 16.3334C90.939 15.4275 93.1391 14.9745 95.749 14.9745C99.1785 14.9745 101.832 15.6863 103.751 17.1099C105.671 18.555 106.922 20.5394 107.461 23.0846L101.939 24.1199C101.551 22.761 100.818 21.6826 99.7393 20.9061C98.6824 20.1296 97.3451 19.7413 95.749 19.7413C93.3332 19.7413 91.392 20.4963 89.9684 22.0492C88.5448 23.5807 87.833 25.867 87.833 28.9083C87.833 32.1868 88.5448 34.6242 89.99 36.2634C91.4567 37.9027 93.3548 38.7223 95.7058 38.7223C96.849 38.7223 98.0137 38.4851 99.1785 38.0321C100.365 37.5792 101.357 37.0184 102.198 36.3713V32.877H95.8568ZM121.567 36.6732L126.83 37.5576C126.162 39.4988 125.083 40.9655 123.638 41.9793C122.171 42.9715 120.338 43.4892 118.159 43.4892C114.687 43.4892 112.12 42.346 110.459 40.0812C109.144 38.2694 108.496 35.9615 108.496 33.2006C108.496 29.9005 109.359 27.2906 111.085 25.4356C112.81 23.5591 114.989 22.61 117.62 22.61C120.597 22.61 122.926 23.6022 124.63 25.5435C126.356 27.5063 127.175 30.526 127.089 34.5595H113.91C113.953 36.134 114.363 37.3419 115.183 38.2262C116.003 39.089 117.016 39.5204 118.203 39.5204C119.044 39.5204 119.734 39.3047 120.295 38.8517C120.856 38.3988 121.265 37.687 121.567 36.6732ZM121.869 31.3456C121.826 29.8142 121.438 28.6495 120.683 27.8514C119.95 27.0533 119.022 26.6435 117.944 26.6435C116.801 26.6435 115.852 27.0749 115.118 27.9161C114.363 28.7573 113.997 29.9005 114.018 31.3456H121.869ZM146.653 42.9931H141.39V32.8123C141.39 30.6554 141.282 29.275 141.066 28.6495C140.829 28.0239 140.462 27.5279 139.945 27.1827C139.427 26.8161 138.823 26.6435 138.111 26.6435C137.184 26.6435 136.364 26.9023 135.631 27.3984C134.897 27.8945 134.38 28.5632 134.121 29.3828C133.84 30.2024 133.711 31.7339 133.711 33.9555V42.9931H128.448V23.0414H133.323V25.9533C135.07 23.7316 137.27 22.61 139.923 22.61C141.088 22.61 142.166 22.8257 143.137 23.2356C144.107 23.6669 144.841 24.2062 145.337 24.8533C145.833 25.5003 146.178 26.2337 146.372 27.0533C146.566 27.8945 146.653 29.0593 146.653 30.5907V42.9931Z" fill="white" />
                <path d="M158.221 34.0634L163.634 33.5241C163.958 35.3359 164.627 36.6732 165.619 37.5144C166.611 38.3772 167.948 38.787 169.631 38.787C171.421 38.787 172.758 38.4204 173.664 37.6654C174.57 36.9105 175.023 36.0262 175.023 35.0124C175.023 34.3653 174.829 33.8045 174.441 33.3516C174.074 32.8986 173.405 32.4888 172.456 32.1653C171.809 31.928 170.343 31.5397 168.035 30.9574C165.058 30.2024 162.987 29.2965 161.78 28.2181C160.097 26.7082 159.256 24.8533 159.256 22.6748C159.256 21.2727 159.666 19.9354 160.442 18.7276C161.24 17.4981 162.383 16.5706 163.872 15.9236C165.36 15.2765 167.15 14.9745 169.264 14.9745C172.715 14.9745 175.303 15.7294 177.051 17.2609C178.776 18.7923 179.704 20.8198 179.79 23.3865L174.203 23.5807C173.966 22.1571 173.47 21.1433 172.694 20.5178C171.917 19.8923 170.752 19.5688 169.199 19.5688C167.603 19.5688 166.352 19.9139 165.446 20.5825C164.864 21.0139 164.562 21.5747 164.562 22.2865C164.562 22.9552 164.842 23.4944 165.382 23.9689C166.093 24.5513 167.776 25.1768 170.494 25.8239C173.168 26.4494 175.174 27.118 176.468 27.7867C177.762 28.4769 178.776 29.4044 179.488 30.5907C180.221 31.777 180.588 33.2437 180.588 34.9693C180.588 36.5438 180.157 38.0321 179.272 39.4125C178.409 40.793 177.158 41.8067 175.562 42.4754C173.966 43.144 171.96 43.4892 169.566 43.4892C166.093 43.4892 163.419 42.6911 161.564 41.0734C159.687 39.4773 158.587 37.1262 158.221 34.0634ZM182.421 42.9931V15.4706H191.351C194.716 15.4706 196.916 15.6 197.93 15.8804C199.526 16.2902 200.842 17.1961 201.898 18.5766C202.955 19.957 203.495 21.7473 203.495 23.9258C203.495 25.6298 203.193 27.0318 202.567 28.1965C201.963 29.3397 201.187 30.2456 200.238 30.9142C199.31 31.5613 198.34 31.9927 197.369 32.2084C196.053 32.4672 194.133 32.5966 191.61 32.5966H188.008V42.9931H182.421ZM188.008 20.108V27.9592H191.028C193.228 27.9592 194.673 27.8083 195.406 27.5279C196.139 27.2259 196.722 26.7729 197.132 26.169C197.563 25.5435 197.757 24.8317 197.757 24.012C197.757 23.0199 197.477 22.1787 196.894 21.5316C196.29 20.8845 195.557 20.4747 194.651 20.3021C194.004 20.1727 192.667 20.108 190.682 20.108H188.008Z" fill="#71D5CB" />
              </g>
              <defs>
                <clipPath id="clip0_2909_96">
                  <rect width="203" height="59.898" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center">
          <div className="px-6 py-2.5 rounded-full bg-[#050707] backdrop-blur-sm border border-white/10 flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                whileHover={{ 
                  color: '#b0f2d1',
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-[14px] font-normal text-gray-300 cursor-pointer"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <motion.button
            whileHover={{ 
              scale: 1.15,
              rotate: 15,
              color: '#b0f2d1'
            }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Search size={20} />
          </motion.button>
          <Link href="/book-a-demo-with-nick">
            <motion.button 
              className="hidden lg:block relative overflow-hidden bg-[#b0f2d1] text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(176,242,209,0.3)] group cursor-pointer"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 30px rgba(176,242,209,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Book A Demo</span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
          <motion.button 
            className="lg:hidden text-gray-400 cursor-pointer"
            whileHover={{ 
              scale: 1.1,
              color: '#b0f2d1'
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-24 min-h-screen bg-black/80 backdrop-blur-md z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="px-6 pt-8 pb-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Items */}
              <div className="flex flex-col items-center gap-4 mb-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.2 + (index * 0.1),
                    }}
                    whileHover={{
                      color: '#b0f2d1',
                    }}
                    className="text-[16px] font-normal text-gray-300 text-center transition-colors duration-200 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              {/* Search Icon */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex justify-center mb-6"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 15,
                    color: '#b0f2d1'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Search size={20} />
                </motion.button>
              </motion.div>

              {/* Book A Demo Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="flex justify-center"
              >
                <Link href="/book-a-demo-with-nick" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.button 
                    className="relative overflow-hidden bg-[#b0f2d1] text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(176,242,209,0.3)] group cursor-pointer"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(176,242,209,0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Book A Demo</span>
                    <motion.div 
                      className="absolute inset-0 bg-white"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
