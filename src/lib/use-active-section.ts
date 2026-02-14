"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) return;

    const pickActive = () => {
      const marker = 110; // Keeps active state aligned with sticky nav offset.
      const candidates = sectionIds
        .map((id) => document.getElementById(id))
        .filter((node): node is HTMLElement => Boolean(node));

      if (!candidates.length) return;

      const inView = candidates.filter((node) => {
        const rect = node.getBoundingClientRect();
        return rect.top <= marker && rect.bottom >= marker;
      });

      if (inView.length) {
        setActiveSection(inView[inView.length - 1].id);
        return;
      }

      const passed = candidates.filter((node) => node.getBoundingClientRect().top < marker);
      if (passed.length) {
        setActiveSection(passed[passed.length - 1].id);
        return;
      }

      setActiveSection(candidates[0].id);
    };

    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, [sectionIds]);

  return activeSection;
}
