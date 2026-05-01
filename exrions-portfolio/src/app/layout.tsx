import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_Layouts/navbar";
import Root from "./_Layouts/root";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
    >
      <meta name="keywords" content="Portfolio, Exrion, Cai Xuan, DigiPen, Software Engineer, Software Developer, Game Designer" />
      <meta name="author" content="Cai Xuan, Exrion" />
      <body className="min-h-full flex flex-col">
        <Root>
          <Navbar />
          {children}
        </Root>
        <div className={`text-red-600 bottom-0 left-0 text-sm sticky`}>
          <p>This site is WIP! Only core functionality is implemented.</p>
        </div>
      </body>
    </html>
  );
}
