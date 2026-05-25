import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pinkydev.github.io"),
  title: "Pinky Dev | Software Engineer & Frontend Developer",
  description:
    "Hi! I'm a Software Engineer who builds cute things that solve real problems. Specializing in React, Next.js, TypeScript, and AI-powered applications.",
  keywords: [
    "software engineer",
    "frontend developer",
    "fullstack developer",
    "react developer",
    "next.js",
    "typescript",
    "AI applications",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Pinky Dev" }],
  creator: "Pinky Dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pinkydev.github.io",
    title: "Pinky Dev | Software Engineer",
    description: "I build cute things that solve real problems. 🌸",
    siteName: "Pinky Dev Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pinky Dev Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinky Dev | Software Engineer",
    description: "I build cute things that solve real problems. 🌸",
    images: ["/og-image.png"],
    creator: "@pinkydev",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#FFB3D1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
