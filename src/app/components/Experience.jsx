import { PiMapPin, PiBriefcase, PiCaretRightBold } from "react-icons/pi";
import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";

const noteColors = [
  "bg-brand-pink-soft",
  "bg-brand-lavender",
  "bg-brand-rose/40",
];

const tapeColors = ["bg-brand-violet/60", "bg-brand-pink/60", "bg-brand-purple/60"];
const tilts = ["tilt-l", "tilt-r", "tilt-l"];

const bulletAccents = [
  "border-brand-pink",
  "border-brand-violet",
  "border-brand-purple",
  "border-brand-pink",
  "border-brand-violet",
  "border-brand-purple",
];

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
          <p className="font-hand text-3xl text-brand-violet rotate-1 inline-flex items-center gap-2">
            <PiBriefcase className="text-brand-pink" />
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
            </span>
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
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-ink">
                    {job.role}
                  </h3>
                  <span className="font-hand text-3xl text-brand-pink">
                    @ {job.company}
                  </span>
                </div>
                <p className="font-hand text-xl text-brand-ink/60 mt-1">
                  <PiMapPin className="inline mr-1" /> {job.location} · {job.period}
                </p>

                <ul className="mt-6 space-y-4 text-brand-ink/85">
                  {job.bullets.map((b, idx) => {
                    const dashIdx = b.indexOf(" — ");
                    const hasHeadline = dashIdx !== -1;
                    const headline = hasHeadline ? b.substring(0, dashIdx) : null;
                    const detail = hasHeadline ? b.substring(dashIdx + 3) : b;
                    const accent = bulletAccents[idx % bulletAccents.length];
                    return (
                      <li
                        key={idx}
                        className={`group relative pl-5 pr-3 py-3 border-l-[3px] ${accent} bg-white/30 hover:bg-white/60 transition-colors duration-200`}
                      >
                        <PiCaretRightBold className="absolute -left-[9px] top-4 text-brand-pink bg-white rounded-full" />
                        {hasHeadline ? (
                          <>
                            <p className="font-bold text-brand-violet text-base md:text-lg leading-snug">
                              {headline}
                            </p>
                            <p className="mt-1.5 leading-relaxed text-brand-ink/80">
                              {detail}
                            </p>
                          </>
                        ) : (
                          <p className="leading-relaxed">{detail}</p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
