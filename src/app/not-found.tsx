import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-3xl font-bold text-[#00C9A7] mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-6">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="px-6 py-2 rounded-lg bg-[#00695C] text-white font-semibold shadow hover:bg-[#004D40] transition">Go to Home</Link>
    </div>
  );
}
