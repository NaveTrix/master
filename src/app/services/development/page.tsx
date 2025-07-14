"use client";
import Image from "next/image";
import Button from "../../components/Button";
import BackToServicesButton from "../../components/BackToServicesButton";
import { openContactModal } from "../../components/utils";

export default function DevelopmentServicePage() {
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
              src="/images/software development.avif"
              alt="Software Development"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </section>
        {/* Text Section */}
        <section className="flex-1 flex flex-col justify-center items-start text-left py-1 md:py-0">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1B1F3B]">Software Development</h1>
          <p className="text-lg text-gray-800 mb-6">
            Bring your innovative ideas to life with our expert software development services. At Navetrix Technologies, we
            specialize in crafting tailored software solutions that meet your unique business needs. Our team of skilled
            developers uses cutting-edge technologies to design, build, and optimize software applications that enhance
            efficiency and drive results. From conceptualization to deployment, we collaborate closely with you to ensure
            your vision is realized. Whether you&apos;re a startup or an established enterprise, our commitment to quality
            and customer satisfaction sets us apart. Partner with us and watch your ideas evolve into impactful software
            solutions!
          </p>
          <Button onClick={openContactModal}>Schedule appointment</Button>
        </section>
      </div>
    </>
  );
}
