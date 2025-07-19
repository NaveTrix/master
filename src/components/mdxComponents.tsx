import React from 'react';
import Link from 'next/link';

const H1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
);
const H2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
);
const H3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />
);
const P = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className="mb-4 leading-relaxed" {...props} />
);
const A = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link href={props.href || ''} className="text-blue-600 underline hover:text-blue-800" {...props} />
);
const Code = (props: React.HTMLAttributes<HTMLElement>) => (
  <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm" {...props} />
);
const Pre = (props: React.HTMLAttributes<HTMLPreElement>) => (
  <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto my-4" {...props} />
);

export const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  code: Code,
  pre: Pre,
};
