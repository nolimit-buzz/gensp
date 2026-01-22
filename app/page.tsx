
'use client'
import React, { useEffect } from 'react';
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
    <div className="min-h-screen bg-[#020014] text-white selection:bg-[#b0f2d1] selection:text-black">
      <Navbar />
      <main>
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
