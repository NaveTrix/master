# jQuery Utilities

## Key Concepts
- jQuery provides utility methods for tasks like type checking, array manipulation, and data storage.
- Common utilities: `$.each()`, `$.extend()`, `$.isArray()`, `$.type()`, `$.data()`.

## Real-World Examples

### Example 1: $.each for Iteration
```javascript
$.each([1,2,3], function(index, value) {
  console.log(index, value);
});
```

### Example 2: $.extend for Merging Objects
```javascript
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = $.extend({}, obj1, obj2);
```

### Example 3: $.isArray and $.type
```javascript
console.log($.isArray([1,2,3])); // true
console.log($.type({})); // 'object'
```

### Example 4: $.data for Storing Data
```javascript
$('#el').data('key', 'value');
console.log($('#el').data('key'));
```

## Interview Questions & Answers

**Q1: What does $.extend do?**
A: Merges the contents of two or more objects into the first object.

**Q2: Real-time: How do you iterate over an array with jQuery?**
A: Use `$.each(array, function(index, value){ ... })`.

**Q3: How do you store custom data on a DOM element?**
A: Use `$.data()` or HTML5 `data-*` attributes.

## References
- [jQuery Utilities](https://api.jquery.com/category/utilities/)
- [jQuery Learning Center: Utilities](https://learn.jquery.com/jquery-core/utilities/)
