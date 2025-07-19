"use client";
import menu from '../../techContent/menu.json';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogCategoryMenu() {
  const pathname = usePathname();
  // Extract category from path: /blog/[category]/...
  const match = pathname ? pathname.match(/^\/blog\/?([^\/]+)?/) : null;
  const activeCategory = match && match[1] ? match[1] : null;

  const categories = Object.keys(menu);

  return (
    <nav className="w-full bg-[#1B1F3B] border-b border-gray-800 shadow-sm sticky top-[50px] z-[101]">
      <ul className="flex flex-row gap-2 px-4 py-2 overflow-x-auto">
        {categories.map(category => (
          <li key={category}>
            <Link
              href={`/blog/${category}`}
              className={`px-4 py-2 rounded-full capitalize font-semibold transition-colors whitespace-nowrap
                ${activeCategory === category
                  ? 'bg-[#00C9A7] text-[#1B1F3B] shadow'
                  : 'bg-[#23284a] text-white hover:bg-[#00C9A7] hover:text-[#1B1F3B] border border-transparent'}
              `}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
