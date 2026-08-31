import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rainbow Heat & Air | Yukon, Oklahoma",
  description: "Family-owned heating and air conditioning service in Yukon, Oklahoma since 1976. Call Rainbow Heat & Air at (405) 354-5541.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
