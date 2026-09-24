"use client";

import { useEffect } from "react";

/**
 * Progressive scroll-reveal. JS applies the initial hidden state, so visitors
 * without JS (or with reduced-motion) always see fully-rendered content.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section, .contactSection, .educationSection"
      )
    );
    if (targets.length === 0) return;

    for (const el of targets) el.classList.add("reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    for (const el of targets) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return null;
}
