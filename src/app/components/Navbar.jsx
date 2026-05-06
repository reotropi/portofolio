"use client";
import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Say hi" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the entry that is most prominently in view
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        // Trigger when ~40% of the section is in the viewport, accounting for sticky nav
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/85 backdrop-blur border-b border-brand-ink/10">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-center md:justify-end">
        <ul className="flex gap-1.5 md:gap-2 flex-wrap justify-center">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setActive(l.id)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold transition-all
                    ${
                      isActive
                        ? "bg-brand-pink text-white shadow-md"
                        : "text-brand-ink/70 hover:text-brand-pink hover:bg-brand-pink-soft/50"
                    }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-0 right-0 h-[3px] bg-brand-violet" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
