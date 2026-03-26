import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BeastTheNinja Portfolio",
  description: "velkommen til min portfolio, her kan du se mine projekter og kontakt information.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="da" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-slate-100 focus:px-3 focus:py-2 focus:text-slate-900"
        >
          Spring til hovedindhold
        </a>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
