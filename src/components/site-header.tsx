import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();

  const nav = [
    { to: "/philosophy", label: t.nav.philosophy },
    { to: "/method", label: t.nav.method },
    { to: "/services", label: t.nav.services },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const overlay = isHome && !scrolled;

  const LangSwitch = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-2 font-sans text-[0.6875rem] tracking-[0.24em] uppercase", className)}>
      {(["en", "es"] as const).map((code, index) => (
        <span key={code} className="flex items-center gap-2">
          {index === 1 && <span className="opacity-30">/</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={cn(
              "transition-opacity duration-500 hover:opacity-100",
              lang === code ? "opacity-100" : "opacity-40",
            )}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        overlay
          ? "border-b border-transparent text-ivory"
          : "border-b border-border bg-background/85 text-ink backdrop-blur-xl",
      )}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-6 md:px-12 md:py-8">
        <Link
          to="/"
          className="min-w-0 font-sans text-sm tracking-[0.5em] uppercase transition-opacity duration-500 hover:opacity-60"
          aria-label="LIVINT home"
        >
          Livint
        </Link>

        <div className="flex shrink-0 items-center gap-10">
          <nav className="hidden shrink-0 items-center gap-10 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-sans text-[0.6875rem] tracking-[0.24em] uppercase opacity-70 transition-opacity duration-500 hover:opacity-100"
                activeProps={{ className: "opacity-100" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <LangSwitch className="hidden md:flex" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="shrink-0 font-sans text-[0.6875rem] tracking-[0.24em] uppercase md:hidden"
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-12 pt-6 text-ink md:hidden">
          <nav className="flex flex-col gap-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-display text-3xl tracking-[-0.02em]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LangSwitch className="mt-10" />
        </div>
      )}
    </header>
  );
}
