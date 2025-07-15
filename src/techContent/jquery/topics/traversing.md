# jQuery Traversing

## Key Concepts
- Traversing means moving through the DOM tree to find elements relative to others.
- Methods: `.parent()`, `.children()`, `.find()`, `.siblings()`, `.next()`, `.prev()`, `.closest()`.

## Real-World Examples

### Example 1: Find Parent Element
```javascript
$('.item').parent().addClass('highlight');
```

### Example 2: Find Children
```javascript
$('#list').children('li').css('color', 'blue');
```

### Example 3: Find Siblings
```javascript
$('.active').siblings().removeClass('active');
```

### Example 4: Find Closest Ancestor
```javascript
$('.btn').closest('form').addClass('form-highlight');
```

## Interview Questions & Answers

**Q1: How do you find all child elements of a parent?**
A: Use `.children()`.

**Q2: Real-time: How do you select the next sibling of an element?**
A: Use `.next()`.

**Q3: How do you find the closest ancestor matching a selector?**
A: Use `.closest(selector)`.

## References
- [jQuery Traversing](https://api.jquery.com/category/traversing/)
- [jQuery Learning Center: Traversing](https://learn.jquery.com/using-jquery-core/traversing/)
