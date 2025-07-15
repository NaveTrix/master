# JavaScript Objects

## Key Concepts
- Objects are collections of key-value pairs.
- Properties can be accessed with dot or bracket notation.
- Objects can have methods (functions as properties).

## Real-World Examples

### Example 1: Creating an Object
```javascript
let person = {
  name: 'Bob',
  age: 25,
  greet: function() { console.log('Hi!'); }
};
```

### Example 2: Accessing and Modifying Properties
```javascript
console.log(person.name); // 'Bob'
person.age = 26;
```

### Example 3: Adding Methods
```javascript
person.sayHello = function() { console.log('Hello!'); };
person.sayHello();
```

## Interview Questions & Answers

**Q1: How do you add a property to an object?**
A: Use dot or bracket notation:
```javascript
obj.newProp = 123;
obj['anotherProp'] = 456;
```

**Q2: Real-time: How do you check if a property exists?**
A: Use `in` operator or `hasOwnProperty()`:
```javascript
if ('name' in person) { /* ... */ }
person.hasOwnProperty('age');
```

**Q3: What is a method in an object?**
A: A function stored as a property of an object.

## References
- [MDN: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [JavaScript.info: Objects](https://javascript.info/object)
