"use client";
import Navbar from "../Navbar";
import BlogCategoryMenu from "./BlogCategoryMenu";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <BlogCategoryMenu />
      {/* Always render the toggle button, use only CSS for visibility */}
      <button
        className="md:hidden fixed top-[106px] left-2 z-[102] bg-[#00C9A7] text-white px-3 py-2 rounded shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
        type="button"
      >
        Topics
      </button>
      <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50 pt-[50px]">
        {/* Always render the sidebar, use only CSS for visibility */}
        <div
          className={`fixed md:static top-[150px] left-0 z-[101] bg-white border-r border-gray-200 w-64 max-w-xs h-full md:h-auto transition-transform duration-300
            md:translate-x-0 md:block
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            block md:block
          `}
        >
          <Sidebar />
        </div>
        {/* Always render the overlay, use only CSS for visibility */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-30 z-[100] md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
          onClick={() => setSidebarOpen(false)}
        />
        <main className="flex-1 px-4 md:px-8 py-8 max-w-4xl mx-auto md:ml-0 ml-0 mt-[150px] md:mt-0">
          {children}
        </main>
      </div>
    </>
  );
}
