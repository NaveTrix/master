
import "./globals.css";
import Navbar from "./Navbar";
import ClientInserts from "./ClientInserts";
import Footer from "./Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <title>Navetrix Technologies - Code. Consult. Catalyze.</title>
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
        {/* Preconnect and preload Google Fonts for CLS optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
      <body className="antialiased bg-gray-50 min-h-screen flex flex-col font-sans">
        <Navbar />
        <ClientInserts />
        <main className="w-full">{children}</main>
        <Footer currentYear={currentYear} />
      </body>
    </html>
  );
}


