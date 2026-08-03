import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 pb-14 pt-24 md:px-12 md:pt-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-sans text-sm tracking-[0.5em] uppercase">Livint</p>
            <p className="mt-6 max-w-sm font-display text-2xl leading-[1.25] text-charcoal md:text-3xl">
              Living Interiors. Spaces that support the life you want to build.
            </p>
          </div>

          <nav className="flex flex-col gap-4">
            <p className="eyebrow">Navigate</p>
            <Link to="/philosophy" className="text-sm text-charcoal transition-opacity hover:opacity-60">
              Philosophy
            </Link>
            <Link to="/method" className="text-sm text-charcoal transition-opacity hover:opacity-60">
              Method
            </Link>
            <Link to="/services" className="text-sm text-charcoal transition-opacity hover:opacity-60">
              Services
            </Link>
            <Link to="/about" className="text-sm text-charcoal transition-opacity hover:opacity-60">
              About
            </Link>
            <Link to="/contact" className="text-sm text-charcoal transition-opacity hover:opacity-60">
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-4">
            <p className="eyebrow">Enquiries</p>
            <a
              href="mailto:studio@livint.com"
              className="text-sm text-charcoal transition-opacity hover:opacity-60"
            >
              studio@livint.com
            </a>
            <p className="text-sm text-muted-foreground">
              Interior Design · Functional Planning · Classical Feng Shui
            </p>
            <p className="text-sm text-muted-foreground">By appointment</p>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-3 border-t border-border pt-8 text-[0.6875rem] tracking-[0.18em] uppercase text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Livint — Living Interiors</p>
          <p>Consultancy for considered spaces</p>
        </div>
      </div>
    </footer>
  );
}
