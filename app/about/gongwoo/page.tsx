export default function MeetGongwoo() {
  return (
    <main className="min-h-dvh bg-black text-gray-100">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold text-fuchsia-300">Meet Gongwoo</h1>
        <p className="mt-3 text-white/80">
          Archivists disagree on the exact origin. Some say prehistoric; others cite a condiment incident.
        </p>

        <div className="mt-8 rounded-xl border border-white/15 bg-white/5 p-2">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/xiqZZ1J-a2k?rel=0"
              title="Gongwoo — Documentary Teaser"
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
    </main>
  );
}
