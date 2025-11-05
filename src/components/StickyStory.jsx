import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StickyStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const yCandy = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

  return (
    <section id="story" ref={ref} className="relative min-h-[220svh]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_30%_at_15%_20%,rgba(255,0,122,0.2),transparent),radial-gradient(30%_30%_at_85%_40%,rgba(0,220,255,0.18),transparent),radial-gradient(30%_30%_at_50%_80%,rgba(120,0,255,0.12),transparent)]" />

      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          {/* Colorful spinning ring */}
          <motion.div
            style={{ rotate, scale }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vmin] w-[70vmin] rounded-full bg-gradient-to-tr from-fuchsia-400 via-purple-400 to-cyan-400 blur-2xl opacity-60"
          />
          {/* Floating candies */}
          <motion.div style={{ y: yCandy }} className="absolute left-10 top-24 text-6xl">🍋</motion.div>
          <motion.div style={{ y: yCandy }} className="absolute right-12 top-40 text-6xl">🍓</motion.div>
          <motion.div style={{ y: yCandy }} className="absolute left-1/2 top-10 -translate-x-1/2 text-6xl">🫐</motion.div>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <motion.h3
            style={{ opacity }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            The Sour Saga
          </motion.h3>
          <motion.p
            style={{ opacity }}
            className="mt-4 max-w-2xl text-slate-700"
          >
            We dialed up flavour physics to create candy that plays with your senses. Each bite starts sweet, bends into bold, and snaps into a neon sour finale.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { title: 'Charge', text: 'Dusting of electrified sour crystals.' },
              { title: 'Warp', text: 'Flavour tunnels twist and turn.' },
              { title: 'POP!', text: 'A bright, fizzy finish that lingers.' },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white/70 backdrop-blur-md p-5 shadow-lg"
              >
                <div className="text-2xl font-extrabold text-slate-900">{s.title}</div>
                <p className="mt-1 text-sm text-slate-700">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#flavors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg"
          >
            Pick Your Power Flavour ✨
          </motion.a>
        </div>
      </div>
    </section>
  );
}
