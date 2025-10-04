"use client";

import Link from "next/link";
import { Menu, Dumbbell, X, Phone, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#plans", label: "Plans" },
    { href: "#trainers", label: "Trainers" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-red-500/10 border-b border-red-500/20"
          : "bg-transparent"
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 text-sm text-center w-full">
        <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
          <Sparkles className="h-4 w-4" />
          <span>
            🎁 Get 60% OFF + FREE Personal Training - Limited Time Offer!
          </span>
        </div>
      </div>

      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-75"></div>
              <div className="relative p-1.5 sm:p-2 bg-black rounded-lg">
                <Dumbbell className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
              </div>
            </div>
            <div className="min-w-0">
              <span className="font-black text-lg sm:text-xl bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                Gymmerzz
              </span>
              <div className="text-xs text-red-400 font-medium -mt-1">
                MIRA ROAD
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative text-neutral-200 hover:text-white transition-colors duration-300 font-medium text-sm group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="tel:+918097196222"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium">Call Now</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                FREE Trial
                <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 sm:p-3 rounded-xl border border-white/20 hover:border-red-500 transition-colors flex-shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
              <div className="grid gap-4">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block py-3 px-4 rounded-xl text-neutral-200 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-red-500/30 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <div className="pt-4 border-t border-white/10 grid gap-3">
                  <motion.a
                    href="tel:+918097196222"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-green-500/50 bg-green-500/10 text-green-400 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    Call +91 80971 96222
                  </motion.a>

                  <motion.a
                    href="#contact"
                    className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-4 rounded-xl font-bold text-center shadow-lg"
                    onClick={() => setOpen(false)}
                  >
                    Get FREE Trial
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
