import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import type { SVGProps } from "react";

import { useI18n } from "@/lib/i18n";
import { CONTACT_EMAIL, SOCIALS } from "@/lib/translations";

function PinterestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9.2 20c-.5-1.6.1-3.4.6-5.2.5-1.9 1-3.9 1-3.9s-.3-.6-.3-1.5c0-1.4.8-2.4 1.9-2.4.9 0 1.4.7 1.4 1.5 0 1-.6 2.4-.9 3.7-.3 1.1.6 2 1.7 2 2 0 3.3-2.5 3.3-5 0-2.1-1.5-3.7-4.1-3.7-3 0-4.8 2.2-4.8 4.6 0 .9.3 1.6.7 2.1" />
    </svg>
  );
}

const icons = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
  Pinterest: PinterestIcon,
} as const;

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-background px-6 pb-14 pt-24 md:px-12 md:pt-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-sans text-sm tracking-[0.5em] uppercase">Livint</p>
            <p className="mt-6 max-w-sm font-display text-2xl leading-[1.25] text-charcoal md:text-3xl">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-4">
            <p className="eyebrow">{t.footer.navigate}</p>
            <Link to="/philosophy" className="text-sm text-charcoal transition-opacity hover:opacity-60">
              {t.nav.philosophy}
            </Link>
            <Link to="/method" className="text-sm text-charcoal transition-opacity hover:opacity-60">
              {t.nav.method}
            </Link>
            <Link to="/services" className="text-sm text-charcoal transition-opacity hover:opacity-60">
              {t.nav.services}
            </Link>
            <Link to="/about" className="text-sm text-charcoal transition-opacity hover:opacity-60">
              {t.nav.about}
            </Link>
            <Link to="/contact" className="text-sm text-charcoal transition-opacity hover:opacity-60">
              {t.nav.contact}
            </Link>
          </nav>

          <div className="flex flex-col gap-4">
            <p className="eyebrow">{t.footer.enquiries}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-charcoal transition-opacity hover:opacity-60"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="text-sm text-muted-foreground">{t.footer.disciplines}</p>
            <p className="text-sm text-muted-foreground">{t.footer.appointment}</p>

            <div className="mt-6 flex items-center gap-6">
              {SOCIALS.map((social) => {
                const Icon = icons[social.name];
                if (!social.href) {
                  return (
                    <span
                      key={social.name}
                      aria-label={`${social.name} — ${t.footer.soon}`}
                      title={`${social.name} — ${t.footer.soon}`}
                      className="text-muted-foreground/40"
                    >
                      <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} />
                    </span>
                  );
                }
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${social.name} ${social.handle ?? ""}`.trim()}
                    className="text-charcoal transition-opacity hover:opacity-60"
                  >
                    <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-border pt-8 text-[0.6875rem] tracking-[0.18em] uppercase text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link to="/privacy-policy" className="transition-opacity hover:opacity-60">
              {t.footer.privacy}
            </Link>
            <Link to="/legal-notice" className="transition-opacity hover:opacity-60">
              {t.footer.legal}
            </Link>
            <Link to="/cookies-policy" className="transition-opacity hover:opacity-60">
              {t.footer.cookies}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
