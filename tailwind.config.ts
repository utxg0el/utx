import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    // Top-level, not extend: this drops every rounded-* and shadow-* utility from
    // the build, so no later edit can quietly reintroduce a card.
    borderRadius: { none: "0", DEFAULT: "0" },
    boxShadow: { none: "none" },
    extend: {
      colors: {
        paper: "hsl(var(--paper) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        ink2: "hsl(var(--ink-2) / <alpha-value>)",
        rule: "hsl(var(--rule) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      fontSize: {
        meta: ["0.9375rem", { lineHeight: "1.5" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        title: ["1.1875rem", { lineHeight: "1.35", letterSpacing: "-0.005em" }],
        lede: ["1.1875rem", { lineHeight: "1.6" }],
        name: ["2.125rem", { lineHeight: "1.15", letterSpacing: "-0.025em" }]
      },
      spacing: { 18: "4.5rem" },
      maxWidth: { measure: "34rem", lede: "30rem" }
    }
  },
  plugins: []
};

export default config;
