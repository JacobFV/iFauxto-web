import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "iFauxto - Your Photos, Your Way",
  description: "Finally, a photo organizer that lets you arrange photos your way. Custom folders, drag-to-reorder, nested organization, and zero algorithm interference.",
  keywords: ["photo organizer", "photo app", "iOS app", "photo folders", "photo organization", "drag and drop photos"],
  authors: [{ name: "iFauxto" }],
  creator: "iFauxto",
  openGraph: {
    title: "iFauxto - Your Photos, Your Way",
    description: "Finally, a photo organizer that lets you arrange photos your way.",
    url: "https://ifauxto.com",
    siteName: "iFauxto",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "iFauxto - Photo Organization App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iFauxto - Your Photos, Your Way",
    description: "Finally, a photo organizer that lets you arrange photos your way.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
