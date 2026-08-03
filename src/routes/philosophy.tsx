import { createFileRoute, Link } from "@tanstack/react-router";

import philosophyImage from "@/assets/philosophy.jpg";
import { Reveal, RevealImage } from "@/components/reveal";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Philosophy — LIVINT | Living Interiors" },
      {
        name: "description",
        content:
          "Design influences behaviour. LIVINT's philosophy on living interiors: how environment, functionality and intention quietly shape everyday life.",
      },
      { property: "og:title", content: "Philosophy — LIVINT" },
      {
        property: "og:description",
        content:
          "A beautiful space is not always a supportive one. The thinking behind LIVINT's approach to living interiors.",
      },
    ],
  }),
  component: Philosophy,
});

const statements = [
  {
    line: "A beautiful space is not always a supportive one.",
    note: "Aesthetics can be resolved while daily life remains obstructed. We look for both.",
  },
  {
    line: "Design influences behaviour.",
    note: "Where you sit, how you enter, what you see first — each detail rehearses a habit.",
  },
  {
    line: "Every decision shapes experience.",
    note: "A door width, a ceiling height, a material temperature. Nothing is neutral.",
  },
  {
    line: "Living well begins with living intentionally.",
    note: "We design from the life a client is building, not from a catalogue of styles.",
  },
  {
    line: "Your environment quietly shapes your everyday life.",
    note: "The work of a good interior is invisible: it simply makes the right thing easier.",
  },
];

function Philosophy() {
  return (
    <>
      <section className="px-6 pt-44 pb-24 md:px-12 md:pt-64 md:pb-32">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">Philosophy</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-10 max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              We do not design rooms. We design the conditions of everyday life.
            </h1>
          </Reveal>
        </div>
      </section>

      <div className="flex flex-col">
        {statements.map((item, index) => (
          <section
            key={item.line}
            className={
              index % 2 === 1
                ? "bg-stone px-6 py-32 md:px-12 md:py-56"
                : "px-6 py-32 md:px-12 md:py-56"
            }
          >
            <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-[1fr_auto] md:items-end">
              <Reveal>
                <p className="max-w-4xl font-display text-3xl leading-[1.16] sm:text-4xl md:text-5xl lg:text-[4rem]">
                  {item.line}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="max-w-xs text-sm leading-[2] text-charcoal">{item.note}</p>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="px-6 pb-32 md:px-12 md:pb-52">
        <RevealImage
          src={philosophyImage}
          alt="Light and shadow across a stone floor in an empty interior"
          width={1408}
          height={1760}
          className="mx-auto h-[60vh] w-full max-w-[1600px] md:h-[90vh]"
        />
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <Reveal>
            <p className="font-display text-2xl leading-[1.4] text-charcoal md:text-3xl">
              Classical Feng Shui, in our practice, is a technical reading of orientation,
              time and space — never a belief system.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/method" className="link-quiet mt-14 text-ink">
              See the method
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
