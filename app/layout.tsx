'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ComingSoon() {
  const teasers = [
    "📜 The Genealogy of Gongwoo's Life",
    "📍 Gongwoo’s Real Address (dropping soon… probably illegal)",
    "🪞 Why Gongwoo Secretly Believes His Name is Philip",
    "😡 Discover What Makes Gongwoo Mad (spoiler: everything)",
    "🍅 The Shocking Truth: Why Gongwoo Hates Ketchup",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % teasers.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-dvh bg-gradient-to-br from-black via-fuchsia-900 to-black text-gray-100 font-mono">
      {/* HEADER */}
      <header className="border-b border-white/20 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-extrabold tracking-widest text-fuchsia-400 drop-shadow-lg">
            GONGWOO
          </Link>
          <nav className="hidden gap-6 sm:flex text-sm">
            <a href="#leaks" className="hover:underline">Leaks</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#contact" className="hover:underline">Tips Hotline</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center py-24">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight bg-gradient-to-r from-fuchsia-400 to-pink-600 bg-clip-text text-transparent animate-pulse">
          The Gospel of Gongwoo
        </h1>
        <p className="mt-6 text-lg text-gray-300 italic">Coming Soon… way too soon.</p>
        <div className="mt-10 w-full max-w-2xl">
          <div className="rounded-lg border border-white/20 bg-black/30 px-6 py-4 shadow-xl">
            <p className="text-xl font-semibold text-fuchsia-300 animate-bounce">
              {teasers[index]}
            </p>
          </div>
        </div>
      </section>

      {/* FAKE LEAKS */}
      <section id="leaks" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-fuchsia-300">Upcoming Leaks</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            ["Exclusive DNA Test", "Proves Gongwoo is 1% ketchup after all."],
            ["Philip Denial Arc", "A deep psychological dive into why he refuses to be called Philip."],
            ["The Rage Files", "CCTV footage of Gongwoo raging at slow Wi-Fi."],
            ["Location Leak", "Street view cam parked outside his house rn."],
            ["Ketchup Conspiracy", "Why Heinz blocked him on Twitter."],
            ["Untold Lore", "The missing chapter: Gongwoo vs Mustard 2008."],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-xl border border-white/20 bg-black/40 p-6 hover:bg-fuchsia-900/20 transition">
              <h3 className="font-semibold text-lg text-fuchsia-200">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAKE FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-fuchsia-300 mb-8">Frequently Asked Gongwoo</h2>
        <dl className="space-y-6">
          <div>
            <dt className="font-semibold">Is Gongwoo real?</dt>
            <dd className="text-gray-400">Define “real.”</dd>
          </div>
          <div>
            <dt className="font-semibold">When is this site launching?</dt>
            <dd className="text-gray-400">Approximately 42 minutes from now. Always.</dd>
          </div>
          <div>
            <dt className="font-semibold">Can I contribute leaks?</dt>
            <dd className="text-gray-400">Yes. Email tips@gongwoo-leaks.fake</dd>
          </div>
        </dl>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/20 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Gongwoo Leaks. All rights reserved to absolutely nobody.
      </footer>
    </main>
  );
}
