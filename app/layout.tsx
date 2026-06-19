import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mohammed-portfolio-v1.vercel.app/";
const siteDescription =
  "I design and build highly performant, accessible digital products and scalable web systems. Currently focused on full stack development and deep learning, building advanced transformer architectures and real-time synchronized platforms.";
const siteTitle = "Mohammed Tajir | Portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Mohammed Tajir",
    "Portfolio",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "PyTorch",
    "Deep Learning",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mohammed Tajir" }],
  creator: "Mohammed Tajir",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Mohammed Tajir Portfolio",
    images: [
      {
        url: "/images/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Tajir | Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/meta-image.png"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-black text-zinc-100"
        suppressHydrationWarning
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
