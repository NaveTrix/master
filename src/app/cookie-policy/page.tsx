"use client";

export default function CookiePolicyPage() {
  return (
    <main className="w-full flex flex-col items-center bg-gray-50 py-8 px-2 min-h-[80vh] mt-20 sm:mt-24 md:mt-28">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Cookie Policy</h1>
      <p className="mb-4 text-gray-700">This Cookie Policy explains how Navetrix uses cookies and similar technologies on our website.</p>
      <h2 className="text-xl font-semibold text-blue-700 mt-8 mb-2">What Are Cookies?</h2>
      <p className="text-gray-700 mb-4">Cookies are small text files stored on your device to help websites function and collect information about your visit.</p>
      <h2 className="text-xl font-semibold text-blue-700 mt-8 mb-2">How We Use Cookies</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>To remember your preferences and settings</li>
        <li>To analyze site usage and improve our services</li>
        <li>For security and authentication purposes</li>
      </ul>
      <h2 className="text-xl font-semibold text-blue-700 mt-8 mb-2">Managing Cookies</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>You can control cookies via your browser settings</li>
        <li>Disabling cookies may affect site functionality</li>
      </ul>
      <p className="text-gray-500 mt-8">By using our site, you consent to our use of cookies as described in this policy.</p>
    </main>
  );
}
