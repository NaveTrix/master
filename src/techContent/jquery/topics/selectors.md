# jQuery Selectors

## Key Concepts
- Selectors are used to find and select HTML elements.
- jQuery selectors are based on CSS selectors.
- Common selectors: ID (`#id`), class (`.class`), element (`div`), attribute (`[attr=value]`).

## Real-World Examples

### Example 1: Select by Class
```javascript
$('.menu-item').addClass('active');
```

### Example 2: Select by Attribute
```javascript
$('input[type="text"]').val('Default');
```

### Example 3: Multiple Selectors
```javascript
$('h1, h2, .highlight').css('color', 'red');
```

## Interview Questions & Answers

**Q1: How do you select all paragraphs on a page?**
A: Use `$('p')`.

**Q2: Real-time: How do you select the first item in a list?**
A: Use `$('li:first')` or `$('li').first()`.

**Q3: How do you select elements with a specific attribute?**
A: Use `[attribute=value]` selector, e.g., `$('[data-role="admin"]')`.

## References
- [jQuery Selectors](https://api.jquery.com/category/selectors/)
- [jQuery Learning Center: Selectors](https://learn.jquery.com/using-jquery-core/selecting-elements/)
