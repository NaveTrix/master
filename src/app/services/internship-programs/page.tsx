"use client";

import Image from "next/image";
import Button from "../../components/Button";
import BackToServicesButton from "../../components/BackToServicesButton";
import { openContactModal } from "../../components/utils";

export default function InternshipProgramsPage() {
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
              src="/images/internship.avif"
              alt="Internship"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </section>
        {/* Text Section */}
        <section className="flex-1 flex flex-col justify-center items-start text-left py-1 md:py-0">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1B1F3B]">
            Internship programs
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            Embark on your professional journey with our tailored internship
            programs designed for freshers and early-career professionals. At
            Navetrix Technologies, we connect you with leading companies in the tech industry,
            offering valuable hands-on experience and insights into real-world
            projects. Our programs not only enhance your resume but also help you
            build essential skills and network with industry experts. Whether
            you&apos;re looking to deepen your knowledge or kickstart your career, our
            internships provide the perfect platform to grow and succeed. Join us
            today and take the first step towards a promising future in technology!
          </p>
          <Button onClick={openContactModal}>
            Schedule appointment
          </Button>
        </section>
      </div>
    </>
  );
}
