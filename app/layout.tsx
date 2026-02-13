import type { Metadata } from "next";
import { ThemeProvider } from "@/src/components/theme-provider";
import "@/src/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://utx.vercel.app"),
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
      <body className="bg-bg text-text antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
