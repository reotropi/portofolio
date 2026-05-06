import { Button } from "@mantine/core";
import { PiFileText } from "react-icons/pi";
import { profile, contact } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-16 pb-32 px-6 scroll-mt-20"
    >

      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="font-hand text-3xl text-brand-pink -rotate-3 inline-block">
            Hello everyone, I&apos;m
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-2 text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.95]">
            <span className="text-brand-ink">Aida</span>
            <span className="relative inline-block ml-3">
              <span className="text-brand-pink">Fitryani</span>
              <svg
                className="absolute -bottom-3 left-0 w-full"
                height="14"
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
              >
                <path
                  className="draw-line"
                  d="M2 8 Q 50 2, 100 8 T 200 8 T 298 6"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={250}>
          <p className="mt-10 text-2xl md:text-3xl font-bold text-brand-ink/85 max-w-3xl mx-auto leading-snug">
            I&apos;m a{" "}
            <span className="font-hand text-4xl md:text-5xl text-brand-violet">
              software engineer
            </span>{" "}
            <span className="text-brand-ink/70">(frontend-focused)</span>{" "}
            who turns ideas into clean, working interfaces — and digs into workarounds before giving up.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-8 max-w-2xl mx-auto space-y-3 text-brand-ink/70 text-base md:text-lg leading-relaxed">
            <p>
              I&apos;ve been doing this for{" "}
              <span className="font-hand text-2xl text-brand-pink">7+ years</span>{" "}
              — across teams in Singapore,{" "}
              <span className="whitespace-nowrap">Japan, and Indonesia.</span>
            </p>
            <p>
              I love complex UI systems, real-time browser stuff (camera, mic,
              canvas), and the tiny details that make a product feel{" "}
              <em className="text-brand-ink">just right</em>.
            </p>
            <p>
              Along the way I&apos;ve worked with{" "}
              <span className="font-hand text-2xl text-brand-violet">lots of libraries</span>{" "}
              — picking the right tool for the job and getting comfortable jumping into new ones.
            </p>
          </div>
        </Reveal>

        <Reveal delay={550}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              component="a"
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              radius={0}
              variant="outline"
              color="violet"
              styles={{
                root: {
                  fontWeight: 600,
                  paddingLeft: "1.75rem",
                  paddingRight: "1.75rem",
                  borderWidth: 2,
                },
              }}
            >
              <PiFileText className="inline mr-2" /> grab my resume
            </Button>
            <Button
              component="a"
              href="#contact"
              size="lg"
              radius={0}
              color="pink"
              styles={{
                root: {
                  fontWeight: 600,
                  paddingLeft: "1.75rem",
                  paddingRight: "1.75rem",
                },
              }}
            >
              say hi →
            </Button>
          </div>

          <p className="mt-8 font-hand text-2xl text-brand-ink/60 -rotate-2">
            scroll down for the good stuff ↓
          </p>
        </Reveal>
      </div>
    </section>
  );
}
