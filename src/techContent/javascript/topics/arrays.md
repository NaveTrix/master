# JavaScript Arrays

## Key Concepts
- Arrays are ordered collections of values (elements).
- Elements can be of any type.
- Common methods: push, pop, shift, unshift, map, filter, reduce, forEach.

## Real-World Examples

### Example 1: Creating and Accessing Arrays
```javascript
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[1]); // 'banana'
```

### Example 2: Array Methods
```javascript
fruits.push('date'); // add to end
fruits.pop(); // remove from end
fruits.shift(); // remove from start
fruits.unshift('apricot'); // add to start
```

### Example 3: Iterating Over Arrays
```javascript
fruits.forEach(fruit => console.log(fruit));
```

### Example 4: Using map and filter
```javascript
let numbers = [1, 2, 3, 4];
let squares = numbers.map(n => n * n); // [1, 4, 9, 16]
let evens = numbers.filter(n => n % 2 === 0); // [2, 4]
```

## Interview Questions & Answers

**Q1: How do you add and remove elements from an array?**
A: Use `push`, `pop`, `shift`, `unshift` methods.

**Q2: Real-time: How do you find the index of an element?**
A: Use `indexOf` or `findIndex`:
```javascript
let idx = fruits.indexOf('banana');
```

**Q3: What is the difference between `map` and `forEach`?**
A: `map` returns a new array; `forEach` executes a function for each element but returns undefined.

## References
- [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info: Arrays](https://javascript.info/array)
