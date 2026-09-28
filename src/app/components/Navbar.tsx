"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["#about", "About"],
  ["#experience", "Experience"],
  ["#projects", "Projects"],
  ["#skills", "Skills"],
  ["#beyond", "Beyond"],
  ["#contact", "Contact"],
] as const;

/**
 * Sticky site header that gains a blurred background on scroll, with an
 * accessible mobile menu (hamburger) for small screens.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock body scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className={`siteHeader${scrolled ? " scrolled" : ""}`}>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
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

        <button
          type="button"
          className={`navToggle${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="mobileMenu">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobileCta"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  );
}
