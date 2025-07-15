# JavaScript Local Storage & Session Storage

## Key Concepts
- Web Storage API provides `localStorage` and `sessionStorage` for storing key-value pairs in the browser.
- `localStorage` persists data across sessions; `sessionStorage` lasts for the session only.

## Real-World Examples

### Example 1: Setting and Getting Items
```javascript
localStorage.setItem('username', 'alice');
let user = localStorage.getItem('username');
```

### Example 2: Removing and Clearing Items
```javascript
localStorage.removeItem('username');
localStorage.clear();
```

### Example 3: Using sessionStorage
```javascript
sessionStorage.setItem('token', 'abc123');
let token = sessionStorage.getItem('token');
```

## Interview Questions & Answers

**Q1: What is the difference between localStorage and sessionStorage?**
A: `localStorage` persists data even after the browser is closed; `sessionStorage` is cleared when the tab or window is closed.

**Q2: Real-time: How do you store objects in localStorage?**
A: Use `JSON.stringify()` to serialize objects:
```javascript
localStorage.setItem('user', JSON.stringify({ name: 'Bob' }));
```

**Q3: What are the storage limits?**
A: Typically 5–10 MB per origin, but varies by browser.

## References
- [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [JavaScript.info: LocalStorage](https://javascript.info/localstorage)
