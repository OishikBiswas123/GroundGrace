"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-gg-black via-gg-black/95 to-gg-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c9a84c15,_transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 container text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gg-gold text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6"
        >
          Premium Construction & Interior Solutions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
        >
          Let&apos;s Master
          <br />
          <span className="text-gg-gold">Your Dreams</span>
          <br />
          From Root to Roof
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          GroundGrace delivers end-to-end building services — transforming empty
          plots into finished dream homes and commercial spaces with precision
          and elegance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-gg-gold text-gg-black font-semibold text-sm uppercase tracking-widest hover:bg-gg-gold/90 transition-all"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3.5 border border-white/20 text-white font-semibold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            View Our Work
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gg-gold/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}