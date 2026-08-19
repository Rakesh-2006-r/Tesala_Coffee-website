"use client";

import { motion } from "framer-motion";
import { Cpu, Droplet, Flame, RefreshCcw, Wifi, Zap, Thermometer, ShieldCheck, Fingerprint } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Precision Extraction",
      description: "Engineered temperature and pressure control for consistent, flawless extraction every single time.",
      icon: <Flame size={24} className="text-white" />
    },
    {
      title: "Autopilot Brewing",
      description: "Schedule your brew via the app. Your coffee is ready before you even step into the kitchen.",
      icon: <Cpu size={24} className="text-white" />
    },
    {
      title: "PureFlow Filtration",
      description: "Multi-stage filtration engineered for exceptionally clean-tasting water. Because perfect coffee demands perfect water.",
      icon: <Droplet size={24} className="text-white" />
    },
    {
      title: "Ludicrous Mode",
      description: "Overclock the pressure system to deliver an intensely rich double espresso in under 2 seconds.",
      icon: <Zap size={24} className="text-white" />
    },
    {
      title: "Camp Mode",
      description: "The smart mug’s integrated battery maintains your coffee's exact temperature for up to 12 hours off the grid.",
      icon: <Thermometer size={24} className="text-white" />
    },
    {
      title: "Biometric Sync",
      description: "The mug recognizes your touch and automatically commands the brewer to prepare your specific flavor profile.",
      icon: <Fingerprint size={24} className="text-white" />
    },
    {
      title: "Sentry Mode",
      description: "Advanced sensors constantly monitor the brew chamber and drip tray, triggering automatic self-cleaning when needed.",
      icon: <ShieldCheck size={24} className="text-white" />
    },
    {
      title: "Regenerative Brew",
      description: "Reuses captured heat during the brewing process to drastically improve overall energy efficiency.",
      icon: <RefreshCcw size={24} className="text-white" />
    },
    {
      title: "Over-the-Air Updates",
      description: "Your coffee machine gets smarter over time. New brew profiles and features download automatically over Wi-Fi.",
      icon: <Wifi size={24} className="text-white" />
    }
  ];

  return (
    <section id="features" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-20 md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Engineered for Perfection</h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Every component has been meticulously designed to maximize flavor, speed, and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.title}
              className="flex flex-col border-t border-neutral-800 pt-6 hover:bg-neutral-900/30 p-4 -m-4 rounded-2xl transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="mb-6 p-4 rounded-full bg-neutral-900 w-fit inline-flex border border-neutral-800">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
