export interface MdxFrontmatter {
  title: string;
  slug: string;
  description?: string;
}


import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface MdxPost {
  frontmatter: MdxFrontmatter;
  mdxSource: MDXRemoteSerializeResult;
}
