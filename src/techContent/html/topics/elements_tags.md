# HTML Elements & Tags

## Key Concepts
- **Element:** Consists of a start tag, content, and end tag (e.g., `<p>Hello</p>`).
- **Void Elements:** Elements without content or end tag (e.g., `<img>`, `<br>`, `<hr>`). Used for self-contained content.
- **Block vs Inline Elements:** Block (e.g., `<div>`, `<p>`, `<ul>`, `<table>`) start on a new line and expand to fill the width. Inline (e.g., `<span>`, `<a>`, `<strong>`, `<img>`) flow within a line.
- **Nested Elements:** Elements can be nested, but must be properly closed and not overlap.
- **Custom Elements:** HTML5 allows for custom elements (Web Components) using `<my-element>` syntax.
- **Global Attributes:** Attributes like `id`, `class`, `style`, `title` can be used on any element.
- **Data Attributes:** Custom attributes prefixed with `data-` for storing extra information (e.g., `<div data-user-id="123">`).

## Real-World Example
- Using `<div>` for layout and `<span>` for inline text styling.
- Creating a custom web component:
  ```html
  <user-card data-user-id="42"></user-card>
  ```
- Using ARIA attributes for accessibility:
  ```html
  <button aria-label="Close">&times;</button>
  ```

## Best Practices
- Use semantic elements (e.g., `<header>`, `<nav>`, `<main>`, `<footer>`) for structure.
- Avoid excessive use of `<div>` and `<span>` (known as "div soup").
- Use data attributes for storing custom data, not for styling.

## Interview Q&A
**Q: What is the difference between block and inline elements?**
A: Block elements start on a new line and take full width; inline elements do not and only take up as much width as needed.

**Q: Name three void elements in HTML.**
A: `<img>`, `<br>`, `<hr>`

**Q: What are custom elements?**
A: User-defined HTML tags (Web Components) that encapsulate functionality and style.

## References
- [HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## Relevant Image
![HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html-elements.png)
