"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { ConstellationMap } from "@/src/components/constellation/constellation-map";
import { StickyNav } from "@/src/components/nav/sticky-nav";
import { ProjectsGrid } from "@/src/components/projects/projects-grid";
import { profile, type ProjectDomain } from "@/src/content/profile";

export default function HomePage() {
  const [activeDomain, setActiveDomain] = useState<ProjectDomain | null>(null);
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <main id="top">
      <StickyNav sections={profile.sections} />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 pt-10 md:grid-cols-[1.3fr_1fr] md:px-8 md:pt-16">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted">New York University - Courant</p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] md:text-7xl">{profile.name}</h1>
          <p className="mt-4 text-lg text-muted">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base text-text/90">{profile.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-black">
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded-full border border-border bg-panel px-5 py-2 text-sm font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
        <ConstellationMap activeDomain={activeDomain} onDomainSelect={setActiveDomain} />
      </section>

      <motion.section id="work" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8" {...sectionAnimation}>
        <h2 className="font-display text-4xl">Work</h2>
        <div className="mt-5 space-y-5">
          {profile.work.map((work) => (
            <article key={work.company} className="rounded-2xl border border-border bg-panel p-5">
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
                {work.stack.map((item) => (
                  <span key={`${work.company}-${item}`} className="rounded-full bg-bg px-2.5 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8" {...sectionAnimation}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-4xl">Projects</h2>
          <p className="text-sm text-muted">{activeDomain ? "Domain filter active" : "All domains visible"}</p>
        </div>
        <ProjectsGrid projects={profile.projects} activeDomain={activeDomain} />
      </motion.section>

      <motion.section id="education" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8" {...sectionAnimation}>
        <h2 className="font-display text-4xl">Education</h2>
        <div className="mt-4 rounded-2xl border border-border bg-panel p-5">
          <p className="text-base text-text">MS in Computer Science, NYU Courant (Semester 2)</p>
          <p className="mt-1 text-sm text-muted">Semester 1 GPA: 3.5+</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {profile.coursework.map((course) => (
              <article key={course.course} className="rounded-xl border border-border/80 bg-bg/50 p-3">
                <p className="text-sm font-medium text-text">{course.course}</p>
                <p className="mt-1 text-xs text-muted">
                  {course.instructor} - {course.term}
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="culture" className="section-anchor mx-auto max-w-6xl px-4 py-10 md:px-8" {...sectionAnimation}>
        <h2 className="font-display text-4xl">Culture</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          I like ideas with tension: rigorous systems, existential literature, dry comedy, and first-principles thinking.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {profile.culture.map((item) => (
            <article key={item.category} className="rounded-2xl border border-border bg-panel p-4">
              <h3 className="font-display text-2xl">{item.category}</h3>
              <p className="mt-2 text-sm text-muted">{item.items.join(" - ")}</p>
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
