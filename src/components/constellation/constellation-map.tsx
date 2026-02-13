"use client";

import { useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { ProjectDomain } from "@/src/content/profile";
import { domainLabel } from "@/src/content/profile";

type Point = {
  domain: ProjectDomain;
  x: number;
  y: number;
};

type ConstellationMapProps = {
  activeDomain: ProjectDomain | null;
  onDomainSelect: (domain: ProjectDomain | null) => void;
};

const points: Point[] = [
  { domain: "theory", x: 88, y: 38 },
  { domain: "llm_agents", x: 260, y: 72 },
  { domain: "efficient_ai", x: 200, y: 182 },
  { domain: "robotics_perception", x: 72, y: 168 }
];

const edges: [ProjectDomain, ProjectDomain][] = [
  ["theory", "llm_agents"],
  ["theory", "efficient_ai"],
  ["llm_agents", "efficient_ai"],
  ["efficient_ai", "robotics_perception"],
  ["theory", "robotics_perception"]
];

export function ConstellationMap({ activeDomain, onDomainSelect }: ConstellationMapProps) {
  const [hovered, setHovered] = useState<ProjectDomain | null>(null);
  const reduceMotion = useReducedMotion();

  const current = hovered ?? activeDomain;
  const pointByDomain = useMemo(
    () => Object.fromEntries(points.map((point) => [point.domain, point])) as Record<ProjectDomain, Point>,
    []
  );
  const tooltipPoint = current ? pointByDomain[current] : null;

  return (
    <div className="relative rounded-2xl border border-border bg-panel/60 p-4 md:p-6">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Signature Map</p>
      <svg viewBox="0 0 320 220" className="h-auto w-full" role="img" aria-label="Constellation map of project domains">
        <defs>
          <filter id="lineGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map(([a, b]) => {
          const p1 = pointByDomain[a];
          const p2 = pointByDomain[b];
          const emphasized = !current || current === a || current === b;

          return (
            <line
              key={`${a}-${b}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="currentColor"
              className={`text-accent ${emphasized ? "opacity-70" : "opacity-20"}`}
              strokeWidth={1.6}
              filter={emphasized ? "url(#lineGlow)" : undefined}
            />
          );
        })}

        {points.map((point) => {
          const selected = current === point.domain;
          const active = activeDomain === point.domain;

          return (
            <g key={point.domain} transform={`translate(${point.x}, ${point.y})`}>
              <circle
                r={selected ? 8 : 6}
                fill="currentColor"
                className={`text-accent ${selected || active ? "opacity-100" : "opacity-60"}`}
              />
              <foreignObject x={-14} y={-14} width={28} height={28}>
                <button
                  type="button"
                  className="h-7 w-7 rounded-full"
                  aria-label={`Toggle ${domainLabel[point.domain]}`}
                  aria-describedby={selected || active ? "constellation-tooltip" : undefined}
                  aria-pressed={active}
                  onMouseEnter={() => setHovered(point.domain)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(point.domain)}
                  onBlur={() => setHovered(null)}
                  onClick={() => onDomainSelect(active ? null : point.domain)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onDomainSelect(active ? null : point.domain);
                    }
                  }}
                />
              </foreignObject>
            </g>
          );
        })}
      </svg>

      {current && tooltipPoint ? (
        <div
          id="constellation-tooltip"
          role="tooltip"
          className={`pointer-events-none absolute z-10 -translate-x-1/2 rounded-md border border-border bg-bg/90 px-2.5 py-1 text-xs text-text shadow-glow ${
            reduceMotion ? "" : "transition-opacity"
          }`}
          style={{
            left: `${(tooltipPoint.x / 320) * 100}%`,
            top: `${(tooltipPoint.y / 220) * 100 - 10}%`
          }}
        >
          {domainLabel[current]}
        </div>
      ) : null}

      {current ? (
        <div
          role="status"
          className={`mt-3 rounded-md border border-border bg-bg/70 px-3 py-2 text-sm text-text ${
            reduceMotion ? "" : "transition"
          }`}
        >
          <span className="font-medium">{domainLabel[current]}</span>
          <span className="text-muted"> - click to filter related work.</span>
        </div>
      ) : (
        <p className="mt-3 text-sm text-muted">Select a node to emphasize related projects.</p>
      )}
    </div>
  );
}
