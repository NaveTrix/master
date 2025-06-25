"use client";
import Link from "next/link";
import { FaGraduationCap, FaLaptopCode, FaUserTie } from "react-icons/fa";

const services = [
	{
		title: "Internships & Training",
		highlights: [
			"Practical learning paths",
			"Certificate on completion",
			"Resume & interview prep",
		],
		color: "bg-blue-50",
		icon: <FaGraduationCap className="text-primary" />,
		accent: "from-primary/10 to-blue-100",
	},
	{
		title: "Software Development",
		highlights: [
			"Web & mobile apps",
			"Data engineering & automation",
			"Agile project execution",
		],
		color: "bg-green-50",
		icon: <FaLaptopCode className="text-primary" />,
		accent: "from-accent/10 to-green-100",
	},
	{
		title: "IT Consulting & Mentorship",
		highlights: [
			"Career guidance sessions",
			"Tech stack recommendations",
			"Project architecture consulting",
		],
		color: "bg-yellow-50",
		icon: <FaUserTie className="text-primary" />,
		accent: "from-accent/10 to-yellow-100",
	},
];

export default function ServicesPage() {
	return (
		<div className="max-w-5xl mx-auto py-16 px-4 flex flex-col gap-16">
			<header className="text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
					Our Services
				</h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					Explore our core offerings designed to empower freshers, businesses, and
					tech professionals alike.
				</p>
			</header>
			<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
				{services.map((service) => (
					<div
						key={service.title}
						className={`group relative overflow-hidden ${service.color} rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br ${service.accent}`}
					>
						<div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl opacity-40 group-hover:scale-125 transition-transform duration-500" />
						<div className="text-5xl mb-4 drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
							{service.icon}
						</div>
						<h2 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
							{service.title}
						</h2>
						<ul className="text-gray-700 mb-4 space-y-2">
							{service.highlights.map((item) => (
								<li key={item} className="flex items-center gap-2">
									<span className="text-primary">•</span> {item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="text-center mt-12">
				<Link
					href="/contact"
					className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
				>
					Request a Consultation
				</Link>
			</div>
		</div>
	);
}
