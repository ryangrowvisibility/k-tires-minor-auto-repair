import type { Metadata } from "next";
import { Bitter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bitter = Bitter({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-bitter" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-hanken" });

export const metadata: Metadata = {
  title: "K Tires & Minor Auto Repair | New & Used Tires in South Sacramento | (916) 456-1129",
  description:
    "Family-owned tire shop at 4825 17th Ave, South Sacramento. New Bridgestone, Firestone, Goodyear and Yokohama tires, a big stock of quality used tires, installation, balancing, oil changes and brakes. Rated 4.7 on Google. Call (916) 456-1129.",
  openGraph: {
    title: "K Tires & Minor Auto Repair | South Sacramento Tire Shop",
    description: "New and used tires, balancing, oil changes and brakes on 17th Avenue. Fair prices, family-owned. Call (916) 456-1129.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${bitter.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
