import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopupModal from "@/components/PopupModal";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Professional AC, Plumbing & Solar Services in Saudi Arabia | Miyar Technical Services",
  description: "Expert HVAC/AC repairs, plumbing maintenance, and solar panel installation services across 14 cities in Saudi Arabia. Available 24/7. Get a free quote today!",
  keywords: [
    "AC service Saudi Arabia",
    "Plumbing service Saudi",
    "Solar panel installation Saudi Arabia",
    "AC repair Riyadh",
    "Emergency plumber Jeddah",
    "Solar energy Dammam",
    "Miyar Technical Services"
  ],
  authors: [{ name: "Miyar Technical Services" }],
  openGraph: {
    type: "website",
    url: "https://miyartechnicalservices.com",
    siteName: "Miyar Technical Services",
    title: "Professional AC, Plumbing & Solar Services in Saudi Arabia | Miyar Technical Services",
    description: "Expert HVAC/AC repairs, plumbing maintenance, and solar panel installation services across 14 cities in Saudi Arabia. Available 24/7. Get a free quote today!",
    images: [
      {
        url: "https://miyartechnicalservices.com/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Miyar Technical Services — AC, Plumbing & Solar in Saudi Arabia",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <SchemaMarkup />
        <PopupModal />
        <Navbar />
        <div style={{ paddingTop: "72px" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
