import { createFileRoute, Link } from "@tanstack/react-router";

import warmHero from "@/assets/warm-hero.jpg";
import warmDetail from "@/assets/warm-detail.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/translations";
import { SERVICE_SLUGS, serviceDetails } from "@/lib/service-details";

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [
      { title: "LIVINT — Warm Design Preview" },
      {
        name: "description",
        content:
          "A warmer, more inviting design direction for LIVINT: the same considered luxury, in a softer and more welcoming register.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "LIVINT — Warm Design Preview" },
      {
        property: "og:description",
        content: "An alternative, warmer visual direction for the LIVINT website.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WarmPreview,
});

function WarmPreview() {
  const { t, lang } = useI18n();
  const details = serviceDetails[lang];

  return (
    <div className="theme-warm">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={warmHero}
          alt={t.home.heroAlt}
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <p className="eyebrow text-ivory/80">{t.home.eyebrow}</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] text-ivory md:text-6xl">
              {t.home.h1}
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ivory/85 md:text-base">
              {t.home.lead}
            </p>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/services" className="btn-warm">
                {t.home.cta2}
              </Link>
              <Link
                to="/philosophy"
                className="btn-warm-outline border-ivory/60 text-ivory hover:bg-ivory/10"
              >
                {t.home.cta1}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro — warm editorial split */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-clay">{t.home.sectionEyebrow}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 text-3xl leading-[1.1] md:text-[2.75rem]">
                {t.home.sectionH2}
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 max-w-xl text-sm leading-loose text-muted-foreground md:text-base">
                {t.home.sectionBody}
              </p>
            </Reveal>
            <Reveal delay={320}>
              <Link to="/method" className="link-quiet mt-10 inline-block text-clay">
                {t.home.methodLink}
              </Link>
            </Reveal>
          </div>
          <RevealImage
            src={warmDetail}
            alt={t.home.philosophyAlt}
            width={1200}
            height={1504}
            className="aspect-[4/5] rounded-[1.75rem]"
          />
        </div>
      </section>

      {/* Three disciplines — soft cards */}
      <section className="bg-linen/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-clay">{t.home.disciplinesEyebrow}</p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.home.disciplines.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <article className="warm-card h-full p-9">
                  <span className="font-sans text-xs tracking-[0.28em] text-clay">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-loose text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services — warm list */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-clay">{t.services.eyebrow}</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-2xl text-3xl leading-[1.1] md:text-[2.5rem]">
            {t.services.h1}
          </h2>
        </Reveal>
        <div className="mt-14 divide-y divide-border">
          {SERVICE_SLUGS.map((slug, i) => {
            const service = details[slug];
            return (
              <Reveal key={slug} delay={i * 90}>
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  className="group flex flex-col gap-3 py-8 md:flex-row md:items-baseline md:gap-12"
                >
                  <h3 className="text-2xl md:w-2/5 md:text-[1.75rem]">{service.title}</h3>
                  <p className="flex-1 text-sm leading-loose text-muted-foreground">
                    {t.services.items[i]?.body}
                  </p>
                  <span className="font-sans text-[0.6875rem] uppercase tracking-[0.24em] text-clay transition-transform duration-700 group-hover:translate-x-1">
                    {t.services.learnMore ?? "More info"}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Closing invitation */}
      <section className="bg-sand/35 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow text-clay">{t.home.beginEyebrow}</p>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="mt-6 text-3xl leading-[1.1] md:text-[2.75rem]">
              {t.home.beginH2}
            </h2>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-warm">
                {t.home.beginCta}
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-warm-outline">
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
