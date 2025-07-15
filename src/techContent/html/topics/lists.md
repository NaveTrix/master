# HTML Lists

## Key Concepts
- **Unordered Lists:** `<ul>` with `<li>` items for bulleted lists.
- **Ordered Lists:** `<ol>` with `<li>` items for numbered lists. Use `type` and `start` attributes for custom numbering.
- **Description Lists:** `<dl>` for a list of terms and descriptions, with `<dt>` (term) and `<dd>` (description).
- **Nested Lists:** Lists within lists for hierarchical data (e.g., multi-level menus).
- **Accessibility:** Use lists for navigation menus and groupings for screen readers.
- **Custom Styling:** Use CSS for custom bullets, numbers, and indentation.

## Real-World Example
- Creating a navigation menu using an unordered list.
```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```
- Creating a multi-level list:
```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
```

## Best Practices
- Use lists for grouping related items, not just for indentation.
- Use `<ol>` for steps or sequences, `<ul>` for unordered items.
- Use description lists for glossaries, FAQs, and term-definition pairs.
- Style lists with CSS for custom appearance.

## Interview Q&A
**Q: What is the difference between `<ul>` and `<ol>`?**
A: `<ul>` is for unordered (bulleted) lists; `<ol>` is for ordered (numbered) lists.

**Q: What is a description list?**
A: A list of terms and descriptions using `<dl>`, `<dt>`, and `<dd>`.

**Q: How do you create a multi-level list?**
A: Nest `<ul>` or `<ol>` elements inside `<li>` items.

## References
- [HTML Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
- [Accessible Lists](https://webaim.org/techniques/semanticstructure/#lists)

## Relevant Image
![HTML Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul/html-lists.png)
