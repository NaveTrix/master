# Semantic HTML

## Key Concepts
- **Semantic Elements:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`, `<mark>`, `<time>`, etc. These elements describe their meaning in a human- and machine-readable way.
- **Accessibility:** Semantic HTML provides landmarks and structure for screen readers, improving navigation for users with disabilities.
- **SEO Benefits:** Search engines use semantic tags to better understand page structure and content importance.
- **Document Structure:** Use semantic elements to break content into logical sections, making code easier to read and maintain.
- **Microdata & Schema.org:** Add structured data for rich search results.

## Real-World Example
- Structuring a blog post using `<article>`, `<header>`, and `<footer>`.
```html
<article>
  <header>
    <h1>Semantic HTML in Practice</h1>
    <p>By Jane Doe, <time datetime="2025-06-19">June 19, 2025</time></p>
  </header>
  <section>
    <p>This article explains why semantic HTML matters...</p>
  </section>
  <footer>
    <p>Tags: <a href="#">HTML</a>, <a href="#">Accessibility</a></p>
  </footer>
</article>
```
- Use `<nav>` for navigation menus, `<aside>` for sidebars, `<figure>` for images with captions.

## Best Practices
- Use semantic tags for all major page regions.
- Avoid using `<div>` and `<span>` when a semantic element is available.
- Use ARIA roles only when semantic HTML is insufficient.
- Add structured data (JSON-LD, microdata) for enhanced search results.

## Interview Q&A
**Q: What is semantic HTML?**
A: Using elements that convey meaning about the content they contain, improving accessibility, SEO, and maintainability.

**Q: Why is semantic HTML important?**
A: It improves accessibility, SEO, and code maintainability, and helps browsers and assistive technologies understand page structure.

**Q: How do you use microdata or schema.org with semantic HTML?**
A: Add attributes like `itemscope`, `itemtype`, and `itemprop` to semantic elements for structured data.

## References
- [Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [Schema.org](https://schema.org/)

## Relevant Image
![Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics/semantic-html.png)
