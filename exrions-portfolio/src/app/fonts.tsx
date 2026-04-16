import { Geist, Finger_Paint, Gloria_Hallelujah } from "next/font/google";

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