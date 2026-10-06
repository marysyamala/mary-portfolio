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
    mask-image: radial-gradient(ellipse at 50% 55%, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 55%, black 0%, transparent 70%);
  }

  /* Laptop mockup */
  .cdh-laptop { width: min(860px, 100%); margin: 0 auto; }
  .cdh-screen {
    position: relative;
    border: 12px solid #15181b;
    border-radius: 16px 16px 5px 5px;
    background: #0a0d0f;
    box-shadow:
      0 45px 90px -35px rgba(0,0,0,0.9),
      inset 0 0 0 1px rgba(255,255,255,0.03);
  }
  .cdh-screen::before { /* camera dot */
    content: ""; position: absolute; top: -8px; left: 50%; transform: translateX(-50%);
    width: 5px; height: 5px; border-radius: 50%;
    background: #2b3036; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06);
  }
  .cdh-base {
    position: relative;
    width: 116%; margin-left: -8%; height: 15px;
    background: linear-gradient(180deg, #3a4046 0%, #191c1f 100%);
    border-radius: 0 0 16px 16px;
    box-shadow: 0 22px 34px -14px rgba(0,0,0,0.85);
  }
  .cdh-base::before { /* trackpad lip notch */
    content: ""; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
    width: 130px; height: 7px; background: #0d0f11; border-radius: 0 0 9px 9px;
  }

  .cdh-bar {
    background: linear-gradient(180deg, var(--accent), rgba(163,255,95,0.25));
    transform-origin: bottom;
    border-radius: 3px 3px 0 0;
  }
  .cdh-kpi { background: #0c0f11; border: 1px solid var(--border); }

  /* Founder avatar (photo in a lime ring) overlapping the laptop */
  .cdh-avatar {
    position: absolute;
    z-index: 30;
    left: -34px; bottom: -34px;
    width: 140px; height: 140px;
  }
  .cdh-avatar-ring {
    position: absolute; inset: 0; border-radius: 9999px;
    background: var(--accent);
    box-shadow: 0 20px 45px -12px rgba(163,255,95,0.45);
  }
  .cdh-avatar img {
    position: absolute; inset: 8px;
    width: calc(100% - 16px); height: calc(100% - 16px);
    object-fit: cover; border-radius: 9999px;
    border: 2px solid #081006;
  }
  @media (max-width: 768px) {
    .cdh-avatar { width: 96px; height: 96px; left: -14px; bottom: -14px; }
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
    if (reduce || isMobile) return; // static resting state

    const ctx = gsap.context(() => {
      gsap.from(".cdh-intro > *", {
        y: 40,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "expo.out",
        delay: 0.15,
      });

      gsap.set(".cdh-laptop", { autoAlpha: 0, y: 70, scale: 0.93 });
      gsap.set(".cdh-kpi", { autoAlpha: 0, y: 24 });
      gsap.set(".cdh-bar", { scaleY: 0 });
      gsap.set(".cdh-count", { innerText: 0 });
      gsap.set(".cdh-avatar", { autoAlpha: 0, scale: 0.5, y: 20 });

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

      tl.to(".cdh-laptop", {
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
        .to(
          ".cdh-avatar",
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "back.out(1.6)",
          },
          "-=0.8"
        )
        .to({}, { duration: 0.8 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="home" className="cdh" aria-label="Intro">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="cdh-grid" aria-hidden="true" />

      <div className="mx-auto flex w-[min(1100px,90%)] flex-col items-center gap-12 py-16 text-center">
        {/* Headline + CTAs */}
        <div className="cdh-intro">
          <div className="flex items-center justify-center gap-2 text-[0.72rem] font-bold tracking-[0.17em] text-[color:var(--accent)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_10px_var(--accent)]" />
            GENAI · AI/ML · NLP
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,6.5vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-[color:var(--text)]">
            Turn data into{" "}
            <span className="text-[color:var(--accent)]">intelligent decisions.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-[color:var(--muted)]">
            I&apos;m <strong className="text-[color:var(--text)]">Mary Syamala</strong>{" "}
            — a GenAI Engineer building real-time AI products: news-driven market
            intelligence, FinBERT NLP, and evidence-grounded RAG on scalable data
            pipelines.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
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

        {/* Centered laptop with the assembling dashboard + founder avatar */}
        <div className="cdh-laptop relative">
          <div className="cdh-avatar" aria-hidden="true">
            <div className="cdh-avatar-ring" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mary-portfolio/mary.jpg" alt="Mary Syamala" />
          </div>
          <div className="cdh-screen">
            <div className="p-5 md:p-7 text-left">
              {/* Screen top bar */}
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

              {/* KPI tiles */}
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
              <div className="mt-4 flex h-36 items-end justify-between gap-2 rounded-xl border border-[color:var(--border)] bg-[#0a0d0f] p-4">
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
          <div className="cdh-base" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
