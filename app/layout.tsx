import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider";
import "@/src/styles/globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"]
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Utkarsh Goel | Applied AI/ML Engineer",
  description:
    "Personal site of Utkarsh Goel - NYU Courant MS CS, focused on LLM agents, efficient AI systems, and robotics perception.",
  openGraph: {
    title: "Utkarsh Goel | Applied AI/ML Engineer",
    description:
      "Story-first portfolio featuring work in LLM agents, efficient AI optimization, and robotics perception.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-bg text-text antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
