# JavaScript JSON

## Key Concepts
- JSON (JavaScript Object Notation) is a lightweight data-interchange format.
- Used for data exchange between client and server.
- Methods: `JSON.stringify()` and `JSON.parse()`.

## Real-World Examples

### Example 1: Converting Object to JSON
```javascript
let obj = { name: 'Alice', age: 25 };
let jsonStr = JSON.stringify(obj);
console.log(jsonStr); // '{"name":"Alice","age":25}'
```

### Example 2: Parsing JSON String
```javascript
let str = '{"name":"Bob","age":30}';
let user = JSON.parse(str);
console.log(user.name); // 'Bob'
```

### Example 3: Fetching JSON Data
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Interview Questions & Answers

**Q1: What is JSON and why is it used?**
A: JSON is a text format for data exchange, easy for humans to read and write, and easy for machines to parse and generate.

**Q2: Real-time: How do you handle circular references when stringifying?**
A: Use a custom replacer or libraries like `flatted` to handle circular structures.

**Q3: What happens if you parse invalid JSON?**
A: `JSON.parse()` throws a SyntaxError.

## References
- [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [JavaScript.info: JSON](https://javascript.info/json)
