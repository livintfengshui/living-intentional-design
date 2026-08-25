import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import consultaImage from "@/assets/service-consulta.jpg";
import auditImage from "@/assets/service-audit.jpg";
import redesignImage from "@/assets/service-redesign.jpg";
import newSpaceImage from "@/assets/service-new.jpg";
import decorImage from "@/assets/service-decor.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";
import { SERVICE_SLUGS } from "@/lib/service-details";
import { cn } from "@/lib/utils";

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
  const [hovered, setHovered] = useState<number | null>(null);
  const previewIndex = hovered ?? 0;

  return (
    <>
      <section className="px-6 pt-44 pb-14 md:px-12 md:pt-64 md:pb-16">
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

      {/* Editorial service index — every service visible at a glance */}
      <section className="px-6 pb-24 md:px-12 md:pb-36">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <Reveal>
            <ul className="border-t border-border">
              {c.items.map((service, index) => (
                <li key={service.title}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: SERVICE_SLUGS[index]! }}
                    onMouseEnter={() => setHovered(index)}
                    onFocus={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    onBlur={() => setHovered(null)}
                    className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-4 border-b border-border py-6 transition-all duration-700 md:gap-8 md:py-7 lg:hover:pl-4"
                  >
                    <span className="text-[0.6875rem] tracking-[0.26em] uppercase text-muted-foreground transition-colors duration-500 group-hover:text-clay">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-2xl leading-[1.15] md:text-3xl lg:text-[2.25rem]">
                        {service.title}
                      </span>
                      <span className="mt-3 block max-w-lg text-sm leading-[1.85] text-charcoal/75 transition-colors duration-500 group-hover:text-charcoal">
                        {service.body}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-lg text-muted-foreground transition-all duration-700 group-hover:translate-x-1 group-hover:text-clay"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Preview image, desktop only — restrained hover response */}
          <Reveal delay={160} className="hidden lg:block">
            <div className="sticky top-32">
              <div className="img-veil img-veil-in relative aspect-[4/5] w-full bg-stone">
                {images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={c.items[index]!.alt}
                    loading="lazy"
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms]",
                      index === previewIndex ? "opacity-100" : "opacity-0",
                    )}
                  />
                ))}
              </div>
              <p className="mt-6 font-display text-xl text-charcoal">
                {c.items[previewIndex]!.title}
              </p>
            </div>
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
