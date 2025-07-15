# HTML Canvas & SVG

## Key Concepts
- **Canvas API:** Draw 2D graphics, charts, and animations with JavaScript. Pixel-based, not part of the DOM after drawing.
- **SVG (Scalable Vector Graphics):** XML-based vector images, scalable without loss of quality. Each shape is a DOM element and can be styled with CSS or manipulated with JS.
- **Interactivity:** Both support dynamic updates and user interaction. SVG elements can have event listeners directly; Canvas requires manual hit detection.
- **Accessibility:** SVG is more accessible and searchable than Canvas. Use `<title>`, `<desc>`, and ARIA attributes for screen readers.
- **Performance:** Canvas is better for real-time, pixel-based graphics (games, visualizations); SVG for static or less complex visuals (icons, diagrams).
- **Exporting:** SVG can be exported as XML or images; Canvas can be exported as PNG/JPEG using `toDataURL()`.

## Advanced Example
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  const ctx = document.getElementById('myCanvas').getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 150, 75);
  // Animation example
  let x = 10;
  function animate() {
    ctx.clearRect(0, 0, 200, 100);
    ctx.fillRect(x, 10, 50, 50);
    x = (x + 2) % 150;
    requestAnimationFrame(animate);
  }
  animate();
</script>
<svg width="200" height="100" aria-labelledby="svgTitle svgDesc">
  <title id="svgTitle">Green Rectangle</title>
  <desc id="svgDesc">A green rectangle drawn with SVG</desc>
  <rect width="150" height="75" x="10" y="10" fill="green" />
</svg>
```

## Best Practices
- Use SVG for icons, logos, and static graphics that need to scale or be styled.
- Use Canvas for games, real-time visualizations, and when you need to frequently update many pixels.
- Always provide accessibility features for SVG graphics.
- Optimize SVG files for performance (remove unnecessary metadata).

## Interview Q&A
**Q: When should you use Canvas over SVG?**
A: Use Canvas for complex, real-time, or pixel-based graphics; SVG for static, scalable images and when accessibility is important.

**Q: How do you make SVG graphics accessible?**
A: Use `<title>`, `<desc>`, and ARIA attributes to describe the graphic for screen readers.

**Q: How do you export a Canvas drawing as an image?**
A: Use the `toDataURL()` method to get a base64-encoded PNG or JPEG.

## References
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [SVG Guide](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [SVG Accessibility](https://www.w3.org/WAI/tutorials/images/svg/)

## Diagram
![Canvas vs SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/canvas-vs-svg.png)
