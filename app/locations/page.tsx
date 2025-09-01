export default function Locations() {
  return (
    <main className="min-h-dvh bg-black text-gray-100">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold text-fuchsia-300">Locations</h1>
        <p className="mt-3 text-white/80">
          Our sacred sites are symbolic. Any resemblance to real addresses is coincidental.
        </p>

        <div className="mt-8 rounded-xl border border-white/15 bg-white/5 p-4">
          <div className="aspect-video w-full overflow-hidden rounded-lg grid place-items-center">
            <div className="relative h-full w-full bg-[linear-gradient(45deg,rgba(255,255,255,0.04)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.04)_75%),linear-gradient(45deg,rgba(255,255,255,0.04)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.04)_75%)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full border-4 border-fuchsia-400 p-6 text-center">
                  <div className="text-sm">REDACTED</div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-white/60 text-center">
            For privacy and safety, exact locations are intentionally obfuscated.
          </p>
        </div>
      </section>
    </main>
  );
}
