"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin top progress bar tracking overall page scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div className="scrollProgress" style={{ scaleX }} aria-hidden="true" />
  );
}
