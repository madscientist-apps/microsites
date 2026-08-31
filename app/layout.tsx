import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M & J Auto Service | Oklahoma City Auto Repair",
  description: "Family-run auto repair in Oklahoma City for foreign, domestic, gas, and diesel vehicles.",
  other: {
    "codex-preview": "development",
  },
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
