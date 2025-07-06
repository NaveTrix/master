"use client";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "../../contact/modal";

export default function SkillBuildingPage() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <main className="max-w-5xl mx-auto min-h-[60vh] flex flex-col md:flex-row items-stretch justify-center py-12 px-4 gap-8">
      {/* Left: Image */}
      <div className="flex-1 flex items-stretch mb-8 md:mb-0 max-w-sm">
        <Image
          src="/images/skill building.jpeg"
          alt="Skill-building Training"
          width={400}
          height={800}
          className="rounded-2xl shadow-lg object-cover w-full h-full max-w-full"
        />
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center items-start text-left min-h-full">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1B1F3B]">
          Skill-building training
        </h1>
        <p className="text-lg text-gray-800 mb-6">
          Unlock your potential with our skill-building training programs designed
          specifically for individuals eager to advance in the tech sector. At
          Technyra, we offer comprehensive courses that focus on crucial skills
          such as coding, project management, and software development. Our expert
          trainers bring a wealth of real-world experience, ensuring you receive
          practical knowledge that can be applied immediately in your career. With
          interactive lessons, hands-on projects, and personalized feedback,
          you'll gain the confidence and expertise needed to excel in today’s
          competitive job market. Start your learning journey with us and
          transform your skills into career opportunities!
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
