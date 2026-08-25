import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type SVGProps } from "react";

import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

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

const stepIcons = [
  IconObserve,
  IconUnderstand,
  IconDesign,
  IconBalance,
  IconMaterialize,
] as const;

function Method() {
  const { t } = useI18n();
  const c = t.method;
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="px-6 pt-44 pb-16 md:px-12 md:pt-64 md:pb-24">
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
        <div className="mx-auto max-w-[1600px]">
          {/* Desktop / tablet: horizontal timeline */}
          <Reveal className="hidden md:block" delay={200}>
            <div className="relative">
              <div className="absolute inset-x-0 top-[5px] h-px bg-ink/15" aria-hidden="true" />
              <div className="relative grid grid-cols-5 gap-8 lg:gap-12">
                {c.steps.map((step, index) => {
                  const Icon = stepIcons[index]!;
                  const isActive = index === active;
                  return (
                    <button
                      key={step.title}
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      aria-pressed={isActive}
                      className="group cursor-pointer text-left"
                    >
                      <span
                        className={cn(
                          "block h-[11px] w-[11px] rounded-full border transition-colors duration-500",
                          isActive
                            ? "border-clay bg-clay"
                            : "border-ink/30 bg-background group-hover:border-clay",
                        )}
                      />
                      <span className="mt-8 block text-[0.6875rem] tracking-[0.26em] uppercase text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        className={cn(
                          "mt-6 h-10 w-10 transition-colors duration-500",
                          isActive ? "text-clay" : "text-charcoal/60 group-hover:text-charcoal",
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={cn(
                          "mt-5 block font-display text-2xl leading-[1.15] transition-colors duration-500 lg:text-[1.75rem]",
                          isActive ? "text-ink" : "text-ink/45 group-hover:text-ink/80",
                        )}
                      >
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-16 max-w-2xl border-t border-border pt-10">
              <p
                key={active}
                className="animate-in fade-in slide-in-from-bottom-2 text-sm leading-[2] text-charcoal duration-700 md:text-base"
              >
                {c.steps[active]!.body}
              </p>
            </div>
          </Reveal>

          {/* Mobile: compact vertical sequence */}
          <Reveal className="md:hidden" delay={160}>
            <ol className="border-t border-border">
              {c.steps.map((step, index) => {
                const Icon = stepIcons[index]!;
                const isActive = index === active;
                return (
                  <li key={step.title} className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      aria-expanded={isActive}
                      className="flex w-full items-center gap-5 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "text-[0.6875rem] tracking-[0.26em] uppercase transition-colors duration-500",
                          isActive ? "text-clay" : "text-muted-foreground",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        className={cn(
                          "h-7 w-7 shrink-0 transition-colors duration-500",
                          isActive ? "text-clay" : "text-charcoal/60",
                        )}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1 font-display text-2xl leading-[1.15]">
                        {step.title}
                      </span>
                    </button>
                    {isActive ? (
                      <p className="animate-in fade-in slide-in-from-top-1 pb-7 pl-[4.5rem] text-sm leading-[1.95] text-charcoal duration-500">
                        {step.body}
                      </p>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-stone px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-[1.18] md:text-5xl">{c.closing}</h2>
          </Reveal>
          <Reveal delay={180}>
            <Link to="/services" className="btn-line mt-14">
              {c.cta}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
