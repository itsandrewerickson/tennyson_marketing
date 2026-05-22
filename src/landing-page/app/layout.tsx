import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "3754-56 Tennyson Street | Point Loma Development Opportunity",
  description:
    "PRICE REDUCED to $1,599,000. Rare Point Loma development opportunity — turnkey home priced as a residential hold, with 8 grandfathered ADU plans included. Seeking buyer or capital partner.",
  keywords: [
    "Point Loma real estate",
    "San Diego ADU",
    "development opportunity",
    "multifamily investment",
    "grandfathered ADU",
  ],
  openGraph: {
    title: "3754-56 Tennyson Street | 8 Approved ADUs in Point Loma",
    description:
      "Rare grandfathered development rights. 8 approved ADUs on a cul-de-sac property in coastal San Diego.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
