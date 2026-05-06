import { Button } from "@mantine/core";
import {
  PiPaperPlaneTilt,
  PiEnvelopeSimple,
  PiPhone,
  PiLinkedinLogo,
  PiGithubLogo,
  PiFileText,
} from "react-icons/pi";
import { contact } from "@/data/portfolio";
import Reveal from "./Reveal";

const linkButtonStyles = {
  root: {
    fontWeight: 600,
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-28 pb-6 px-6 text-brand-ink scroll-mt-20"
    >

      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-hand text-3xl text-brand-pink rotate-2 inline-flex items-center gap-2">
            <PiPaperPlaneTilt className="text-brand-violet" />
            ~ the let&apos;s-be-friends part ~
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            wanna{" "}
            <span className="relative inline-block">
              <span className="text-brand-pink">build something</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 Q 75 1, 150 7 T 298 6"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            ?
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 text-brand-ink/70 text-lg max-w-xl mx-auto">
            I&apos;m always up for interesting frontend work, friendly chats,
            or just nerding out over tiny UI details. My inbox is open.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 mx-auto flex flex-col items-center gap-3">
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                component="a"
                href={`mailto:${contact.email}`}
                size="md"
                radius="md"
                color="pink"
                styles={linkButtonStyles}
              >
                <PiEnvelopeSimple className="inline mr-2" />{contact.email}
              </Button>
              <Button
                component="a"
                href={`tel:${contact.phone.replace(/\s|-/g, "")}`}
                size="md"
                radius="md"
                color="violet"
                styles={linkButtonStyles}
              >
                <PiPhone className="inline mr-2" />{contact.phone}
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                component="a"
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                radius="md"
                variant="white"
                color="dark"
                styles={linkButtonStyles}
              >
                <PiLinkedinLogo className="inline mr-2" />LinkedIn
              </Button>
              <Button
                component="a"
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                radius="md"
                variant="outline"
                color="gray"
                styles={{
                  root: {
                    ...linkButtonStyles.root,
                    borderColor: "rgba(30,27,58,0.25)",
                    color: "#1e1b3a",
                  },
                }}
              >
                <PiGithubLogo className="inline mr-2" />GitHub
              </Button>
            </div>
            <Button
              component="a"
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              radius="md"
              color="grape"
              styles={linkButtonStyles}
            >
              <PiFileText className="inline mr-2" />Download Resume
            </Button>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <p className="mt-40 text-xs text-brand-ink/50">
            Aida Fitryani {new Date().getFullYear()} · All rights reserved
          </p>
        </Reveal>
      </div>
    </section>
  );
}
