"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Entry = { year: string; role: string; org: string; text: string };

const ENTRIES: Entry[] = [
  {
    year: "SEP 2026 — PRESENT",
    role: "GenAI Engineer",
    org: "Symplore Inc.",
    text: "Leading a real-time U.S. market-intelligence platform — ingesting live news, scoring FinBERT NLP sentiment, and serving evidence-grounded RAG/GenAI workflows via FastAPI. Building point-in-time pipelines with leakage controls and deploying on AWS (ECS Fargate, pgvector) with GitHub Actions CI/CD.",
  },
  {
    year: "FEB 2025 — AUG 2026",
    role: "AI Data Engineer",
    org: "InCom Technologies",
    text: "Built ETL/ELT pipelines preparing AI-ready structured and semi-structured data for ML models and analytics — cutting processing time by 25% with Python, SQL, and API automation, and adding validation, reconciliation, and quality checks for reliable training data.",
  },
  {
    year: "OCT 2023 — JAN 2025",
    role: "Data Analyst",
    org: "Advanced Knowledge Tech",
    text: "Automated ETL, validation, and audit workflows (40% less manual reporting), built data-profiling/quality frameworks, and analyzed large operational and financial datasets to drive a 10% cost reduction. Designed Power BI dashboards that cut issue-detection time by 30%.",
  },
  {
    year: "MAR 2021 — MAY 2022",
    role: "Junior Data Analyst",
    org: "DXC Technology",
    text: "Processed and analyzed 100K+ records/day with SQL, Python, and Excel; built and validated ETL pipelines with automated quality checks, and delivered interactive Power BI/Tableau dashboards for operational, vendor, and financial reporting.",
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
