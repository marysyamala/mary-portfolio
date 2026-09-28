"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
  .cdh {
    position: relative;
    min-height: calc(100svh - 90px);
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .cdh-grid {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, rgba(163,255,95,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(163,255,95,0.05) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at 60% 40%, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at 60% 40%, black 0%, transparent 70%);
  }
  .cdh-dash {
    background: linear-gradient(160deg, #0e1216 0%, #090c0e 100%);
    border: 1px solid var(--border);
    box-shadow:
      0 40px 90px -30px rgba(0,0,0,0.9),
      inset 0 1px 0 rgba(255,255,255,0.04);
  }
  .cdh-bar {
    background: linear-gradient(180deg, var(--accent), rgba(163,255,95,0.25));
    transform-origin: bottom;
    border-radius: 3px 3px 0 0;
  }
  .cdh-kpi {
    background: #0c0f11;
    border: 1px solid var(--border);
  }
  @media (prefers-reduced-motion: reduce) {
    .cdh * { animation: none !important; }
  }
`;

const BARS = [38, 55, 46, 70, 60, 88, 74];

export default function CinematicDataHero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    // Static resting state for reduced-motion / mobile — everything already
    // renders in its final form, so nothing to do.
    if (reduce || isMobile) return;

    const ctx = gsap.context(() => {
      // Intro: headline + copy reveal on load.
      gsap.from(".cdh-intro > *", {
        y: 40,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "expo.out",
        delay: 0.15,
      });

      // Pre-assembly state for the dashboard.
      gsap.set(".cdh-dash", { autoAlpha: 0, y: 60, scale: 0.94 });
      gsap.set(".cdh-kpi", { autoAlpha: 0, y: 24 });
      gsap.set(".cdh-bar", { scaleY: 0 });
      gsap.set(".cdh-count", { innerText: 0 });

      // Pinned scroll: the dashboard "assembles" as the user scrolls.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=1600",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.to(".cdh-dash", {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          ".cdh-kpi",
          { autoAlpha: 1, y: 0, stagger: 0.15, duration: 1, ease: "power3.out" },
          "-=0.7"
        )
        .to(
          ".cdh-count",
          {
            innerText: (_i: number, t: Element) =>
              (t as HTMLElement).dataset.to ?? "0",
            snap: { innerText: 1 },
            duration: 1.6,
            ease: "expo.out",
          },
          "-=0.9"
        )
        .to(
          ".cdh-bar",
          { scaleY: 1, stagger: 0.07, duration: 1, ease: "power3.out" },
          "-=1.4"
        )
        .to({}, { duration: 0.8 }); // hold at the end
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="home" className="cdh" aria-label="Intro">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="cdh-grid" aria-hidden="true" />

      <div className="mx-auto grid w-[min(1200px,90%)] grid-cols-1 items-center gap-12 py-16 md:py-0 lg:grid-cols-2 lg:gap-16">
        {/* Left: headline + CTAs */}
        <div className="cdh-intro">
          <div className="flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.17em] text-[color:var(--accent)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_10px_var(--accent)]" />
            DATA · ANALYTICS · AI
          </div>

          <h1 className="mt-6 text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-[color:var(--text)]">
            Turn raw data into
            <br />
            <span className="text-[color:var(--accent)]">clear decisions.</span>
          </h1>

          <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-[color:var(--muted)]">
            I&apos;m <strong className="text-[color:var(--text)]">Mary Syamala</strong>{" "}
            — a data &amp; analytics professional building reliable pipelines,
            clear dashboards, and AI-driven insight.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded bg-[color:var(--accent)] px-6 py-3.5 text-sm font-bold text-[#081006] transition-transform hover:-translate-y-0.5"
            >
              View My Work <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded border border-[color:var(--border)] px-6 py-3.5 text-sm font-semibold text-[color:var(--text)] transition-colors hover:border-[color:var(--accent)]"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        {/* Right: assembling data dashboard */}
        <div className="cdh-dash rounded-2xl p-5 md:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-[0.62rem] tracking-widest text-[color:var(--muted)]">
                ANALYTICS OVERVIEW
              </span>
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-[color:var(--border)] px-2.5 py-1 font-mono text-[0.58rem] font-bold tracking-widest text-[color:var(--accent)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--accent)]" />
              LIVE
            </span>
          </div>

          {/* KPI tiles (real metrics) */}
          <div className="grid grid-cols-3 gap-3">
            <div className="cdh-kpi rounded-xl p-3">
              <div className="font-mono text-[0.55rem] uppercase tracking-wider text-[color:var(--muted)]">
                Manual work
              </div>
              <div className="mt-1 text-2xl font-extrabold tracking-tight text-[color:var(--text)]">
                <span className="cdh-count" data-to="40">
                  40
                </span>
                <span className="text-[color:var(--accent)]">%↓</span>
              </div>
            </div>
            <div className="cdh-kpi rounded-xl p-3">
              <div className="font-mono text-[0.55rem] uppercase tracking-wider text-[color:var(--muted)]">
                Records/day
              </div>
              <div className="mt-1 text-2xl font-extrabold tracking-tight text-[color:var(--text)]">
                <span className="cdh-count" data-to="100">
                  100
                </span>
                <span className="text-[color:var(--accent)]">K</span>
              </div>
            </div>
            <div className="cdh-kpi rounded-xl p-3">
              <div className="font-mono text-[0.55rem] uppercase tracking-wider text-[color:var(--muted)]">
                Query speed
              </div>
              <div className="mt-1 text-2xl font-extrabold tracking-tight text-[color:var(--text)]">
                <span className="cdh-count" data-to="25">
                  25
                </span>
                <span className="text-[color:var(--accent)]">%↑</span>
              </div>
            </div>
          </div>

          {/* Bar chart */}
          <div className="mt-5 flex h-40 items-end justify-between gap-2 rounded-xl border border-[color:var(--border)] bg-[#0a0d0f] p-4">
            {BARS.map((h, i) => (
              <div
                key={i}
                className="cdh-bar w-full"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
