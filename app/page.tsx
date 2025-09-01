'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

export default function ComingSoon() {
  // --- troll timer (always "almost there") ---
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const timeLeft = useMemo(() => {
    // Pretend the launch is always 42 minutes from now (so the clock never reaches zero)
    const target = new Date(now.getTime() + 42 * 60 * 1000);
    const diff = target.getTime() - now.getTime();
    const hh = String(Math.floor(diff / 3_600_000)).padStart(2, '0');
    const mm = String(Math.floor((diff % 3_600_000) / 60_000)).padStart(2, '0');
    const ss = String(Math.floor((diff % 60_000) / 1000)).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  }, [now]);

  // --- troll progress (stuck at 99.9%) ---
  const [progress, setProgress] = useState(3 + Math.random() * 5);
  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => (p >= 99.9 ? 99.9 : p + Math.random() * 3));
    }, 700);
    return () => clearInterval(t);
  }, []);

  // --- fake newsletter signup ---
  const [msg, setMsg] = useState<string | null>(null);
  const onSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg("Thanks! We'll email you the exact second before it launches… which mathematically is never. 🧠");
  };

  // --- “do not click” modal ---
  const [showModal, setShowModal] = useState(false);

  // --- Konami code easter egg ---
  const buffer = useRef<string[]>([]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      buffer.current.push(e.key);
      const seq = buffer.current.slice(-10).join(',');
      const konami =
        'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a';
      if (seq.toLowerCase().includes(konami.toLowerCase())) {
        alert('🥚 You found the egg.\nClaim your prize at https://gongwoo.com/404');
        buffer.current = [];
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // video embed ID
  const YT = 'xiqZZ1J-a2k';

  return (
    <main className="min-h-dvh bg-black text-gray-100">
      {/* page styles for glitch */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes glitch {
            0% { transform: translate(0,0) skew(0deg); }
            20% { transform: translate(-1px,1px) skew(-0.2deg); }
            40% { transform: translate(1px,-1px) skew(0.2deg); }
            60% { transform: translate(0.5px,0.5px) skew(0.1deg); }
            80% { transform: translate(-0.5px,-0.5px) skew(-0.1deg); }
            100% { transform: translate(0,0) skew(0deg); }
          }
        `,
        }}
      />

      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-black tracking-widest">
            G<span className="text-fuchsia-400">O</span>NGWOO
          </a>
          <nav className="hidden gap-6 sm:flex text-sm">
            <a
              className="opacity-70 hover:opacity-100"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              Source (trust us)
            </a>
            <button
              className="rounded-md border border-white/15 px-3 py-1.5 hover:bg-white/5"
              onClick={() => setShowModal(true)}
            >
              Do not click
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2">
        <div>
          <h1
            className="text-5xl font-extrabold leading-tight sm:text-6xl"
            style={{ animation: 'glitch 2.2s infinite steps(2)' }}
          >
            The Official <span className="text-fuchsia-400">GONGWOO</span> Site
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Something extremely serious is coming soon. So serious we refuse to
            give details. Keep refreshing. It helps.
          </p>

          {/* timer + progress */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="text-sm uppercase tracking-widest text-white/60">
              Estimated Launch In
            </div>
            <div className="text-4xl font-mono">{timeLeft}</div>

            <div className="mt-4">
              <div className="h-3 w-full overflow-hidden rounded bg-white/10">
                <div
                  className="h-full bg-fuchsia-500 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 text-right text-xs text-white/60">
                Deploying… {progress.toFixed(1)}%
              </div>
            </div>
          </div>

          {/* fake signup */}
          <form onSubmit={onSignup} className="mt-8 flex max-w-md gap-2">
            <input
              required
              type="email"
              placeholder="you@waitingroom.com"
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400/50"
            />
            <button
              className="rounded-md bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-600"
              type="submit"
            >
              Notify me
            </button>
          </form>
          {msg && <p className="mt-2 text-sm text-white/60">{msg}</p>}
        </div>

        {/* Video */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-2">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${YT}`}
              title="Gongwoo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mt-3 px-1 text-xs text-white/50">
            If the video doesn’t load, it’s part of the experience.
          </p>
        </div>
      </section>

      {/* Features (that say nothing) */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Blazing Vibes', 'Powered by quantum vibes.'],
            ['Zero Features', 'Fewer features, more mystery.'],
            ['Eco-Friendly', '100% recyclable pixels.'],
            ['AI Inside', 'We asked AI and it said yes.'],
            ['Military Grade', 'Like, emotionally.'],
            ['Beta Forever', 'If it ships, did it really?'],
          ].map(([title, body]) => (
            <article
              key={title}
              className="rounded-lg border border-white/10 bg-white/5 p-5"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-white/60">
          <span>© {new Date().getFullYear()} GONGWOO. All rights reserved eventually.</span>
          <a className="hover:underline" href="/terms">
            Terms of Imminence
          </a>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6">
          <div className="max-w-md rounded-xl border border-white/10 bg-zinc-900 p-6 text-center shadow-2xl">
            <h2 className="text-2xl font-bold">You clicked it.</h2>
            <p className="mt-3 text-white/70">
              Please wait while we roll back the change you just made to the
              universe.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 rounded-md bg-fuchsia-500 px-5 py-2 font-semibold hover:bg-fuchsia-600"
            >
              Undo Reality
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
