import { getAllBlogSlugsFromMenu, getPostMetaFromMenu, getPostContent } from '../../../techContent/getAllBlogSlugsFromMenu';
import BlogLayout from '../BlogLayout';

// Dummy MarkdownPage component for demonstration
function MarkdownPage({ content, data }: { content: string, data: any }) {
  return (
    <article>
      <h1>{data.title}</h1>
      <div>{content}</div>
    </article>
  );
}

export async function generateStaticParams() {
  // getAllBlogSlugsFromMenu returns [{ slug: string[] }]
  return getAllBlogSlugsFromMenu();
}

// ...rest of your dynamic blog page implementation...
export default function BlogPostPage({ params }: { params: { slug: string[] } }) {
  const meta = getPostMetaFromMenu(params.slug);
  if (!meta) return <div>Not found</div>;
  const { content, data } = getPostContent(`../techContent/${meta.path}`);
  return (
    <BlogLayout>
      <MarkdownPage content={content} data={data} />
    </BlogLayout>
  );
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const meta = getPostMetaFromMenu(params.slug);
  if (!meta) return { title: 'Not found', description: '' };
  const { data } = getPostContent(`../techContent/${meta.path}`);
  return {
    title: data.title || meta.title,
    description: data.description || '',
  };
}
