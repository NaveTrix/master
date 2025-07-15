# JavaScript Modules

## Key Concepts
- Modules allow code to be split into reusable files.
- ES6 modules use `import` and `export` keywords.
- Modules are loaded with type="module" in browsers or via Node.js.

## Real-World Examples

### Example 1: Exporting and Importing
```javascript
// math.js
export function add(a, b) { return a + b; }
// main.js
import { add } from './math.js';
console.log(add(2, 3));
```

### Example 2: Default Export
```javascript
// logger.js
export default function(msg) { console.log(msg); }
// main.js
import log from './logger.js';
log('Hello!');
```

## Interview Questions & Answers

**Q1: What is the difference between named and default exports?**
A: Named exports can be many per file; default export is one per file and imported without curly braces.

**Q2: Real-time: How do you use modules in the browser?**
A: Use `<script type="module" src="main.js"></script>`.

**Q3: How do modules help in large projects?**
A: They promote code organization, reusability, and maintainability.

## References
- [MDN: Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript.info: Modules](https://javascript.info/modules)
