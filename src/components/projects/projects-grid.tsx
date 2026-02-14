"use client";

import type { ProjectDomain, ProjectItem } from "@/src/content/profile";
import { domainLabel } from "@/src/content/profile";

type ProjectsGridProps = {
  projects: ProjectItem[];
  activeDomain: ProjectDomain | null;
};

export function ProjectsGrid({ projects, activeDomain }: ProjectsGridProps) {
  return (
    <div className="max-w-3xl space-y-6">
      {projects.map((project) => {
        const summary = `${project.oneLiner} ${project.details}`.trim();

        return (
          <article key={project.name} className="draft-row transition">
            {project.imageUrl ? (
              <a href={project.links?.[0]?.href ?? project.imageUrl} target="_blank" rel="noreferrer">
                <img
                  src={project.imageUrl}
                  alt={`${project.name} project preview`}
                  className="h-32 w-full rounded-md object-cover"
                  loading="lazy"
                />
              </a>
            ) : null}
            <h3 className="mt-3 font-display text-2xl text-text">
              {project.links?.[0] ? (
                <a href={project.links[0].href} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="two-line-clamp mt-2 text-sm leading-relaxed text-muted">{summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.domains.map((domain) => {
                const highlighted = activeDomain === domain;

                return (
                  <span
                    key={`${project.name}-${domain}`}
                    className={`rounded-full border px-2.5 py-1 text-xs ${
                      highlighted ? "draft-pill-active" : "draft-pill"
                    }`}
                  >
                    {domainLabel[domain]}
                  </span>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
}
