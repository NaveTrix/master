# JavaScript Events

## Key Concepts
- Events are actions or occurrences detected by JavaScript (clicks, keypresses, loads, etc.).
- Event listeners handle events using `addEventListener`.
- Event propagation: bubbling and capturing.

## Real-World Examples

### Example 1: Click Event
```javascript
document.getElementById('myBtn').addEventListener('click', function() {
  alert('Button clicked!');
});
```

### Example 2: Keyboard Event
```javascript
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});
```

### Example 3: Prevent Default Action
```javascript
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submission prevented!');
});
```

## Interview Questions & Answers

**Q1: What is event bubbling?**
A: Event bubbling is when an event propagates from the target element up through its ancestors.

**Q2: Real-time: How do you stop event propagation?**
A: Use `event.stopPropagation()` in the event handler.

**Q3: What is the difference between `onclick` and `addEventListener`?**
A: `addEventListener` allows multiple handlers and more control; `onclick` only allows one handler.

## References
- [MDN: Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info: Events](https://javascript.info/events)
