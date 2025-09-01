import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GONGWOO — Coming Soon",
  description: "The official site of Gongwoo. Coming soon. Forever.",
  // metadataBase: new URL("https://gongwoo.com"),
  openGraph: { title: "GONGWOO — Coming Soon", description: "Soon™",  type: "website" },
  twitter: { card: "summary_large_image", title: "GONGWOO — Coming Soon", description: "Soon™" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="antialiased">{children}</body></html>;
}
