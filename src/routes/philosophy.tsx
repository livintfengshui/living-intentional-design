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
      <section className="px-6 pt-44 pb-16 md:px-12 md:pt-64 md:pb-20">
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

      <section className="px-6 pb-28 md:px-12 md:pb-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid border-t border-border lg:grid-cols-5 lg:border-b">
            {c.statements.map((item, index) => (
              <Reveal key={item.line} delay={index * 90} className="h-full">
                <div className="group h-full border-b border-border py-8 transition-colors duration-700 hover:bg-stone/50 lg:border-b-0 lg:border-l lg:px-8 lg:py-10 lg:first:border-l-0 lg:first:pl-0">
                  <p className="text-[0.6875rem] tracking-[0.26em] uppercase text-muted-foreground transition-colors duration-700 group-hover:text-clay">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-6 font-display text-xl leading-[1.3] md:text-2xl">
                    {item.line}
                  </p>
                  <p className="mt-6 text-sm leading-[1.9] text-charcoal/80 transition-colors duration-700 group-hover:text-charcoal">
                    {item.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
