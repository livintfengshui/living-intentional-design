import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/warm-hero.jpg";
import philosophyImage from "@/assets/warm-detail.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LIVINT — Living Interiors | Luxury Interior Design & Classical Feng Shui" },
      {
        name: "description",
        content:
          "LIVINT designs spaces that support the life you want to build — luxury interior design, functional space planning and Classical Feng Shui for premium homes.",
      },
      { property: "og:title", content: "LIVINT — Living Interiors" },
      {
        property: "og:description",
        content:
          "Interior Design, Functional Planning and Classical Feng Shui for spaces that are coherent, beautiful and deeply aligned with the people who inhabit them.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  const c = t.home;

  return (
    <>
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt={c.heroAlt}
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />

        <div className="relative flex h-full flex-col justify-end px-6 pb-24 md:px-12 md:pb-28">
          <div className="mx-auto w-full max-w-[1600px]">
            <Reveal delay={200}>
              <p className="eyebrow text-ivory/70">{c.eyebrow}</p>
            </Reveal>
            <Reveal delay={450}>
              <h1 className="mt-8 max-w-5xl font-display text-[2.75rem] leading-[1.04] text-ivory sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                {c.h1}
              </h1>
            </Reveal>
            <Reveal delay={700}>
              <p className="mt-10 max-w-xl text-sm leading-[1.9] text-ivory/80 md:text-base">
                {c.lead}
              </p>
            </Reveal>
            <Reveal delay={900}>
              <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link to="/philosophy" className="btn-line-light">
                  {c.cta1}
                </Link>
                <Link to="/services" className="link-quiet text-ivory/80">
                  {c.cta2}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="scroll-line" aria-hidden="true" />
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 md:py-52">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">{c.sectionEyebrow}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-10 max-w-4xl font-display text-3xl leading-[1.18] sm:text-4xl md:text-5xl lg:text-[3.75rem]">
              {c.sectionH2}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-14 max-w-xl text-sm leading-[2] text-charcoal md:ml-auto md:text-base">
              {c.sectionBody}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid items-stretch md:grid-cols-2">
        <RevealImage
          src={philosophyImage}
          alt={c.philosophyAlt}
          width={1408}
          height={1760}
          className="h-[70vh] md:h-auto md:min-h-[86vh]"
        />
        <div className="flex items-center bg-stone px-6 py-24 md:px-16 lg:px-24">
          <div className="w-full">
            <Reveal>
              <p className="eyebrow">{c.disciplinesEyebrow}</p>
            </Reveal>
            <div className="mt-16 flex flex-col">
              {c.disciplines.map((item, index) => (
                <Reveal key={item.title} delay={index * 140}>
                  <div className="border-t border-ink/12 py-10">
                    <p className="text-[0.6875rem] tracking-[0.26em] uppercase text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 font-display text-3xl md:text-4xl">{item.title}</h3>
                    <p className="mt-5 max-w-md text-sm leading-[1.95] text-charcoal">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={420}>
              <Link to="/method" className="link-quiet mt-14 text-ink">
                {c.methodLink}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-36 md:px-12 md:py-56">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">{c.beginEyebrow}</p>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="mt-10 font-display text-4xl leading-[1.12] sm:text-5xl md:text-6xl">
              {c.beginH2}
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <Link to="/contact" className="btn-line mt-16">
              {c.beginCta}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
