# JavaScript Error Handling

## Key Concepts
- Error handling is done using `try...catch...finally` blocks.
- Errors can be thrown using `throw`.
- Custom error types can be created by extending `Error`.

## Real-World Examples

### Example 1: Basic try-catch
```javascript
try {
  let x = y + 1; // y is not defined
} catch (err) {
  console.error('Error:', err.message);
}
```

### Example 2: Throwing Custom Errors
```javascript
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
```

### Example 3: finally Block
```javascript
try {
  // ...
} catch (e) {
  // ...
} finally {
  console.log('Cleanup code runs here');
}
```

## Interview Questions & Answers

**Q1: What is the purpose of the `finally` block?**
A: Code in `finally` always runs, regardless of whether an error occurred.

**Q2: Real-time: How do you handle errors in asynchronous code?**
A: Use `.catch()` for promises or try-catch inside async functions.

**Q3: How do you create a custom error?**
A: Extend the `Error` class:
```javascript
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyError';
  }
}
```

## References
- [MDN: Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript.info: Error Handling](https://javascript.info/try-catch)
