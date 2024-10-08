import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import './styles/globals.css';
import './styles/style.min.css'
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
      <body 
      
      // className={`${inter.className}`}
      >
        <SpeedInsights />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
