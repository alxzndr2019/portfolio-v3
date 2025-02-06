import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alex Portfolio",
  description: "Full-stack engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <div className="max-w-3xl mx-auto px-6 py-2 min-h-screen">
          {children}
        </div>
        <div className="radial-gradient" />
      </body>
    </html>
  );
}
