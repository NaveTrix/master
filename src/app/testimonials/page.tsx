"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCreative, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
	{
		name: "Rahul M.",
		title: "Intern, 2024",
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
		rating: 5,
		quote: "Navetrix gave me my first real tech exposure. The mentorship was life-changing.",
		details: "The projects and guidance I received helped me land my first job. Highly recommended for freshers!",
	},
	{
		name: "Meena T.",
		title: "Startup Founder",
		avatar: "https://randomuser.me/api/portraits/women/44.jpg",
		rating: 5,
		quote: "Their team built our MVP in record time and helped scale it fast.",
		details: "The consulting and development support from Navetrix was crucial for our early growth.",
	},
	{
		name: "Anjali S.",
		title: "Trainee, Data Engineering",
		avatar: "https://randomuser.me/api/portraits/women/68.jpg",
		rating: 4,
		quote: "Hands-on learning at Navetrix is unmatched.",
		details: "I learned more in 3 months than in a year elsewhere. The mentors are always available to help.",
	},
	{
		name: "Vikram P.",
		title: "Corporate Client",
		avatar: "https://randomuser.me/api/portraits/men/65.jpg",
		rating: 5,
		quote: "Professional and reliable IT consulting.",
		details: "Navetrix’s team provided valuable insights and delivered on time. We improved our processes significantly.",
	},
	{
		name: "Priya V.",
		title: "Intern, 2023",
		avatar: "https://randomuser.me/api/portraits/women/12.jpg",
		rating: 4,
		quote: "Great experience and career boost!",
		details: "The resume and interview prep sessions were especially helpful. I felt confident entering the job market.",
	},
];

export default function TestimonialsCarousel() {
	return (
		<section className="max-w-2xl mx-auto py-16 px-4" id="testimonials">
			<h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">Testimonials</h2>
			<Swiper
				modules={[EffectFade, EffectCreative, Autoplay, Pagination]}
				effect="fade"
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				loop
				className="w-full"
			>
				{testimonials.map((t) => (
					<SwiperSlide key={t.name}>
						<div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 text-center transition-all duration-500">
							<Image
								src={t.avatar}
								alt={t.name}
								width={72}
								height={72}
								className="w-20 h-20 rounded-full object-cover border-4 border-primary mb-4 shadow"
								loading="lazy"
							/>
							<div className="flex gap-1 mb-2 justify-center">
								{[...Array(5)].map((_, i) => (
									<FaStar key={i} className={i < t.rating ? "text-accent" : "text-gray-300"} />
								))}
							</div>
							<p className="text-gray-700 italic mb-4 text-lg">“{t.quote}”</p>
							<div className="font-semibold text-primary">{t.name}</div>
							<div className="text-gray-500 text-sm mb-2">{t.title}</div>
							<div className="text-gray-600 text-sm mb-4">{t.details}</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
