"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import ContactModal from "./contact/modal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  // Testimonials data (no ratings yet)
  const testimonialsData = [
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
  // Ratings generated only on client
  const [testimonials, setTestimonials] = useState(testimonialsData.map(t => ({ ...t, rating: 5 })));
  useEffect(() => {
    setTestimonials(testimonialsData.map(t => ({
      ...t,
      rating: Math.floor(Math.random() * 2) + 4 + (Math.random() > 0.5 ? 0.5 : 0)
    })));
    // eslint-disable-next-line
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
    <main>
      {/* Hero Section */}
      <section id="hero" className="relative w-full min-h-[60vh] flex items-center justify-center text-center px-4 md:px-12 py-4 overflow-hidden scroll-mt-24">
        {/* Background Gradient + Overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#00C9A7] via-[#6D5BFF] to-[#1B1F3B] opacity-90 z-0" />
        <div className="absolute inset-0 w-full h-full bg-black/30 z-0" />
        {/* Optional Framer Motion fade-in */}
        <div className="relative z-10 w-full max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-white">
            Code. Consult. Catalyze.
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 italic text-white/90 tracking-wide">
            Mentoring Talent. Building Software. Shaping Careers.
          </h2>
          <p className="text-lg md:text-xl font-medium mb-2 text-white/90 leading-relaxed">
            We help freshers and businesses unlock their potential through real-world internships, expert-led training, and innovative software solutions.
          </p>
          <p className="text-lg md:text-xl font-normal mb-4 text-white/80 leading-relaxed">
            <span className="font-semibold text-white">Navetrix empowers growth</span> through practical experience, skill-building, and impactful technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-0">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#6D5BFF] text-white font-bold shadow-lg hover:brightness-110 transition text-lg animate-fade-in tracking-wide"
            >
              Start Your Journey
            </button>
            <a href="#services" className="px-8 py-3 rounded-full border-2 border-white text-white font-bold shadow-lg hover:bg-white hover:text-[#1B1F3B] transition text-lg animate-fade-in tracking-wide">Explore Services</a>
          </div>
        </div>
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </section>

      {/* Overview Section */}
      <section id="overview" className="max-w-6xl mx-auto min-h-[60vh] flex flex-col justify-center snap-start py-6 px-2 mt-16 scroll-mt-32">
        <div className="bg-primary/10 rounded-2xl shadow-lg p-6 mb-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">Empowering future talent</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-dark mb-4">Transforming careers in tech</h3>
          <p className="text-gray-800 text-lg mb-6">
            At Navetrix, we are dedicated to empowering freshers and early-career professionals through innovative internship programs, comprehensive skill-building training, and cutting-edge software development. Our focus is on bridging the gap between education and the tech industry, equipping individuals with the tools they need to succeed. With our consulting services, we also help businesses harness the power of technology to drive success. Join us in shaping the future of tech talent and take your first step towards a thriving career today!
          </p>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="inline-block bg-[#00C9A7] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#1B1F3B] hover:text-white transition text-lg"
          >
            Get in touch
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Our Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-[#00C9A7] hover:scale-105 transition-transform">
            <span className="text-4xl mb-3 text-[#00C9A7]">🎯</span>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Our Mission</h2>
            <p className="text-gray-700 mb-2">
              We empower freshers and professionals to thrive in the tech industry by providing hands-on learning, mentorship, and career guidance. Our programs are designed to make you job-ready and confident.
            </p>
            <p className="text-gray-700">
              For businesses, we deliver robust software solutions and consulting to accelerate digital transformation and growth.
            </p>
          </div>
          {/* What We Offer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-[#6D5BFF] hover:scale-105 transition-transform">
            <span className="text-4xl mb-3 text-[#6D5BFF]">💡</span>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left mx-auto max-w-xs">
              <li>Real-world tech internships and training for freshers</li>
              <li>Custom web and mobile app development</li>
              <li>Data engineering and automation solutions</li>
              <li>IT consulting, mentorship, and career guidance</li>
            </ul>
          </div>
          {/* Why Choose Navetrix? */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-[#1B1F3B] hover:scale-105 transition-transform">
            <span className="text-4xl mb-3 text-[#1B1F3B]">🌟</span>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Why Choose Navetrix?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left mx-auto max-w-xs">
              <li>Affordable, accessible, and practical learning</li>
              <li>Mentorship from industry experts</li>
              <li>Project-based, hands-on approach</li>
              <li>Proven track record with students and businesses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="max-w-5xl mx-auto min-h-[60vh] flex flex-col justify-center snap-start mt-16 pt-8 pb-4 scroll-mt-32">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Internship</h3>
            <p className="text-gray-600 mb-4">Real-world tech internships for freshers to gain hands-on experience and boost employability.</p>
            <Link href="/services#internship" className="text-blue-600 font-medium hover:underline">Learn More</Link>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Development</h3>
            <p className="text-gray-600 mb-4">Custom software solutions for startups and enterprises, built by expert teams.</p>
            <Link href="/services#development" className="text-blue-600 font-medium hover:underline">Learn More</Link>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Consulting</h3>
            <p className="text-gray-600 mb-4">Expert consulting to guide your digital transformation and tech strategy.</p>
            <Link href="/services#consulting" className="text-blue-600 font-medium hover:underline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section id="team" className="max-w-4xl mx-auto min-h-[60vh] flex flex-col justify-center snap-start py-6 px-2 mt-0 scroll-mt-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">       
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <Image src="/images/Kalpana Reddy.jpg" alt="Kalpana Reddy" width={96} height={96} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Kalpana Reddy</h2>
            <div className="text-blue-700 font-medium mb-2">Founder & CEO</div>
            <p className="text-gray-600 text-sm">Kalpana leads Navetrix with a vision to empower freshers and businesses through technology and mentorship.</p>
          </div>         
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <Image src="/images/alex.jpg" alt="Alex Lehrer" width={96} height={96} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100" />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Alex Lehrer</h2>
            <div className="text-blue-700 font-medium mb-2">Director</div>
            <p className="text-gray-600 text-sm">Alex is Director at Navetrix, passionate about building scalable technology and mentoring the next generation of tech leaders.</p>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-5xl mx-auto min-h-[40vh] flex flex-col justify-center py-4 snap-start mt-0 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-900">Testimonials</h2>
        {/* Modern Carousel/Slideshow */}
        <div className="relative w-full flex flex-col items-center">
          <div className="flex gap-6 w-full justify-center items-stretch">
            {Array.from({ length: getSlidesToShow() }).map((_, i) => {
              const t = testimonials[(slide + i) % total];
              return (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex-1 min-w-0 max-w-md mx-auto flex flex-col justify-between border-t-4 border-[#00C9A7] hover:shadow-xl transition">
                  <div className="flex items-center gap-1 mb-2 justify-center">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg key={idx} className={`w-5 h-5 ${idx < Math.floor(t.rating) ? 'text-yellow-400' : idx < t.rating ? 'text-yellow-300' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,19.02 10,15.27 4.18,19.02 6,12.14 0.49,7.64 7.41,7.36" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 text-lg">“{t.text}”</p>
                  <div className="font-semibold text-blue-700 text-right">— {t.author}</div>
                </div>
              );
            })}
          </div>
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
  );
}
