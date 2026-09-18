import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "@/src/styles/globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  // 600 and 700 are load-bearing: headings request them. Omitting them silently
  // faux-bolds every heading and flattens the whole hierarchy.
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono"
});

const description =
  "Master's student in computer science at NYU Courant, advised by Oded Regev. Deep learning models of RNA. Previously Amazon, Alexa Automotive.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://utx.vercel.app"),
  title: "Utkarsh Goel",
  description,
  openGraph: {
    title: "Utkarsh Goel",
    description,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
