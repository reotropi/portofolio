import { Badge } from "@mantine/core";
import { PiUsersThree } from "react-icons/pi";
import { softSkills } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="relative py-20 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="font-hand text-3xl text-brand-pink rotate-1 inline-flex items-center gap-2">
            <PiUsersThree className="text-brand-violet" />
            ~ and the people-y stuff ~
          </p>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
            how I show up for the team
          </h3>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap gap-2.5 justify-center">
            {softSkills.map((s, i) => (
              <Badge
                key={s}
                radius={0}
                size="xl"
                variant="light"
                color={i % 2 === 0 ? "teal" : "violet"}
                styles={{
                  root: {
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    height: "auto",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    border: "2px solid currentColor",
                  },
                }}
              >
                {s}
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
