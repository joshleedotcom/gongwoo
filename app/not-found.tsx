import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh grid place-items-center bg-black text-white">
      <div className="text-center p-8">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="mt-2 text-white/70">
          This page is classified. Or misspelled. Or both.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded bg-fuchsia-500 px-5 py-2 font-semibold hover:bg-fuchsia-600"
        >
          Back to chaos
        </Link>
      </div>
    </main>
  );
}
