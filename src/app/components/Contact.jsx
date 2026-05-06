import { Button } from "@mantine/core";
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
      className="relative overflow-hidden py-28 px-6 bg-brand-gray-soft text-brand-ink scroll-mt-20"
    >
      <div className="blob blob-animate bg-brand-pink -top-10 -left-10 w-72 h-72 opacity-50" />
      <div
        className="blob blob-animate bg-brand-purple bottom-0 right-0 w-72 h-72 opacity-50"
        style={{ animationDelay: "3s" }}
      />

      <span className="absolute top-16 right-[15%] text-3xl animate-float-y">💌</span>
      <span className="absolute bottom-24 left-[10%] text-3xl animate-float-y" style={{ animationDelay: "1.5s" }}>☕</span>
      <span className="absolute top-1/2 left-[8%] text-2xl animate-spin-slow">✨</span>

      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-hand text-3xl text-brand-pink rotate-2 inline-block">
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
            or just nerding out over tiny UI details. My inbox is open 💌
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button
              component="a"
              href={`mailto:${contact.email}`}
              size="md"
              radius={0}
              color="pink"
              styles={linkButtonStyles}
            >
              ✉ {contact.email}
            </Button>
            <Button
              component="a"
              href={`tel:${contact.phone.replace(/\s|-/g, "")}`}
              size="md"
              radius={0}
              color="violet"
              styles={linkButtonStyles}
            >
              📞 {contact.phone}
            </Button>
            <Button
              component="a"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              radius={0}
              variant="white"
              color="dark"
              styles={linkButtonStyles}
            >
              💼 LinkedIn
            </Button>
            <Button
              component="a"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              radius={0}
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
              🐙 GitHub
            </Button>
            <Button
              component="a"
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              radius={0}
              color="grape"
              styles={linkButtonStyles}
            >
              📄 Resume
            </Button>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <p className="mt-16 text-xs text-brand-ink/50">
            Aida Fitryani {new Date().getFullYear()} · All rights reserved
          </p>
        </Reveal>
      </div>
    </section>
  );
}
