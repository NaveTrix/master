# jQuery AJAX

## Key Concepts
- jQuery simplifies AJAX (Asynchronous JavaScript and XML) requests.
- Methods: `.ajax()`, `.get()`, `.post()`, `.load()`.
- Handles data exchange with servers without reloading the page.

## Real-World Examples

### Example 1: Simple GET Request
```javascript
$.get('https://api.example.com/data', function(data) {
  console.log(data);
});
```

### Example 2: POST Request
```javascript
$.post('https://api.example.com/submit', { name: 'Alice' }, function(response) {
  alert('Submitted!');
});
```

### Example 3: Using .ajax()
```javascript
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  success: function(result) {
    console.log(result);
  },
  error: function(xhr) {
    alert('Error: ' + xhr.status);
  }
});
```

## Interview Questions & Answers

**Q1: How do you make an AJAX request in jQuery?**
A: Use `.ajax()`, `.get()`, or `.post()` methods.

**Q2: Real-time: How do you handle AJAX errors?**
A: Use the `error` callback in `.ajax()` or `.fail()` with Promises.

**Q3: How do you update the DOM with AJAX response data?**
A: Use a success callback to modify elements, e.g., `$('#result').html(data)`.

## References
- [jQuery AJAX](https://api.jquery.com/category/ajax/)
- [jQuery Learning Center: AJAX](https://learn.jquery.com/ajax/)
