// Renamed from page.tsx to main-page.tsx
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MainPage() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBanner(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      {/* Hero Content above banner */}
      <section className="w-full max-w-3xl text-center mt-4 md:mt-8 mb-0 z-30 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Code. Consult. Catalyze.
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
          Mentoring Talent. Building Software. Shaping Careers.
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-4">
          We help freshers and businesses unlock their potential through
          real-world internships, expert-led training, and innovative software
          solutions.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Navetrix empowers growth through practical experience, skill-building,
          and impactful technology.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-2 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition"
          >
            Start Your Journey
          </a>
          <a
            href="/services"
            className="px-6 py-2 border border-primary text-primary rounded-lg font-semibold shadow hover:bg-primary hover:text-white transition"
          >
            Explore Services
          </a>
        </div>
      </section>
      {/* Top Banner - only visible at top */}
      {showBanner && (
        <div className="w-full flex justify-center transition-opacity duration-500 z-20">
          <Image
            src="/src/app/images/top%20banner.jpeg"
            alt="Top Banner"
            width={1200}
            height={300}
            className="object-cover w-full max-h-64 rounded-b-xl shadow-lg"
            priority
          />
        </div>
      )}
      {/* SVG Wave Divider */}
      <div className="w-full -mb-2 md:-mb-4" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 md:h-12"
        >
          <path
            d="M0 0h1440v30c-120 20-360 40-720 40S120 50 0 30V0z"
            fill="#F3F4F6"
          />
        </svg>
      </div>
      {/* Overview Section for anchor navigation */}
      <section
        id="overview"
        className="w-full max-w-3xl text-left mt-0 md:mt-8 mb-2 md:mb-8 z-20 relative scroll-mt-12 md:scroll-mt-20"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">
          Overview
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-2">
          Navetrix bridges the gap between education and industry, empowering tech
          talent and businesses through hands-on internships, expert-led training,
          and custom software solutions.
        </p>
      </section>

      {/* Services Section for anchor navigation */}
      <section
        id="services"
        className="w-full max-w-3xl text-left mt-4 md:mt-16 mb-2 md:mb-8 z-20 relative scroll-mt-12 md:scroll-mt-20 md:pb-32 md:min-h-[60vh]"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">
          Services
        </h2>
        {/* ...existing services content here... */}
      </section>

      {/* Testimonials Section for anchor navigation */}
      <section
        id="testimonials"
        className="w-full max-w-3xl text-left mt-4 md:mt-16 mb-2 md:mb-8 z-20 relative scroll-mt-12 md:scroll-mt-20"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">
          Testimonials
        </h2>
        {/* ...existing testimonials content here... */}
      </section>
      {/* Add more main page content below as needed */}
    </main>
  );
}
