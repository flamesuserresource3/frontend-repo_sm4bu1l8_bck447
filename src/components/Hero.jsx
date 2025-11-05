import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient tint overlay to unify colors with brand */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-fuchsia-500/20 via-transparent to-cyan-400/20" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 backdrop-blur-md shadow-md"
          >
            <span className="text-xl">🍬</span>
            <span className="text-sm font-semibold tracking-wide text-pink-700">NEW • SOUR BLAST</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-br from-pink-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
          >
            Shockingly Sour. Ridiculously Fun.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-800/90 drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]"
          >
            Meet the candy that turns taste buds into a rollercoaster. Loaded with bold, punchy flavours and a playful 3D world to explore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#flavors"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:shadow-cyan-500/30 transition-all"
            >
              Taste the Lineup
              <span className="ml-2 transition-transform group-hover:translate-x-1">➜</span>
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full bg-white/70 px-6 py-3 font-semibold text-slate-900 backdrop-blur-md shadow-md hover:bg-white/90 transition-colors"
            >
              Our Flavor Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
