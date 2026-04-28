import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_Layouts/navbar";
import Root from "./_Layouts/root";

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
      <meta name="keywords" content="Portfolio, Exrion, Cai Xuan, DigiPen, Software Engineer, Software Developer, Game Designer" />
      <meta name="author" content="Cai Xuan, Exrion" />
      <body className="min-h-full flex flex-col">
        <Root>
          <Navbar />
          {children}
        </Root>
        <div className={`text-red-600 absolute bottom-0 left-0 text-sm`}>
          <p>This site is WIP! Only core functionality is implemented.</p>
        </div>
      </body>
    </html>
  );
}
