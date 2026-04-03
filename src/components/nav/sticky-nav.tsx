"use client";

import type { SectionNavItem } from "@/src/content/profile";
import { useActiveSection } from "@/src/lib/use-active-section";

type StickyNavProps = {
  sections: SectionNavItem[];
};

export function StickyNav({ sections }: StickyNavProps) {
  const sectionIds = sections.map((section) => section.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="draft-nav sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="text-sm font-medium text-muted transition hover:text-text">
          Utkarsh Goel
        </a>
        <ul className="flex items-center gap-1 md:gap-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  className={`rounded-full px-3 py-1.5 text-sm transition ${
                    isActive
                      ? "border border-accent/60 bg-accent/10 text-accent"
                      : "border border-transparent text-muted hover:border-border hover:text-text"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
