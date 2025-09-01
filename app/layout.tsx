import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GONGWOO — Coming Soon",
  description: "The official site of Gongwoo. Coming soon. Forever.",
  // optional but nice if you own the domain already:
  // metadataBase: new URL("https://gongwoo.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
