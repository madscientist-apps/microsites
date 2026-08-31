import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Threads of Tradition Quilt Shop | Yukon, Oklahoma",
  description: "A family-owned quilt shop on historic Route 66 offering unusual fabrics, classes for every skill level, MysteryFive-0, and online shopping.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
