"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { ConstellationMap } from "@/src/components/constellation/constellation-map";
import { StickyNav } from "@/src/components/nav/sticky-nav";
import { ProjectsGrid } from "@/src/components/projects/projects-grid";
import { domainLabel, profile, type ProjectDomain } from "@/src/content/profile";

export default function HomePage() {
  const [activeDomain, setActiveDomain] = useState<ProjectDomain | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredWork = useMemo(
    () =>
      activeDomain ? profile.work.filter((item) => item.domains.includes(activeDomain)) : profile.work,
    [activeDomain]
  );
  const filteredProjects = useMemo(
    () =>
      activeDomain ? profile.projects.filter((item) => item.domains.includes(activeDomain)) : profile.projects,
    [activeDomain]
  );

  const sectionAnimation = useMemo(
    () =>
      shouldReduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.25 },
            transition: { duration: 0.45, ease: "easeOut" }
          },
    [shouldReduceMotion]
  );

  const handleDomainSelect = (domain: ProjectDomain | null) => {
    setActiveDomain(domain);

    if (domain) {
      document.getElementById("work")?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start"
      });
    }
  };

  return (
    <main id="top" className="pb-4">
      <StickyNav sections={profile.sections} />

      <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 md:px-8 md:pt-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">New York University / Courant</p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] md:text-7xl">{profile.name}</h1>
          <p className="mt-4 text-lg text-muted">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text/90">{profile.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full border border-accent/70 bg-accent/90 px-5 py-2 text-sm font-medium text-black transition hover:bg-accent"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded-full border border-border bg-panel px-5 py-2 text-sm font-medium text-text transition hover:border-accent/50 hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <motion.section id="work" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8" {...sectionAnimation}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-4xl">Work</h2>
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted">
              {activeDomain ? `Filtered by ${domainLabel[activeDomain]}` : "Showing all work and projects"}
            </p>
            {activeDomain ? (
              <button
                type="button"
                onClick={() => setActiveDomain(null)}
                className="rounded-full border border-border bg-panel px-3 py-1.5 text-xs text-text transition hover:border-accent/50 hover:text-accent"
              >
                Show all
              </button>
            ) : null}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ConstellationMap activeDomain={activeDomain} onDomainSelect={handleDomainSelect} />
          </aside>

          <div className="space-y-10">
            <div className="space-y-5">
              {filteredWork.length ? (
                filteredWork.map((work) => (
                  <article key={work.company} className="rounded-xl border border-border bg-panel/85 p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-3xl">{work.company}</h3>
                      <p className="text-sm text-muted">{work.period}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {work.role} - {work.location}
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text/95">
                      {work.impactBullets.map((bullet) => (
                        <li key={`${work.company}-${bullet}`}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {work.domains.map((domain) => (
                        <span
                          key={`${work.company}-${domain}`}
                          className={`rounded-full border px-2.5 py-1 text-xs ${
                            activeDomain === domain
                              ? "border-accent/60 bg-accent/15 text-text"
                              : "border-border bg-bg/50 text-muted"
                          }`}
                        >
                          {domainLabel[domain]}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {work.stack.map((item) => (
                        <span key={`${work.company}-${item}`} className="rounded-full bg-bg px-2.5 py-1 text-xs text-muted">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))
              ) : (
                <p className="rounded-xl border border-border bg-panel/85 p-5 text-sm text-muted">
                  No work entries for this signature yet.
                </p>
              )}
            </div>

            <div id="projects" className="section-anchor pt-2">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-4xl">Projects</h2>
                <p className="text-sm text-muted">
                  {activeDomain
                    ? `${filteredProjects.length} matching ${filteredProjects.length === 1 ? "project" : "projects"}`
                    : "All domains visible"}
                </p>
              </div>
              {filteredProjects.length ? (
                <ProjectsGrid projects={filteredProjects} activeDomain={activeDomain} />
              ) : (
                <p className="rounded-xl border border-border bg-panel/85 p-5 text-sm text-muted">
                  No projects match this signature.
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="skills" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8" {...sectionAnimation}>
        <h2 className="font-display text-4xl">Skills</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {profile.skills.map((skill) => (
            <article key={skill.category} className="rounded-xl border border-border bg-panel/85 p-5">
              <h3 className="font-display text-2xl">{skill.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={`${skill.category}-${item}`} className="rounded-full bg-bg px-2.5 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section id="education" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8" {...sectionAnimation}>
        <h2 className="font-display text-4xl">Education</h2>
        <div className="mt-4 rounded-xl border border-border bg-panel/85 p-5">
          <p className="text-base text-text">
            {profile.education.degree}, {profile.education.school}
          </p>
          <p className="mt-1 text-sm text-muted">
            Status: {profile.education.status} · GPA: {profile.education.gpa}
          </p>
          {profile.education.note ? <p className="mt-2 text-sm text-muted">{profile.education.note}</p> : null}
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {profile.coursework.map((course) => (
              <article key={course.course} className="rounded-xl border border-border/80 bg-bg/50 p-3">
                <p className="text-sm font-medium text-text">{course.course}</p>
                <p className="mt-1 text-xs text-muted">
                  {course.instructor} - {course.term}
                </p>
                {course.note ? <p className="mt-1 text-xs text-muted">{course.note}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="culture" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8" {...sectionAnimation}>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-4xl">Culture</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Systems by day. Literature, cinema, and deadpan humor after hours.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Minimal / precise / human</p>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {profile.culture.map((item, index) => (
            <article
              key={item.category}
              className="rounded-xl border border-border bg-gradient-to-b from-panel to-bg p-4 transition hover:border-accent/45"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted">0{index + 1}</p>
              <h3 className="mt-1 font-display text-2xl">{item.category}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text/90">{item.items.join(" / ")}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section id="contact" className="section-anchor mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-8" {...sectionAnimation}>
        <h2 className="font-display text-4xl">Contact</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="rounded-full border border-border bg-panel px-4 py-2 text-sm hover:shadow-glow"
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {social.label}
            </a>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
