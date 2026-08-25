import { createFileRoute, Link } from "@tanstack/react-router";

import aboutImage from "@/assets/about.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

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

function About() {
  const { t } = useI18n();
  const c = t.about;

  return (
    <>
      <section className="px-6 pt-44 pb-20 md:px-12 md:pt-64 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">{c.eyebrow}</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-10 max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              {c.h1}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12 md:pb-48">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[0.85fr_1fr] lg:items-start lg:gap-28">
          <RevealImage
            src={aboutImage}
            alt={c.imageAlt}
            width={1408}
            height={1760}
            imgClassName="h-auto w-full object-contain"
            className="mx-auto w-full max-w-md self-start lg:sticky lg:top-32 lg:max-w-none"
          />
          <div className="flex flex-col justify-center lg:pt-6">
            <Reveal>
              <p className="font-display text-2xl leading-[1.35] md:text-3xl lg:text-[2.5rem]">
                {c.lead}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-12 max-w-xl text-sm leading-[2] text-charcoal md:text-base">
                {c.body1}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 max-w-xl text-sm leading-[2] text-charcoal md:text-base">
                {c.body2}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-stone px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {c.facets.map((facet, index) => (
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
            <h2 className="font-display text-3xl leading-[1.18] md:text-5xl">{c.closing}</h2>
          </Reveal>
          <Reveal delay={180}>
            <Link to="/contact" className="btn-line mt-14">
              {c.cta}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
