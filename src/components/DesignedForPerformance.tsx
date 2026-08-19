"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function PressureGauge() {
  const [pressure, setPressure] = useState(0);

  // Animate the number from 0 to 9.0 when the component mounts
  useEffect(() => {
    let current = 0;
    const target = 9.0;
    const duration = 2000; // 2 seconds
    const interval = 20;
    const step = (target / duration) * interval;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setPressure(target);
        clearInterval(timer);
      } else {
        setPressure(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto h-[250px] md:h-[300px] flex items-end justify-center overflow-visible mb-16">
      <svg viewBox="0 0 300 160" className="w-full h-full overflow-visible drop-shadow-2xl">
        {/* Background Arc */}
        <path 
          d="M 30 150 A 120 120 0 0 1 270 150" 
          fill="none" 
          stroke="#171717" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        
        {/* Dial Ticks */}
        {Array.from({ length: 11 }).map((_, i) => {
          const angle = -180 + (i * 18);
          return (
            <g key={i} style={{ transformOrigin: "150px 150px", transform: `rotate(${angle}deg)` }}>
              <line x1="260" y1="150" x2="270" y2="150" stroke={i >= 8 ? "#dc2626" : "#404040"} strokeWidth="2" />
            </g>
          );
        })}
        
        {/* Animated Foreground Arc (Red) */}
        <motion.path 
          d="M 30 150 A 120 120 0 0 1 270 150" 
          fill="none" 
          stroke="#dc2626" 
          strokeWidth="6" 
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          style={{ filter: 'drop-shadow(0px 0px 15px rgba(220, 38, 38, 0.8))' }}
        />
        
        {/* Animated Needle */}
        <motion.g
          initial={{ rotate: -180 }}
          whileInView={{ rotate: -36 }} /* 80% of 180 is 144 degrees. -180 + 144 = -36 */
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          style={{ transformOrigin: "150px 150px" }}
        >
          {/* Needle shadow */}
          <path d="M 148 150 L 150 50 L 152 150 Z" fill="#000" style={{ filter: 'blur(4px)', opacity: 0.5 }} />
          {/* Actual needle */}
          <path d="M 148 150 L 150 40 L 152 150 Z" fill="#dc2626" />
          <circle cx="150" cy="150" r="12" fill="#171717" stroke="#333" strokeWidth="2" />
          <circle cx="150" cy="150" r="4" fill="#dc2626" />
        </motion.g>
      </svg>
      
      {/* Center Text (Telemetry) */}
      <div className="absolute bottom-[-10px] w-full text-center flex flex-col items-center">
         <div className="text-[10px] text-red-500 font-mono tracking-widest mb-1 opacity-80">EXTRACTION PRESSURE</div>
         <div className="text-5xl md:text-6xl font-bold text-white tabular-nums tracking-tighter">
            {pressure.toFixed(1)}
            <span className="text-xl text-neutral-600 ml-2 font-mono tracking-normal">BAR</span>
         </div>
      </div>
    </div>
  );
}

export default function DesignedForPerformance() {
  const metrics = [
    { value: "2.5s", label: "Rapid Activation" },
    { value: "20+", label: "Brew Profiles" },
    { value: "12", label: "Cup Capacity" }
  ];

  return (
    <section id="powertrain" className="py-32 bg-black relative border-y border-neutral-900 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase text-white">
            Designed for Performance
          </h2>
          <p className="text-neutral-400 mt-4 font-light max-w-2xl mx-auto">
            Experience relentless consistency. Model C’s high-torque extraction system hits 9.0 BAR pressure instantly for the perfect crema every single time.
          </p>
        </motion.div>

        {/* The Animated Pressure Gauge */}
        <PressureGauge />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800 border-t border-neutral-900 pt-16">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={metric.label}
              className="pt-8 md:pt-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
            >
              <span className="text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-2">{metric.value}</span>
              <span className="text-xs text-gray-500 tracking-widest uppercase font-mono">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
