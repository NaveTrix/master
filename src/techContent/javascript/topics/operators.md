# JavaScript Operators

## Key Concepts
- Operators perform operations on variables and values.
- Types: arithmetic, assignment, comparison, logical, bitwise, typeof, ternary.

## Real-World Examples

### Example 1: Arithmetic Operators
```javascript
let x = 10, y = 3;
console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333...
console.log(x % y); // 1
```

### Example 2: Comparison Operators
```javascript
console.log(5 == '5'); // true (loose equality)
console.log(5 === '5'); // false (strict equality)
console.log(5 != 6); // true
console.log(5 !== '5'); // true
```

### Example 3: Logical Operators
```javascript
let a = true, b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
```

## Interview Questions & Answers

**Q1: What is the difference between `==` and `===`?**
A: `==` checks for value equality with type coercion; `===` checks for both value and type equality (no coercion).

**Q2: Real-time: How do you use the ternary operator?**
A: Syntax: `condition ? expr1 : expr2`.
```javascript
let result = (score > 50) ? 'Pass' : 'Fail';
```

**Q3: What does `typeof` return for an array?**
A: `'object'`. Use `Array.isArray()` to check for arrays.

## References
- [MDN: Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [JavaScript.info: Operators](https://javascript.info/operators)
