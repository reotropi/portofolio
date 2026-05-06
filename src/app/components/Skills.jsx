import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";

const stickerStyles = [
  "bg-brand-pink text-white",
  "bg-brand-purple text-white",
  "bg-brand-rose text-brand-ink",
  "bg-brand-gray-soft text-brand-ink",
  "bg-brand-violet text-white",
  "bg-white text-brand-ink border-2 border-brand-ink",
  "bg-brand-lavender text-brand-violet",
];

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0", "-rotate-3", "rotate-1"];

const allSkills = skills.flatMap((g) => g.items);

// Split into 3 roughly equal rows
const third = Math.ceil(allSkills.length / 3);
const rowA = allSkills.slice(0, third);
const rowB = allSkills.slice(third, third * 2);
const rowC = allSkills.slice(third * 2);

function Sticker({ label, i }) {
  const style = stickerStyles[i % stickerStyles.length];
  const tilt = tilts[i % tilts.length];
  return (
    <span
      className={`shrink-0 mx-2 px-5 py-2.5 font-semibold text-base shadow-md ${style} ${tilt} hover:rotate-0 hover:scale-105 transition-transform`}
    >
      {label}
    </span>
  );
}

function MarqueeRow({ items, variant = "normal" }) {
  const doubled = [...items, ...items];
  const animClass =
    variant === "reverse"
      ? "animate-marquee-reverse"
      : variant === "slow"
      ? "animate-marquee-slow"
      : "animate-marquee";
  return (
    <div className="overflow-hidden py-3">
      <div className={`flex w-max ${animClass}`}>
        {doubled.map((item, i) => (
          <Sticker key={`${item}-${i}`} label={item} i={i % items.length} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-brand-paper scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-hand text-3xl text-brand-violet -rotate-2 inline-block">
            ~ my toolbox ~
          </p>
          <h2 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">
            things I work with{" "}
            <span className="font-hand text-brand-pink">daily</span>{" "}
            <span className="inline-block animate-float-y">🧰</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-brand-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-brand-paper to-transparent" />

        <MarqueeRow items={rowA} variant="normal" />
        <MarqueeRow items={rowB} variant="reverse" />
        <MarqueeRow items={rowC} variant="slow" />
      </div>

    </section>
  );
}
