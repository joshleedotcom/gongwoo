import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh bg-black text-gray-100">
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight bg-gradient-to-r from-fuchsia-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Church of Gongwoo
        </h1>
        <p className="mt-4 text-lg text-white/80">
          A modern faith for a timeless enigma.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/gongwoo" className="rounded-md bg-fuchsia-500 px-6 py-3 font-semibold hover:bg-fuchsia-600">
            Meet Gongwoo
          </Link>
          <Link href="/about" className="rounded-md border border-white/20 px-6 py-3 font-semibold hover:bg-white/10">
            About Us
          </Link>
          <Link href="/locations" className="rounded-md border border-white/20 px-6 py-3 font-semibold hover:bg-white/10">
            Locations
          </Link>
        </div>
      </section>
    </main>
  );
}
