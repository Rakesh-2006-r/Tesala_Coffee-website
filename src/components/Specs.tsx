"use client";

import { motion } from "framer-motion";

export default function Specs() {
  const specs = [
    { label: "Performance", value: "2.5 sec*", subtext: "Rapid Activation" },
    { label: "Capacity", value: "12 cups", subtext: "Per Reservoir" },
    { label: "Interface", value: '15"', subtext: "Touch Display" },
    { label: "Connectivity", value: "Wi-Fi + App", subtext: "Seamless Control" },
    { label: "Brew Profiles", value: "20+", subtext: "Custom Settings" },
    { label: "Filtration", value: "4-stage", subtext: "PureFlow" }
  ];

  return (
    <section id="specs" className="py-24 bg-neutral-950 px-6 border-y border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <motion.div 
          className="lg:w-1/2 flex items-center justify-center bg-black rounded-3xl p-8 border border-neutral-800 overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Cyber/Tech Schematic Vibe */}
          <div className="w-full aspect-square relative border border-neutral-800 bg-neutral-950 rounded-2xl flex items-center justify-center overflow-hidden">
            
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Top HUD Info */}
            <div className="absolute top-6 left-6 flex flex-col gap-1">
              <span className="text-xs text-neutral-400 font-mono tracking-widest uppercase">MODEL_C_SCHEMATIC_v2</span>
              <span className="text-[10px] text-red-500 font-mono tracking-widest animate-pulse">● LIVE TELEMETRY</span>
            </div>

            {/* Center Crosshairs */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-800/50" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-neutral-800/50" />

            {/* Central Schematic Silhouette */}
            <div className="relative w-1/2 h-3/4 border border-red-500/20 rounded-t-[4rem] rounded-b-2xl flex flex-col items-center justify-end pb-8 shadow-[0_0_50px_rgba(220,38,38,0.03)] z-10 bg-neutral-950/50 backdrop-blur-sm">
              
              {/* Animated Scanning Laser */}
              <motion.div 
                className="absolute left-0 w-full h-[2px] bg-red-500/50 shadow-[0_0_15px_rgba(220,38,38,1)] z-20"
                animate={{ top: ["10%", "90%", "10%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Internal Abstract Components */}
              <div className="w-16 h-16 border border-red-500/30 rounded-full flex items-center justify-center mb-10 relative">
                 <div className="w-4 h-4 rounded-full bg-red-500/30 animate-ping absolute" />
                 <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(220,38,38,1)] absolute" />
                 {/* Decorative rings */}
                 <div className="absolute inset-[-10px] border border-dashed border-neutral-700 rounded-full" />
              </div>

              {/* Lower Chamber */}
              <div className="w-3/4 h-1/4 border-t border-dashed border-neutral-600 flex justify-between pt-2">
                  <div className="w-px h-full bg-neutral-700" />
                  <div className="w-1/2 h-full border border-neutral-800 rounded bg-neutral-900/50" />
                  <div className="w-px h-full bg-neutral-700" />
              </div>

              {/* Technical Annotations */}
              <div className="absolute top-1/3 -right-20 text-[10px] text-neutral-400 font-mono flex items-center tracking-widest hidden md:flex">
                <span className="w-12 h-px bg-red-500/40 mr-2 relative">
                  <span className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-red-500" />
                </span>
                THERMAL CORE
              </div>
              
              <div className="absolute bottom-1/4 -left-24 text-[10px] text-neutral-400 font-mono flex items-center justify-end tracking-widest hidden md:flex">
                EXTRACTION VALVE
                <span className="w-12 h-px bg-red-500/40 ml-2 relative">
                  <span className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-red-500" />
                </span>
              </div>
            </div>
            
            {/* Corner Coordinates */}
            <div className="absolute bottom-6 right-6 text-[10px] text-neutral-600 font-mono text-right tracking-widest leading-relaxed">
              X: 102.445 <br /> Y: 89.210 <br /> Z: 0.000
            </div>

            <div className="absolute bottom-6 left-6 text-[10px] text-neutral-600 font-mono tracking-widest flex items-center gap-2">
              <div className="w-2 h-2 bg-neutral-700 rounded-sm" />
              SYSTEM NOMINAL
            </div>

          </div>
        </motion.div>
        
        <div className="lg:w-1/2 flex flex-col justify-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Model C Specs
          </motion.h2>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {specs.map((spec, idx) => (
              <motion.div 
                key={spec.label}
                className="flex flex-col border-t border-neutral-800 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <span className="text-sm text-gray-500 mb-2 uppercase tracking-widest font-semibold">{spec.label}</span>
                <span className="text-2xl font-bold text-white mb-1">{spec.value}</span>
                <span className="text-sm text-gray-400 font-light">{spec.subtext}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-xs text-gray-600 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            * 2.5 sec rapid activation from standby mode to brew commencement.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
