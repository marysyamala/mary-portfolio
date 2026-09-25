"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Entry = { year: string; role: string; org: string; text: string };

const ENTRIES: Entry[] = [
  {
    year: "2026 — PRESENT",
    role: "Data Engineer",
    org: "Symplore",
    text: "Building ETL/ELT pipelines, API integrations, SQL and Python transformations, data-quality processes, and analytics-ready datasets across cloud data environments.",
  },
  {
    year: "2025 — 2026",
    role: "Data Engineer",
    org: "Tech Intuition",
    text: "Developed automated data pipelines, optimized cloud datasets, improved data reliability, and delivered clean datasets for analytics and business reporting.",
  },
  {
    year: "2023 — 2025",
    role: "Business Analyst",
    org: "Advanced Knowledge Tech",
    text: "Translated stakeholder requirements into analytics solutions, automated reporting workflows, and developed KPI dashboards to support business decisions.",
  },
];

export default function ExperienceTimeline() {
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nodes = Array.from(
      el.querySelectorAll<HTMLElement>(".timelineNode")
    );
    const items = Array.from(
      el.querySelectorAll<HTMLElement>(".timelineItem")
    );

    if (reduce) {
      // Static, fully-revealed state — no scroll animation.
      if (fill.current) fill.current.style.transform = "scaleY(1)";
      nodes.forEach((n) => n.classList.add("active"));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Progress rail fills as the section scrolls through the viewport.
      if (fill.current) {
        gsap.fromTo(
          fill.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 65%",
              end: "bottom 75%",
              scrub: true,
            },
          }
        );
      }

      // Each item rises + fades in; its node lights up when reached.
      items.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 32,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 85%" },
        });

        const node = nodes[i];
        if (node) {
          ScrollTrigger.create({
            trigger: item,
            start: "top 62%",
            end: "bottom 40%",
            onEnter: () => node.classList.add("active"),
            onEnterBack: () => node.classList.add("active"),
            onLeaveBack: () => node.classList.remove("active"),
          });
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="timeline" ref={root}>
      <div className="timelineRail">
        <div className="timelineFill" ref={fill} />
      </div>

      {ENTRIES.map((entry, i) => (
        <div className="timelineItem" key={entry.org + i}>
          <span className="timelineNode" aria-hidden="true" />
          <div className="timelineYear">{entry.year}</div>
          <div className="timelineBody">
            <h3>{entry.role}</h3>
            <p className="timelineOrg">{entry.org}</p>
            <p className="timelineText">{entry.text}</p>
          </div>
          <span className="timelineIndex">0{i + 1}</span>
        </div>
      ))}
    </div>
  );
}
