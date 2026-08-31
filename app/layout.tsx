import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "9oh6 Baking Co. | Scratch-Made Bakery in Yukon, OK",
  description: "Croissants, sourdough, custom cakes, desserts, savory favorites and more, made fresh from scratch in Yukon, Oklahoma.",
  icons: { icon: "/images/logo.png", shortcut: "/images/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
