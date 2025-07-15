# HTML SEO Best Practices

## Key Concepts
- **Meta Tags:** `<title>`, `<meta name="description">`, `<meta name="robots">`, `<meta property="og:title">`, `<link rel="canonical">` for SEO, social sharing, and duplicate content prevention.
- **Heading Structure:** Use `<h1>`-`<h6>` for content hierarchy. Only one `<h1>` per page for the main topic. Use headings in order for clarity.
- **Alt Text:** For images, icons, and graphics. Required for accessibility and SEO.
- **Semantic HTML:** Use elements like `<article>`, `<section>`, `<nav>`, `<aside>`, `<footer>` to help search engines understand page structure.
- **Structured Data:** Use JSON-LD, microdata, or RDFa for rich search results (e.g., breadcrumbs, reviews, events).
- **Performance:** Fast-loading pages rank higher. Optimize images, use lazy loading, and minimize render-blocking resources.
- **Mobile Friendliness:** Use responsive design and viewport meta tag for mobile SEO.
- **Internal Linking:** Use descriptive anchor text and logical navigation.
- **Sitemaps & Robots.txt:** Help search engines crawl and index your site efficiently.

## Real-World Example
- Optimizing a web page with proper headings and meta descriptions.
```html
<head>
  <title>Best HTML SEO Practices</title>
  <meta name="description" content="Learn the best SEO practices for HTML web pages.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="https://example.com/seo">
  <meta property="og:title" content="Best HTML SEO Practices">
</head>
<main>
  <h1>HTML SEO Guide</h1>
  <section>
    <h2>Meta Tags</h2>
    <p>...</p>
  </section>
</main>
```
- Adding structured data for breadcrumbs:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "/"},
    {"@type": "ListItem", "position": 2, "name": "SEO", "item": "/seo"}
  ]
}
</script>
```

## Best Practices
- Use unique, descriptive titles and meta descriptions for every page.
- Use semantic HTML and structured data for better indexing.
- Optimize for speed and mobile devices.
- Use alt text for all images and descriptive anchor text for links.
- Submit sitemaps to Google Search Console and Bing Webmaster Tools.

## Interview Q&A
**Q: What is the purpose of meta tags?**
A: They provide metadata about the page for browsers and search engines, influencing how your site appears in search results.

**Q: How does semantic HTML help SEO?**
A: It makes content easier for search engines to understand and index, improving ranking and visibility.

**Q: What is structured data and why is it important?**
A: Structured data helps search engines display rich results (e.g., stars, breadcrumbs) and better understand your content.

## References
- [HTML SEO Guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## Relevant Image
![HTML SEO](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/html-seo.png)
