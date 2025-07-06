"use client";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "../../contact/modal";

export default function DevelopmentServicePage() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <main className="max-w-5xl mx-auto min-h-[60vh] flex flex-col md:flex-row items-stretch justify-center py-12 px-4 gap-8">
      {/* Left: Image */}
      <div className="flex-1 flex items-stretch mb-8 md:mb-0 max-w-sm">
        <Image
          src="/images/software development.jpeg"
          alt="Software Development"
          width={400}
          height={800}
          className="rounded-2xl shadow-lg object-cover w-full h-full max-w-full"
        />
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center items-start text-left min-h-full">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1B1F3B]">Software Development</h1>
        <p className="text-lg text-gray-800 mb-6">
          Bring your innovative ideas to life with our expert software development services. At Navetrix Technologies, we specialize in crafting tailored software solutions that meet your unique business needs. Our team of skilled developers uses cutting-edge technologies to design, build, and optimize software applications that enhance efficiency and drive results. From conceptualization to deployment, we collaborate closely with you to ensure your vision is realized. Whether you're a startup or an established enterprise, our commitment to quality and customer satisfaction sets us apart. Partner with us and watch your ideas evolve into impactful software solutions!
        </p>
        <button
          className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#6D5BFF] text-white font-bold shadow-lg hover:brightness-110 transition text-lg"
          onClick={() => setContactOpen(true)}
        >
          Schedule appointment
        </button>
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </main>
  );
}
