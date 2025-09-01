import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GONGWOO — Coming Soon",
  description: "The official site of Gongwoo. Coming soon. Forever.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
