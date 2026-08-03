import { createFileRoute, Link } from "@tanstack/react-router";

import aboutImage from "@/assets/about.jpg";
import { Reveal, RevealImage } from "@/components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LIVINT | Interior Architecture & Analysis" },
      {
        name: "description",
        content:
          "LIVINT combines analytical thinking, financial experience, Interior Design and Classical Feng Shui to create spaces that perform as beautifully as they look.",
      },
      { property: "og:title", content: "About — LIVINT" },
      {
        property: "og:description",
        content:
          "Analytical thinking, financial rigour, Interior Design and Classical Feng Shui, brought into a single practice.",
      },
    ],
  }),
  component: About,
});

const facets = [
  { label: "Analysis", body: "Every project begins as a set of measurable conditions." },
  { label: "Value", body: "Financial discipline applied to spatial decisions and long-term worth." },
  { label: "Design", body: "Interior architecture resolved through proportion, light and material." },
  { label: "Precision", body: "Classical Feng Shui used as a technical instrument, never a ritual." },
];

function About() {
  return (
    <>
      <section className="px-6 pt-44 pb-20 md:px-12 md:pt-64 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">About</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-10 max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              A practice built at the intersection of analysis and design.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12 md:pb-48">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[0.9fr_1fr] lg:gap-28">
          <RevealImage
            src={aboutImage}
            alt="Quiet study with architectural drawings, a stone weight and a ceramic vessel"
            width={1408}
            height={1760}
            className="aspect-[4/5] w-full"
          />
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="font-display text-2xl leading-[1.35] md:text-3xl lg:text-[2.5rem]">
                LIVINT was founded on a simple observation: the spaces that change people's
                lives are rarely the most decorated ones. They are the most considered.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-12 max-w-xl text-sm leading-[2] text-charcoal md:text-base">
                The founder's background sits between two disciplines that rarely meet — years
                of financial and analytical work, where decisions must hold up to scrutiny, and
                a formal practice in Interior Design and Classical Feng Shui, where a plan must
                hold up to daily life. LIVINT is the result of refusing to choose between them.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 max-w-xl text-sm leading-[2] text-charcoal md:text-base">
                Projects are taken selectively, with direct involvement from first reading to
                final placement. The intention is never a signature look, but a space that
                performs as beautifully as it looks — for the specific people who live in it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-stone px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {facets.map((facet, index) => (
            <Reveal key={facet.label} delay={index * 120}>
              <div className="border-t border-ink/12 pt-8">
                <p className="eyebrow">{facet.label}</p>
                <p className="mt-6 text-sm leading-[1.95] text-charcoal">{facet.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 md:py-52">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-[1.18] md:text-5xl">
              Work with LIVINT on a space that deserves the attention.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <Link to="/contact" className="btn-line mt-14">
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
