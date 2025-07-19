"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Overview", href: "/#overview" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog", href: "/blog" }, // Blog menu item
  { label: "Contact", href: "#contact" },
];

const ContactModal = dynamic(() => import("./contact/modal"), { ssr: false });

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  // Track selected menu in mobile view
  const [selectedMenu, setSelectedMenu] = useState<string>("Home");

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

  useEffect(() => {
    // Always set scrolled to true on service, policy, and blog pages
    if (
      pathname && (
        pathname.startsWith("/services") ||
        pathname.startsWith("/privacy-policy") ||
        pathname.startsWith("/cookie-policy") ||
        pathname.startsWith("/blog")
      )
    ) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > (window.innerHeight * 0.55)) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 py-2 ${scrolled ? "bg-white/90 shadow-md backdrop-blur border-b border-gray-200" : "bg-transparent shadow-none border-b border-white/30"}`}
        style={scrolled ? { WebkitBackdropFilter: "blur(8px)" } : {}}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo or Text Logo depending on scroll/hero */}
          {scrolled ? (
            <Link href="/" className="flex items-center font-extrabold text-xl text-[#1B1F3B] tracking-tight">
              <Image src="/navetrix_logo.jpg" alt="Navetrix Logo" width={120} height={40} style={{ width: 120, height: 'auto' }} className="h-10 w-auto mr-2" priority />
            </Link>
          ) : (
            <div className="logo_col col-xs col-sm-fit">
              <Link href="/" className="text-logo font-extrabold text-2xl md:text-3xl text-gray-200 drop-shadow-md">
                NAVETRIX<span style={{ fontWeight: 300 }} className="span12"> TECHNOLOGIES</span>
              </Link>
            </div>
          )}
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6">
            {NAV_LINKS.map(link => {
              return (
                <li key={link.href}>
                  {link.label === "Contact" ? (
                    <a
                      href="#contact"
                      className={`font-semibold transition-colors duration-200 cursor-pointer ${scrolled ? "text-[#1B1F3B]" : "text-white hover:!text-[#00C9A7]"}`}
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
                      className={`font-semibold transition-colors duration-200 ${scrolled ? "text-[#1B1F3B] hover:!text-[#00C9A7]" : "text-white hover:!text-[#00C9A7]"}`}
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
            className={`md:hidden flex items-center justify-center p-2 rounded focus:outline-none ${scrolled ? "text-[#1B1F3B]" : "text-white"}`}
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg className={`h-7 w-7 ${scrolled ? "text-[#1B1F3B]" : "text-white"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className={`h-7 w-7 ${scrolled ? "text-[#1B1F3B]" : "text-white"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
        {/* Mobile Nav */}
        {mobileOpen && (
          <ul className="md:hidden flex flex-col gap-0.5 px-0 py-4 bg-white shadow-lg absolute w-4/5 max-w-xs right-0 top-full z-50 animate-fade-in rounded-xl border border-gray-200">
            {NAV_LINKS.map(link => {
              const isActive = selectedMenu === link.label;
              return (
                <li key={link.href} className="w-full">
                  {link.label === "Contact" ? (
                    <a
                      href="#contact"
                      className={`text-[#1B1F3B] font-semibold transition-colors duration-200 cursor-pointer rounded-none py-2 w-full block text-left ${isActive ? "bg-blue-100 text-[#1B1F3B]" : "hover:bg-gray-100"}`}
                      onClick={e => {
                        e.preventDefault();
                        setContactOpen(true);
                        setMobileOpen(false);
                        setSelectedMenu(link.label);
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`font-semibold transition-colors duration-200 text-[#1B1F3B] rounded-none py-2 w-full block text-left ${isActive ? "bg-blue-100 text-[#1B1F3B]" : "hover:bg-gray-100"}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setSelectedMenu(link.label);
                      }}
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
