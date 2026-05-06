import Reveal from "./Reveal";

const stack = [
  { label: "Claude Code", style: "bg-brand-violet text-white", tilt: "-rotate-2" },
  { label: "Next.js", style: "bg-brand-ink text-brand-cream", tilt: "rotate-1" },
  { label: "Vercel", style: "bg-white text-brand-ink border-2 border-brand-ink", tilt: "-rotate-1" },
  { label: "Supabase", style: "bg-brand-pink text-white", tilt: "rotate-2" },
  { label: "Firebase Firestore", style: "bg-brand-rose text-brand-ink", tilt: "-rotate-2" },
  { label: "Neon", style: "bg-brand-lavender text-brand-violet", tilt: "rotate-1" },
];

export default function Vibecode() {
  return (
    <section id="vibecode" className="relative py-20 px-6 overflow-hidden bg-brand-paper scroll-mt-20">
      <span className="absolute top-10 right-[12%] text-3xl animate-float-y">⚡</span>
      <span className="absolute bottom-10 left-[10%] text-3xl animate-float-y" style={{ animationDelay: "1.2s" }}>🪄</span>

      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="font-hand text-3xl text-brand-pink -rotate-2 inline-block">
            ~ on the side ~
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
            Nowadays I also{" "}
            <span className="relative inline-block">
              <span className="text-brand-violet">vibecode</span>
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
            ✨
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 text-brand-ink/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            to ship more features and products — don&apos;t worry, I always oversee 👀.
            These are my stacks when vibecoding:
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {stack.map((s) => (
              <span
                key={s.label}
                className={`px-5 py-2.5 font-semibold text-base shadow-md ${s.style} ${s.tilt} hover:rotate-0 hover:scale-105 transition-transform`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
