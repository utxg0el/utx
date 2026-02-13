"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import type { SectionNavItem } from "@/src/content/profile";
import { useActiveSection } from "@/src/lib/use-active-section";

type StickyNavProps = {
  sections: SectionNavItem[];
};

export function StickyNav({ sections }: StickyNavProps) {
  const sectionIds = sections.map((section) => section.id);
  const activeSection = useActiveSection(sectionIds);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="font-display text-lg tracking-wide text-text">
          UG
        </a>
        <ul className="flex items-center gap-1 md:gap-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`rounded-full px-3 py-1.5 text-sm transition ${
                    isActive ? "bg-accent/20 text-text" : "text-muted hover:text-text"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="ml-1 rounded-full border border-border px-3 py-1.5 text-sm text-muted hover:text-text"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === "dark" ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
