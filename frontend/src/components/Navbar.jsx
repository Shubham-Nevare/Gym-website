"use client";

import { Menu, Dumbbell, X, Phone, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      // console.log("Scroll position:", scrollTop);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // run once to set initial state
    handleScroll();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 max-w-[1440px] mx-auto
    ${
      scrolled
        ? "bg-black/60 backdrop-blur-md border-b border-red-500/30 shadow-lg shadow-red-500/10"
        : "bg-transparent"
    }`}
    >
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 text-sm text-center z-90">
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
                className="relative text-neutral-200 hover:text-white transition-colors duration-300 font-medium text-md group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="tel:+919876543210"
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
              <span className="flex items-center justify-center gap-2">
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed left-0 right-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col"
            style={{ top: 55, height: "calc(100vh - 40px)" }}
          >
            {/* Mobile Menu Header */}

            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-75"></div>
                  <div className="relative p-1.5 bg-black rounded-lg">
                    <Dumbbell className="h-5 w-5 text-red-500" />
                  </div>
                </div>
                <span className="font-black text-lg bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                  Gymmerzz
                </span>
              </div>
              {/* Close Button */}
              <button
                className="p-2 rounded-full hover:bg-white/10 transition"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col   px-4 py-6 gap-2 overflow-y-auto">
              <div className="w-full flex flex-col  justify-center">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="block py-3 px-4 rounded-lg text-lg text-neutral-200 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium text-center w-full"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 w-full  justify-center">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-green-500/50 bg-green-500/10 text-green-400 font-semibold text-base w-full"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  Call +91 98765 43210
                </a>
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-4 rounded-lg font-bold text-center shadow-lg text-base w-full"
                  onClick={() => setOpen(false)}
                >
                  Get FREE Trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
