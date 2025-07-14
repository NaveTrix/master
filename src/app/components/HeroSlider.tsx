"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { openContactModal } from "./utils";

const images = [
    "/images/hero/slide1.avif",
    "/images/hero/slide2.avif",
    "/images/hero/slide3.avif",
    "/images/hero/slide4.avif",
    "/images/hero/slide5.avif",
    "/images/hero/slide6.avif",  
    "/images/hero/slide7.avif",    
    "/images/hero/slide8.avif",
    "/images/hero/slide9.avif"    
    // Add more images as needed
];

const heading = "Code. Consult. Catalyze.";
const subheading = "Mentoring Talent. Building Software. Shaping Careers.";
const paragraph =
    "We empower growth through real-world internships, expert-led training, and custom software solutions for businesses and individuals.";

export default function HeroSlider() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [AnimatePresence, setAnimatePresence] = useState<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [MotionImg, setMotionImg] = useState<any>(null);

    useEffect(() => {
        // Dynamically import framer-motion only on client
        import("framer-motion").then(mod => {
            setAnimatePresence(() => mod.AnimatePresence);
            setMotionImg(() => mod.motion.img);
        });
    }, []);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    if (!MotionImg || !AnimatePresence) return null;

    return (
        <section
            className="w-screen min-h-[95vh] min-h-[100svh] h-auto flex items-stretch justify-stretch overflow-hidden z-0 relative"
            style={{ minHeight: '100svh', height: 'auto' }}
        >
            <AnimatePresence initial={false}>
                <MotionImg
                    key={images[index]}
                    src={images[index]}
                    alt="Navetrix Hero Slide"
                    className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    draggable={false}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 lg:px-24 z-10 pt-8 md:pt-16">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in leading-tight">
                    {heading}
                </h1>
                <h2 className="text-lg xs:text-xl md:text-2xl font-semibold text-white mb-2 animate-fade-in delay-100">
                    {subheading}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 animate-fade-in delay-200 whitespace-nowrap w-full text-center">
                    {paragraph}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl mx-auto">
                    <button
                        type="button"
                        className="bg-[#00897B] hover:bg-[#00695C] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all text-lg min-w-[180px] block text-center focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:ring-offset-2"
                        onClick={openContactModal}
                        aria-label="Start Your Journey with Navetrix"
                    >
                        Start Your Journey
                    </button>
                    <Link href="/#services" scroll={true} className="bg-white hover:bg-gray-100 text-[#1B1F3B] font-bold py-3 px-6 rounded-lg shadow-lg transition-all text-lg border border-[#00C9A7] min-w-[180px] block text-center focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:ring-offset-2">
                        Explore Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
