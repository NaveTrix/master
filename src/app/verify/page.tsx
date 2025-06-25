"use client";
import { useState } from "react";

export default function CertificateVerifyPage() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<null | { name: string; program: string; date: string } | false>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/certificates.json");
      const data = await res.json();
      const found = (data as { id: string; name: string; program: string; date: string }[]).find(
        (c) => c.id.toLowerCase() === certId.trim().toLowerCase()
      );
      setResult(found || false);
    } catch {
      setResult(false);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Certificate Verification</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter Certificate ID"
          value={certId}
          onChange={e => setCertId(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading || !certId}
          className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Checking..." : "Verify"}
        </button>
      </form>
      {typeof result === "object" && result !== null && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-lg font-semibold text-green-700 mb-2">Certificate is valid!</div>
          <div className="text-gray-800">Name: <span className="font-medium">{result.name}</span></div>
          <div className="text-gray-800">Program: <span className="font-medium">{result.program}</span></div>
          <div className="text-gray-800">Date: <span className="font-medium">{result.date}</span></div>
        </div>
      )}
      {result === false && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center text-red-700 font-medium">
          Certificate not found or invalid.
        </div>
      )}
    </div>
  );
}
