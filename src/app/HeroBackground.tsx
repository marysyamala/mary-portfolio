"use client";

import { useEffect, useRef } from "react";

/**
 * Animated constellation backdrop — a lightweight, dependency-free canvas
 * particle network in the portfolio's lime accent. Fixed behind all content,
 * respects prefers-reduced-motion, and pauses when the tab is hidden.
 */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ACCENT = "163, 255, 95"; // --accent as rgb
    let width = 0;
    let height = 0;
    let dpr = 1;

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: P[] = [];

    const mouse = { x: -9999, y: -9999 };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density scales with viewport, capped for performance.
      const target = Math.min(Math.floor((width * height) / 16000), 110);
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    const LINK_DIST = 130;

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Gentle pull toward the cursor for subtle interactivity.
        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const dm2 = dxm * dxm + dym * dym;
        if (dm2 < 26000) {
          p.x += dxm * 0.0009;
          p.y += dym * 0.0009;
        }

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));
      }

      // Connecting lines.
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.5;
            ctx!.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // Nodes.
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${ACCENT}, 0.75)`;
        ctx!.fill();
      }
    }

    let raf = 0;
    let running = true;
    function loop() {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }
    function onVisibility() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduceMotion) {
        running = true;
        loop();
      }
    }

    resize();

    if (reduceMotion) {
      // Draw a single static frame — no animation.
      draw();
    } else {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      loop();
    }

    window.addEventListener("resize", resize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="heroCanvas" aria-hidden="true" />;
}
