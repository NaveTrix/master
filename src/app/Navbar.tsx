"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ContactModal from "./contact/modal";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/#hero", section: "hero" },
  { name: "Overview", href: "/#overview", section: "overview" },
  { name: "Services", href: "/#services", section: "services" },
  // { name: "Team", href: "/#team", section: "team" }, // HIDDEN
  { name: "Testimonials", href: "/#testimonials", section: "testimonials" },
  { name: "Contact", href: "/#contact", section: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("hero");
  const [contactOpen, setContactOpen] = useState(false);
  const ignoreScrollRef = useRef(false);

  // Scroll event for section highlight
  useEffect(() => {
    if (typeof window === "undefined" || pathname !== "/") return;
    const sectionIds = ["hero", "overview", "services", "team", "testimonials", "contact"];
    let ticking = false;
    const NAVBAR_HEIGHT = window.innerWidth < 768 ? 80 : 128; // 80px for mobile/tablet, 128px for desktop
    const onScroll = () => {
      if (ignoreScrollRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let currentId = sectionIds[0];
          for (let i = 0; i < sectionIds.length; i++) {
            const el = document.getElementById(sectionIds[i]);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top - NAVBAR_HEIGHT <= 10) {
                currentId = sectionIds[i];
              }
            }
          }
          setActiveSection(currentId);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Open Contact modal on 'openContactModal' event
  useEffect(() => {
    const handler = () => setContactOpen(true);
    window.addEventListener('openContactModal', handler);
    return () => window.removeEventListener('openContactModal', handler);
  }, []);

  return (
    <>
      <nav
        className={`w-full bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30 transition-all duration-300 ${
          scrolled ? "shadow-lg py-2" : "py-4"
        }`}
      >
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center justify-center leading-tight select-none group"
          >
            <Image src="/navetrix_logo.jpg" alt="Navetrix Logo" width={120} height={40} className="h-10 w-auto mr-2" priority />
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            if (link.name === "Contact") {
              return (
                <button
                  key={link.href}
                  onClick={() => setContactOpen(true)}
                  className={`transition px-2 py-1 rounded-md text-base font-semibold tracking-wide hover:text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:bg-primary/10 relative text-gray-700 bg-transparent`}
                  style={{ transition: 'color 0.18s cubic-bezier(.4,2,.6,1)' }}
                >
                  {link.name}
                </button>
              );
            }
            const isActive = activeSection === link.section;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition px-2 py-1 rounded-md text-base font-semibold tracking-wide hover:text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:bg-primary/10 relative
                  ${isActive ? "text-primary font-bold after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-gradient-to-r after:from-[#00C9A7] after:to-[#1B1F3B] after:rounded-full after:content-['']" : "text-gray-700 bg-transparent"}
                `}
                style={{ transition: 'color 0.18s cubic-bezier(.4,2,.6,1)' }}
                prefetch={false}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {/* Mobile menu button (hamburger) */}
        <div className="md:hidden">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span className="sr-only">Toggle menu</span>
            {menuOpen ? (
              // Close icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg md:hidden animate-fade-in z-40">
            <div className="flex flex-col gap-2 py-4 px-4">
              {navLinks.map((link) => link.name === "Contact" ? (
                <button
                  key={link.href}
                  onClick={() => { setContactOpen(true); setMenuOpen(false); }}
                  className={`block px-3 py-2 rounded-md text-base font-semibold tracking-wide hover:text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:bg-primary/10 relative transition text-gray-700 bg-transparent`}
                  style={{ transition: 'color 0.18s cubic-bezier(.4,2,.6,1)' }}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-semibold tracking-wide hover:text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:bg-primary/10 relative transition
                    ${(activeSection === link.section) ? "text-primary font-bold after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-gradient-to-r after:from-[#00C9A7] after:to-[#1B1F3B] after:rounded-full after:content-['']" : "text-gray-700 bg-transparent"}
                  `}
                  style={{ transition: 'color 0.18s cubic-bezier(.4,2,.6,1)' }}
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

/*
In your page.tsx, ensure each section has the correct scroll-margin-top for perfect alignment:

<section id="overview" className="... scroll-mt-24 ...">
<section id="services" className="... scroll-mt-24 ...">
<section id="team" className="... scroll-mt-24 ...">
<section id="testimonials" className="... scroll-mt-24 ...">
<section id="contact" className="... scroll-mt-24 ...">
*/
