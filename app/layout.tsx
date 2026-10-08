import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toni's Taco",
  description: "Yukon’s taco spot for brisket tacos, breakfast tacos, build-your-own burritos, and everything in between.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
