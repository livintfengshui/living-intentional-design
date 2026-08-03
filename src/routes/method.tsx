import { createFileRoute, Link } from "@tanstack/react-router";
import type { SVGProps } from "react";

import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/method")({
  head: () => ({
    meta: [
      { title: "The LIVINT Method — Space Planning & Interior Architecture" },
      {
        name: "description",
        content:
          "Observe, Understand, Design, Balance, Materialize — the five stages of the LIVINT Method for functional space planning and interior architecture.",
      },
      { property: "og:title", content: "The LIVINT Method" },
      {
        property: "og:description",
        content:
          "Five precise stages that turn observation of a space and its inhabitants into a coherent, functional interior.",
      },
    ],
  }),
  component: Method,
});

function IconObserve(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="0.75" {...props}>
      <circle cx="24" cy="24" r="15" />
      <circle cx="24" cy="24" r="4" />
    </svg>
  );
}

function IconUnderstand(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="0.75" {...props}>
      <path d="M8 34c6-16 10-20 16-20s10 4 16 20" />
      <path d="M8 34h32" />
    </svg>
  );
}

function IconDesign(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="0.75" {...props}>
      <rect x="8" y="8" width="32" height="32" />
      <path d="M8 20h32M20 20v20" />
    </svg>
  );
}

function IconBalance(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="0.75" {...props}>
      <path d="M24 6v36" />
      <path d="M10 18h28" />
      <path d="M10 18l-4 10h8zM38 18l-4 10h8z" />
    </svg>
  );
}

function IconMaterialize(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="0.75" {...props}>
      <path d="M24 8l16 9v14l-16 9-16-9V17z" />
      <path d="M24 26l16-9M24 26v14M24 26L8 17" />
    </svg>
  );
}

const steps = [
  {
    title: "Observe",
    Icon: IconObserve,
    body: "We read the space as it is: orientation, light, structure, circulation, acoustics and the traces of how it is actually used.",
  },
  {
    title: "Understand",
    Icon: IconUnderstand,
    body: "We map the people. Routines, work, rest, hosting, ambitions. The brief emerges from behaviour, not preference boards.",
  },
  {
    title: "Design",
    Icon: IconDesign,
    body: "Plans, thresholds and proportions are resolved first. Function becomes the architecture of the interior.",
  },
  {
    title: "Balance",
    Icon: IconBalance,
    body: "Classical Feng Shui is applied as a technical layer — orientation and time analysis calibrated against the plan.",
  },
  {
    title: "Materialize",
    Icon: IconMaterialize,
    body: "Materials, lighting, joinery and furniture are specified and executed with the same precision as the plan.",
  },
];

function Method() {
  return (
    <>
      <section className="px-6 pt-44 pb-20 md:px-12 md:pt-64 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">The LIVINT Method</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-10 max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Five stages, in sequence. Nothing decorative before something is understood.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12 md:pb-52">
        <div className="mx-auto max-w-[1600px]">
          {steps.map(({ title, body, Icon }, index) => (
            <Reveal key={title} delay={index * 90}>
              <div className="grid gap-8 border-t border-border py-16 md:grid-cols-[auto_1fr_1.2fr] md:gap-16 md:py-24">
                <div className="flex items-start gap-8">
                  <p className="text-[0.6875rem] tracking-[0.26em] uppercase text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <Icon className="h-10 w-10 shrink-0 text-charcoal" aria-hidden="true" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem]">{title}</h2>
                <p className="max-w-lg text-sm leading-[2] text-charcoal md:text-base">{body}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      <section className="bg-stone px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-[1.18] md:text-5xl">
              The method adapts to the scale of the project, never to the shortcut.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <Link to="/services" className="btn-line mt-14">
              Explore our services
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
