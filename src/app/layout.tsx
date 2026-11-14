import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollUI from "@/components/ScrollUI";
import { profile } from "@/data/portfolio";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Sora({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display", display: "swap" });

const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = `${profile.name} — Front-End Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title,
  description: profile.tagline,
  openGraph: { title, description: profile.tagline, url: site, siteName: profile.name, type: "website", images: [{ url: "/images/rokon.jpg", width: 300, height: 300 }] },
  twitter: { card: "summary", title, description: profile.tagline, images: ["/images/rokon.jpg"] },
};

// পেজ লোডের আগেই সেভ করা থিম বসায়, যাতে ঝলকানি না হয়
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${body.variable} ${display.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollUI />
      </body>
    </html>
  );
}
