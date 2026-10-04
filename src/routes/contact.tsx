import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { Reveal } from "@/components/reveal";
import { useI18n } from "@/lib/i18n";
import { isServiceSlug, SERVICE_SLUGS, type ServiceSlug } from "@/lib/service-details";
import { CONTACT_EMAIL } from "@/lib/translations";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: ServiceSlug } => {
    const raw = search["service"];
    return typeof raw === "string" && isServiceSlug(raw) ? { service: raw } : {};
  },
  head: () => ({
    meta: [
      { title: "Contact — LIVINT | Enquiries & Consultations" },
      {
        name: "description",
        content:
          "Enquire about an interior design, space planning or Classical Feng Shui project with LIVINT. Consultations by appointment.",
      },
      { property: "og:title", content: "Contact — LIVINT" },
      {
        property: "og:description",
        content: "Tell us about your space. Consultations and projects by appointment.",
      },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "w-full border-0 border-b border-input bg-transparent pb-4 pt-2 text-base text-ink placeholder:text-muted-foreground/70 focus:border-ink focus:outline-none transition-colors duration-500";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "6c74e1cd-a0cb-42b6-90d2-b778e31a8b2f";

function Contact() {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const { t } = useI18n();
  const c = t.contact;
  const { service: originatingService } = Route.useSearch();
  const services = [...t.services.items.map((s) => s.title), c.notSure];

  const originIndex = originatingService ? SERVICE_SLUGS.indexOf(originatingService) : -1;
  const [selectedService, setSelectedService] = useState(
    originIndex >= 0 ? (t.services.items[originIndex]?.title ?? "") : "",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const payload = new FormData(form);
      payload.append("access_key", WEB3FORMS_ACCESS_KEY);
      payload.append("subject", "Nueva consulta desde LIVINT");
      payload.append("from_name", "LIVINT — Contacto");
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }
      setSent(true);
      setStatus("idle");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="px-6 pt-44 pb-32 md:px-12 md:pt-64 md:pb-52">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow">{c.eyebrow}</p>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="mt-10 max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            {c.h1}
          </h1>
        </Reveal>

        <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_1.1fr] lg:gap-32">
          <Reveal delay={200}>
            <div className="flex flex-col gap-12">
              <div>
                <p className="eyebrow">{c.enquiries}</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-5 block font-display text-2xl md:text-3xl"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="eyebrow">{c.consultations}</p>
                <p className="mt-5 max-w-sm text-sm leading-[2] text-charcoal">
                  {c.consultationsBody}
                </p>
              </div>
              <div>
                <p className="eyebrow">{c.disciplines}</p>
                <p className="mt-5 max-w-sm text-sm leading-[2] text-charcoal">
                  {c.disciplinesBody}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={320}>
            {sent ? (
              <div className="border-t border-border pt-16">
                <p className="font-display text-3xl leading-[1.25] md:text-4xl">{c.sent}</p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-12"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-12 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow">
                      {c.name}
                    </label>
                    <input id="name" name="name" required className={`${fieldClass} mt-5`} />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow">
                      {c.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={`${fieldClass} mt-5`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="eyebrow">
                    {c.location}
                  </label>
                  <input id="location" name="location" className={`${fieldClass} mt-5`} />
                </div>

                <div>
                  <label htmlFor="service" className="eyebrow">
                    {c.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                    className={cn(
                      `${fieldClass} mt-5`,
                      selectedService === "" && "text-muted-foreground/70",
                    )}
                  >
                    <option value="" disabled>
                      {c.selectService}
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="eyebrow">
                    {c.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${fieldClass} mt-5 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-line self-start disabled:opacity-60"
                >
                  {status === "sending" ? c.sending : c.submit}
                </button>
                {status === "error" && (
                  <p className="text-sm text-clay" role="alert">
                    {c.error}
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
