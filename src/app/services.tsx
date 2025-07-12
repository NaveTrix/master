"use client";
import Link from "next/link";
import { FaGraduationCap, FaLaptopCode, FaUserTie } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and accessible websites using the latest web technologies.",
    icon: FaLaptopCode,
    link: "/services/web-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces and experiences for web and mobile applications.",
    icon: FaGraduationCap,
    link: "/services/ui-ux-design",
  },
  {
    title: "Consulting",
    description:
      "Providing expert advice and strategies for your business or project.",
    icon: FaUserTie,
    link: "/services/consulting",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border p-6 shadow-md transition-transform duration-200 hover:scale-105"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
              <service.icon className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <Link
              href={service.link}
              className="inline-block rounded bg-blue-500 px-4 py-2 text-center text-white transition-colors duration-200 hover:bg-blue-600"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
