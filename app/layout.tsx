import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Yashay Singh — Full-Stack Developer",
  description:
    "IT student and full-stack developer building web, mobile, and AI-powered products across C#, Flutter, React, Python & TypeScript.",
  openGraph: {
    title: "Yashay Singh — Full-Stack Developer",
    description:
      "IT student and full-stack developer building web, mobile, and AI-powered products.",
    url: "https://portfolio-site-949.netlify.app",
    siteName: "Yashay Singh",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
