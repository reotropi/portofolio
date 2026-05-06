import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";

const noteColors = [
  "bg-brand-pink-soft",
  "bg-brand-lavender",
  "bg-brand-rose/40",
];

const tapeColors = ["bg-brand-violet/60", "bg-brand-pink/60", "bg-brand-purple/60"];
const tilts = ["tilt-l", "tilt-r", "tilt-l"];
const emojis = ["💼", "✈️", "🌱"];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden scroll-mt-20">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 28px, rgba(167,139,250,0.08) 28px 29px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <p className="font-hand text-3xl text-brand-violet rotate-1 inline-block">
            ~ the work history bit ~
          </p>
          <h2 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">
            a few stops along{" "}
            <span className="relative inline-block">
              the way
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 6 Q 50 1, 100 6 T 198 6"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            ✏️
          </h2>
        </Reveal>

        <div className="mt-16 space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <article
                className={`relative ${noteColors[i % noteColors.length]} ${tilts[i % tilts.length]} p-8 md:p-10 shadow-xl shadow-brand-ink/10 hover:rotate-0 hover:scale-[1.01] transition-all duration-300`}
              >
                <span
                  className={`tape ${tapeColors[i % tapeColors.length]} -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]`}
                />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-3xl mr-1">{emojis[i % emojis.length]}</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-ink">
                    {job.role}
                  </h3>
                  <span className="font-hand text-3xl text-brand-pink">
                    @ {job.company}
                  </span>
                </div>
                <p className="font-hand text-xl text-brand-ink/60 mt-1">
                  📍 {job.location} · {job.period}
                </p>

                <ul className="mt-5 space-y-2.5 text-brand-ink/85">
                  {job.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-3 leading-relaxed">
                      <span className="shrink-0 text-brand-pink font-bold">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
