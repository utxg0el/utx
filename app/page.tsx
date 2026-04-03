"use client";

import { useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { ConstellationMap } from "@/src/components/constellation/constellation-map";
import { StickyNav } from "@/src/components/nav/sticky-nav";
import { ProjectsGrid } from "@/src/components/projects/projects-grid";
import { domainLabel, profile, type ProjectDomain } from "@/src/content/profile";

function ProfileAccent() {
  return (
    <aside className="draft-module p-4 md:p-5">
      <img
        src={profile.avatarUrl}
        alt={`${profile.name} portrait`}
        className="h-60 w-full rounded-md border border-border/60 object-cover object-[50%_40%] md:h-72"
        loading="lazy"
      />
      <p className="mt-3 text-sm text-muted">Open to internship and full-time roles.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.socials.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="draft-button-secondary rounded-full px-3 py-1.5 text-xs"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default function HomePage() {
  const [activeDomain, setActiveDomain] = useState<ProjectDomain | null>(null);
  const [projectQuery, setProjectQuery] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const normalizedProjectQuery = projectQuery.trim().toLowerCase();

  const filteredWork = useMemo(
    () =>
      activeDomain ? profile.work.filter((item) => item.domains.includes(activeDomain)) : profile.work,
    [activeDomain]
  );
  const filteredProjects = useMemo(
    () => {
      const domainFiltered = activeDomain
        ? profile.projects.filter((item) => item.domains.includes(activeDomain))
        : profile.projects;

      if (!normalizedProjectQuery) return domainFiltered;

      return domainFiltered.filter((project) => {
        const searchableText = [
          project.name,
          project.oneLiner,
          project.details,
          project.chips.join(" "),
          (project.links ?? []).map((link) => `${link.label} ${link.href}`).join(" ")
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedProjectQuery);
      });
    },
    [activeDomain, normalizedProjectQuery]
  );

  const handleDomainSelect = (domain: ProjectDomain | null, sectionId: "work" | "projects" = "work") => {
    setActiveDomain(domain);

    if (domain) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start"
      });
    }
  };

  return (
    <main id="top" className="draft-shell draft-signal pb-4">
      <StickyNav sections={profile.sections} />

      <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 md:px-8 md:pt-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{profile.location}</p>
            <h1 className="mt-3 max-w-4xl font-display text-5xl font-semibold leading-[0.95] md:text-7xl">{profile.name}</h1>
            <p className="mt-4 text-base text-muted">{profile.title}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text/85">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="draft-button-primary rounded-full px-5 py-2 text-sm font-medium">
                View Projects
              </a>
              <a
                href={profile.resumeUrl}
                className="draft-button-secondary rounded-full px-5 py-2 text-sm font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <ProfileAccent />
        </div>
      </section>

      <section id="work" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-4xl font-semibold">Work</h2>
          <div className="flex items-center gap-3">
            {activeDomain ? (
              <>
                <p className="text-sm text-muted">Filtered: {domainLabel[activeDomain]}</p>
                <button
                  type="button"
                  onClick={() => setActiveDomain(null)}
                  className="rounded-full border border-border bg-panel px-3 py-1.5 text-xs text-text transition hover:border-accent/50 hover:text-accent"
                >
                  Show all
                </button>
              </>
            ) : null}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ConstellationMap activeDomain={activeDomain} onDomainSelect={(domain) => handleDomainSelect(domain, "work")} />
          </aside>

          <div className="space-y-10">
            <div className="relative ml-1 space-y-8 before:absolute before:bottom-0 before:left-[0.34rem] before:top-2 before:w-px before:bg-border/80">
              {filteredWork.length ? (
                filteredWork.map((work) => (
                  <article key={work.company} className="relative pl-8">
                    <span className="absolute left-0 top-2.5 h-3 w-3 rounded-full border border-accent/70 bg-bg shadow-[0_0_0_4px_hsl(var(--color-bg))]" />

                    <div className="draft-row pb-7">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="font-display text-3xl">
                              {work.links?.[0] ? (
                                <a href={work.links[0].href} target="_blank" rel="noreferrer" className="hover:text-accent">
                                  {work.company}
                                </a>
                              ) : (
                                work.company
                              )}
                            </h3>
                            <p className="text-sm text-muted">{work.period}</p>
                          </div>
                          <p className="mt-1 text-sm text-muted">
                            {work.role} | {work.location}
                          </p>
                          <p className="two-line-clamp mt-3 text-sm leading-relaxed text-text/90">
                            {work.impactBullets.join(" ")}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {work.domains.map((domain) => (
                              <span
                                key={`${work.company}-${domain}`}
                                className={`rounded-full border px-2.5 py-1 text-xs ${
                                  activeDomain === domain
                                    ? "draft-pill-active"
                                    : "draft-pill"
                                }`}
                              >
                                {domainLabel[domain]}
                              </span>
                            ))}
                          </div>
                        </div>

                        {work.imageUrl ? (
                          <a
                            href={work.links?.[0]?.href ?? work.imageUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="block overflow-hidden rounded-md border border-border/70 md:w-52"
                          >
                            <img
                              src={work.imageUrl}
                              alt={work.imageAlt ?? `${work.company} preview`}
                              className="h-32 w-full object-cover"
                              loading="lazy"
                            />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <p className="text-sm text-muted">
                  No work entries for this signature yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-4xl font-semibold">Projects</h2>
          {(activeDomain || normalizedProjectQuery) ? (
            <p className="text-sm text-muted">
              {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          ) : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)]">
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="draft-module p-4 md:p-5">
              <label htmlFor="project-search" className="block text-xs uppercase tracking-[0.18em] text-muted">
                Search
              </label>
              <input
                id="project-search"
                type="text"
                value={projectQuery}
                onChange={(event) => setProjectQuery(event.target.value)}
                placeholder="e.g. RL, robotics, spiking"
                className="mt-2 w-full rounded-md border border-border bg-panel/70 px-3 py-2 text-sm text-text placeholder:text-muted focus:border-accent/60 focus:outline-none"
              />
              {normalizedProjectQuery ? (
                <button
                  type="button"
                  onClick={() => setProjectQuery("")}
                  className="mt-3 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition hover:border-accent/50 hover:text-accent"
                >
                  Clear search
                </button>
              ) : null}
            </div>

            <ConstellationMap
              activeDomain={activeDomain}
              onDomainSelect={(domain) => handleDomainSelect(domain, "projects")}
            />
          </aside>

          <div className="max-w-3xl">
            {filteredProjects.length ? (
              <ProjectsGrid projects={filteredProjects} activeDomain={activeDomain} />
            ) : (
              <p className="text-sm text-muted">
                No projects match this filter.
              </p>
            )}
          </div>
        </div>
      </section>

      <section id="education" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8">
        <h2 className="font-display text-4xl font-semibold">Education</h2>
        <p className="mt-4 text-base text-text">
          {profile.education.degree}, {profile.education.school}
        </p>
        <p className="mt-1 text-sm text-muted">Status: {profile.education.status}</p>
        {profile.education.note ? <p className="mt-2 text-sm text-muted">{profile.education.note}</p> : null}
        <div className="mt-6 space-y-4">
          {profile.coursework.map((course) => (
            <article key={course.course} className="draft-note">
              <p className="text-sm font-medium text-text">{course.course}</p>
              <p className="mt-1 text-xs text-muted">
                {course.instructor} | {course.term}
              </p>
              {course.note ? <p className="mt-1 text-xs text-muted">{course.note}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
