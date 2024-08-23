import './style.min.css';
import './globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orebi website",
  description: "Created by Eugene Skomorokhov",
  keywords: ["e-commerce", "shop", "store"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SpeedInsights />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
