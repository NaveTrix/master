"use client";
import Link from "next/link";
import ContactModal from "./contact/modal";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Overview", href: "/#overview" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);
    updateHash();
    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, currentHash]);

  useEffect(() => {
    function handleOpenContactModal() {
      setContactOpen(true);
    }
    window.addEventListener("openContactModal", handleOpenContactModal);
    return () => {
      window.removeEventListener("openContactModal", handleOpenContactModal);
    };
  }, []);

  return (
    <>
      <nav
        id="main-navbar"
        className="sticky top-0 z-50 w-full transition-all duration-300 bg-white/80 backdrop-blur shadow-md py-2"
        style={{ WebkitBackdropFilter: "blur(8px)" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center font-extrabold text-xl text-[#1B1F3B] tracking-tight">
            <Image src="/navetrix_logo.jpg" alt="Navetrix Logo" width={120} height={40} className="h-10 w-auto mr-2" priority />
          </Link>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6">
            {NAV_LINKS.map(link => {
              return (
                <li key={link.href}>
                  {link.label === "Contact" ? (
                    <a
                      href="#contact"
                      className="text-[#1B1F3B] font-semibold transition-colors duration-200 cursor-pointer"
                      onClick={e => {
                        e.preventDefault();
                        setContactOpen(true);
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`font-semibold transition-colors duration-200 text-[#1B1F3B] hover:!text-[#00C9A7]`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          {/* Hamburger Icon */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg className="h-7 w-7 text-[#1B1F3B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-7 w-7 text-[#1B1F3B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
        {/* Mobile Nav */}
        {mobileOpen && (
          <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white/95 shadow-lg absolute w-full left-0 top-full z-50 animate-fade-in">
            {NAV_LINKS.map(link => {
              return (
                <li key={link.href}>
                  {link.label === "Contact" ? (
                    <a
                      href="#contact"
                      className="text-[#1B1F3B] font-semibold transition-colors duration-200 cursor-pointer"
                      onClick={e => {
                        e.preventDefault();
                        setContactOpen(true);
                        setMobileOpen(false);
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`font-semibold transition-colors duration-200 text-[#1B1F3B] hover:!text-[#00C9A7]`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
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
