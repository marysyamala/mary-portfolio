"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["#about", "About"],
  ["#experience", "Experience"],
  ["#projects", "Projects"],
  ["#skills", "Skills"],
  ["#contact", "Contact"],
] as const;

/**
 * Sticky site header that gains a blurred background once the page is
 * scrolled past the hero fold.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`siteHeader${scrolled ? " scrolled" : ""}`}>
      <nav className="navbar">
        <a href="#home" className="logo">
          MS<span>.</span>
        </a>

        <div className="navLinks">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="navButton">
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}
