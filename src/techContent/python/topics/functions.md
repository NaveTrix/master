# Functions in Python

## Key Concepts
- **Definition:** Functions are reusable blocks of code that perform a specific task.
- **Syntax:** Use `def` to define a function.
- **Return Values:** Use `return` to return a value from a function.
- **Arguments:** Support for positional, keyword, default, variable-length (`*args`, `**kwargs`).
- **Docstrings:** Use triple quotes for documentation.
- **Scope:** Local vs. global variables.
- **First-Class Objects:** Functions can be passed as arguments, returned, and assigned to variables.
- **Lambda Functions:** Anonymous, single-expression functions.
- **Recursion:** Functions can call themselves.
- **Type Hints:** Use Python 3 type annotations for clarity.

## Real-World Examples
- **E-commerce Price Calculation:**
```python
def calculate_total(price, quantity, tax=0.05):
    return price * quantity * (1 + tax)
total = calculate_total(100, 2)
print(f"Total: {total}")
```
- **Sorting with Custom Key:**
```python
names = ["Alice", "bob", "Charlie"]
names.sort(key=lambda x: x.lower())
```
- **Callback Function:**
```python
def process(data, callback):
    result = callback(data)
    return result
```
- **Recursive Factorial:**
```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)
```

## Best Practices
- Use descriptive function names.
- Keep functions short and focused.
- Document with docstrings.
- Avoid side effects unless necessary.
- Use type hints for clarity.

## 50+ Interview Questions and Answers

**Q1: What are *args and **kwargs?**
A: *args allows a function to accept any number of positional arguments, while **kwargs allows it to accept any number of keyword arguments.

**Q2: What is a lambda function?**
A: A lambda function is an anonymous, single-expression function defined with the `lambda` keyword.

**Q3: Can you return multiple values from a function?**
A: Yes, by returning a tuple (e.g., `return a, b`).

**Q4: What is the difference between a function and a method?**
A: A method is a function defined inside a class and called on an object.

**Q5: What is recursion?**
A: When a function calls itself.

**Q6: How do you document a function?**
A: Use a docstring (triple quotes) below the function definition.

**Q7: What is the default return value of a function with no return statement?**
A: `None`.

**Q8: How do you specify optional arguments?**
A: Provide default values in the function definition.

**Q9: What is a higher-order function?**
A: A function that takes another function as an argument or returns a function.

**Q10: What is the output of this code?
```python
def f(x, y=2):
    return x * y
print(f(3))
```
A: 6

**Q11: How do you use type hints in functions?**
A: Add annotations: `def f(x: int) -> int:`

**Q12: What is the use of `return`?**
A: To return a value from a function and exit it.

**Q13: How do you define a function with no arguments?**
A: `def f():`

**Q14: What is the output of this code?
```python
def f(*args):
    return sum(args)
print(f(1,2,3))
```
A: 6

**Q15: How do you pass a function as an argument?**
A: Pass the function name without parentheses.

**Q16: What is a closure?**
A: A function defined inside another function that remembers the outer function's variables.

**Q17: How do you use a function as a callback?**
A: Pass it as an argument to another function.

**Q18: What is the output of this code?
```python
def f():
    x = 1
    def g():
        return x
    return g
print(f()())
```
A: 1

**Q19: How do you define a function with keyword-only arguments?**
A: Place `*` before keyword-only arguments: `def f(a, *, b):`

**Q20: What is the use of `global` keyword?**
A: To modify a global variable inside a function.

**Q21: How do you define a function with variable-length arguments?**
A: Use `*args` and/or `**kwargs`.

**Q22: What is the output of this code?
```python
def f(x, y):
    return x + y
print(f(2,3))
```
A: 5

**Q23: How do you return a function from another function?**
A: Define and return the inner function.

**Q24: What is the use of `nonlocal` keyword?**
A: To modify a variable in the nearest enclosing scope.

**Q25: What is the output of this code?
```python
def f():
    return 'hello'
print(f())
```
A: hello

**Q26: How do you define a function with default arguments?**
A: Assign default values in the definition.

**Q27: What is the output of this code?
```python
def f(x, y=1):
    return x + y
print(f(2))
```
A: 3

**Q28: How do you use a lambda function?**
A: Assign to a variable or pass as an argument: `lambda x: x+1`.

**Q29: What is the output of this code?
```python
def f(x):
    return x*2
print(f(3))
```
A: 6

**Q30: How do you use a function as a filter?**
A: Use `filter(function, iterable)`.

**Q31: What is the output of this code?
```python
def f(x):
    return x > 0
print(list(filter(f, [-1,0,1])))
```
A: [1]

**Q32: How do you use a function as a map?**
A: Use `map(function, iterable)`.

**Q33: What is the output of this code?
```python
def f(x):
    return x+1
print(list(map(f, [1,2,3])))
```
A: [2, 3, 4]

**Q34: How do you use a function as a reduce?**
A: Use `functools.reduce(function, iterable)`.

**Q35: What is the output of this code?
```python
def f(x, y):
    return x*y
from functools import reduce
print(reduce(f, [1,2,3,4]))
```
A: 24

**Q36: How do you use a function as a decorator?**
A: Pass the function to a decorator function.

**Q37: What is the output of this code?
```python
def f():
    return 1
print(f())
```
A: 1

**Q38: How do you use a function as a generator?**
A: Use `yield` instead of `return`.

**Q39: What is the output of this code?
```python
def f():
    yield 1
print(list(f()))
```
A: [1]

**Q40: How do you use a function as a context manager?**
A: Use `@contextlib.contextmanager`.

**Q41: What is the output of this code?
```python
def f(x):
    return x**2
print(f(4))
```
A: 16

**Q42: How do you use a function as a static method?**
A: Use `@staticmethod` decorator.

**Q43: What is the output of this code?
```python
def f(x):
    return x/2
print(f(8))
```
A: 4.0

**Q44: How do you use a function as a class method?**
A: Use `@classmethod` decorator.

**Q45: What is the output of this code?
```python
def f(x):
    return x-1
print(f(5))
```
A: 4

**Q46: How do you use a function as a property?**
A: Use `@property` decorator.

**Q47: What is the output of this code?
```python
def f(x):
    return x%2
print(f(7))
```
A: 1

**Q48: How do you use a function as a coroutine?**
A: Use `async def` and `await`.

**Q49: What is the output of this code?
```python
def f(x):
    return x//2
print(f(9))
```
A: 4

**Q50: How do you use a function as a callback?**
A: Pass it as an argument to another function.

## References
- [Python Functions - W3Schools](https://www.w3schools.com/python/python_functions.asp)
- [Defining Your Own Python Function - Real Python](https://realpython.com/defining-your-own-python-function/)
- [Python Functions - GeeksforGeeks](https://www.geeksforgeeks.org/python-functions/)
