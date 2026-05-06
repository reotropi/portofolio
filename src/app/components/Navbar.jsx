"use client";
import { useEffect, useState } from "react";
import { Drawer, Burger } from "@mantine/core";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Say hi" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setOpened(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/85 backdrop-blur border-b border-brand-ink/10">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between md:justify-end">
        <div className="md:hidden">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            aria-label="Toggle navigation"
            color="var(--mantine-color-pink-6)"
            size="sm"
          />
        </div>

        <ul className="hidden md:flex gap-1.5 md:gap-2 flex-wrap justify-center">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => handleClick(l.id)}
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

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="left"
        size="70%"
        padding="lg"
        title={<span className="font-hand text-2xl text-brand-pink">menu</span>}
        overlayProps={{ backgroundOpacity: 0.4, blur: 2 }}
        hiddenFrom="md"
      >
        <ul className="flex flex-col gap-2">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => handleClick(l.id)}
                  className={`block px-4 py-3 text-base font-semibold transition-all
                    ${
                      isActive
                        ? "bg-brand-pink text-white shadow-md"
                        : "text-brand-ink/80 hover:text-brand-pink hover:bg-brand-pink-soft/50"
                    }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
      </Drawer>
    </header>
  );
}
