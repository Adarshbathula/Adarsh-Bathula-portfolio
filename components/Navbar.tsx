"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HOME_SECTIONS = ["home", "about", "projects", "skills", "contact"] as const;

const links: { href: string; label: string; sectionId?: string }[] = [
  { href: "/", label: "Home", sectionId: "home" },
  { href: "/about", label: "About", sectionId: "about" },
  { href: "/projects", label: "Projects", sectionId: "projects" },
  { href: "/skills", label: "Skills", sectionId: "skills" },
  { href: "/contact", label: "Contact", sectionId: "contact" },
  { href: "/resume", label: "Resume" }
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("home");

  // Scroll-spy: highlight nav item for the section in view (only on home page)
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute("id");
          if (id && HOME_SECTIONS.includes(id as (typeof HOME_SECTIONS)[number])) {
            setActiveSection(id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    HOME_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const isOnHome = pathname === "/";

  const isActive = (link: (typeof links)[0]) => {
    if (link.sectionId && isOnHome) {
      return activeSection === link.sectionId;
    }
    if (link.href === "/") return pathname === "/";
    return pathname?.startsWith(link.href) ?? false;
  };

  const handleNavClick = (link: (typeof links)[0], e?: React.MouseEvent) => {
    if (link.sectionId && isOnHome) {
      e?.preventDefault();
      scrollToSection(link.sectionId);
    }
    setMobileMenuOpen(false);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-cardMuted/40 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold tracking-tight text-accentDark">
          Adarsh Bathula
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-2 rounded-full border border-cardMuted/60 bg-card/80 px-2 py-1 text-xs shadow-soft sm:flex">
          {links.map((link) => {
            const active = isActive(link);
            if (link.sectionId && isOnHome) {
              return (
                <button
                  key={link.href + link.sectionId}
                  type="button"
                  onClick={(e) => handleNavClick(link, e)}
                  className={`rounded-full px-3 py-1 transition ${
                    active ? "bg-accent text-white shadow-soft" : "text-foreground/80 hover:bg-cardMuted/60"
                  }`}
                >
                  {link.label}
                </button>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1 transition ${
                  active ? "bg-accent text-white shadow-soft" : "text-foreground/80 hover:bg-cardMuted/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground/80 hover:bg-cardMuted/60 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent sm:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 top-[53px] z-20 bg-background/95 backdrop-blur sm:hidden ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        } transition-all duration-200`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {links.map((link) => {
            const active = isActive(link);
            if (link.sectionId && isOnHome) {
              return (
                <button
                  key={link.href + link.sectionId}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition ${
                    active ? "bg-accent text-white shadow-soft" : "text-foreground/80 hover:bg-cardMuted/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                  active ? "bg-accent text-white shadow-soft" : "text-foreground/80 hover:bg-cardMuted/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

