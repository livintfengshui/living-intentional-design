import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
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

const services = [
  "Consulta Living",
  "Audit LIVINT",
  "Space Redesign",
  "New Space Design",
  "Decor & Curation",
  "Not sure yet",
];

const fieldClass =
  "w-full border-0 border-b border-input bg-transparent pb-4 pt-2 text-base text-ink placeholder:text-muted-foreground/70 focus:border-ink focus:outline-none transition-colors duration-500";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="px-6 pt-44 pb-32 md:px-12 md:pt-64 md:pb-52">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow">Contact</p>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="mt-10 max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Tell us about the space, and the life you want it to hold.
          </h1>
        </Reveal>

        <div className="mt-24 grid gap-20 lg:grid-cols-[1fr_1.1fr] lg:gap-32">
          <Reveal delay={200}>
            <div className="flex flex-col gap-12">
              <div>
                <p className="eyebrow">Enquiries</p>
                <a
                  href="mailto:studio@livint.com"
                  className="mt-5 block font-display text-2xl md:text-3xl"
                >
                  studio@livint.com
                </a>
              </div>
              <div>
                <p className="eyebrow">Consultations</p>
                <p className="mt-5 max-w-sm text-sm leading-[2] text-charcoal">
                  By appointment, on site or remotely. Projects are accepted selectively to
                  protect the depth of each engagement.
                </p>
              </div>
              <div>
                <p className="eyebrow">Disciplines</p>
                <p className="mt-5 max-w-sm text-sm leading-[2] text-charcoal">
                  Interior Design · Functional Space Planning · Classical Feng Shui
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={320}>
            {sent ? (
              <div className="border-t border-border pt-16">
                <p className="font-display text-3xl leading-[1.25] md:text-4xl">
                  Thank you. Your enquiry has been noted — we will reply personally.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-12"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-12 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow">
                      Name
                    </label>
                    <input id="name" name="name" required className={`${fieldClass} mt-5`} />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow">
                      Email
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
                    Location of the space
                  </label>
                  <input id="location" name="location" className={`${fieldClass} mt-5`} />
                </div>

                <div>
                  <label htmlFor="service" className="eyebrow">
                    Service of interest
                  </label>
                  <select id="service" name="service" className={`${fieldClass} mt-5`}>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="eyebrow">
                    About the project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${fieldClass} mt-5 resize-none`}
                  />
                </div>

                <button type="submit" className="btn-line self-start">
                  Send enquiry
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
