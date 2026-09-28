"use client";

import { Mail } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { LinkedinIcon, GithubIcon } from "@/components/ui/brand-icons";

const socialLinks = [
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/mary-syamala",
    label: "LinkedIn",
  },
  { icon: GithubIcon, href: "https://github.com/marysyamala", label: "GitHub" },
  { icon: Mail, href: "mailto:marysyamala0707@gmail.com", label: "Email" },
];

/** Homepage hero — minimalist photo hero, using the site's own sticky navbar
 * (so the component's internal header is disabled). */
export default function HomeHero() {
  return (
    <MinimalistHero
      showHeader={false}
      logoText="MS."
      navLinks={[]}
      mainText="Mary Syamala — a data & analytics professional turning complex operational and financial data into reliable pipelines, clear dashboards, and decision-ready insights."
      readMoreLink="#about"
      imageSrc="/mary-portfolio/mary.jpg"
      imageAlt="Mary Syamala"
      overlayText={{ part1: "clear", part2: "data." }}
      socialLinks={socialLinks}
      locationText=""
      className="h-auto min-h-[calc(100svh-90px)]"
    />
  );
}
