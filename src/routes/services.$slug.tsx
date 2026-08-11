import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import consultaImage from "@/assets/service-consulta.jpg";
import auditImage from "@/assets/service-audit.jpg";
import redesignImage from "@/assets/service-redesign.jpg";
import newSpaceImage from "@/assets/service-new.jpg";
import decorImage from "@/assets/service-decor.jpg";
import { Reveal, RevealImage } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";
import {
  SERVICE_SLUGS,
  isServiceSlug,
  serviceDetails,
  type ServiceSlug,
} from "@/lib/service-details";

const images: Record<ServiceSlug, string> = {
  "livint-basic": consultaImage,
  "audit-livint": auditImage,
  "space-livint": redesignImage,
  "new-livint-space": newSpaceImage,
  "decor-curation": decorImage,
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    if (!isServiceSlug(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    if (!isServiceSlug(params.slug)) {
      return { meta: [{ title: "Service not found — LIVINT" }, { name: "robots", content: "noindex" }] };
    }
    const detail = serviceDetails.en[params.slug];
    return {
      meta: [
        { title: detail.metaTitle },
        { name: "description", content: detail.metaDescription },
        { property: "og:title", content: `${detail.title} — LIVINT` },
        { property: "og:description", content: detail.metaDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetailPage,
});

function ServiceNotFound() {
  const { t } = useI18n();
  return (
    <section className="px-6 pt-44 pb-32 md:px-12 md:pt-64">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl">{t.services.eyebrow}</h1>
        <Link to="/services" className="link-quiet mt-12 text-ink">
          {t.services.backToServices}
        </Link>
      </div>
    </section>
  );
}

function ServiceDetailPage() {
  const { slug } = Route.useLoaderData();
  const { lang, t } = useI18n();
  const detail = serviceDetails[lang][slug];
  const others = SERVICE_SLUGS.filter((s) => s !== slug);

  return (
    <>
      <section className="px-6 pt-40 pb-16 md:px-12 md:pt-56 md:pb-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <Link to="/services" className="eyebrow inline-block text-muted-foreground">
              ← {t.services.backToServices}
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-10 max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              {detail.title}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-2xl font-display text-xl leading-[1.5] text-charcoal md:text-2xl">
              {detail.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <RevealImage
            src={images[slug]}
            alt={detail.tagline}
            width={1800}
            height={1000}
            priority
            className="aspect-[16/10] w-full md:aspect-[21/9]"
          />
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-3xl">
          {detail.intro.map((para, i) => (
            <Reveal key={para} delay={i * 80}>
              <p
                className={
                  i === 0
                    ? "font-display text-2xl leading-[1.5] md:text-[1.75rem]"
                    : "mt-8 text-sm leading-[2] text-charcoal md:text-base"
                }
              >
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="flex flex-col">
        {detail.sections.map((section, index) => (
          <section
            key={section.heading ?? index}
            className={
              index % 2 === 1
                ? "bg-stone px-6 py-20 md:px-12 md:py-28"
                : "px-6 py-20 md:px-12 md:py-28"
            }
          >
            <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
              <Reveal>
                <h2 className="font-display text-2xl leading-[1.2] md:text-4xl">
                  {section.heading}
                </h2>
              </Reveal>
              <div>
                {section.paras?.map((para, i) => (
                  <Reveal key={para} delay={i * 70}>
                    <p className="mb-6 max-w-2xl text-sm leading-[2] text-charcoal md:text-base">
                      {para}
                    </p>
                  </Reveal>
                ))}

                {section.list ? (
                  <ul className="mt-2 max-w-2xl">
                    {section.list.map((item, i) => (
                      <Reveal key={item} delay={i * 50}>
                        <li className="border-t border-border/60 py-4 text-sm leading-[1.8] text-charcoal first:border-t-0 md:text-base">
                          {item}
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                ) : null}

                {section.steps ? (
                  <ol className="mt-2 max-w-2xl">
                    {section.steps.map((step, i) => (
                      <Reveal key={step.title} delay={i * 70}>
                        <li className="border-t border-border/60 py-8 first:border-t-0 first:pt-0">
                          <p className="text-[0.6875rem] tracking-[0.26em] uppercase text-muted-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-4 font-display text-xl md:text-2xl">{step.title}</h3>
                          <p className="mt-4 text-sm leading-[2] text-charcoal md:text-base">
                            {step.body}
                          </p>
                        </li>
                      </Reveal>
                    ))}
                  </ol>
                ) : null}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="px-6 py-32 md:px-12 md:py-52">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">{detail.title}</p>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="mt-10 font-display text-3xl leading-[1.18] md:text-5xl">
              {detail.signature}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <Link to="/contact" className="btn-line mt-14">
              {t.services.enquire}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">{t.services.otherServices}</p>
          </Reveal>
          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other, i) => (
              <Reveal key={other} delay={i * 80}>
                <Link
                  to="/services/$slug"
                  params={{ slug: other }}
                  className="group block border-t border-border/60 py-8 pr-6 transition-opacity hover:opacity-60"
                >
                  <h3 className="font-display text-xl leading-[1.25] md:text-2xl">
                    {serviceDetails[lang][other].title}
                  </h3>
                  <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">
                    {serviceDetails[lang][other].tagline}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
