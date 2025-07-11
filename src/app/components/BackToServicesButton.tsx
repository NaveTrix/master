"use client";

export default function BackToServicesButton() {
  return (
    <button
      onClick={() => window.location.assign('/#services')}
      className="inline-flex items-center gap-2 px-4 py-2 mb-4 md:mb-6 rounded-lg border border-[#00C9A7] text-[#00C9A7] font-semibold bg-white hover:bg-[#00C9A7] hover:text-white transition-colors duration-200 shadow focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:ring-offset-2 text-base md:text-lg"
      aria-label="Back to Services"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      Back to Services
    </button>
  );
}
