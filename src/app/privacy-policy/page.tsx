"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full flex flex-col items-center bg-gray-50 py-8 px-2 min-h-[80vh] mt-20 sm:mt-24 md:mt-28">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">We value your privacy. This policy explains how Navetrix collects, uses, and protects your personal information.</p>
      <h2 className="text-xl font-semibold text-blue-700 mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Personal details (name, email, etc.) provided via forms</li>
        <li>Usage data (pages visited, time spent, etc.)</li>
      </ul>
      <h2 className="text-xl font-semibold text-blue-700 mt-8 mb-2">How We Use Information</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>To provide and improve our services</li>
        <li>To communicate with you about updates or offers</li>
        <li>To ensure site security and prevent abuse</li>
      </ul>
      <h2 className="text-xl font-semibold text-blue-700 mt-8 mb-2">Your Rights</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>You can request to view, update, or delete your data</li>
        <li>Contact us at info@navetrix.com for privacy requests</li>
      </ul>
      <p className="text-gray-500 mt-8">This policy may be updated periodically. Please review for changes.</p>
    </main>
  );
}
