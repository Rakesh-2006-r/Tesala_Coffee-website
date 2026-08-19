"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with simple CSS gradient for dark/sleek vibe */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-80" />
      
      {/* Optional: A placeholder for a sleek product image in the background or floating */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-30 mt-20">
        <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-blue-900 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The Future of Mobility.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          0 to 40mph in silence. Engineered for the streets.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a href="#order" className="w-full sm:w-64 py-3 bg-[#0050FF] hover:bg-[#00D6FF] text-white font-medium tracking-widest text-sm rounded transition-colors text-center uppercase">
            Order NOVA X
          </a>
          <a href="#meet-model-c" className="w-full sm:w-64 py-3 bg-transparent border border-gray-500 hover:border-white text-white font-medium tracking-widest text-sm rounded transition-colors text-center uppercase">
            Explore NOVA X
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span>Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
