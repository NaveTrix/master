"use client";

import Image from "next/image";
import { useState } from "react";
import ContactModal from "../contact/modal";

export default function InternshipProgramsPage() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <main className="max-w-5xl mx-auto min-h-[60vh] flex flex-col md:flex-row items-stretch justify-center py-12 px-4 gap-8">
      {/* Left: Image */}
      <div className="flex-1 flex items-stretch mb-8 md:mb-0 max-w-sm">
        <Image
          src="/images/internships.jpeg"
          alt="Internship"
          width={400}
          height={800}
          className="rounded-2xl shadow-lg object-cover w-full h-full max-w-full"
        />
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center items-start text-left min-h-full">
        <h1 className="text-base md:text-lg font-extrabold mb-4 text-green-600 uppercase tracking-wide">
          Internship programs
        </h1>
        <p className="text-lg text-gray-800 mb-6">
          Embark on your professional journey with our tailored internship
          programs designed for freshers and early-career professionals. At
          Technyra, we connect you with leading companies in the tech industry,
          offering valuable hands-on experience and insights into real-world
          projects. Our programs not only enhance your resume but also help you
          build essential skills and network with industry experts. Whether
          you're looking to deepen your knowledge or kickstart your career, our
          internships provide the perfect platform to grow and succeed. Join us
          today and take the first step towards a promising future in technology!
        </p>
        <button
          className="text-gray-600 hover:text-gray-800 underline underline-offset-2 font-semibold transition text-lg"
          onClick={() => setContactOpen(true)}
        >
          Schedule appointment
        </button>
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </main>
  );
}
