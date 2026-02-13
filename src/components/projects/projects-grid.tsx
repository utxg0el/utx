"use client";

import type { ProjectDomain, ProjectItem } from "@/src/content/profile";
import { domainLabel } from "@/src/content/profile";

type ProjectsGridProps = {
  projects: ProjectItem[];
  activeDomain: ProjectDomain | null;
};

export function ProjectsGrid({ projects, activeDomain }: ProjectsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => {
        return (
          <article key={project.name} className="rounded-xl border border-border bg-panel/85 p-5 transition">
            <h3 className="font-display text-2xl text-text">{project.name}</h3>
            <p className="mt-2 text-sm text-text">{project.oneLiner}</p>
            <p className="mt-2 text-sm text-muted">{project.details}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.domains.map((domain) => {
                const highlighted = activeDomain === domain;

                return (
                  <span
                    key={`${project.name}-${domain}`}
                    className={`rounded-full border px-2.5 py-1 text-xs ${
                      highlighted
                        ? "border-accent/60 bg-accent/15 text-text"
                        : "border-border bg-bg/50 text-muted"
                    }`}
                  >
                    {domainLabel[domain]}
                  </span>
                );
              })}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.chips.map((chip) => (
                <span key={`${project.name}-${chip}`} className="rounded-full bg-bg px-2 py-1 text-xs text-muted">
                  {chip}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
