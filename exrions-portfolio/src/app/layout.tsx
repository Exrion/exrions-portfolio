import type { Metadata } from "next";
import { Geist, Finger_Paint, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const fingerPaint = Finger_Paint({
  weight: '400',
  variable: "--font-finger-paint",
  subsets: ["latin"],
});

export const gloriaHallelujah = Gloria_Hallelujah({
  weight: '400',
  variable: "--font-gloria-hallelujah",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cai Xuan's Portfolio",
  description: "Cai Xuan (Exrion)'s portfolio/personal website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
