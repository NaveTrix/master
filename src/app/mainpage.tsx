"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { services } from "./servicesData";
import Button from "./components/Button";
import Card from "./components/Card";

export const metadata = {
  title: "Navetrix Technologies | Software Development, Training & Internships",
  description: "Navetrix empowers businesses and individuals with innovative software, expert training, and hands-on internships. Build your future with Navetrix.",
  openGraph: {
    title: "Navetrix Technologies | Software Development, Training & Internships",
    description: "Navetrix empowers businesses and individuals with innovative software, expert training, and hands-on internships. Build your future with Navetrix.",
    url: "https://yourdomain.com/",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/navetrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Navetrix Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navetrix Technologies | Software Development, Training & Internships",
    description: "Navetrix empowers businesses and individuals with innovative software, expert training, and hands-on internships. Build your future with Navetrix.",
    images: ["https://yourdomain.com/navetrix_logo.jpg"],
  },
};

// Move Testimonial type and testimonialsData outside Home component for proper scoping

interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

const testimonialsData: Omit<Testimonial, 'rating'>[] = [
  {
    text: "Navetrix’s internship program was a game-changer for my career. The mentorship and real projects helped me land my first tech job!",
    author: "Priya Sharma, India",
  },
  {
    text: "Our SaaS startup scaled faster thanks to Navetrix’s expert consulting and development team. Highly recommended!",
    author: "Lucas Brown, Australia",
  },
  {
    text: "The hands-on training was practical and engaging. I felt supported every step of the way.",
    author: "Emily Wilson, Australia",
  },
  {
    text: "Navetrix’s team delivered our mobile app on time and exceeded our expectations. Communication was excellent.",
    author: "Oliver Smith, Australia",
  },
  {
    text: "I joined as a fresher and left with confidence and skills. The internship was truly international and diverse.",
    author: "Ava Johnson, USA",
  },
  {
    text: "The consulting sessions were insightful and tailored to our business needs. We saw real results!",
    author: "Sophie Taylor, Australia",
  },
  {
    text: "Navetrix’s training helped me transition into tech from a non-IT background. The support was amazing.",
    author: "Rohan Patel, India",
  },
  {
    text: "Great experience! The instructors were knowledgeable and always available for guidance.",
    author: "Jack Williams, Australia",
  },
  {
    text: "Navetrix gave me the platform to co-create innovative solutions and mentor a global team. Proud to be part of a company that values growth and collaboration.",
    author: "Rahul Mehta, India",
  },
];

export default function Home() {
  // JSON-LD structured data for SEO
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Navetrix Technologies",
    url: "https://yourdomain.com",
    logo: "https://yourdomain.com/navetrix_logo.jpg",
    sameAs: [
      "https://www.linkedin.com/company/navetrix",
      "https://twitter.com/navetrix"
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: "+61-123-456-789",
      contactType: "customer service",
      areaServed: "AU"
    }]
  };
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development, Training, Internship Programs, Consulting",
    provider: {
      "@type": "Organization",
      name: "Navetrix Technologies"
    }
  };

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTestimonials(testimonialsData.map(t => ({
      ...t,
      rating: Math.floor(Math.random() * 2) + 4 + (Math.random() > 0.5 ? 0.5 : 0)
    })));
    setMounted(true);
  }, []);

  const [slide, setSlide] = useState(0);
  const slidesToShow = 3;
  const total = testimonials.length;
  // Responsive slides to show
  const getSlidesToShow = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return 1;
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return 2;
    return slidesToShow;
  };
  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [total]);
  // Navigation
  const prev = () => setSlide(s => (s - 1 + total) % total);
  const next = () => setSlide(s => (s + 1) % total);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative w-full min-h-[60vh] flex items-center justify-center text-center px-4 md:px-12 py-4 md:py-8 overflow-hidden scroll-mt-20">
          {/* Background Gradient + Optional Illustration */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#00C9A7] via-[#6D5BFF] to-[#1B1F3B] opacity-90 z-0" />
          <div className="absolute inset-0 w-full h-full bg-black/30 z-0" />
          {/* Optional SVG Tech Illustration */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#6D5BFF" fillOpacity="0.08" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
            </svg>
          </div>
          <div className="relative z-10 w-full max-w-3xl mx-auto animate-fade-in flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg text-white whitespace-normal break-words">
              Code. Consult. Catalyze.
            </h1>
            <h2 className="text-base sm:text-lg md:text-2xl font-semibold mb-4 italic text-white/90 tracking-wide whitespace-normal break-words">
              Mentoring Talent. Building Software. Shaping Careers.
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-medium mb-6 text-white/90 leading-relaxed">
              Navetrix empowers growth through real-world internships, expert-led training, and custom software solutions for businesses and individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-0">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("openContactModal"))}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#6D5BFF] text-white font-bold shadow-lg hover:brightness-110 transition text-lg"
              >
                Start Your Journey
              </button>
              <a href="#services" className="px-8 py-3 rounded-full border-2 border-white text-white font-bold shadow-lg hover:bg-white hover:text-[#1B1F3B] transition text-lg animate-fade-in tracking-wide">Explore Services</a>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="max-w-6xl mx-auto min-h-[60vh] flex flex-col justify-center snap-start py-4 md:py-6 px-2 mt-8 md:mt-16 scroll-mt-20">
          <div className="bg-primary/10 rounded-2xl shadow-lg p-6 mb-4">
            {/* Title spanning both columns */}
           
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-[#1B1F3B] mb-4 normal-case">
               Bridging Talent and Technology for Business Success
            </h2>
          </div>
            <div className="flex flex-col md:flex-row items-stretch gap-8">
              {/* Left: Text */}
              <div className="flex-1 flex flex-col justify-center text-left">
                <p className="text-gray-800 text-lg mb-6">
                 At Navetrix Technologies, we connect aspiring tech professionals with real-world opportunities, equipping them with the skills to excel through hands-on internships and expert-led training.
                </p>
                <p className="text-gray-800 text-lg mb-6">
                 For our business partners, we deliver innovative software development and strategic consulting that harnesses technology to accelerate growth and secure a lasting competitive edge.
                </p>
                <p className="text-gray-800 text-lg mb-6">
                  Whether you’re launching your tech career or looking to transform your business, Navetrix is your dedicated partner for success.
                  </p>
                <Button
                  as="button"
                  onClick={e => { e.preventDefault(); window.dispatchEvent(new Event("openContactModal")); }}
                  className="mt-2 px-5 py-2 text-base"
                >
                  Get in touch
                </Button>
              </div>
              {/* Right: Image */}
              <div className="flex-1 flex justify-center items-center">
                <Image
                  src="/images/internship.jpeg"
                  alt="Internship"
                  width={420}
                  height={315}
                  className="rounded-2xl shadow-lg h-full max-h-[420px] w-auto object-cover"
                  style={{ aspectRatio: '4/3', minHeight: '320px' }}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Our Mission */}
            <Card className="items-start text-left border-t-4 border-[#00C9A7] hover:scale-105 transition-transform shadow-xl p-8">
              <span className="text-5xl mb-4 text-[#00C9A7] self-center">🎯</span>
              <h2 className="text-lg xs:text-xl md:text-2xl font-extrabold text-[#1B1F3B] mb-3 tracking-tight self-center text-center w-full whitespace-nowrap overflow-x-auto">Our Mission</h2>
              <p className="text-gray-700 mb-3 font-medium">
                Empowering future tech leaders and helping businesses grow through hands-on experience, mentorship, and innovation.
              </p>
              <ul className="text-gray-600 list-disc list-inside space-y-1 max-w-xs">
                <li>Bridging the gap between education and industry</li>
                <li>Championing diversity and inclusion in tech</li>
                <li>Inspiring a passion for lifelong learning</li>
              </ul>
            </Card>
            {/* What We Offer */}
            <Card className="items-center text-center border-t-4 border-[#6D5BFF] hover:scale-105 transition-transform shadow-xl p-8">
              <span className="text-5xl mb-4 text-[#6D5BFF]">💡</span>
              <h2 className="text-lg xs:text-xl md:text-2xl font-extrabold text-[#1B1F3B] mb-3 tracking-tight whitespace-nowrap overflow-x-auto">What We Offer</h2>
              <div className="text-left w-full">
                <div className="font-semibold text-[#6D5BFF] mb-1">For Tech Talent:</div>
                <ul className="text-gray-700 list-disc list-inside space-y-1 mb-3">
                  <li>Real-world internships & hands-on training</li>
                  <li>Expert mentorship & career guidance</li>
                  <li>Experience in web, mobile & data engineering projects</li>
                </ul>
                <div className="font-semibold text-[#6D5BFF] mb-1 mt-2">For Businesses:</div>
                <ul className="text-gray-700 list-disc list-inside space-y-1 mb-3">
                  <li>Custom software & mobile app development</li>
                  <li>Data engineering & automation solutions</li>
                  <li>Strategic IT consulting & access to vetted talent</li>
                </ul>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="inline-block bg-[#00C9A7]/10 text-[#00C9A7] font-bold px-3 py-1 rounded-full text-xs">Remote & Onsite</span>
                <span className="inline-block bg-[#6D5BFF]/10 text-[#6D5BFF] font-bold px-3 py-1 rounded-full text-xs">Global Reach</span>
              </div>
            </Card>
            {/* Why Choose Navetrix? */}
            <Card className="items-center text-center border-t-4 border-[#1B1F3B] hover:scale-105 transition-transform shadow-xl p-8">
              <span className="text-5xl mb-4 text-[#1B1F3B]">🌟</span>
              <h2 className="text-lg xs:text-xl md:text-2xl font-extrabold text-[#1B1F3B] mb-3 tracking-tight whitespace-nowrap overflow-x-auto">Why Navetrix?</h2>
              <div className="text-left w-full">
                <div className="font-semibold text-[#6D5BFF] mb-1">Real Projects, Real Skills:</div>
                <p className="text-gray-700 mb-3">
                  You don&apos;t just learn theory; you build real products and gain practical experience.
                </p>
                <div className="font-semibold text-[#6D5BFF] mb-1">Expert-Led Mentorship:</div>
                <p className="text-gray-700 mb-3">
                  Receive direct guidance from professionals who have built successful careers in tech.
                </p>
                <div className="font-semibold text-[#6D5BFF] mb-1">Innovate Together:</div>
                <p className="text-gray-700 mb-3">
                 Thrive in a supportive environment that values diversity and prepares you for the future of work.
                </p>
              </div>
              <span className="inline-block bg-[#1B1F3B]/10 text-[#1B1F3B] font-bold px-3 py-1 rounded-full text-xs mt-2">Trusted by 1000+ learners</span>
            </Card>
          </div>
        </section>

        {/* Services Preview */}
        <section id="services" className="max-w-5xl mx-auto min-h-[30vh] flex flex-col justify-center snap-start mt-6 md:mt-12 pt-4 md:pt-6 pb-2 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-[#1B1F3B] mb-4 normal-case">
              From Learning to Launch — We Power Your Tech Journey.
            </h2>
          </div>
          <div className="relative w-full flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch min-h-[220px]">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className={`relative bg-gradient-to-br ${service.color} rounded-2xl shadow-xl group transition-transform hover:scale-105 flex flex-col h-full p-0 min-h-[240px]`}
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                >
                  <div className="bg-white rounded-2xl flex flex-col items-center text-center h-full w-full flex-1 p-0">
                    <div className="flex items-center justify-center w-full aspect-[4/3] bg-gray-50 rounded-t-2xl overflow-hidden" style={{ minHeight: '120px', maxHeight: '160px' }}>
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                        priority={service.title === 'Internship'}
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1 justify-between">
                      <h3
                        className="text-xl font-extrabold mb-1 text-gray-900 group-hover:text-[#00C9A7] transition flex items-start justify-start cursor-pointer tracking-wide whitespace-nowrap overflow-x-auto"
                        onClick={() => window.location.href = service.link}
                      >
                        {service.title} <span className="ml-2 group-hover:text-[#00C9A7] transition">&gt;</span>
                      </h3>
                      <p className="text-gray-700 mb-0 text-base leading-relaxed min-h-[40px] flex-1 text-left mt-2">{service.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="max-w-5xl mx-auto min-h-[40vh] flex flex-col justify-center py-4 snap-start mt-0 scroll-mt-20">
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold mb-4 text-center text-gray-900 whitespace-nowrap overflow-x-auto">Testimonials</h2>
          {/* Modern Carousel/Slideshow */}
          <div className="relative w-full flex flex-col items-center">
            {mounted && (
              <div className="flex gap-6 w-full justify-center items-stretch">
                {testimonials.length > 0 && Array.from({ length: getSlidesToShow() }).map((_, i) => {
                  const t = testimonials[(slide + i) % testimonials.length];
                  return (
                    <Card key={i} className="flex-1 min-w-0 max-w-md mx-auto flex flex-col justify-between border-t-4 border-[#00C9A7] hover:shadow-xl transition p-6">
                      <div className="flex items-center gap-1 mb-2 justify-center">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <svg key={idx} className={`w-5 h-5 ${idx < Math.floor(t.rating) ? 'text-yellow-400' : idx < t.rating ? 'text-yellow-300' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-lg">“{t.text}”</p>
                      <div className="font-semibold text-blue-700 text-right">— {t.author}</div>
                    </Card>
                  );
                })}
              </div>
            )}
            <div className="flex gap-2 mt-6 justify-center">
              <button onClick={prev} className="w-10 h-10 rounded-full bg-[#00C9A7] text-white flex items-center justify-center shadow hover:bg-[#1B1F3B] transition">
                <span className="sr-only">Previous</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full bg-[#00C9A7] text-white flex items-center justify-center shadow hover:bg-[#1B1F3B] transition">
                <span className="sr-only">Next</span>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
