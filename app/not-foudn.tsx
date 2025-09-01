export default function NotFound() {
  return (
    <main className="min-h-dvh grid place-items-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="mt-2">This page is classified. Or misspelled. Or both.</p>
        <a href="/" className="mt-6 inline-block rounded bg-fuchsia-500 px-5 py-2">Back to chaos</a>
      </div>
    </main>
  );
}
