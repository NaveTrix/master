# JavaScript Fetch API & AJAX

## Key Concepts
- Fetch API is a modern interface for making HTTP requests in JavaScript.
- AJAX (Asynchronous JavaScript and XML) enables asynchronous web requests.
- Fetch returns Promises; supports JSON, text, and more.

## Real-World Examples

### Example 1: Fetching Data
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Example 2: POST Request
```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Alice' })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

### Example 3: Handling Errors
```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) throw new Error('Network error');
    return response.json();
  })
  .catch(error => console.error(error));
```

## Interview Questions & Answers

**Q1: What is the Fetch API?**
A: A modern interface for making HTTP requests, replacing older XMLHttpRequest.

**Q2: Real-time: How do you handle network errors with fetch?**
A: Check `response.ok` and use `.catch()` for Promise errors.

**Q3: What is CORS?**
A: Cross-Origin Resource Sharing, a security feature that restricts web page requests to another domain.

## References
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript.info: Fetch](https://javascript.info/fetch)
