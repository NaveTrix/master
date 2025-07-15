// Returns an array of { slug: string[] } objects from menu.json
import menu from './menu.json';
import fs from 'fs';
import matter from 'gray-matter';

type BlogSlug = { slug: string[] };

export function getAllBlogSlugsFromMenu(): BlogSlug[] {
  const result: BlogSlug[] = [];
  for (const category of Object.values(menu)) {
    if (Array.isArray(category)) {
      for (const entry of category) {
        if (entry.path) {
          // Remove .md extension and split by '/'
          const slugArr = entry.path.replace(/\.md$/, '').split('/');
          result.push({ slug: slugArr });
        }
      }
    }
  }
  return result;
}

export function getPostMetaFromMenu(slug: string[]): { title: string, path: string, category: string } | null {
  const menuObj = menu as Record<string, Array<{ title: string; path: string }>>;
  const slugPath = slug.join('/') + '.md';
  for (const [category, entries] of Object.entries(menuObj)) {
    for (const entry of entries) {
      if (entry.path === slugPath) {
        return { title: entry.title, path: entry.path, category };
      }
    }
  }
  return null;
}

export type FrontMatter = Record<string, any>;

export function getPostContent(path: string): { content: string, data: FrontMatter } {
  const fullPath = require('path').join(__dirname, path);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(file);
  return { content, data };
}
