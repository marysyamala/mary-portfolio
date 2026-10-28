"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Entry = { year: string; role: string; org: string; text: string };

const ENTRIES: Entry[] = [
  {
    year: "FEB 2025 — PRESENT",
    role: "Business Analyst",
    org: "InCom Technologies",
    text: "Independently built a financial-intelligence platform integrating FinBERT sentiment, financial news, and market data — evaluating analytical outputs against business rules for accuracy, relevance, and consistency. Designed interactive Power BI and Tableau dashboards to track KPIs, and automated SQL, Python, and API workflows, cutting processing time by 25%.",
  },
  {
    year: "OCT 2023 — JAN 2025",
    role: "Data Analyst",
    org: "Advanced Knowledge Tech",
    text: "Partnered with cross-functional stakeholders to translate objectives into BRDs and functional specs, and built Power BI dashboards that cut issue-detection time by 30%. Ran data profiling, quality assessments, and business-rule validation, and automated ETL, reconciliation, and validation workflows — reducing manual reporting effort by 40%.",
  },
  {
    year: "JAN 2021 — MAY 2022",
    role: "Junior Business Analyst",
    org: "DXC Technology",
    text: "Analyzed and validated 100K+ daily records with SQL, Python, and Excel, running accuracy, completeness, and consistency checks for reliable reporting. Gathered business requirements across finance, operations, and technical teams, and delivered interactive Power BI and Tableau dashboards to monitor KPIs, financial trends, and operational performance.",
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
