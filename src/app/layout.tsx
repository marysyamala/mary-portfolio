import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_ORIGIN = "https://marysyamala.github.io";
const SITE_URL = "https://marysyamala.github.io/mary-portfolio";
const OG_IMAGE = "/mary-portfolio/opengraph.png";
const SITE_TITLE = "Mary Syamala | Data Engineer & Analytics";
const SITE_DESCRIPTION =
  "Portfolio of Mary Syamala — Data Engineer, Data Analyst, and AI Product Builder specializing in data engineering, analytics, cloud platforms, and AI-powered products.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Mary Syamala",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mary Syamala — Data Engineer, Business Analyst & AI Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
