export default function About() {
  return (
    <main className="min-h-dvh bg-black text-gray-100">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold text-fuchsia-300">About the Church of Gongwoo</h1>
        <p className="mt-4 text-white/80">
          We are a completely legitimate organization founded moments ago. Our mission:
          preserve the lore, celebrate the chaos, and ask “Why does Gong hate ketchup?”
        </p>
        <h2 className="mt-10 text-2xl font-semibold">Core Beliefs</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-white/80">
          <li>Launch is always ~42 minutes away.</li>
          <li>Gongwoo is real, especially when observed.</li>
          <li>Ketchup is a test; mustard is a trial.</li>
          <li>“Philip” is a state of mind, not a name.</li>
        </ul>
      </section>
    </main>
  );
}
