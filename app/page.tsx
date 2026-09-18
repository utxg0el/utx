import type { ReactNode } from "react";
import { AlexaDiagram } from "@/src/components/alexa-diagram";
import { profile, type CourseItem, type RichText } from "@/src/content/profile";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12 border-t border-rule pt-8">
      <h2 className="section-head">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function EntryHead({ title, period }: { title: ReactNode; period: string }) {
  return (
    <div className="entry-head">
      <h3 className="text-title font-semibold">{title}</h3>
      <span className="entry-period">{period}</span>
    </div>
  );
}

/** Prose with inline links, so content stays in profile.ts. */
function Rich({ parts }: { parts: RichText }) {
  return (
    <>
      {parts.map((part, index) =>
        typeof part === "string" ? (
          part
        ) : (
          <a key={index} href={part.href} target="_blank" rel="noreferrer">
            {part.label}
          </a>
        )
      )}
    </>
  );
}

function Inline({ items }: { items: ReactNode[] }) {
  return (
    <>
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 ? " · " : null}
          {item}
        </span>
      ))}
    </>
  );
}

function RepoLink({ href }: { href: string }) {
  return (
    <a className="is-url font-mono text-[0.875rem]" href={href} target="_blank" rel="noreferrer">
      {href.replace(/^https?:\/\//, "")}
    </a>
  );
}

function Course({ item }: { item: CourseItem }) {
  return (
    <div>
      <p className="text-body">
        {item.course}
        {item.phd ? <span className="text-meta text-ink2"> (PhD)</span> : null}
      </p>
      {item.instructor ? <p className="text-meta text-ink2">{item.instructor}</p> : null}
    </div>
  );
}

export default function HomePage() {
  const contactLinks = [
    ...profile.socials.map((social) => (
      <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
        {social.label}
      </a>
    )),
    <a key="cv" href={profile.resumeUrl} target="_blank" rel="noreferrer">
      CV
    </a>,
    ...profile.emails.map((address) => (
      <a key={address} href={`mailto:${address}`}>
        {address}
      </a>
    ))
  ];

  return (
    <main className="sheet pb-20 pt-12 sm:pt-16">
      <header>
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-name font-bold">{profile.name}</h1>
            <p className="mt-1.5 text-meta text-ink2">
              {profile.standing} · {profile.location}
            </p>
          </div>
          {profile.showPortrait ? (
            <span className="portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.avatarUrl} alt={profile.name} loading="eager" />
            </span>
          ) : null}
        </div>

        <p className="mt-6 text-lede">
          <Rich parts={profile.lede} />
        </p>

        <p className="mt-6 text-meta text-ink2">
          <Inline items={contactLinks} />
        </p>
      </header>

      <Section title="Research">
        {profile.research.map((item, index) => (
          <div key={item.lab} className={index > 0 ? "mt-8" : undefined}>
            <EntryHead title={item.lab} period={item.period} />
            <p className="mt-1 text-meta text-ink2">
              Advised by{" "}
              {item.advisorUrl ? (
                <a href={item.advisorUrl} target="_blank" rel="noreferrer">
                  {item.advisor}
                </a>
              ) : (
                item.advisor
              )}
            </p>
            {item.body.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="mt-3 text-body">
                {paragraph}
              </p>
            ))}

            {item.paper ? (
              <div className="paper mt-5">
                <p className="text-meta font-semibold">
                  {item.paper.status} at {item.paper.venue}
                </p>
                <p className="mt-1 text-title font-semibold">{item.paper.title}</p>
                <p className="mt-1 text-meta text-ink2">{item.paper.authors}</p>
                <p className="mt-2.5 text-body">{item.paper.summary}</p>
                {item.paper.figure ? (
                  <figure className="mt-4">
                    <div className={`figure figure--${item.paper.figure.kind}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.paper.figure.src}
                        alt={item.paper.figure.alt}
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-2 text-meta text-ink2">
                      {item.paper.figure.caption}
                    </figcaption>
                  </figure>
                ) : null}
                {item.paper.repo ? (
                  <p className="mt-2.5">
                    <RepoLink href={item.paper.repo} />
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        ))}
      </Section>

      <Section title="Work">
        {profile.work.map((item, index) => (
          <div key={item.company} className={index > 0 ? "mt-8" : undefined}>
            <EntryHead title={item.company} period={item.period} />
            <p className="mt-1 text-meta text-ink2">
              {item.role} · {item.location}
            </p>
            <p className="mt-3 text-body">{item.body}</p>
            {item.diagram === "alexa" ? (
              <figure className="mt-4">
                <div className="diagram">
                  <AlexaDiagram />
                </div>
                <figcaption className="mt-2 text-meta text-ink2">
                  What changed: the rule table could only answer phrasings someone had written
                  down in advance. The agent reads the car&apos;s state and works the request out.
                </figcaption>
              </figure>
            ) : null}
          </div>
        ))}
      </Section>

      <Section title="Projects">
        {profile.projects.map((item, index) => (
          <div key={item.name} className={index > 0 ? "mt-8" : undefined}>
            <EntryHead
              title={
                item.repo ? (
                  <a href={item.repo} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                ) : (
                  item.name
                )
              }
              period={item.year}
            />
            {item.affiliation || item.credit ? (
              <p className="mt-1 text-meta text-ink2">
                {[item.affiliation, item.credit].filter(Boolean).join(" · ")}
              </p>
            ) : null}
            <p className="mt-3 text-body">{item.body}</p>
            {item.figure ? (
              <figure className="mt-4">
                <div className={`figure figure--${item.figure.kind}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.figure.src} alt={item.figure.alt} loading="lazy" />
                </div>
                <figcaption className="mt-2 text-meta text-ink2">{item.figure.caption}</figcaption>
              </figure>
            ) : null}
            {item.repo ? (
              <p className="mt-2.5">
                <RepoLink href={item.repo} />
              </p>
            ) : null}
          </div>
        ))}
      </Section>

      <Section title="Education">
        {profile.education.map((item, index) => (
          <div key={item.school} className={index > 0 ? "mt-8" : undefined}>
            <EntryHead title={item.school} period={item.period} />
            <p className="mt-1 text-meta text-ink2">{item.degree}</p>
            {item.note ? <p className="mt-0.5 text-meta font-medium">{item.note}</p> : null}

            {item.coursework?.length ? (
              <div className="mt-5">
                <p className="text-meta font-semibold">Coursework</p>
                <div className="course-grid mt-3">
                  {item.coursework.map((course) => (
                    <Course key={course.course} item={course} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </Section>

      <footer className="mt-12 border-t border-rule pt-8">
        <p className="text-meta text-ink2">
          <Inline items={[profile.location, ...contactLinks]} />
        </p>
        <p className="colophon-availability mt-1 text-meta text-ink2">{profile.availability}</p>
      </footer>
    </main>
  );
}
