# Object-Oriented Programming (OOP) in Python

## Key Concepts
- **Class:** Blueprint for creating objects.
- **Object:** Instance of a class.
- **Attributes:** Variables that belong to a class/object.
- **Methods:** Functions defined inside a class.
- **Inheritance:** Mechanism to create a new class from an existing one.
- **Encapsulation:** Restricting access to methods/variables.
- **Polymorphism:** Same interface, different implementations.
- **Abstraction:** Hiding complex implementation details.
- **Self:** Refers to the instance of the class.
- **Dunder Methods:** Special methods like `__init__`, `__str__`, `__repr__`.
- **Class vs. Instance Variables:** Class variables are shared; instance variables are unique per object.

## Real-World Examples
- **Bank Account Model:**
```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Insufficient funds")
```
- **Employee Inheritance:**
```python
class Employee:
    def __init__(self, name):
        self.name = name
class Manager(Employee):
    def __init__(self, name, department):
        super().__init__(name)
        self.department = department
```
- **Polymorphism Example:**
```python
class Animal:
    def speak(self):
        pass
class Dog(Animal):
    def speak(self):
        return "Woof!"
class Cat(Animal):
    def speak(self):
        return "Meow!"
```

## Best Practices
- Use descriptive class and method names.
- Keep classes focused and cohesive.
- Use properties for controlled attribute access.
- Prefer composition over inheritance for flexibility.
- Document classes and methods with docstrings.

## 50+ Interview Questions and Answers

**Q1: What is a class in Python?**  
A: A blueprint for creating objects.

**Q2: What is an object?**  
A: An instance of a class.

**Q3: What is inheritance?**  
A: The process of creating a new class from an existing class.

**Q4: What is encapsulation?**  
A: Restricting access to methods and variables.

**Q5: What is polymorphism?**  
A: The ability to use a common interface for different data types.

**Q6: What is abstraction?**  
A: Hiding complex implementation details and showing only the necessary features.

**Q7: What is the use of `self`?**  
A: Refers to the instance of the class.

**Q8: What is the difference between class and instance variables?**  
A: Class variables are shared; instance variables are unique per object.

**Q9: What is a constructor?**  
A: The `__init__` method that initializes an object.

**Q10: What is the output of this code?
```python
class A:
    def __init__(self):
        self.x = 1
obj = A()
print(obj.x)
```
A: 1

**Q11: How do you call a parent class method?**  
A: Use `super().method()`.

**Q12: What is method overriding?**  
A: Redefining a method in a subclass.

**Q13: What is method overloading?**  
A: Defining multiple methods with the same name but different parameters (not natively supported in Python).

**Q14: What is a dunder method?**  
A: Special methods with double underscores (e.g., `__init__`, `__str__`).

**Q15: What is the output of this code?
```python
class A:
    def __str__(self):
        return "A"
print(A())
```
A: A

**Q16: What is multiple inheritance?**  
A: A class inheriting from more than one parent class.

**Q17: What is the MRO (Method Resolution Order)?**  
A: The order in which base classes are searched for a method.

**Q18: What is an abstract class?**  
A: A class that cannot be instantiated and may have abstract methods.

**Q19: How do you define an abstract class?**  
A: Use the `abc` module and `@abstractmethod` decorator.

**Q20: What is the output of this code?
```python
class A:
    def foo(self):
        print("A")
class B(A):
    def foo(self):
        print("B")
obj = B()
obj.foo()
```
A: B

**Q21: What is a property?**  
A: A way to manage attribute access using `@property`.

**Q22: What is the use of `__repr__`?**  
A: Returns a string representation for debugging.

**Q23: What is the output of this code?
```python
class A:
    def __init__(self, x):
        self.x = x
    def __eq__(self, other):
        return self.x == other.x
print(A(1) == A(1))
```
A: True

**Q24: What is the use of `__del__`?**  
A: Destructor method called when an object is deleted.

**Q25: What is the output of this code?
```python
class A:
    def __init__(self):
        print("A")
A()
```
A: A

**Q26: What is the use of `@staticmethod`?**  
A: Defines a method not bound to instance or class.

**Q27: What is the use of `@classmethod`?**  
A: Defines a method bound to the class, not the instance.

**Q28: What is the output of this code?
```python
class A:
    @staticmethod
    def foo():
        return 1
print(A.foo())
```
A: 1

**Q29: What is the use of `super()`?**  
A: Calls methods from the parent class.

**Q30: What is the output of this code?
```python
class A:
    def foo(self):
        return "A"
class B(A):
    def foo(self):
        return super().foo() + "B"
print(B().foo())
```
A: AB

**Q31: What is the use of `__slots__`?**  
A: Restricts the attributes that can be added to an object.

**Q32: What is the output of this code?
```python
class A:
    def __init__(self):
        self.x = 1
    def __str__(self):
        return str(self.x)
print(A())
```
A: 1

**Q33: What is the use of `isinstance()`?**  
A: Checks if an object is an instance of a class.

**Q34: What is the use of `issubclass()`?**  
A: Checks if a class is a subclass of another.

**Q35: What is the output of this code?
```python
class A:
    pass
class B(A):
    pass
print(issubclass(B, A))
```
A: True

**Q36: What is the use of `__call__`?**  
A: Makes an object callable like a function.

**Q37: What is the output of this code?
```python
class A:
    def __call__(self):
        return 42
print(A()())
```
A: 42

**Q38: What is the use of `__len__`?**  
A: Returns the length of an object.

**Q39: What is the output of this code?
```python
class A:
    def __len__(self):
        return 5
print(len(A()))
```
A: 5

**Q40: What is the use of `__getitem__`?**  
A: Allows indexing into an object.

**Q41: What is the output of this code?
```python
class A:
    def __getitem__(self, i):
        return i*2
print(A()[3])
```
A: 6

**Q42: What is the use of `__setitem__`?**  
A: Allows setting values by index/key.

**Q43: What is the output of this code?
```python
class A:
    def __setitem__(self, i, v):
        print(i, v)
A()[1] = 10
```
A: 1 10

**Q44: What is the use of `__iter__`?**  
A: Makes an object iterable.

**Q45: What is the output of this code?
```python
class A:
    def __iter__(self):
        return iter([1,2,3])
print(list(A()))
```
A: [1, 2, 3]

**Q46: What is the use of `__next__`?**  
A: Returns the next item in an iterator.

**Q47: What is the use of `@property`?**  
A: Creates managed attributes.

**Q48: What is the use of `__contains__`?**  
A: Implements membership test using `in`.

**Q49: What is the use of `__enter__` and `__exit__`?**  
A: Support for context managers.

**Q50: What is the use of `__copy__` and `__deepcopy__`?**  
A: Support for shallow and deep copying.

## References
- [Python OOP - Real Python](https://realpython.com/python3-object-oriented-programming/)
- [OOP in Python - Programiz](https://www.programiz.com/python-programming/object-oriented-programming)
- [Python OOP - W3Schools](https://www.w3schools.com/python/python_classes.asp)
