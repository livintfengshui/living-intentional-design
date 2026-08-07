import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/reveal";

export function LegalPage({ title, body, back }: { title: string; body: string; back: string }) {
  return (
    <section className="px-6 pt-44 pb-32 md:px-12 md:pt-64 md:pb-52">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow">Livint</p>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="mt-10 font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-12 text-sm leading-[2] text-charcoal md:text-base">{body}</p>
        </Reveal>
        <Reveal delay={320}>
          <Link to="/" className="link-quiet mt-14 text-ink">
            {back}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
