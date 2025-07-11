"use client";

import Image from "next/image";
import Button from "../components/Button";
import BackToServicesButton from "../components/BackToServicesButton";
import Card from "../components/Card";

export default function InternshipProgramsPage() {
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
        <BackToServicesButton />
        <h1 className="text-base md:text-lg font-extrabold mb-4 text-[#00C9A7] uppercase tracking-wide">
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
        <Card className="items-start text-left border-t-4 border-[#00C9A7] hover:scale-105 transition-transform shadow-xl p-8 w-full max-w-xl">
          <span className="text-5xl mb-4 text-[#00C9A7] self-center">🎯</span>
          <h2 className="text-lg xs:text-xl md:text-2xl font-extrabold text-[#1B1F3B] mb-3 tracking-tight self-center text-center w-full whitespace-nowrap overflow-x-auto">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-3 font-medium">
            Empowering future tech leaders and helping businesses grow through hands-on experience, mentorship, and innovation.
          </p>
          <ul className="text-gray-600 list-disc list-inside space-y-1 max-w-xs">
            <li>Bridging the gap between education and industry</li>
            <li>Championing diversity and inclusion in tech</li>
            <li>Inspiring a passion for lifelong learning</li>
          </ul>
        </Card>
        <Button onClick={() => window.dispatchEvent(new Event("openContactModal"))}>
          Schedule appointment
        </Button>
      </div>
    </main>
  );
}
