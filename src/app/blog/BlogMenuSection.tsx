"use client";
import menu from '../../techContent/menu.json';
import Link from "next/link";
import { useState } from "react";

export default function BlogMenuSection() {
  const [error, setError] = useState<string | null>(null);
  let categories: [string, { title: string; path: string }[]][] = [];
  try {
    categories = Object.entries(menu);
  } catch (e) {
    setError("Failed to load blog menu."+e);
  }

  if (error) {
    return <div className="text-red-600 text-center py-8">{error}</div>;
  }

  return (
    <section className="w-full max-w-3xl mx-auto my-8 px-2">
      <div className="bg-white rounded-xl shadow p-4 md:p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-[#1B1F3B]">Explore Blog Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-2 text-[#00C9A7] capitalize">{category}</h3>
              <ul className="space-y-1">
                {items.map(item => (
                  <li key={item.path}>
                    <Link
                      href={`/blog/${item.path.replace(/\.md$/, "")}`}
                      className="block px-2 py-1 rounded hover:bg-gray-100 text-[#1B1F3B] text-sm font-medium transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
