# JavaScript Prototypes & Inheritance

## Key Concepts
- JavaScript uses prototype-based inheritance.
- Every object has a prototype; objects inherit properties and methods from their prototype.
- `Object.create()`, `__proto__`, and `prototype` property are key concepts.

## Real-World Examples

### Example 1: Prototype Chain
```javascript
let animal = { eats: true };
let rabbit = Object.create(animal);
console.log(rabbit.eats); // true
```

### Example 2: Adding Methods to Prototypes
```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log('Hello, ' + this.name);
};
let bob = new Person('Bob');
bob.greet();
```

### Example 3: Checking Prototype
```javascript
console.log(bob.__proto__ === Person.prototype); // true
```

## Interview Questions & Answers

**Q1: What is prototype-based inheritance?**
A: Objects inherit directly from other objects via the prototype chain, not from classes.

**Q2: Real-time: How do you add a method to all instances of a constructor?**
A: Add it to the constructor's prototype.

**Q3: What is the difference between `__proto__` and `prototype`?**
A: `prototype` is a property of constructor functions; `__proto__` is an internal property of objects.

## References
- [MDN: Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [JavaScript.info: Prototypes](https://javascript.info/prototype-inheritance)
