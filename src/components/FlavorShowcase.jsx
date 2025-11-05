import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Electric Lemon',
    emoji: '🍋',
    bg: 'from-yellow-300 via-lime-300 to-emerald-200',
    desc: 'A zappy citrus jolt that tingles your tongue.',
  },
  {
    title: 'Warp Strawberry',
    emoji: '🍓',
    bg: 'from-rose-300 via-pink-300 to-fuchsia-200',
    desc: 'Sweet meets sour in a lightspeed burst.',
  },
  {
    title: 'Nebula Blueberry',
    emoji: '🫐',
    bg: 'from-indigo-300 via-blue-300 to-cyan-200',
    desc: 'Deep space fruit with a cosmic zing.',
  },
  {
    title: 'Mango Thunder',
    emoji: '🥭',
    bg: 'from-amber-300 via-orange-300 to-red-200',
    desc: 'Tropical storms of juicy shockwaves.',
  },
];

export default function FlavorShowcase() {
  return (
    <section id="flavors" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_10%_10%,rgba(255,0,122,0.15),transparent),radial-gradient(40%_40%_at_90%_30%,rgba(0,220,255,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            The Flavor Lineup
          </h2>
          <p className="mt-3 text-slate-700">
            Hand-picked fruit characters, dialed to max sour. Which world will you jump into first?
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, rotate: -0.25 }}
              className={`relative overflow-hidden rounded-3xl p-6 shadow-xl bg-gradient-to-br ${c.bg}`}
            >
              <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-6xl drop-shadow-sm">{c.emoji}</div>
                  <h3 className="mt-4 text-xl font-extrabold text-slate-900">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-800/80">{c.desc}</p>
                </div>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  className="ml-4 h-14 w-14 rounded-2xl bg-white/70 backdrop-blur-md flex items-center justify-center text-slate-900 font-black shadow-md"
                >
                  SOUR
                </motion.div>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold">
                <span className="text-slate-900/80">Sugar-dusted • Tongue-tingly</span>
                <button className="rounded-full bg-black/80 text-white px-4 py-2 hover:bg-black">Try</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
