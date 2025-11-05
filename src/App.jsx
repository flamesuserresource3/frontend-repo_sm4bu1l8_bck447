import React from 'react';
import Hero from './components/Hero';
import FlavorTicker from './components/FlavorTicker';
import FlavorShowcase from './components/FlavorShowcase';
import StickyStory from './components/StickyStory';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Hero with Spline 3D cover */}
      <Hero />

      {/* Scrolling ticker of flavors */}
      <FlavorTicker />

      {/* Flavor grid cards */}
      <FlavorShowcase />

      {/* Scroll-based sticky narrative */}
      <StickyStory />

      {/* Simple footer/CTA */}
      <footer className="relative mt-10 border-t border-white/60 bg-gradient-to-r from-fuchsia-100 via-purple-100 to-cyan-100">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-2xl font-black tracking-tight bg-gradient-to-r from-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">Sour Blast</div>
            <p className="text-slate-700 text-sm">Playful candy with a seriously sour kick.</p>
          </div>
          <a
            href="#flavors"
            className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 font-semibold shadow-md hover:opacity-90"
          >
            Grab a Bag →
          </a>
        </div>
      </footer>
    </div>
  );
}
