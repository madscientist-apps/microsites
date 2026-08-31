import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AC Medic Heating & Air Conditioning | Mustang & Yukon, OK",
  description: "Honest, family-owned heating and air service for Mustang, Yukon, and the OKC metro. AC repair, heating repair, installation, and 24/7 emergency service.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
