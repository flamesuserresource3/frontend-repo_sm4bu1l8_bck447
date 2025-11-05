import React from 'react';
import { motion } from 'framer-motion';

const flavors = [
  { name: 'Electric Lemon', emoji: '🍋', color: 'from-yellow-400 to-lime-400' },
  { name: 'Warp Strawberry', emoji: '🍓', color: 'from-rose-500 to-pink-500' },
  { name: 'Nebula Blueberry', emoji: '🫐', color: 'from-indigo-500 to-blue-500' },
  { name: 'Mango Thunder', emoji: '🥭', color: 'from-amber-400 to-orange-500' },
  { name: 'Cosmic Apple', emoji: '🍏', color: 'from-emerald-400 to-teal-400' },
  { name: 'Watermelon Warp', emoji: '🍉', color: 'from-red-400 to-rose-500' },
];

export default function FlavorTicker() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-fuchsia-50 via-cyan-50 to-purple-50 py-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,128,0.12),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(0,200,255,0.12),transparent_40%)]" />
      <div className="relative">
        <motion.div
          className="flex gap-6 whitespace-nowrap will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {[...flavors, ...flavors].map((f, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${f.color} px-4 py-2 text-white text-sm font-semibold shadow-md`}
            >
              <span className="text-lg">{f.emoji}</span>
              {f.name}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
