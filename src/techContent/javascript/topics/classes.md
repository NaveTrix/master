# JavaScript Classes

## Key Concepts
- Classes are blueprints for creating objects (introduced in ES6).
- Support constructors, methods, inheritance, and static members.

## Real-World Examples

### Example 1: Defining a Class
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('Hello, ' + this.name);
  }
}
let alice = new Person('Alice');
alice.greet();
```

### Example 2: Inheritance
```javascript
class Animal {
  speak() { console.log('Animal speaks'); }
}
class Dog extends Animal {
  speak() { console.log('Woof!'); }
}
let d = new Dog();
d.speak(); // 'Woof!'
```

## Interview Questions & Answers

**Q1: What is the difference between a class and a constructor function?**
A: Classes are syntactic sugar over constructor functions, with clearer syntax and support for inheritance.

**Q2: Real-time: How do you call a parent class method from a child class?**
A: Use `super.methodName()` inside the child class method.

**Q3: What are static methods?**
A: Methods called on the class itself, not instances. Declared with `static` keyword.

## References
- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info: Classes](https://javascript.info/class)
