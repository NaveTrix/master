"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ContactModal from "./contact/modal";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Open Contact modal on 'openContactModal' event
  useEffect(() => {
    const handler = () => setContactOpen(true);
    window.addEventListener('openContactModal', handler);
    return () => window.removeEventListener('openContactModal', handler);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur shadow-md py-2"
            : "bg-white/60 backdrop-blur py-4"
        }`}
        style={{ WebkitBackdropFilter: "blur(8px)" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center font-extrabold text-xl text-[#1B1F3B] tracking-tight">
            <Image src="/navetrix_logo.jpg" alt="Navetrix Logo" width={120} height={40} className="h-10 w-auto mr-2" priority />
            
          </Link>
          <ul className="flex gap-6">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                {link.label === "Contact" ? (
                  <a
                    href="#contact"
                    className="text-[#1B1F3B] font-semibold hover:text-[#00C9A7] transition-colors duration-200 cursor-pointer"
                    onClick={e => {
                      e.preventDefault();
                      setContactOpen(true);
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    className="text-[#1B1F3B] font-semibold hover:text-[#00C9A7] transition-colors duration-200"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
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
