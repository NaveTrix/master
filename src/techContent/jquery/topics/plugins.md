# jQuery Plugins

## Key Concepts
- Plugins extend jQuery's functionality with reusable code.
- Many open-source plugins exist for UI, forms, sliders, and more.
- You can write your own plugins using `$.fn`.

## Real-World Examples

### Example 1: Using a Plugin
```javascript
$('#datepicker').datepicker();
```

### Example 2: Creating a Simple Plugin
```javascript
$.fn.highlight = function() {
  this.css('background', 'yellow');
  return this;
};
$('.note').highlight();
```

### Example 3: Plugin Options
```javascript
$('#slider').slider({ min: 0, max: 100 });
```

## Interview Questions & Answers

**Q1: What is a jQuery plugin?**
A: A reusable piece of code that adds methods to jQuery objects.

**Q2: Real-time: How do you create a custom plugin?**
A: Add a function to `$.fn`:
```javascript
$.fn.myPlugin = function() { /* ... */ };
```

**Q3: How do you use a plugin with options?**
A: Pass an object as an argument, e.g., `$('#el').plugin({ option: value })`.

## References
- [jQuery Plugins](https://learn.jquery.com/plugins/)
- [jQuery Plugin Registry](https://plugins.jquery.com/)
