import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero.jpg";
import philosophyImage from "@/assets/philosophy.jpg";
import { Reveal, RevealImage } from "@/components/reveal";

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

const disciplines = [
  {
    title: "Interior Design",
    body: "Material, light and proportion composed with restraint — interiors built to age well rather than to trend.",
  },
  {
    title: "Functional Planning",
    body: "Circulation, thresholds and daily routines mapped before a single finish is chosen.",
  },
  {
    title: "Classical Feng Shui",
    body: "A technical analytical system for orientation, time and space — read as data, never as decoration.",
  },
];

function Home() {
  return (
    <>
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Minimal travertine and oak interior filled with soft natural light"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />

        <div className="relative flex h-full flex-col justify-end px-6 pb-24 md:px-12 md:pb-28">
          <div className="mx-auto w-full max-w-[1600px]">
            <Reveal delay={200}>
              <p className="eyebrow text-ivory/70">Living Interiors</p>
            </Reveal>
            <Reveal delay={450}>
              <h1 className="mt-8 max-w-5xl font-display text-[2.75rem] leading-[1.04] text-ivory sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Design spaces that support the life you want to build.
              </h1>
            </Reveal>
            <Reveal delay={700}>
              <p className="mt-10 max-w-xl text-sm leading-[1.9] text-ivory/80 md:text-base">
                Through Interior Design, Functional Planning and Classical Feng Shui, LIVINT
                creates spaces that are coherent, beautiful and deeply aligned with the people
                who inhabit them.
              </p>
            </Reveal>
            <Reveal delay={900}>
              <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Link to="/philosophy" className="btn-line-light">
                  Discover LIVINT
                </Link>
                <Link to="/services" className="link-quiet text-ivory/80">
                  Explore our services
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
            <p className="eyebrow">A new category</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-10 max-w-4xl font-display text-3xl leading-[1.18] sm:text-4xl md:text-5xl lg:text-[3.75rem]">
              A space should not only look beautiful. It should support the life you want to
              live.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-14 max-w-xl text-sm leading-[2] text-charcoal md:ml-auto md:text-base">
              LIVINT is not a decoration studio and not a Feng Shui practice. It is a
              consultancy built on design thinking, architecture, human behaviour and
              functionality — where Classical Feng Shui is applied as a precise analytical
              system.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid items-stretch md:grid-cols-2">
        <RevealImage
          src={philosophyImage}
          alt="Daylight moving across a plaster wall and stone threshold"
          width={1408}
          height={1760}
          className="h-[70vh] md:h-auto md:min-h-[86vh]"
        />
        <div className="flex items-center bg-stone px-6 py-24 md:px-16 lg:px-24">
          <div className="w-full">
            <Reveal>
              <p className="eyebrow">Three disciplines, one method</p>
            </Reveal>
            <div className="mt-16 flex flex-col">
              {disciplines.map((item, index) => (
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
                The LIVINT Method
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-36 md:px-12 md:py-56">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow">Begin</p>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="mt-10 font-display text-4xl leading-[1.12] sm:text-5xl md:text-6xl">
              Every space is already influencing the way you live.
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <Link to="/contact" className="btn-line mt-16">
              Request a consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
