"use client";
import { useRouter } from "next/navigation";

export default function BackToServicesButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/#services");
        // Optionally, scroll to the section after navigation
        setTimeout(() => {
          const el = document.getElementById("services");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }}
      className={`relative inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#00C9A7] text-[#00C9A7] font-semibold bg-white shadow-md hover:bg-gradient-to-r hover:from-[#00C9A7] hover:to-[#6D5BFF] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:ring-offset-2 text-sm md:text-base active:scale-95 ${className}`}
      aria-label="Back to Services"
      style={{ boxShadow: '0 2px 8px 0 rgba(0,201,167,0.08)' }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      <span>Back to Services</span>
    </button>
  );
}
