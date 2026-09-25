"use client";

import dynamic from "next/dynamic";
import HeroBackground from "../HeroBackground";
import { useIsClient, useIsMobile, usePrefersReducedMotion } from "./env";

// The 3D scene is heavy (three.js): load it only on the client, only when needed.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

/**
 * Renders the interactive 3D data-network hero on capable desktop viewports,
 * and falls back to the lightweight 2D canvas constellation on mobile or when
 * the visitor prefers reduced motion.
 */
export default function HeroCanvas() {
  const isClient = useIsClient();
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  // Before mount, render nothing (the hero text content stands on its own).
  if (!isClient) return null;

  if (isMobile || reducedMotion) {
    return <HeroBackground />;
  }

  return (
    <div className="hero3d" aria-hidden="true">
      <HeroScene />
    </div>
  );
}
