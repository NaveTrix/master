"use client";
import Image from "next/image";

export default function ConsultingServicePage() {
  return (
    <main className="max-w-5xl mx-auto min-h-[60vh] flex flex-col md:flex-row items-stretch justify-center py-12 px-4 gap-8">
      {/* Left: Image */}
      <div className="flex-1 flex items-stretch mb-8 md:mb-0 max-w-sm">
        <Image
          src="/images/consulting.jpeg"
          alt="Consulting"
          width={400}
          height={800}
          className="rounded-2xl shadow-lg object-cover w-full h-full max-w-full"
        />
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center items-start text-left min-h-full">
        <h1 className="text-base md:text-lg font-extrabold mb-4 text-[#00C9A7] uppercase tracking-wide">Consulting</h1>
        <p className="text-lg text-gray-800 mb-6">
          Accelerate your business growth with our expert consulting services. We provide strategic guidance, mentorship, and technology solutions tailored to your unique needs. Our experienced consultants help you navigate digital transformation, optimize processes, and achieve your goals with confidence. Partner with us to unlock new opportunities and drive sustainable success in a rapidly evolving tech landscape.
        </p>
        <button
          className="text-gray-600 hover:text-gray-800 underline underline-offset-2 font-semibold transition text-lg"
          onClick={() => window.dispatchEvent(new Event("openContactModal"))}
        >
          Schedule appointment
        </button>
      </div>
    </main>
  );
}
