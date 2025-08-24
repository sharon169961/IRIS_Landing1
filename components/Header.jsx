"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-irisPurple to-irisIndigo shadow-glow" />
        <span className="font-semibold tracking-wide text-gray-200">IRIS</span>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden md:flex items-center gap-6 text-sm text-gray-300"
      >
        <a href="#features" className="hover:text-white/90">Features</a>
        <a href="#about" className="hover:text-white/90">About</a>
        <a href="#join" className="hover:text-white/90">Join</a>
      </motion.nav>
    </header>
  );
}
