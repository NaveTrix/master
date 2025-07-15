# HTML Basics

## Key Concepts
- **HTML Document Structure:** `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` define the skeleton of every web page.
- **Elements & Tags:** HTML is made up of elements (like `<p>`, `<a>`, `<div>`) defined by tags. Tags can have attributes (e.g., `<img src="...">`).
- **Nesting:** Elements can be nested inside each other, but must be properly closed and not overlap.
- **Comments:** `<!-- This is a comment -->` are ignored by browsers and useful for documentation.
- **Whitespace:** HTML ignores extra spaces and line breaks, but `<pre>` preserves them.
- **Case Sensitivity:** HTML tags are not case-sensitive, but lowercase is standard.
- **Block vs Inline Elements:** Block elements (e.g., `<div>`, `<h1>`) start on a new line; inline elements (e.g., `<span>`, `<a>`) do not.
- **Void Elements:** Elements like `<img>`, `<br>`, `<hr>` do not have closing tags.

## Real-World Example
- Creating a simple web page with a heading, paragraph, and image.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph.</p>
    <img src="logo.png" alt="Logo" width="100">
  </body>
</html>
```
- HTML is used in emails, documentation, and even mobile apps (via hybrid frameworks).

## Best Practices
- Always use the correct doctype and close all tags.
- Use semantic tags for better accessibility and SEO.
- Comment complex sections for maintainability.

## Interview Q&A
**Q: What is HTML?**
A: HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It structures content and provides meaning to browsers and assistive technologies.

**Q: What is the purpose of the `<!DOCTYPE html>` declaration?**
A: It tells the browser to use the latest HTML standard (HTML5), ensuring consistent rendering.

**Q: What is the difference between block and inline elements?**
A: Block elements start on a new line and take up the full width; inline elements flow within a line and only take up as much width as needed.

**Q: Why is semantic HTML important?**
A: It improves accessibility, SEO, and code maintainability by giving meaning to content.

## References
- [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [HTML Living Standard](https://html.spec.whatwg.org/)

## Relevant Image
![HTML Structure](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/html-basics.png)
