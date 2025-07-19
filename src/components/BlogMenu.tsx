import React from 'react';
import Link from 'next/link';
import { getAllMdxMeta } from '../lib/mdx';

// Helper to group by category (first segment of slug)
function groupByCategory(metaArr: ReturnType<typeof getAllMdxMeta>) {
  const grouped: Record<string, typeof metaArr> = {};
  metaArr.forEach(meta => {
    const [category] = meta.slug.split('/');
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(meta);
  });
  return grouped;
}

export default function BlogMenu() {
  const metaArr = getAllMdxMeta();
  const grouped = groupByCategory(metaArr);

  return (
    <nav className="w-full max-w-md mx-auto my-8 px-4">
      <h2 className="text-xl font-bold mb-4">Blog Topics</h2>
      <ul className="divide-y divide-gray-200">
        {Object.entries(grouped).map(([category, posts]) => (
          <li key={category} className="py-2">
            <div className="font-semibold text-lg text-blue-700 mb-1 capitalize">{category}</div>
            <ul className="ml-4 space-y-1">
              {posts.map(post => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="hover:underline text-gray-800 block truncate">
                    {post.title || post.slug}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <style jsx>{`
        nav {
          background: #fff;
          border-radius: 0.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        @media (max-width: 640px) {
          nav { padding: 1rem 0.5rem; }
          ul.ml-4 { margin-left: 0.5rem; }
        }
      `}</style>
    </nav>
  );
}
