import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { serialize } from 'next-mdx-remote/serialize';

export type MdxMeta = {
  title: string;
  slug: string;
  description?: string;
  filePath: string;
};

const TECH_CONTENT_DIR = path.join(process.cwd(), 'src', 'techContent');

function getAllMdxFiles(dir: string): string[] {
  let results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      results.push(fullPath);
    }
  }
  return results;
}

export function getAllMdxMeta(): MdxMeta[] {
  const files = getAllMdxFiles(TECH_CONTENT_DIR);
  const metaArr: MdxMeta[] = files.map(file => {
    const source = fs.readFileSync(file, 'utf8');
    const { data } = matter(source);
    const relPath = path.relative(TECH_CONTENT_DIR, file).replace(/\\/g, '/');
    return {
      title: data.title || '',
      slug: data.slug || relPath.replace(/\.mdx$/, ''),
      description: data.description || '',
      filePath: relPath,
    };
  });
  // Sort by slug, then title
  metaArr.sort((a, b) => (a.slug > b.slug ? 1 : a.slug < b.slug ? -1 : a.title.localeCompare(b.title)));
  return metaArr;
}

// Helper to get post content and frontmatter for a given slug (array or string)
export async function getMdxPostBySlug(slug: string[] | string) {
  const slugArr = Array.isArray(slug) ? slug : slug.split('/');
  const mdxPath = path.join(TECH_CONTENT_DIR, ...slugArr) + '.mdx';
  if (!fs.existsSync(mdxPath)) return null;
  const source = fs.readFileSync(mdxPath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return {
    frontmatter: {
      title: data.title || '',
      slug: data.slug || slugArr.join('/'),
      description: data.description || '',
    },
    mdxSource,
  };
}
