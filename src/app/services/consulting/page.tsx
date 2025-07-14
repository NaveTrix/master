"use client";
import Image from "next/image";
import { openContactModal } from "../../components/utils";
import BackToServicesButton from "../../components/BackToServicesButton";

export default function ConsultingServicePage() {
  return (
    <>
      <div className="max-w-5xl mx-auto w-full px-4 pt-20 md:pt-24 bg-white">
        <BackToServicesButton className="mb-4" />
      </div>
      <div className="max-w-5xl mx-auto w-full px-4 flex flex-col md:flex-row gap-8 bg-white min-h-[480px] md:min-h-[520px] items-stretch">
        {/* Image Section */}
        <section className="flex-1 flex items-center justify-center mb-0 md:mb-0">
          <div className="w-full max-w-md h-[180px] md:h-full flex items-center justify-center">
            <Image
              src="/images/consulting.avif"
              alt="Consulting"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </section>
        {/* Text Section */}
        <section className="flex-1 flex flex-col justify-center items-start text-left py-1 md:py-0">
          <h1 className="text-base md:text-lg font-extrabold mb-4 text-[#00C9A7] uppercase tracking-wide">Consulting</h1>
          <p className="text-lg text-gray-800 mb-6">
            Accelerate your business growth with our expert consulting services. We provide strategic guidance, mentorship, and technology solutions tailored to your unique needs. Our experienced consultants help you navigate digital transformation, optimize processes, and achieve your goals with confidence. Partner with us to unlock new opportunities and drive sustainable success in a rapidly evolving tech landscape.
          </p>
          <button
            className="text-gray-600 hover:text-gray-800 underline underline-offset-2 font-semibold transition text-lg"
            onClick={openContactModal}
          >
            Schedule appointment
          </button>
        </section>
      </div>
    </>
  );
}
