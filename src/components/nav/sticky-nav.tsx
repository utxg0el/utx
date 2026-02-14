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
      <nav className="mx-auto max-w-6xl px-2 py-3 md:px-8">
        <ul className="flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-2 md:justify-center md:gap-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  className={`rounded-full px-3 py-1.5 text-sm transition ${
                    isActive
                      ? "border border-accent/60 bg-accent/15 text-text"
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
