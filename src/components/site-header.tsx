import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const nav = [
  { to: "/philosophy", label: "Philosophy" },
  { to: "/method", label: "Method" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="shrink-0 font-sans text-[0.6875rem] tracking-[0.24em] uppercase md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background px-6 pb-12 pt-6 text-ink md:hidden">
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
        </div>
      )}
    </header>
  );
}
