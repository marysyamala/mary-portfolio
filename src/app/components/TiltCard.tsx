"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";

const EASE = [0.2, 0.7, 0.2, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/**
 * A project card with pointer-driven 3D tilt and a cursor-following spotlight
 * (via CSS custom properties). Participates in a parent RevealStagger for its
 * entrance. Tilt is disabled for reduced-motion users.
 */
export default function TiltCard({
  children,
  className,
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const rxRaw = useMotionValue(0);
  const ryRaw = useMotionValue(0);
  const rotateX = useSpring(rxRaw, { stiffness: 120, damping: 14, mass: 0.3 });
  const rotateY = useSpring(ryRaw, { stiffness: 120, damping: 14, mass: 0.3 });

  function handleMove(e: PointerEvent<HTMLElement>) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ryRaw.set((px - 0.5) * max * 2);
    rxRaw.set(-(py - 0.5) * max * 2);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }

  function handleLeave() {
    rxRaw.set(0);
    ryRaw.set(0);
  }

  return (
    <motion.article
      ref={ref}
      className={className}
      variants={variants}
      style={
        reduce ? undefined : { rotateX, rotateY, transformPerspective: 1000 }
      }
      whileHover={reduce ? undefined : { scale: 1.012 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </motion.article>
  );
}
