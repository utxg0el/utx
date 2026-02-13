import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--color-bg) / <alpha-value>)",
        panel: "hsl(var(--color-panel) / <alpha-value>)",
        text: "hsl(var(--color-text) / <alpha-value>)",
        muted: "hsl(var(--color-muted) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        accentSoft: "hsl(var(--color-accent-soft) / <alpha-value>)",
        border: "hsl(var(--color-border) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--color-accent) / 0.3), 0 0 24px hsl(var(--color-accent) / 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
