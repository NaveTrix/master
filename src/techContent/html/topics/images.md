# HTML Images

## Key Concepts
- **<img> Tag:** Embeds images in web pages.
- **Attributes:** `src`, `alt`, `width`, `height`, `loading`, `srcset` for responsive images.
- **Lazy Loading:** `loading="lazy"` defers offscreen images for performance.
- **Responsive Images:** `srcset` and `<picture>` for different device resolutions.
- **SVG Images:** Scalable Vector Graphics for crisp, scalable visuals.

## Advanced Example
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Sample" width="400" loading="lazy">
</picture>
```

## Best Practices
- Always use descriptive `alt` text for accessibility and SEO.
- Optimize image size and format for faster loading.
- Use SVG for icons and graphics that need to scale.

## Interview Q&A
**Q: How do you serve different images for retina displays?**
A: Use `srcset` and `sizes` attributes or the `<picture>` element.

**Q: What is the benefit of lazy loading images?**
A: Improves page load speed by loading images only when needed.

## References
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [SVG in HTML](https://developer.mozilla.org/en-US/docs/Web/SVG)

## Diagram
![HTML Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images/html-responsive-images.png)
