'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ComingSoon() {
  const teasers = [
    "📜 The Genealogy of Gongwoo's Life",
    "📍 Gongwoo’s Address (dropping soon… probably illegal)",
    "🪞 Why Gongwoo Thinks His Name Is Philip",
    "😡 Find Out What Makes Gongwoo Mad",
    "🍅 Why Gong Hates Ketchup",
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % teasers.length), 2800);
    return () => clearInterval(t);
  }, [teasers.length]);

  return (
    <main className="min-h-dvh bg-gradient-to-br from-black via-fuchsia-900/30 to-black text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-black tracking-widest">
            <span className="text-fuchsia-400 drop-shadow">GONG</span>WOO
          </Link>
          <nav className="hidden gap-6 sm:flex text-sm">
            <a href="#leaks" className="hover:underline">Leaks</a>
            <a href="#video" className="hover:underline">Trailer</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          The Gospel of Gongwoo
        </h1>
        <p className="mt-4 text-lg text-white/80">Coming Soon… way too soon.</p>

        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/5 p-4 shadow">
          <p className="text-xl font-semibold text-fuchsia-300 animate-pulse text-center">
            {teasers[idx]}
          </p>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="mx-auto max-w-6xl px-6 pb-6">
        <div className="rounded-xl border border-white/15 bg-white/5 p-2 shadow-lg">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/xiqZZ1J-a2k?rel=0"
              title="Gongwoo — Official Coming Soon Teaser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mt-2 px-1 text-xs text-white/60 text-center">
            If the trailer doesn’t load, that’s canon.
          </p>
        </div>
      </section>

      {/* Leaks grid */}
      <section id="leaks" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-fuchsia-300">Upcoming Leaks</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            ["Exclusive DNA Test", "Proves Gongwoo is 1% ketchup after all."],
            ["Philip Denial Arc", "A deep dive into why he wants to be called ‘Philip’.",
            ],
            ["The Rage Files", "CCTV of Gongwoo raging for no reason at all times."],
            ["Location Leak", "Leaking Gong's house address cuz I can."],
            ["Ketchup Conspiracy", "Why Gong actually hates ketchup."],
            ["Untold Lore", "The missing chapter: Gongwoo vs Mustard (2008)."],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-xl border border-white/15 bg-white/5 p-6 hover:bg-fuchsia-900/20 transition">
              <h3 className="font-semibold text-lg text-fuchsia-200">{title}</h3>
              <p className="mt-2 text-sm text-white/80">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-3xl font-bold text-fuchsia-300 mb-8">Frequently Asked Gongwoo</h2>
        <div className="space-y-6 text-white/85">
          <div>
            <p className="font-semibold">Is Gongwoo real?</p>
            <p className="text-white/70">Define “real.”</p>
          </div>
          <div>
            <p className="font-semibold">When does it launch?</p>
            <p className="text-white/70">Approximately 42 minutes from now. Always.</p>
          </div>
          <div>
            <p className="font-semibold">Can I submit leaks?</p>
            <p className="text-white/70">Email tips@gongwoo-leaks.fake (we won’t read it).</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Gongwoo Leaks. All rights reserved to absolutely nobody.
      </footer>
    </main>
  );
}
