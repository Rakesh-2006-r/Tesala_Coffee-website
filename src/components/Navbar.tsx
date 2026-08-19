"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[rgba(5,5,5,0.75)] backdrop-blur-md border-b border-white/5 shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left: Product Title */}
        <div className="text-sm font-medium tracking-wide text-white">
          <a href="#" className="flex items-center gap-2">
            NOVA X
          </a>
        </div>

        {/* Center: Links (Apple-style) */}
        <div className="hidden lg:flex items-center space-x-8 text-[12px] tracking-wide text-white/60">
          <Link href="#meet-model-c" className="hover:text-white transition-colors">Overview</Link>
          <Link href="#powertrain" className="hover:text-white transition-colors">Powertrain</Link>
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#specs" className="hover:text-white transition-colors">Specs</Link>
          <Link href="#order" className="hover:text-white transition-colors">Buy</Link>
        </div>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="#order" className="relative px-4 py-1.5 rounded-full text-[12px] text-white font-medium group transition-all block">
             <div className="absolute inset-0 bg-gradient-to-r from-[#0050FF] to-[#00D6FF] rounded-full p-[1px]">
               <div className="w-full h-full bg-[#050505] rounded-full group-hover:bg-transparent transition-colors" />
             </div>
             <span className="relative z-10 group-hover:text-white transition-colors">Experience NOVA X</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white/80"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505]/95 backdrop-blur-xl absolute top-14 left-0 w-full flex flex-col items-center py-8 space-y-6 text-sm tracking-wide text-white/70 border-t border-white/10">
          <Link href="#meet-model-c" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Overview</Link>
          <Link href="#powertrain" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Powertrain</Link>
          <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Features</Link>
          <Link href="#specs" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Specs</Link>
          <Link href="#order" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">Buy</Link>
        </div>
      )}
    </nav>
  );
}
