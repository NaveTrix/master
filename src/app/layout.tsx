import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import ClientInserts from "./ClientInserts";
import FooterQuickLinks from "./FooterQuickLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Navetrix Technologies - Code. Consult. Catalyze.",
  description: "Navetrix Technologies provides real-world tech internships, expert-led training, and software solutions to empower freshers and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* SEO Meta Tags */}
        <meta name="description" content="Navetrix Technologies provides real-world tech internships, expert-led training, and software solutions to empower freshers and businesses." />
        <meta name="keywords" content="Navetrix, internships, software development, training, consulting, tech careers, freshers, business solutions" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Navetrix Technologies - Code. Consult. Catalyze." />
        <meta property="og:description" content="Navetrix Technologies provides real-world tech internships, expert-led training, and software solutions to empower freshers and businesses." />
        <meta property="og:image" content="/navetrix_logo.jpg" />
        <meta property="og:url" content="https://navetrix.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Navetrix Technologies - Code. Consult. Catalyze." />
        <meta name="twitter:description" content="Navetrix Technologies provides real-world tech internships, expert-led training, and software solutions to empower freshers and businesses." />
        <meta name="twitter:image" content="/navetrix_logo.jpg" />
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Navetrix Technologies",
          "url": "https://navetrix.com",
          "logo": "https://navetrix.com/navetrix_logo.jpg",
          "contactPoint": [{
            "@type": "ContactPoint",
            "email": "info@navetrix.com",
            "contactType": "customer support"
          }]
        }) }} />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen flex flex-col font-sans`}
      >
        {/* Dynamic Navbar */}
        <Navbar />
        {/* Floating Chat/WhatsApp Actions (Client Only) */}
        <ClientInserts />
        {/* Main Content Area */}
        <main className="w-full">
          {children}
        </main>
        {/* Footer */}
        <footer className="w-full bg-[#1B1F3B] text-white px-4 sm:px-6 md:px-8 py-10 md:py-12 mt-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* Logo or Brand Name */}
                <div className="space-y-1 mb-4">
                  <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight drop-shadow-lg whitespace-nowrap">
                    NAVETRIX <span className="font-light">Technologies</span>
                  </h2>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6 drop-shadow">
                Empowering freshers and businesses through real-world tech internships, expert-led training, and innovative software solutions.
              </p>
              <div className="flex items-center gap-2 text-gray-200 text-base font-semibold mb-2 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#00C9A7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                </svg>
                <a href="mailto:info@navetrix.com" className="underline hover:text-[#00C9A7]">info@navetrix.com</a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <div className="text-xl font-bold mb-4 text-white tracking-tight drop-shadow">Quick Links</div>
              <FooterQuickLinks />
            </div>
            {/* Socials */}
            <div>
              <div className="text-xl font-bold mb-4 text-white tracking-tight drop-shadow">Socials</div>
              <ul className="flex gap-6 items-center mt-2">
                <li>
                  <a href="#" aria-label="Twitter" className="hover:text-[#00C9A7] transition-colors">
                    <svg className="w-7 h-7 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 22.46 6z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn" className="hover:text-[#00C9A7] transition-colors">
                    <svg className="w-7 h-7 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram" className="hover:text-[#00C9A7] transition-colors">
                    <svg className="w-7 h-7 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.634 2.2 15.25 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.28.058-2.15.24-2.91.51-.8.28-1.48.66-2.15 1.33-.67.67-1.05 1.35-1.33 2.15-.27.76-.452 1.63-.51 2.91C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.15.51 2.91.28.8.66 1.48 1.33 2.15.67.67 1.35 1.05 2.15 1.33.76.27 1.63.452 2.91.51C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.15-.24 2.91-.51.8-.28 1.48-.66 2.15-1.33.67-.67 1.05-1.35 1.33-2.15.27-.76.452-1.63.51-2.91.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.24-2.15-.51-2.91-.28-.8-.66-1.48-1.33-2.15-.67-.67-1.35-1.05-2.15-1.33-.76-.27-1.63-.452-2.91-.51C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@NavetrixTechnologies" aria-label="YouTube" className="hover:text-[#00C9A7] transition-colors" target="_blank" rel="noopener noreferrer">
                    <svg className="w-7 h-7 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.379 3.5 12 3.5 12 3.5s-7.379 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.2 0 12 0 12s0 3.8.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.621 20.5 12 20.5 12 20.5s7.379 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.8 24 12 24 12s0-3.8-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 text-xs mt-12">
            &copy; {currentYear} Navetrix. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
