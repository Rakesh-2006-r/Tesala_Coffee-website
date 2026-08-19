"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Plus } from "lucide-react";

type Order = {
  id: string;
  date: string;
  addon: boolean;
  total: number;
};

export default function Pricing() {
  const [isAddonSelected, setIsAddonSelected] = useState(false);
  const [orderState, setOrderState] = useState<"idle" | "processing" | "success">("idle");
  const [orders, setOrders] = useState<Order[]>([]);

  const includes = [
    "Model C Brewer",
    "Smart Mug",
    "PureFlow Filter",
    "Mobile App",
  ];

  const basePrice = 2499;
  const addonPrice = 299;
  const totalPrice = basePrice + (isAddonSelected ? addonPrice : 0);

  const handleOrder = () => {
    if (orderState !== "idle") return;
    
    setOrderState("processing");
    
    setTimeout(() => {
      const newOrder: Order = {
        id: Math.random().toString(36).substr(2, 6).toUpperCase(),
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        addon: isAddonSelected,
        total: totalPrice
      };
      
      setOrders(prev => [newOrder, ...prev]);
      setOrderState("success");
      
      setTimeout(() => {
        setOrderState("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="order" className="py-24 bg-black border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Product Visual (Sticky) */}
          <div className="lg:w-1/2">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">Design Yours</h2>
                <p className="text-gray-400 font-light mb-10 text-lg">Model C - Engineered for the first sip.</p>
                
                <div className="w-full aspect-[4/3] bg-neutral-950 rounded-2xl border border-neutral-800 flex items-center justify-center relative overflow-hidden group">
                  {/* Subtle dynamic lighting */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 via-transparent to-transparent opacity-50" />
                  
                  {/* Highly realistic product image */}
                  <div className="relative w-full h-full transition-transform duration-1000 group-hover:scale-105">
                     <img 
                       src="/model-c.jpg" 
                       alt="Tesla Model C Coffee Maker" 
                       className="w-full h-full object-cover"
                     />
                     {/* FSD glow overlay when selected */}
                     <div className={`absolute inset-0 bg-red-600/20 mix-blend-color-burn transition-opacity duration-500 pointer-events-none ${isAddonSelected ? 'opacity-100' : 'opacity-0'}`} />
                     {/* Subtle bottom fade to blend with the container */}
                     <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
                  </div>

                  {/* UI Overlay labels */}
                  <motion.div 
                    className="absolute top-6 left-6 text-xs text-neutral-500 font-mono tracking-widest flex items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 1 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 }
                      }
                    }}
                  >
                    {"CONFIGURATOR_v1".split("").map((char, index) => (
                      <motion.span 
                        key={index}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 }
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <motion.div 
                      className="ml-1 w-1.5 h-3 bg-red-500/70"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  {isAddonSelected && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute bottom-6 left-6 text-[10px] text-red-500 border border-red-900 bg-red-950/30 px-2 py-1 rounded font-mono tracking-widest uppercase"
                    >
                      Autopilot Linked
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Configurator Options */}
          <div className="lg:w-1/2 pt-8 lg:pt-32 flex flex-col">
            
            {/* Base Product */}
            <div className="mb-12 pb-10 border-b border-neutral-900">
              <h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Model C Starter Kit</h3>
              <p className="text-gray-400 font-light mb-8">${basePrice} Base Configuration</p>
              
              <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4 font-semibold">Included Package</h4>
              <div className="grid grid-cols-2 gap-4">
                {includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300 font-light bg-neutral-900/50 p-3 rounded-lg border border-neutral-800/50">
                    <Plus size={14} className="text-neutral-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrades */}
            <div className="mb-auto pb-12">
              <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4 font-semibold">Software Upgrades</h4>
              
              <div 
                onClick={() => setIsAddonSelected(!isAddonSelected)}
                className={`w-full flex items-center justify-between p-6 rounded-xl border transition-all cursor-pointer ${
                  isAddonSelected 
                  ? 'border-red-600 bg-red-950/20' 
                  : 'border-neutral-800 bg-black hover:border-neutral-600'
                }`}
              >
                <div>
                  <div className="text-white font-medium text-lg mb-1">Full Self-Brewing</div>
                  <div className="text-gray-500 text-sm font-light">Autonomous multi-profile switching</div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-gray-400 font-medium">+${addonPrice}</span>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    isAddonSelected ? 'bg-red-600 border-red-600' : 'border-neutral-600'
                  }`}>
                    {isAddonSelected && <Check size={14} className="text-white" />}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary & Button (Sticky at bottom on mobile, static on desktop) */}
            <div className="bg-black/90 backdrop-blur-md pt-8 pb-4 border-t border-neutral-900 sticky bottom-0 lg:static z-20">
              <div className="flex justify-between items-end mb-6">
                 <span className="text-lg text-neutral-400 font-light">Est. Total</span>
                 <span className="text-4xl text-white font-bold tracking-tighter">${totalPrice}</span>
              </div>

              <motion.button 
                onClick={handleOrder}
                disabled={orderState !== "idle"}
                className={`w-full py-4 font-bold tracking-widest text-sm rounded uppercase transition-colors flex items-center justify-center gap-2 ${
                  orderState === "success" 
                    ? "bg-green-600 hover:bg-green-600 text-white" 
                    : orderState === "processing"
                    ? "bg-neutral-800 text-gray-300 cursor-wait"
                    : "bg-white hover:bg-gray-200 text-black"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {orderState === "idle" && "Order Model C"}
                {orderState === "processing" && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Processing...
                  </>
                )}
                {orderState === "success" && (
                  <>
                    <Check size={18} />
                    Order Placed
                  </>
                )}
              </motion.button>
              
              <p className="text-center text-xs text-neutral-600 mt-4 font-light">
                Estimated Delivery: 2-3 Weeks
              </p>

              {/* Fleet List */}
              <AnimatePresence>
                {orders.length > 0 && (
                  <motion.div 
                    className="mt-6 border-t border-neutral-900 pt-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">Your Fleet</h3>
                    </div>
                    
                    <div className="space-y-3 max-h-[150px] overflow-y-auto pr-1 custom-scrollbar">
                      {orders.map((order) => (
                        <motion.div 
                          key={order.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="bg-neutral-900/50 border border-neutral-800 p-3 rounded-lg flex justify-between items-center"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-white flex items-center gap-2">
                              Model C 
                              {order.addon && <span className="text-[10px] bg-red-900/30 text-red-400 px-1.5 py-0.5 rounded tracking-wider">FSD Active</span>}
                            </span>
                            <span className="text-[10px] text-neutral-500 font-mono mt-1">
                              ID: {order.id} • {order.date}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-white">${order.total}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
