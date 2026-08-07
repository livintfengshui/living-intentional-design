import { createFileRoute, Link } from "@tanstack/react-router";

import philosophyImage from "@/assets/philosophy.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

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

function Philosophy() {
  const { t } = useI18n();
  const c = t.philosophy;

  return (
    <>
      <section className="px-6 pt-44 pb-24 md:px-12 md:pt-64 md:pb-32">
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

      <div className="flex flex-col">
        {c.statements.map((item, index) => (
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
          alt={c.imageAlt}
          width={1408}
          height={1760}
          className="mx-auto h-[60vh] w-full max-w-[1600px] md:h-[90vh]"
        />
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <Reveal>
            <p className="font-display text-2xl leading-[1.4] text-charcoal md:text-3xl">
              {c.closing}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/method" className="link-quiet mt-14 text-ink">
              {c.link}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
