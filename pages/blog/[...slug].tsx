import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { MdxPost } from '../../src/types/mdx';
import { mdxComponents } from '../../src/components/mdxComponents';

const CONTENT_ROOT = path.join(process.cwd(), 'src/techContent');

function getAllMdxFiles(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllMdxFiles(filePath, fileList);
    } else if (file.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function getSlugFromFilePath(filePath: string) {
  return filePath
    .replace(CONTENT_ROOT, '')
    .replace(/\\/g, '/')
    .replace(/^\//, '')
    .replace(/\.mdx$/, '');
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getAllMdxFiles(CONTENT_ROOT);
  const paths = files.map((file) => ({
    params: { slug: getSlugFromFilePath(file).split('/') },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true };
  }
  const slugArr = Array.isArray(params.slug) ? params.slug : [params.slug];
  const mdxPath = path.join(CONTENT_ROOT, ...slugArr) + '.mdx';
  if (!fs.existsSync(mdxPath)) {
    return { notFound: true };
  }
  const source = fs.readFileSync(mdxPath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      post: {
        frontmatter: data,
        mdxSource,
      },
    },
  };
};

export default function BlogPostPage({ post }: { post: MdxPost }) {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto py-8">
      <h1>{post.frontmatter.title}</h1>
      <MDXRemote {...post.mdxSource} components={mdxComponents} />
    </article>
  );
}
