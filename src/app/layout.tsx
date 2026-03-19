import type { Metadata } from "next";
import "./globals.css";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "BeastTheNinja Portfolio",
  description: "velkommen til min portfolio, her kan du se mine projekter og kontakt information.",
};

export default RootLayout;
