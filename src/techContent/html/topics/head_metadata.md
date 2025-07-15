# HTML Head & Metadata

## Key Concepts
- **<head> Element:** Contains metadata, links, scripts, styles, SEO, and social sharing tags. Not visible to users but critical for browsers and search engines.
- **Meta Tags:**
  - `<meta charset>`: Character encoding (usually UTF-8).
  - `<meta name="description">`: Page summary for search engines.
  - `<meta name="viewport">`: Controls layout on mobile devices.
  - `<meta name="robots">`: Search engine crawling instructions.
  - `<meta http-equiv>`: HTTP headers (e.g., refresh, content-type).
- **Title Tag:** `<title>` sets the page title in the browser tab and is a key SEO factor.
- **Link Tag:**
  - `<link rel="stylesheet">` for CSS.
  - `<link rel="icon">` for favicon.
  - `<link rel="preload">`, `<link rel="prefetch">` for performance.
- **Script Tag:** `<script src="..."></script>` for JavaScript files. Use `defer` or `async` for performance.
- **Open Graph & Twitter Cards:** `<meta property="og:title">`, `<meta name="twitter:card">` for social media sharing.
- **Canonical Tag:** `<link rel="canonical">` to prevent duplicate content issues.

## Real-World Example
```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Learn HTML head and metadata.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="index, follow">
  <title>HTML Metadata Example</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
  <link rel="canonical" href="https://example.com/page">
  <meta property="og:title" content="HTML Metadata Example">
  <meta name="twitter:card" content="summary">
  <script src="main.js" defer></script>
</head>
```
- Used for SEO, social sharing, performance, and browser compatibility.

## Best Practices
- Always set charset and viewport meta tags.
- Use descriptive titles and meta descriptions for SEO.
- Add Open Graph and Twitter tags for better social sharing.
- Use canonical tags to avoid duplicate content penalties.
- Defer or async non-critical scripts for faster page loads.

## Interview Q&A
**Q: What is the purpose of the viewport meta tag?**
A: It controls layout on mobile browsers for responsive design.

**Q: Why is the title tag important?**
A: It sets the page title in the browser and is important for SEO and user experience.

**Q: What is a canonical tag?**
A: It tells search engines which URL is the preferred version to avoid duplicate content issues.

## References
- [HTML Head Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
- [Meta Tags for SEO](https://developers.google.com/search/docs/appearance/structure/meta-tags)

## Diagram
![HTML Head Structure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head/html-head-structure.png)
