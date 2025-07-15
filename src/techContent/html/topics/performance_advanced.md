# HTML Performance Optimization (Advanced)

## Key Concepts
- **Critical Rendering Path:** Optimize order of resource loading.
- **Minification & Compression:** Minify HTML, CSS, JS; use Gzip/Brotli.
- **Lazy Loading:** Defer images, videos, and scripts.
- **Preload, Prefetch, and Preconnect:** Speed up resource fetching.
- **HTTP/2 & Caching:** Use modern protocols and cache-control headers.
- **Web Vitals:** Measure LCP, FID, CLS for user experience.

## Advanced Example
```html
<link rel="preload" href="main.css" as="style">
<img src="image.jpg" loading="lazy" alt="...">
```

## Best Practices
- Inline critical CSS for above-the-fold content.
- Defer non-essential scripts.
- Use browser dev tools to audit performance.

## Interview Q&A
**Q: What is the critical rendering path?**
A: The sequence of steps browsers take to convert HTML, CSS, and JS into pixels on screen.

**Q: How do you measure and improve Web Vitals?**
A: Use tools like Lighthouse and optimize for LCP, FID, and CLS.

## References
- [Web Performance Optimization](https://web.dev/fast/)
- [Google Web Vitals](https://web.dev/vitals/)

## Diagram
![HTML Performance Optimization](https://web.dev/images/web-performance-optimization.png)
