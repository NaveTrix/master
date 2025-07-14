export const metadata = {
  title: "Skill-building Training",
  description:
    "Unlock your potential with Navetrix's skill-building training programs. Advance your tech career with hands-on courses in coding, project management, and software development.",
  openGraph: {
    title: "Skill-building Training | Navetrix Technologies",
    description:
      "Unlock your potential with Navetrix's skill-building training programs. Advance your tech career with hands-on courses in coding, project management, and software development.",
    url: "https://navetrix.com/services/skill-building",
    type: "article",
    images: [
      {
        url: "https://navetrix.com/images/skill%20building.avif",
        width: 800,
        height: 600,
        alt: "Skill-building Training at Navetrix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill-building Training | Navetrix Technologies",
    description:
      "Unlock your potential with Navetrix's skill-building training programs. Advance your tech career with hands-on courses in coding, project management, and software development.",
    images: ["https://navetrix.com/images/skill%20building.aviv"],
  },
  alternates: {
    canonical: "https://navetrix.com/services/skill-building",
  },
};

import Image from "next/image";
import ScheduleButton from "../../components/ScheduleButton";
import BackToServicesButton from "../../components/BackToServicesButton";

export default function SkillBuildingPage() {
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
              src="/images/skill building.avif"
              alt="Skill-building Training"
              width={500}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </section>
        {/* Text Section */}
        <section className="flex-1 flex flex-col justify-center items-start text-left py-1 md:py-0">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1B1F3B]">
            Skill-building training
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            Unlock your potential with our skill-building training programs
            designed specifically for individuals eager to advance in the tech
            sector. At Navetrix Technologies, we offer comprehensive courses that
            focus on crucial skills such as coding, project management, and
            software development. Our expert trainers bring a wealth of real-world
            experience, ensuring you receive practical knowledge that can be
            applied immediately in your career. With interactive lessons, hands-on
            projects, and personalized feedback, you&apos;ll gain the confidence
            and expertise needed to excel in today&apos;s competitive job market.
            Start your learning journey with us and transform your skills into
            career opportunities!
          </p>
          <ScheduleButton />
        </section>
      </div>
    </>
  );
}
