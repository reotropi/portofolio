import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";

const accentMap = {
  pink:   { bg: "bg-brand-pink",   soft: "bg-brand-pink/15",     text: "text-brand-pink",   emoji: "📝" },
  purple: { bg: "bg-brand-purple", soft: "bg-brand-purple/20",   text: "text-brand-violet", emoji: "🎤" },
  rose:   { bg: "bg-brand-rose",   soft: "bg-brand-rose/30",     text: "text-brand-pink",   emoji: "📸" },
  violet: { bg: "bg-brand-violet", soft: "bg-brand-lavender",    text: "text-brand-violet", emoji: "🤝" },
};

const tilts = ["-rotate-1", "rotate-1", "rotate-1", "-rotate-1"];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-brand-paper overflow-hidden scroll-mt-20">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(167,139,250,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <p className="font-hand text-3xl text-brand-pink -rotate-2 inline-block drop-shadow">
            ~ stuff I&apos;ve built ~
          </p>
          <h2 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">
            a few favorites{" "}
            <span className="inline-block animate-float-y">💖</span>
          </h2>
          <p className="mt-3 font-hand text-2xl text-brand-ink/60">
            (the ones I&apos;m secretly proud of)
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-7 mt-12">
          {projects.map((p, i) => {
            const a = accentMap[p.accent] ?? accentMap.pink;
            const tilt = tilts[i % tilts.length];
            const tiltVar = tilt.includes("-") ? "-1deg" : "1deg";
            return (
              <Reveal key={p.title} delay={i * 100}>
                <article
                  style={{ "--tilt": tiltVar }}
                  className={`group relative ${tilt} animate-wiggle bg-white border-2 border-brand-ink/15 p-7 shadow-lg hover:shadow-2xl hover:border-brand-pink transition-all duration-300`}
                >
                  <div
                    className={`absolute -top-5 -right-5 w-20 h-20 ${a.bg} flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-md`}
                  >
                    {a.emoji}
                  </div>

                  <h3 className="relative text-2xl md:text-3xl font-extrabold text-brand-ink pr-16">
                    {p.title}
                  </h3>
                  <p className="relative mt-3 text-brand-ink/75 leading-relaxed">
                    {p.blurb}
                  </p>
                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className={`px-3 py-1 text-xs font-semibold ${a.soft} ${a.text}`}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center font-hand text-2xl text-brand-ink/60">
            ...and a bunch more I couldn&apos;t list 😅
          </p>
        </Reveal>
      </div>
    </section>
  );
}
