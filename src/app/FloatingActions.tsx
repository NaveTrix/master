"use client";
import { FaWhatsapp, FaComments } from "react-icons/fa";
import { openContactModal } from "./components/utils"; // Adjust the import based on your project structure

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Chat Icon: white background, blue border, blue icon */}
      <button
        aria-label="Chat with us"
        onClick={openContactModal}
        className="bg-white text-primary border-4 border-primary shadow-xl rounded-full p-5 flex items-center justify-center transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/60"
      >
        <FaComments size={32} />
      </button>
      {/* WhatsApp Icon: green background, white icon, green border */}
      <a
        href="https://wa.me/919493589057"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="bg-green-500 text-white border-4 border-green-600 shadow-xl rounded-full p-5 flex items-center justify-center transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}
