"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function MeetModelC() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Image 1: Hero (Intro)
  // Visible: 0 to 20%. Centered.
  const img1Op = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const img1Scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  
  // Image 2: Disassembly (Power - Text Left)
  // Visible: 15% to 40%. Positioned Right.
  const img2Op = useTransform(scrollYProgress, [0.1, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const img2X = useTransform(scrollYProgress, [0.1, 0.2, 0.35, 0.4], ["10%", "20%", "20%", "30%"]);
  const img2Scale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);

  // Image 3: Core (Energy - Text Right)
  // Visible: 35% to 60%. Positioned Left.
  const img3Op = useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.6], [0, 1, 1, 0]);
  const img3X = useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.6], ["-10%", "-20%", "-20%", "-30%"]);
  const img3Scale = useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1]);

  // Image 4: Reassembly (Torque & Outro)
  // Visible: 55% to 100%. Positioned Right, then Centered & Panned Up.
  const img4Op = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 1, 1]);
  const img4X = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8, 0.85, 1], ["10%", "20%", "20%", "20%", "0%", "0%"]);
  const img4Y = useTransform(scrollYProgress, [0.8, 0.9, 1], ["0vh", "-15vh", "-15vh"]);
  const img4Scale = useTransform(scrollYProgress, [0.5, 0.8, 1], [0.9, 1, 0.9]);

  // Storytelling Text Opacities
  const text2Op = useTransform(scrollYProgress, [0.15, 0.2, 0.3, 0.35], [0, 1, 1, 0]);
  const text3Op = useTransform(scrollYProgress, [0.35, 0.4, 0.5, 0.55], [0, 1, 1, 0]);
  const text4Op = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const text5Op = useTransform(scrollYProgress, [0.8, 0.9, 1, 1], [0, 1, 1, 1]);

  // Storytelling Text Slides (Y-axis)
  const text2Y = useTransform(scrollYProgress, [0.15, 0.2, 0.3, 0.35], [30, 0, 0, -30]);
  const text3Y = useTransform(scrollYProgress, [0.35, 0.4, 0.5, 0.55], [30, 0, 0, -30]);
  const text4Y = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [30, 0, 0, -30]);

  return (
    <section id="meet-model-c" className="relative bg-[#050505] text-white">
      
      {/* ===================== STATIC INTRO TEXT ===================== */}
      <div className="pt-32 pb-16 text-center px-6 relative z-30">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 drop-shadow-lg">NOVA X</h2>
        <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide mb-4">Pure electric performance.</p>
        <p className="text-white/60 max-w-lg font-light mx-auto">Flagship personal mobility — engineered for speed, control, and silence.</p>
      </div>

      {/* ===================== SCROLL ANIMATION BLOCK ===================== */}
      <div ref={containerRef} className="relative h-[350vh]">
        
        {/* Sticky Stage */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#050815_0%,_#050505_100%)] opacity-80" />

          {/* IMAGE SEQUENCE AS DISTINCT CINEMATIC SHOTS */}
          <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
             
             {/* SHOT 1 */}
             <motion.img 
               src="/nova/1.jpg" 
               style={{ opacity: img1Op, scale: img1Scale }} 
               className="absolute w-full h-full object-cover md:object-contain"
               alt="NOVA X Hero"
             />
             
             {/* SHOT 2 */}
             <motion.img 
               src="/nova/2.jpg" 
               style={{ opacity: img2Op, x: img2X, scale: img2Scale }} 
               className="absolute w-full h-full object-cover md:object-contain"
               alt="NOVA X Disassembly"
             />
             
             {/* SHOT 3 */}
             <motion.img 
               src="/nova/3.jpg" 
               style={{ opacity: img3Op, x: img3X, scale: img3Scale }} 
               className="absolute w-full h-full object-cover md:object-contain"
               alt="NOVA X Inner Core"
             />
             
             {/* SHOT 4 */}
             <motion.img 
               src="/nova/4.jpg" 
               style={{ opacity: img4Op, x: img4X, y: img4Y, scale: img4Scale }} 
               className="absolute w-full h-full object-cover md:object-contain"
               alt="NOVA X Reassembly"
             />
             
             {/* Vignette to soften harsh image borders */}
             <div className="absolute inset-0 shadow-[inset_0_0_150px_#050505] pointer-events-none" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-50 pointer-events-none" />
          </div>

          {/* STORYTELLING OVERLAYS */}
          <motion.div style={{ opacity: text2Op, y: text2Y }} className="absolute inset-0 flex flex-col items-start justify-center pl-[5%] md:pl-[10%] pointer-events-none px-6 z-30">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-md drop-shadow-md">Precision-engineered power.</h2>
            <p className="text-white/60 max-w-md leading-relaxed font-light text-lg">
              Vibration-damped composite deck, sealed housings, and structural reinforcements tuned for high-speed stability and rider comfort.
            </p>
          </motion.div>

          <motion.div style={{ opacity: text3Op, y: text3Y }} className="absolute inset-0 flex flex-col items-end justify-center pr-[5%] md:pr-[10%] text-right pointer-events-none px-6 z-30">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-md drop-shadow-md">High-density energy system.</h2>
            <p className="text-white/60 max-w-md leading-relaxed font-light text-lg ml-auto">
              • Long-range lithium pack<br/>
              • Thermal-balanced cooling<br/>
              • Intelligent BMS for safety & longevity
            </p>
          </motion.div>

          <motion.div style={{ opacity: text4Op, y: text4Y }} className="absolute inset-0 flex flex-col items-start justify-center pl-[5%] md:pl-[10%] pointer-events-none px-6 z-30">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-md drop-shadow-md">Instant torque. Total control.</h2>
            <p className="text-white/60 max-w-md leading-relaxed font-light text-lg">
              High-performance brushless propulsion • Regenerative braking • Precise ride-by-wire modulation.
            </p>
          </motion.div>

          <motion.div style={{ opacity: text5Op }} className="absolute inset-0 flex flex-col items-center justify-end pb-32 text-center pointer-events-none px-6 z-30">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">Ride the future.</h2>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-10">Performance perfected in carbon, copper, and code.</p>
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pointer-events-auto">
               <Link href="#order" className="px-10 py-4 bg-gradient-to-r from-[#0050FF] to-[#00D6FF] rounded-full text-white font-medium hover:shadow-[0_0_30px_rgba(0,214,255,0.4)] transition-all tracking-wide block">
                 Experience NOVA X
               </Link>
               <Link href="#specs" className="text-white/60 hover:text-white transition-colors underline underline-offset-8 tracking-wide block">
                 See full specs
               </Link>
            </div>
            <p className="text-white/40 text-xs mt-6 font-light">Engineered for city streets, long commutes, and adrenaline.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
