# JavaScript ES6+ Features

## Key Concepts
- ES6 (ECMAScript 2015) introduced major updates: `let`, `const`, arrow functions, classes, template literals, destructuring, spread/rest, promises, modules, etc.
- Modern JavaScript uses many ES6+ features for cleaner, more powerful code.

## Real-World Examples

### Example 1: let, const, and Arrow Functions
```javascript
const add = (a, b) => a + b;
let x = 10;
```

### Example 2: Template Literals
```javascript
let name = 'Sam';
console.log(`Hello, ${name}!`);
```

### Example 3: Destructuring
```javascript
let [a, b] = [1, 2];
let {x, y} = {x: 10, y: 20};
```

### Example 4: Spread and Rest
```javascript
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // [1,2,3,4]
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
```

## Interview Questions & Answers

**Q1: What are template literals?**
A: Strings delimited by backticks (`` ` ``) that allow embedded expressions with `${}`.

**Q2: Real-time: How do you import and export modules in ES6?**
A: Use `import` and `export` keywords:
```javascript
// export
export function foo() {}
// import
import { foo } from './foo.js';
```

**Q3: What is destructuring?**
A: A syntax for unpacking values from arrays or properties from objects into variables.

## References
- [MDN: ES6 Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [JavaScript.info: ES6](https://javascript.info/es-modern)
