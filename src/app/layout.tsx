import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";

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
const SITE_TITLE = "Mary Syamala | Business & Data Analyst";
const SITE_DESCRIPTION =
  "Portfolio of Mary Syamala — Business & Data Analyst with 3+ years turning complex data into actionable insights. SQL, Python, Power BI & Tableau, data quality, and AI-powered solutions (FinBERT NLP, LLMs).";

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
        alt: "Mary Syamala — Business & Data Analyst",
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
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skipLink">
          Skip to content
        </a>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
