"use client";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const cards = [
	{
		title: "Internship Programs",
		desc: "Gain real-world experience and kickstart your tech career with hands-on internships.",
		img: "/images/internship.avif",
		href: "/internship",
	},
	{
		title: "Skill Training",
		desc: "Master in-demand skills with expert-led training designed for freshers and professionals.",
		img: "/images/training.avif",
		href: "/training",
	},
	{
		title: "Development Services",
		desc: "Accelerate your business with custom web, mobile, and automation solutions.",
		img: "/images/development.avif",
		href: "/development",
	},
];

export default function UnlockPotentialSection() {
	return (
		<section className="bg-gray-100 py-16">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-extrabold text-center text-dark mb-12">
					Unlock potential through tech training
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{cards.map((card) => (
						<Link
							key={card.title}
							href={card.href}
							className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:scale-[1.03] focus-visible:scale-[1.03]"
						>
							<div className="relative w-full h-48 overflow-hidden">
								<Image
									src={card.img}
									alt={card.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
									sizes="(max-width: 768px) 100vw, 33vw"
									priority={false}
								/>
							</div>
							<div className="flex-1 flex flex-col p-6">
								<div className="flex items-center gap-2 mb-2">
									<span className="text-lg md:text-xl font-bold text-dark group-hover:text-primary transition-colors">
										{card.title}
									</span>
									<FaArrowRight className="text-primary group-hover:translate-x-1 transition-transform" />
								</div>
								<p className="text-gray-600 text-base mb-2">
									{card.desc}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
