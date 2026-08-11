import { createFileRoute, Link } from "@tanstack/react-router";

import consultaImage from "@/assets/service-consulta.jpg";
import auditImage from "@/assets/service-audit.jpg";
import redesignImage from "@/assets/service-redesign.jpg";
import newSpaceImage from "@/assets/service-new.jpg";
import decorImage from "@/assets/service-decor.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";
import { SERVICE_SLUGS } from "@/lib/service-details";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — LIVINT | Interior Consultant & Space Planning" },
      {
        name: "description",
        content:
          "LIVINT Basic, Audit LIVINT, Space LIVINT, New LIVINT Space and Decor & Curation by LIVINT — five ways to work with LIVINT on luxury homes and premium spaces.",
      },
      { property: "og:title", content: "Services — LIVINT" },
      {
        property: "og:description",
        content:
          "Five ways to work with LIVINT: consultation, technical audit, redesign, new space design and curation.",
      },
    ],
  }),
  component: Services,
});

const images = [consultaImage, auditImage, redesignImage, newSpaceImage, decorImage] as const;

function Services() {
  const { t } = useI18n();
  const c = t.services;

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

      <div className="flex flex-col">
        {c.items.map((service, index) => (
          <section
            key={service.title}
            className={
              index % 2 === 1
                ? "bg-stone px-6 py-24 md:px-12 md:py-36"
                : "px-6 py-24 md:px-12 md:py-36"
            }
          >
            <div className="mx-auto grid max-w-[1600px] items-center gap-12 md:gap-20 lg:grid-cols-2">
              <RevealImage
                src={images[index]!}
                alt={service.alt}
                width={1400}
                height={1000}
                className={`aspect-[7/5] w-full ${index % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div className={index % 2 === 1 ? "lg:order-1 lg:pr-12" : "lg:pl-12"}>
                <Reveal>
                  <p className="text-[0.6875rem] tracking-[0.26em] uppercase text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h2 className="mt-6 font-display text-4xl leading-[1.1] md:text-5xl lg:text-[3.5rem]">
                    {service.title}
                  </h2>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-8 max-w-md text-sm leading-[2] text-charcoal md:text-base">
                    {service.body}
                  </p>
                </Reveal>
                <Reveal delay={320}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: SERVICE_SLUGS[index]! }}
                    className="link-quiet mt-12 text-ink"
                  >
                    {c.learnMore}
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

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
