"use client";
import menu from '../../techContent/menu.json';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo, useDeferredValue } from "react";
import Fuse from "fuse.js";

// Flatten menu for search
function flattenMenu(menuObj: Record<string, any[]>): any[] {
  const items: any[] = [];
  for (const [category, entries] of Object.entries(menuObj)) {
    for (const entry of entries) {
      items.push({ ...entry, category });
    }
  }
  return items;
}

export default function Sidebar() {
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, "");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const allItems = useMemo(() => flattenMenu(menu), []);
  const fuse = useMemo(() => new Fuse(allItems, {
    keys: ["title", "path", "category"],
    threshold: 0.3,
  }), [allItems]);

  const filtered = deferredQuery
    ? fuse.search(deferredQuery).map(res => res.item)
    : allItems;

  // Group filtered results by category
  const grouped = useMemo(() => {
    const map = new Map();
    for (const item of filtered) {
      if (!map.has(item.category)) map.set(item.category, []);
      map.get(item.category).push(item);
    }
    return map;
  }, [filtered]);

  return (
    <aside className="w-full max-w-xs p-4 bg-white border-r border-gray-200">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search topics..."
        className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring"
      />
      {[...grouped.entries()].map(([category, entries]) => (
        <div key={category} className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-[#1B1F3B]">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <ul className="space-y-1">
            {entries.map((entry: any) => {
              const url = "/blog/" + entry.path.replace(/\.md$/, "");
              const isActive = cleanPath === url;
              return (
                <li key={entry.path}>
                  <Link
                    href={url}
                    className={`block px-3 py-1 rounded transition-colors font-medium text-sm ${isActive ? "bg-[#00C9A7] text-white" : "text-[#1B1F3B] hover:bg-gray-100"}`}
                  >
                    {entry.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
